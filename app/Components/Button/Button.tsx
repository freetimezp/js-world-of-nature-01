"use client";
import React from "react";
import styled from "styled-components";

interface ButtonProps {
  name: string;
  icon?: React.ReactNode;
  background?: string;
  color?: string;
  border?: string;
}

const Button = ({ name, icon, background = "var(--color-bg)", color, border }: ButtonProps) => {
  return (
    <ButtonStyled style={{
      background: background,
      color: color,
      border: border
    }}>
      {icon && icon}
      {name}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  padding: 0.8rem 2rem;
  border-radius: 30px;
  border: 2px solid var(--color-border);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all .3s ease-in-out;

  svg {
    transition: all .2s ease-in-out;
  }

  &:hover {
    background-color: var(--color-border);
    border: 2px solid #fff;
    color: #fff;
  }
`;

export default Button;
