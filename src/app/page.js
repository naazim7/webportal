import Counter from "@/components/Counter/Counter";
import LabInfo from "@/components/Custom/LabInfo";
import Services from "@/components/Custom/Services";
import MessageFromChairman from "@/components/Message/MessageFromChairman";
import NoticeNews from "@/components/NoticeNews/NoticeNews";

import VisionMission from "@/components/VisionMission/VisionMission";

export default function Home() {
  return (
    <main>

      <MessageFromChairman />
      <VisionMission />
      <NoticeNews />
      <Counter />
      <Services />
      <LabInfo />


    </main>
  );
}
