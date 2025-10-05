import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

//cn stands for classnames
export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
