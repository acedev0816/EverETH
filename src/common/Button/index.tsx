import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({
  color,
  fixedWidth,
  children,
  padding,
  onClick,
}: ButtonProps) => (
  <StyledButton color={color} padding={padding} fixedWidth={fixedWidth} onClick={onClick}>
    {children}
  </StyledButton>
);
