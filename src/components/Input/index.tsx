import React from "react";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  srcFillGray101: "bg-gray_101",
  OutlineGray300: "bg-white_A700 border-[1px] border-gray_300 border-solid",
  GradientWhiteA70026WhiteA70026: "bg-gradient ",
} as const;
const shapes = {
  srcCircleBorder25: "rounded-[25px]",
  RoundedBorder15: "rounded-[15px]",
  CustomBorderBL25:
    "rounded-bl-[25px] rounded-br-[25px] rounded-tl-[0] rounded-tr-[0]",
} as const;
const sizes = {
  smSrc: "pr-[16px] py-[16px]",
  sm: "p-[16px]",
  md: "pb-[20px] pt-[16px] px-[16px]",
  lg: "sm:pl-[20px] pl-[21px] py-[21px]",
} as const;

export type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type"
> &
  Partial<{
    wrapClassName: string;
    className: string;
    name: string;
    placeholder: string;
    type: string;
    errors: string[];
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
  }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape = "",
      variant = "",
      size = "",
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} 
              ${(shape && shapes[shape]) || ""} 
              ${(variant && variants[variant]) || ""} 
              ${(size && sizes[size]) || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

export { Input };
