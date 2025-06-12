import messageModel from "@/model/messageModel";
import connectDB from "@/utils/connection";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const messages = await messageModel.find({});
    return NextResponse.json(
      { message: "Messages fetched successfully", messages },
      { status: 200 }
    );
  } catch (err: unknown) {
    const error = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { message: "Internal server error", error },
      { status: 500 }
    );
  }
}