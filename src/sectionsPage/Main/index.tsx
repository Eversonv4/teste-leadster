import { ComparativeSection } from "./sections/comparative";
import { LeadSection } from "./sections/lead";
import { MediasSection } from "./sections/medias";

export function Main() {
  return (
    <main>
      <LeadSection />
      <MediasSection />
      <ComparativeSection />
    </main>
  );
}
