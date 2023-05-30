type ComponentBodyProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export const ComponentBody: React.FC<ComponentBodyProps> = (
  props: ComponentBodyProps
): JSX.Element => {
  return (
    <div className="p-4 rounded-lg mb-4 bg-white">
      <p className="font-semibold text-sm mb-1 text-gray-700">{props.title}</p>
      <p className="text-xs text-gray-400">{props.description}</p>
      <div className="mt-4">{props.children}</div>
    </div>
  );
};
