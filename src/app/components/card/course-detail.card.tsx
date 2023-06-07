"use client";

type PropsTypes = {
  id: number;
  title: string;
  banner: string;
  text: string;
  total_class: number;
  price: number;
};

export const CourseDetailCard: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  /* text converter */
  const textConverter = (data: String): String => {
    if (data.length > 770) {
      const sliced = data.slice(0, 700) + "...";
      return sliced;
    }

    return data;
  };

  return (
    <div>
      <div className="mb-2">
        <p className="text-2xl lg:text-3xl font-bold text-muted">
          {props.title}
        </p>
      </div>
      <div className="overflow-hidden rounded-xl bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Banner */}
          <div className="min-h-[250px] min-md:h-[400px] overflow-hidden">
            <img
              src={props.banner}
              alt="..."
              className="w-full min-h-[250px] md:min-h-[400px]"
            />
          </div>

          {/* Content */}
          <div className="p-4 lg:p-8">
            <p className="text-lg font-bold mb-4 text-secondary">
              Will get in course!
            </p>
            <p className="text-sm leading-relaxed mb-4 text-muted">
              {textConverter(props.text)}
            </p>
            <div className="flex justify-between mb-8">
              <p className="text-sm font-bold text-secondary">
                Who are you : {props.total_class}
              </p>
              <p className="text-sm font-bold text-secondary">🤣🤣🤣🤣</p>
            </div>

            <div className="flex justify-between">
              <div>
                <p className="text-sm font-bold text-grayblack">Jokes</p>
                <p className="text-lg font-bold text-muted">
                  Wathcing movie {props.price}
                </p>
              </div>
              <div>
                <button
                  type="button"
                  className="rounded-full px-4 py-2 text-sm font-bold transition-all text-white bg-primary hover:bg-primarygray"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
