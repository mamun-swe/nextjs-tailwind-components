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

type BlogCardPropsTypes = {
  id: number;
  banner: string;
  title: string;
  category: Category;
  created_by: CreatedBy;
  created_at: string;
};

export const BlogCard: React.FC<BlogCardPropsTypes> = (
  props: BlogCardPropsTypes
): JSX.Element => {
  /* short text */
  const stringShortner = (data: string) => {
    let arr = data.split("");

    if (arr.length > 99) {
      return arr.splice(0, 99).join("") + "...";
    }

    return data;
  };

  return (
    <div className="cursor-pointer overflow-hidden rounded-xl transition-all shadow-md p-3 hover:shadow-xl">
      {/* Banner container */}
      <div className="w-full h-40 overflow-hidden rounded-xl">
        <img src={props.banner} alt="...." className="min-w-full h-40" />
      </div>

      {/* Content container */}
      <div className="pt-3">
        <p className="text-sm font-bold leading-relaxed mb-6">
          {stringShortner(props.title)}
        </p>

        <div className="flex justify-start gap-2">
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
      </div>
    </div>
  );
};
