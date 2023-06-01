import { BsDot } from "react-icons/bs";

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
  category: Category;
  text: string;
  created_by: CreatedBy;
  created_at: string;
};

export const BlogHeaderCard: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  return (
    <div className="overflow-hidden rounded-xl bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Banner */}
        <div className="h-[250px] md:h-[400px] overflow-hidden">
          <img
            src="https://img.freepik.com/premium-vector/fifa-world-cup-championship-2022-background-football-banner-gradient-color_633084-155.jpg"
            alt="..."
            className="w-full min-h-[250px] md:min-h-[400px]"
          />
        </div>

        {/* Content */}
        <div className="p-0 pt-4 lg:p-8">
          <div className="mb-4">
            <p className="text-md font-bold mb-3 text-gray-600">
              {props.title}
            </p>
            <p className="text-sm leading-relaxed text-gray-500">
              {props.text}
            </p>
          </div>

          {/* Created by info */}
          <div className="flex">
            <div className="flex grow justify-start gap-2">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={props.created_by.image}
                  alt="..."
                  className="max-w-12 max-h-12"
                />
              </div>
              <div className="pt-[6px]">
                <p className="text-[13px] font-medium leading-4">
                  {props.created_by.name}
                </p>
                <div className="inline-flex text-gray-700">
                  <p className="text-xs">{props.created_at}</p>
                  <BsDot size={20} className="-mt-[2px]" />
                  <p className="text-xs">{props.category.title}</p>
                </div>
              </div>
            </div>

            <div className="flex-none">
              <button
                type="button"
                className="rounded-full px-3 py-2 text-sm font-bold transition-all text-gray-600 bg-gray-200 hover:bg-gray-300"
              >
                এনরোল করুন
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
