import { HeaderCarousel } from "@/app/components/carousel/header.carousel";
import { TrainingCarousel } from "@/app/components/carousel/training.carousel";
import { GroupCarousel } from "@/app/components/carousel/group.carousel";

export default function Home() {
  return (
    <main className="py-4">
      <div className="container">{/* <HeaderCarousel /> */}</div>

      <br />
      <br />
      <br />

      {/* <TrainingCarousel /> */}
      <GroupCarousel />
    </main>
  );
}
