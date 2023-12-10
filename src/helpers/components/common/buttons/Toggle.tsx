import { TitleSchema } from "utils/schemas/GlobalSchema";

export interface ToggleSchema extends TitleSchema {
  isSmall?: boolean;
}

export default function Toggle(props: ToggleSchema) {
  // Props
  const { title, isSmall } = props;

  // Css
  const defaultCss =
    "bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-primary-normal dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:border-gray-600 peer-checked:bg-primary-normal";
  const finalCss = isSmall
    ? `${defaultCss} w-[2.1rem] h-[1rem] after:w-[0.8rem] after:h-[0.8rem] after:top-[0.1rem] after:left-[3px] peer-checked:after:left-[5px]`
    : `${defaultCss} w-11 h-6 after:w-5 after:h-5 after:top-0.5 after:left-[2px]`;
  return (
    <>
      <label className="z-40 relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className={finalCss}></div>

        {title && <span className="ml-3 text-[10px]">{title}</span>}
      </label>
    </>
  );
}
