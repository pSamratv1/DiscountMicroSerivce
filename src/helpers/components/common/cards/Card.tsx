/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CardSchema } from "utils/schemas/helpers/components/ComponentSchema";

export const Card = React.forwardRef((props: CardSchema, ref: any) => {
  // Props
  const { children, css, isFlag, handleAction } = props;

  // Props variables
  const { customCss } = css;

  // Custom Props
  const defaultCss =
    "absolute top-12 min-w-[7rem] px-3 py-3 gap-2 flex justify-center items-center flex-col bg-white text-[10px] leading-3 font-medium text-medium text-dark-200 cursor-pointer shadow-lg rounded-lg";
  const combinedCss = customCss ?? defaultCss;

  return (
    <div ref={ref && ref} className={combinedCss}>
      {isFlag && (
        <AiOutlineClose
          className="absolute top-2 right-2 text-danger-normal/70 hover:text-danger-normal"
          onClick={handleAction}
        />
      )}
      {children}
    </div>
  );
});
