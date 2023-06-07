"use client";

type PropsTypes = {};

export const CourseDetailCard: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  const text = `Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.`;

  /* text converter */
  const textConverter = (data: String): String => {
    if (data.length > 770) {
      const sliced = data.slice(0, 700) + "...";
      return sliced;
    }

    return data;
  };

  return (
    <div className="overflow-hidden rounded-xl bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Banner */}
        <div className="min-h-[250px] min-md:h-[400px] overflow-hidden">
          <img
            src="https://img.freepik.com/premium-vector/fifa-world-cup-championship-2022-background-football-banner-gradient-color_633084-155.jpg"
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
            {textConverter(text)}
          </p>
          <div className="flex justify-between mb-8">
            <p className="text-sm font-bold text-secondary">Who are you : 35</p>
            <p className="text-sm font-bold text-secondary">🤣🤣🤣🤣</p>
          </div>

          <div className="flex justify-between">
            <div>
              <p className="text-sm font-bold text-grayblack">Jokes</p>
              <p className="text-lg font-bold text-muted">Wathcing movie</p>
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
  );
};
