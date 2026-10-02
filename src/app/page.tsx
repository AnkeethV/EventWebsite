import { redirect } from "next/navigation";
import HomePageContent from "../components/HomePageContent";
import { GuestProvider } from "../context/GuestContext";

export default async function Home(props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParams = await props.searchParams;
  const guestQuery = searchParams?.guest;

  if (typeof guestQuery === "string" && guestQuery.trim() !== "") {
    // Redirect /?guest=xxx to /invite/xxx
    redirect(`/invite/${guestQuery.trim()}`);
  }

  return (
    <GuestProvider guest={null}>
      <HomePageContent />
    </GuestProvider>
  );
}
