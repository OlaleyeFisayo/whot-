import { ButtonProps } from "./types";

export default function Button({ children, className }: ButtonProps) {
  return <button className={className}>{children}</button>;
}
