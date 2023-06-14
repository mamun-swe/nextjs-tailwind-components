import { HiOutlineArrowNarrowRight } from "react-icons/hi";

type PropsTypes = {
  title: string;
  total_course: number;
};

export const CourseCategoryCard: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  return (
    <div className="group border rounded-lg p-3 cursor-pointer transition-all hover:border-primary">
      <div className="flex gap-3">
        <div className="grow">
          <p className="text-sm mb-1 font-medium group-hover:text-primary">
            {props.title}
          </p>
          <p className="text-sm text-muted">{props.total_course} Courses</p>
        </div>
        <div className="flex-none">
          <HiOutlineArrowNarrowRight
            size={22}
            className="group-hover:text-primary"
          />
        </div>
      </div>
    </div>
  );
};
