import { CourseCategoryCard } from "@/app/components/card/course-category.card";
import { CourseCard } from "@/app/components/card/course.card";

export default function Home() {
  const data = [
    { id: 1, title: "Language Learning", total_course: 10 },
    { id: 1, title: "Programming", total_course: 100 },
    { id: 1, title: "Kid's Programming", total_course: 10 },
    { id: 1, title: "High School", total_course: 20 },
    { id: 1, title: "University", total_course: 200 },
    { id: 1, title: "College", total_course: 120 },
    { id: 1, title: "IELTS", total_course: 30 },
    { id: 1, title: "Reasearch", total_course: 115 },
  ];
  return (
    <main className="py-4">
      {/* Category container */}
      {/* <div className="container mb-10 md:mb-14">
        <div className="inline-flex mb-3 md:mb-4">
          <p className="text-lg md:text-2xl font-bold text-black">
            সকল ক্যাটাগরি সমূহ
          </p>
          <span className="w-8 h-[2px] mt-4 ml-3 rounded-full bg-black" />
        </div>
        <div className="flex flex-wrap gap-3">
          {data.map((item, i) => (
            <CourseCategoryCard key={i} {...item} />
          ))}
        </div>
      </div> */}

      {/* Course list */}
      <div className="container">
        <div className="inline-flex gap-3 mb-4">
          <p className="text-lg md:text-2xl font-bold text-black">
            Language Learning courses
          </p>

          <p className="text-sm text-muted">(10 courses)</p>
        </div>

        <div className="w-full overflow-x-auto no-scrollbar py-4">
          <div className="inline-flex gap-6 sm:gap-8">
            {data.map((item, i) => (
              <CourseCard
                key={i}
                id={i + 1}
                fee={12000}
                title="১০ মিনিটে কম্পিউটার ইঞ্জিনিয়ার হয়ে যান"
                trainer_name="Mark Henry"
                banner="https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
