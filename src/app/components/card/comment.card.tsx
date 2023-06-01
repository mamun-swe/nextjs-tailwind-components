type CreatedBy = {
  id: number;
  name: string;
  image: string;
};

type PropsTypes = {
  id: number;
  created_by: CreatedBy;
  created_at: string;
  comment: string;
};

export const CommentCard: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  return (
    <div className="p-4 rounded-lg mb-4 border bg-white">
      <div className="flex justify-start gap-2">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-none">
          <img
            src={props.created_by.image}
            alt="..."
            className="max-w-12 max-h-12"
          />
        </div>

        <div className="grow pt-1">
          <div className="mb-2">
            <p className="text-[13px] font-medium">{props.created_by.name}</p>
            <p className="text-xs text-gray-600">{props.created_at}</p>
          </div>
          <p className="text-xs leading-relaxed">{props.comment}</p>
        </div>
      </div>
    </div>
  );
};
