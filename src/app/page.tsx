import { ComponentBody } from "@/app/components/components-body";
import { FullWidthCarousel } from "@/app/components/carousel/full-width.carousel";
import { CourseCard } from "@/app/components/card/course.card";

export default function Home() {
  return (
    <main className="py-4">
      <div className="container">
        {/* Full width carousel slider */}
        <ComponentBody
          title="Full width carousel slider"
          description="Carousel component made with react-simply-carousel npm package."
        >
          <FullWidthCarousel />
        </ComponentBody>

        {/* Course card */}
        <ComponentBody
          title="Course card"
          description="Training course card component."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from(Array(3).keys()).map((item) => (
              <CourseCard
                key={item}
                id={1}
                banner="https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241201.jpg"
                duration="20hrs"
                enrolled={20000}
                fee={200}
                title="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                trainer_name="Jhon Sina"
                trainer_image="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=60"
              />
            ))}
          </div>
        </ComponentBody>
      </div>
    </main>
  );
}
