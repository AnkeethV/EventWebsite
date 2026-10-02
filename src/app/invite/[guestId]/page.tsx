import { lookupGuest } from "../../../lib/guest";
import { GuestProvider } from "../../../context/GuestContext";
import HomePageContent from "../../../components/HomePageContent";

export default async function InvitePage(props: { params: Promise<{ guestId: string }> }) {
  const { guestId } = await props.params;
  const guest = lookupGuest(guestId);

  return (
    <GuestProvider guest={guest}>
      <HomePageContent />
    </GuestProvider>
  );
}
