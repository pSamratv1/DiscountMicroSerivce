/* eslint-disable @typescript-eslint/no-explicit-any */

import { useBoxVisible } from "helpers/hooks/useBoxVisible";
import { Card } from "../cards/Card";

export default function CardPopup(props: any) {
  // Props
  const { children, popupArea, isFlag, css } = props;

  // Props variables
  const { divCss, customCss } = css!;

  // Hooks
  const { domRef: ref, isBoxVisible, setIsBoxVisible } = useBoxVisible(false);

  // Actions
  const handleIconClick = () => {
    setIsBoxVisible(true);
  };

  const handleAction = () => {
    setIsBoxVisible(false);
  };

  // Box CSS
  const defaultCss = "";
  const finalCss = divCss ?? defaultCss;

  // Custom Props
  const customCardProps = {
    handleAction,
    isFlag,
    setIsBoxVisible,
    css: { customCss },
  };

  return (
    <div className={finalCss} onClick={handleIconClick}>
      {children}
      {isBoxVisible && (
        <Card ref={ref} {...customCardProps}>
          {popupArea}
        </Card>
      )}
    </div>
  );
}
