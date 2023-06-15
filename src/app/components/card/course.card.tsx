import commaNumber from "comma-number";

type CourseCardPropsTypes = {
  id: number;
  banner: string;
  title: string;
  fee: number;
  trainer_name: string;
};

export const CourseCard: React.FC<CourseCardPropsTypes> = (
  props: CourseCardPropsTypes
): JSX.Element => {
  /* short text */
  const stringShortner = (data: string) => {
    if (data.length > 54) return data.slice(0, 54) + "...";
    return data;
  };

  return (
    <div className="w-[280px] sm:w-[300px] cursor-pointer overflow-hidden rounded-xl transition-all shadow-md hover:shadow-xl">
      {/* Banner container */}
      <div
        className="w-full h-60 overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${props.banner})` }}
      />

      {/* Content container */}
      <div className="-mt-10 h-[155px] rounded-tl-3xl rounded-tr-3xl p-4 relative bg-white">
        <p className="font-bold text-md text-gray-700">
          {props.id % 2 === 0
            ? stringShortner(props.title)
            : stringShortner(
                "Become a computer engineer at home in 10 minutes. Become a computer engineer at home in 10 minutes."
              )}
        </p>
        <p className="text-sm font-light mt-1 capitalize text-secondary">
          --{props.trainer_name}
        </p>
        <div className="absolute left-0 bottom-0 w-full px-4 pb-4">
          <p className="text-md font-semibold text-primary">
            {commaNumber(props.fee)} tk.
          </p>
        </div>
      </div>
    </div>
  );
};
