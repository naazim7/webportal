import Counter from "@/components/Counter/Counter";
import MessageFromChairman from "@/components/Message/MessageFromChairman";
import NoticeNews from "@/components/NoticeNews/NoticeNews";
import VisionMission from "@/components/VisionMission/VisionMission";

export default function Home() {
  return (
    <main>
<MessageFromChairman/>
<VisionMission/>
<NoticeNews/>
<Counter/>
     
    </main>
  );
}
