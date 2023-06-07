import { useForm, SubmitHandler } from "react-hook-form";
import { isValidEmail } from "@/app/utils/helper";
import { useState } from "react";

type Inputs = {
  email: string;
};

const inputClass =
  "w-full text-xs bg-white disabled:bg-gray-300 rounded-[4px] outline-none p-4 border border-white pr-32";
const inputErrorClass =
  "w-full text-xs bg-white disabled:bg-gray-300 rounded-[4px] outline-none p-4 border border-red-300 pr-32";

export const NewsLetterForm: React.FC = (): JSX.Element => {
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
        <div className="w-full rounded-[4px] overflow-hidden relative bg-white">
          {/* email input field */}
          <input
            placeholder="Enter your email"
            {...register("email", {
              required: true,
              pattern: {
                value: isValidEmail(),
                message: "Invalid email address.",
              },
            })}
            className={errors.email ? inputErrorClass : inputClass}
          />

          {/* Submit button */}
          <button
            type="submit"
            className="absolute top-[6px] right-[4px] rounded-[4px] text-xs font-medium px-6 pt-[11px] pb-[12px] text-white bg-primary disabled:bg-primarygray"
            disabled={isLoading}
          >
            {isLoading ? "Please Wait..." : "Subscribe Now"}
          </button>
        </div>
      </form>
    </div>
  );
};
