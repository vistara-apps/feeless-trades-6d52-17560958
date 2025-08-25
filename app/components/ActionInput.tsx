"use client";

import { useState } from "react";

interface ActionInputProps {
  placeholder: string;
  onSubmit: (value: string) => void;
}

export function ActionInput({ placeholder, onSubmit }: ActionInputProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onSubmit(value.trim());
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="input-field flex-1"
      />
      <button
        type="submit"
        className="btn-accent px-4 py-2"
        disabled={!value.trim()}
      >
        Add
      </button>
    </form>
  );
}
