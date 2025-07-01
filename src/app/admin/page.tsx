import VerifyAdmin from "@/components/VerifyAdmin";

export const metadata = {
  title: "Nowfal Admin",
  description: "Nowfal's portfolio admin page",
  viewport: "width=device-width, initial-scale=1.0"
};

export default function Page() {
  return (
    <VerifyAdmin />
  );
}