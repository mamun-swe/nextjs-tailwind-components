import { ComponentBody } from "@/app/components/components-body";
import { FullWidthCarousel } from "@/app/components/carousel/full-width.carousel";
import { CourseCard } from "@/app/components/card/course.card";
import { TeamCard } from "@/app/components/card/team.card";
import { BlogCard } from "@/app/components/card/blog.card";
import { BlogHeaderCard } from "@/app/components/card/blog-header.card";

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
                fee={1500}
                title="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                trainer_name="Jhon Sina"
                trainer_image="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=60"
              />
            ))}
          </div>
        </ComponentBody>

        {/* Team card */}
        <ComponentBody title="Team card" description="Team card components">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from(Array(3).keys()).map((item) => (
              <TeamCard
                key={item}
                id={item + 1}
                name="Captain jack sparrow"
                education="Harvard University"
                job_title={"Boxer xyz"}
                image="https://static.tvtropes.org/pmwiki/pub/images/sparrow_jack.jpg"
                facebook={"www.facebook.com"}
                linkedin={"www.linkedin.com"}
                twitter={"www.twitter.com"}
              />
            ))}
          </div>
        </ComponentBody>

        {/* Blog list header card */}

        {/* Blog Card */}
        <ComponentBody
          title="Full width carousel slider"
          description="Carousel component made with react-simply-carousel npm package."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from(Array(3).keys()).map((item) => (
              <BlogCard
                key={item}
                id={item + 1}
                banner="https://www.bristol.ac.uk/media-library/sites/engineering/computerscience/images/cs-research-module.jpg"
                title="লরেম ইপ্সাম ডলর সিট আমেত, কনসেক্টেচুর অ্যাডিপিস্কিং এলিট। নানসি
          আল্ট্রিচিস ভ্যারিয়াস আউগিউ ইউ ফ্যাউসিবাস।"
                category={{ id: 1, title: "Category" }}
                created_by={{
                  id: 2,
                  name: "Captain Jack Sparrow",
                  image:
                    "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=60",
                }}
                created_at={"Jan 10, 2022"}
              />
            ))}
          </div>
        </ComponentBody>

        {/* Blog header card */}
        <ComponentBody
          title="Blog header card"
          description="Carousel component made with react-simply-carousel npm package."
        >
          <BlogHeaderCard
            id={1}
            banner="https://www.bristol.ac.uk/media-library/sites/engineering/computerscience/images/cs-research-module.jpg"
            title="লরেম ইপ্সাম ডলর সিট আমেত, কনসেক্টেচুর অ্যাডিপিস্কিং এলিট। নানসি
          আল্ট্রিচিস ভ্যারিয়াস আউগিউ ইউ ফ্যাউসিবাস।"
            text={`লরেম ইপ্সাম ডলর সিট আমেত, কনসেক্টেচুর অ্যাডিপিস্কিং এলিট। নানসি
              আল্ট্রিচিস ভ্যারিয়াস আউগিউ ইউ ফ্যাউসিবাস। ইন প্যালেনটেস্কিউ আউগিউ
              নন নিকিউ টেম্পর ট্রিস্টিক। নিউলা এ পিউরাস অরনারে, ম্যাটুস এনিম
              স্যাড, ম্যাক্সিমাস মি। ডোনেক পোর্টা রিউট্রাম ডিগনিসসিম। ডোনেক
              ভাইটা ইরস এলিকুয়াম, রিউট্রাম রাইসাস এট, পরতিটর লরেম। আয়েনান স্যাড
              এনিম লুকাস। সেড ইয়াকিউলাস এরাট আইডি ম্যাক্সিমাস হেন্ড্রেরিট।
              নিউলাম এ এফিকিটার ইরস। স্যাড ইউ টিনসিডান্ট ফেলিস, এ অ্যাকিউমসান
              এক্স। নাম ট্রিস্টিক ভলুটপাত নিসি এট অরনারে। ফিউস্ক ইন টার্পিস
              কুয়াম। মরবি সাগিটিস ল্যাকটাস ইএস্টি, ভিটায়ে উলামকর্পার নিউলা
              আলিকেট ভেল। ইন হ্যাক হ্যাবিটাসসে প্ল্যাটিয়া ডিস্কটামস্ট`}
            category={{ id: 1, title: "Category" }}
            created_by={{
              id: 2,
              name: "Captain Jack Sparrow",
              image:
                "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=60",
            }}
            created_at={"Jan 10, 2022"}
          />
        </ComponentBody>
      </div>
    </main>
  );
}
