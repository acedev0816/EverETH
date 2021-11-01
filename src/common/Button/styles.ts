import styled from "styled-components";

export const StyledButton = styled("button")<any>`
  background: ${(p) => p.color || "#2e186a"};
  color: white;
  font-size: 1rem;
  width: 100%;
  border: none;
  border-radius: 20px;
  padding: 8px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 200px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    background-color: rgb(255, 130, 92);
  }
`;
