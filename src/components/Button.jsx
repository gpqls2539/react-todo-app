import clsx from "clsx";
import "./Button.css";

export default function Button({
  children,
  className,
  onClick: handleClick,
  disabled = false,
}) {
  return (
    <button
      className={clsx("button", className, disabled && "disabled")}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
