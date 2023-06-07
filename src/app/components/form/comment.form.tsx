"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

type Inputs = {
  comment_text: string;
};

const inputClass =
  "w-full text-xs bg-white disabled:bg-gray-300 rounded-tl-[4px] rounded-bl-[4px] outline-none px-4 py-[15px] border border-white";
const inputErrorClass =
  "w-full text-xs bg-white disabled:bg-gray-300 rounded-tl-[4px] rounded-bl-[4px] outline-none px-4 py-[15px] border border-red-300";

export const CommentForm: React.FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    console.log(data);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex">
          {/* comment_text input field */}
          <div className="grow">
            <input
              placeholder="Write your comment"
              {...register("comment_text", { required: true })}
              className={errors.comment_text ? inputErrorClass : inputClass}
            />
          </div>

          {/* Submit button */}
          <div className="flex-none">
            <button
              type="submit"
              className="rounded-tr-[4px] rounded-br-[4px] text-xs font-medium px-6 py-4 text-white bg-primary disabled:bg-primarygray"
              disabled={isLoading}
            >
              {isLoading ? "Please Wait..." : "Post"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
