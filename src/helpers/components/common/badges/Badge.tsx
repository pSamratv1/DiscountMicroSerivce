import { CommonSchema } from "utils/schemas/GlobalSchema";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Badge(props: CommonSchema) {
  // Props
  const { title, status, css } = props;

  // Css
  const { customCss } = css;

  // Vars
  const isSuccess = status === "success" || status?.toString() === "true";
  const isAlert = status === "alert";
  const isDanger = status?.toString() === "false";
  const isWarning = status === "warning";
  const isInfo = status === "info";

  // Css
  const successCss = "bg-success-normal";
  const alertCss = "bg-danger-normal";
  const dangerCss = "bg-primary-lighter";
  const warningCss = "bg-warning-normal";
  const infoCss = "bg-info-normal";
  const statusCss = isSuccess
    ? successCss
    : isAlert
    ? alertCss
    : isDanger
    ? dangerCss
    : isWarning
    ? warningCss
    : isInfo && infoCss;
  const defaultCss =
    "inline-flex items-center rounded-full px-4 py-1 font-medium text-white";
  const finalCss = `${statusCss} ${customCss ?? defaultCss}`;

  return <span className={finalCss}>{title && title}</span>;
}
