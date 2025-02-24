"use client"

import React from "react";

type ButtonProps = {
  label: string;
  color?: "primary" | "secondary" | "tertiary";
  type?: "default" | "block" | "circle";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  icon?: string;  // Alterado para aceitar uma string com a classe do ícone
};

export default function Button({
  label,
  color = "primary",
  type = "default",
  size = "medium",
  onClick,
  icon,
}: ButtonProps) {
  const baseClass = "br-button";
  const sizeClass = type !== "block" ? {
    small: "small",
    medium: "",
    large: "large",
  }[size] : "";
  const typeClass = {
    default: "",
    block: "block",
    circle: "circle",
  }[type];
  const colorClass = {
    primary: "primary",
    secondary: "secondary",
    tertiary: "",
  }[color];
  const spacingClass =
    type === "block" && size !== "small"
      ? "mb-3"
      : type !== "block" && size !== "small"
        ? "mr-3"
        : "";

  const classes = [
    baseClass,
    sizeClass,
    typeClass,
    colorClass,
    spacingClass,
  ]
    .filter(Boolean) // Remove valores falsos (undefined, null, "")
    .join(" "); // Junta as classes em uma string

  return (
    <button className={classes} type="button" aria-label={label} onClick={onClick}>
      {type === "circle" && (
        <i className={`${icon}`} aria-hidden="true"></i>
      )}
      {type !== "circle" && label}
    </button >
  );
}
