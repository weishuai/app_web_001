import React from "react";

const shapes = {
  icbRoundedBorder20: "rounded-[20px]",
  icbCircleBorder25: "rounded-[25px]",
  icbRoundedBorder27: "rounded-[27.5px]",
  icbCircleBorder15: "rounded-[15px]",
  icbCircleBorder35: "rounded-[35px]",
  RoundedBorder17: "rounded-[17.5px]",
  CircleBorder25: "rounded-[25px]",
  RoundedBorder10: "rounded-[10px]",
  RoundedBorder15: "rounded-[15px]",
} as const;
const variants = {
  icbFillGray102: "bg-gray_102",
  icbOutlineGray300cc: "bg-white_A700 shadow-bs",
  icbOutlineRed700: "border-[2px] border-red_700 border-solid",
  icbOutlineGreen600: "border-[2px] border-green_600 border-solid",
  icbFillIndigo600: "bg-indigo_600",
  OutlineIndigo500:
    "border-[1px] border-indigo_500 border-solid text-indigo_500",
  OutlineGray300cc: "bg-indigo_700 shadow-bs text-white_A700",
  OutlineIndigo600:
    "border-[1px] border-indigo_600 border-solid text-indigo_600",
  FillIndigo600: "bg-indigo_600 text-white_A700",
} as const;
const sizes = {
  smIcn: "p-[9px]",
  mdIcn: "p-[14px]",
  lgIcn: "p-[17px]",
  xlIcn: "p-[20px]",
  sm: "p-[8px]",
  md: "p-[11px]",
  lg: "p-[15px]",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "",
  size = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
