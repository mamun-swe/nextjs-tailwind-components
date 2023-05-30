import { LuClock3 } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";

type CourseCardPropsTypes = {
  id: number;
  banner: string;
  title: string;
  duration: string;
  enrolled: number;
  fee: number;
  trainer_name: string;
  trainer_image: string;
};

export const CourseCard: React.FC<CourseCardPropsTypes> = (
  props: CourseCardPropsTypes
): JSX.Element => {
  /* short text */
  const stringShortner = (data: string) => {
    let arr = data.split("");

    if (arr.length > 52) {
      return arr.splice(0, 52).join("") + "...";
    }

    return data;
  };

  return (
    <div className="relative cursor-pointer h-[405px] overflow-hidden rounded-xl transition-all shadow-md hover:shadow-xl bg-white">
      {/* Banner container */}
      <div className="w-full h-60 overflow-hidden -z-30">
        <img src={props.banner} alt="..." className="min-w-full min-h-full" />
      </div>

      {/* Content container */}
      <div className="absolute top-52 left-0 w-full rounded-tl-3xl z-40 rounded-tr-3xl p-4 bg-white">
        {/* Title & owner */}
        <div className="flex mb-8">
          <div className="flex-grow">
            <p className="font-bold text-sm text-gray-700">
              {stringShortner(props.title)}
            </p>
            <p className="text-xs italic text-gray-400">--by Jhon sina</p>
          </div>
          <div className="pl-3">
            <div className="w-14 h-14 rounded-full overflow-hidden">
              <img
                src={props.trainer_image}
                alt="..."
                className="max-w-14 max-h-14"
              />
            </div>
          </div>
        </div>

        {/* Course duration, Total enrolled & Pricing */}
        <div className="flex flex-wrap justify-end gap-2 mb-3">
          <div className="border px-2 py-1 rounded-md flex justify-between gap-2 text-gray-600 bg-gray-100">
            <LuClock3 size={14} />
            <p className="text-xs">{props.duration}</p>
          </div>
          <div className="border px-2 py-1 rounded-md flex justify-between gap-2 text-gray-600 bg-gray-100">
            <FiUsers size={14} />
            <p className="text-xs">{props.enrolled}+</p>
          </div>

          <div className="border px-2 py-1 rounded-md flex justify-between gap-2 text-gray-600 bg-gray-100">
            <p className="text-xs">Fee:</p>
            <p className="text-xs font-bold">{props.fee}tk</p>
          </div>
        </div>

        {/* Enroll button */}
        <div className="text-right">
          <button
            type="button"
            className="rounded-md px-3 py-2 text-sm font-bold transition-all text-gray-600 bg-gray-200 hover:bg-gray-300"
          >
            এনরোল করুন
          </button>
        </div>
      </div>
    </div>
  );
};
