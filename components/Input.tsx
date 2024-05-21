import React, { ChangeEvent } from "react";

interface InputProps {
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  type?: string;
  label: string;
}

export default function Input({
  value,
  onChange,
  disabled,
  type,
  label,
}: InputProps) {
  return (
    <div className="flex flex-col w-full text-gray-600">
      <label htmlFor={label}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        disabled={disabled}
        type={type}
        className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}
