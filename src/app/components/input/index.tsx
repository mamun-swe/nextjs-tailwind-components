import { useController } from "react-hook-form";

type TextFieldPropsTypes = {
  label: string;
  error: any;
  name: string;
  defaultvalue: string | number;
  placeholder: string;
  control: any;
  rules: any;
  className?: string;
  disabled?: boolean;
  rows?: number;
  type: "text" | "number" | "email" | "password";
};

/* Text input */
export const TextInput: React.FC<TextFieldPropsTypes> = (
  props: TextFieldPropsTypes
): JSX.Element => {
  const {
    field: { onChange, onBlur, value },
  } = useController({
    name: props.name,
    control: props.control,
    rules: { ...props.rules },
    defaultValue: props.defaultvalue,
  });

  return (
    <div>
      {props.error ? (
        <p className="text-sm mb-1 text-danger">{props.error}</p>
      ) : (
        <p className="text-sm mb-1 text-gray-500">{props.label}</p>
      )}
      <input
        onChange={onChange} // send value to hook form
        onBlur={onBlur} // notify when input is touched/blur
        value={value} // input value
        name={props.name} // send down the input name
        placeholder={props.placeholder}
        disabled={props.disabled}
        type={props.type || "text"}
        min={0}
        className={
          props.error
            ? `w-full text-sm bg-white disabled:bg-gray-300 rounded-md outline-none p-[14px] border !border-danger ${props.className}`
            : `w-full text-sm bg-white disabled:bg-gray-300 rounded-md outline-none p-[14px] border disabled:border-gray-300 ${props.className}`
        }
      />
    </div>
  );
};
