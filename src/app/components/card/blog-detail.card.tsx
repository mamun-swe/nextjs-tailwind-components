import { BsCalendar2Minus, BsCardList } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { CommentCard } from "@/app/components/card/comment.card";

type Category = {
  id: number;
  title: string;
};

type CreatedBy = {
  id: number;
  name: string;
  image: string;
};

type PropsTypes = {
  id: number;
  banner: string;
  title: string;
  text: string;
  category: Category;
  created_by: CreatedBy;
  created_at: string;
};

export const BlogDetailCard: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        <p className="text-md font-bold mb-4 leading-relaxed text-gray-600">
          {props.title}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div className="inline-flex gap-1">
            <BsCalendar2Minus size={14} className="text-gray-500" />
            <p className="text-xs text-gray-500">{props.created_at}</p>
          </div>
          <div className="inline-flex gap-1">
            <BsCardList size={16} className="text-gray-500" />
            <p className="text-xs text-gray-500">{props.category.title}</p>
          </div>
          <div className="inline-flex gap-1">
            <FiEdit size={14} className="text-gray-500" />
            <p className="text-xs text-gray-500">{props.created_by.name}</p>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="overflow-hidden max-h-[450px] mb-4">
        <img src={props.banner} alt="banner" className="w-full" />
      </div>

      {/* Content */}
      <div className="px-0 lg:p-8">
        <p className="text-sm leading-loose">{props.text}</p>
      </div>

      {/* Comment list */}
      <div>
        {Array.from(Array(3).keys()).map((item) => (
          <CommentCard
            key={item}
            id={1}
            created_at="10 February, 2023"
            created_by={{
              id: 1,
              name: "Lorem Ipsum",
              image:
                "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=60",
            }}
            comment="লরেম ইপ্সাম ডলর সিট আমেত, কনসেক্টেচুর অ্যাডিপিস্কিং এলিট। নানসি
          আল্ট্রিচিস ভ্যারিয়াস আউগিউ ইউ ফ্যাউসিবাস।"
          />
        ))}
      </div>
    </div>
  );
};
