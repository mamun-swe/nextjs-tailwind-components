import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
};

const inputClass =
  "w-full text-sm bg-white disabled:bg-gray-300 rounded-md outline-none p-4 border border-white pr-24";
const inputErrorClass =
  "w-full text-sm bg-white disabled:bg-gray-300 rounded-md outline-none p-4 border border-red-300 pr-24";

export const NewsLetterForm: React.FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full rounded-md overflow-hidden relative bg-white">
          {/* email input field */}
          <input
            {...register("email", { required: "E-mail is required." })}
            className={errors.email ? inputErrorClass : inputClass}
          />

          {/* Submit button */}
          <button
            type="submit"
            className="absolute top-[10px] right-2 rounded-md text-xs font-bold px-4 py-[10px] text-white bg-slate-400"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};
