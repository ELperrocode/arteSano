// components/ui/bento-box.tsx
import React from "react";

type BentoBoxProps = {
  children: React.ReactNode;
  className?: string;
};

export const BentoBox = ({ children, className }: BentoBoxProps) => {
  return <div className={`grid gap-5 ${className}`}>{children}</div>;
};

type BentoBoxItemProps = {
  children: React.ReactNode;
  className?: string;
};

export const BentoBoxItem = ({ children, className }: BentoBoxItemProps) => {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      {children}
    </div>
  );
};