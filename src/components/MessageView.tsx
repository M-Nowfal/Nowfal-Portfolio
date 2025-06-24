import { MessageType } from '@/utils/Types';
import axios, { AxiosError } from 'axios';
import { Send, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

const MessageView = ({ messages, toggleShowMessages, setMessages }: {
  messages: Array<MessageType>,
  toggleShowMessages: () => void,
  setMessages: (messages: MessageType[]) => void
}) => {

  const [loading, setLoading] = useState("");
  const [replyMessage, setReplyMessage] = useState("");
  const [isReplying, setIsReplying] = useState("");
  const [replySent, setReplySent] = useState({ msgId: "", res: "", success: false });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setReplySent({ msgId: "", res: "", success: false });
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [replySent]);

  const handleMessageDelete = async (msgId: string) => {
    try {
      setLoading(msgId);
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/messages`, {
        data: { msgId }, headers: { "Content-Type": "application/json" }
      });
      setMessages(messages.filter(message => message._id !== msgId));
    } catch (err: unknown) {
      const error = err instanceof AxiosError ? err.response?.data.error : err;
      console.log(error);
    } finally {
      setLoading("");
    }
  };

  const handleMessageSend = async (msg: MessageType) => {
    if (!replyMessage.trim()) {
      setReplySent({ msgId: msg._id, res: "Empty reply not allowed", success: false });
      return;
    };
    try {
      setLoading(msg._id);
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/replymessage`, {
        email: msg.email, replyMsg: replyMessage, senderName: msg.name
      });
      if (response.status === 200) {
        setReplyMessage("");
        setIsReplying("");
        setReplySent({
          msgId: msg._id, res: response.data.message, success: true
        });
      }
    } catch (err: unknown) {
      const error = err instanceof AxiosError ? err.response?.data.error : err;
      setReplySent({ msgId: msg._id, res: error, success: false });
      console.log(error);
    } finally {
      setLoading("");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 bg-opacity-50 flex justify-center pt-20"
      role="button"
    >
      <div className="bg-base-300 rounded-lg shadow-2xl w-[95%] max-w-2xl max-h-[80vh] flex flex-col" data-aos="fade-down">
        <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-purple-400/70 to-blue-400/70 rounded-t-lg flex items-center">
          <div className="me-auto">
            <h2 className="text-2xl font-bold text-white">Messages</h2>
          </div>
          <div className="ms-auto">
            <button className="btn btn-circle bg-transparent border-0 shadow-lg" onClick={() => toggleShowMessages()}>
              <X className="text-white" />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto flex-1 p-4">
          {messages.length === 0 ? (
            <p className="text-blue-700 text-2xl text-center py-8">No messages available</p>
          ) : (
            <div className="space-y-4">
              {messages.map(message => (
                <div
                  key={message._id}
                  className="p-4 shadow-2xl rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:bg-base-200 transition-colors"
                >
                  <span className="font-semibold text-gray-500">{message.createdAt.substring(0, 10)}</span>
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-lg">{message.name}</h3>
                    <span className="text-sm text-blue-600">{message.email}</span>
                  </div>
                  <p className="mt-2">{message.msg}</p>
                  {isReplying === message._id && <div className="flex flex-col items-center gap-2 mt-2">
                    <textarea
                      rows={3}
                      name="reply"
                      className="border border-gray-400 rounded-box p-2 w-full"
                      value={replyMessage}
                      onChange={(e) => setReplyMessage(e.target.value)}
                    />
                    <div className="flex gap-3">
                      <motion.button
                        className="btn bg-gradient-to-r from-purple-400 to-blue-400 text-white btn-sm shadow-md"
                        onClick={() => handleMessageSend(message)}
                        disabled={message._id === loading}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.90 }}
                      ><Send size={15} />{message._id === loading ? "Sending..." : "Send"}</motion.button>
                      <motion.button
                        className="btn bg-gradient-to-r from-red-400 to-orange-400 text-white btn-sm shadow-md"
                        onClick={() => {
                          setIsReplying("");
                          setReplyMessage("");
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.90 }}
                        disabled={message._id === loading}
                      >Cancel</motion.button>
                    </div>
                  </div>}
                  {replySent.msgId === message._id && (
                    <span className={`pt-50 ${replySent.success ? "text-green-500" : "text-red-600"}`}>{replySent.res}</span>
                  )}
                  {isReplying !== message._id && <div className="flex justify-end mt-2">
                    <motion.button
                      className="btn bg-gradient-to-r from-red-400 to-orange-400 btn-sm mx-1 text-white"
                      onClick={() => handleMessageDelete(message._id)}
                      disabled={message._id == loading}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.90 }}
                    >Delete</motion.button>
                    <motion.button
                      className="btn bg-gradient-to-r from-blue-400 to-purple-400 btn-sm mx-1 text-white"
                      onClick={() => {
                        setIsReplying(message._id);
                        setReplyMessage("");
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.90 }}
                      disabled={message._id == loading}
                    >Reply</motion.button>
                  </div>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageView;