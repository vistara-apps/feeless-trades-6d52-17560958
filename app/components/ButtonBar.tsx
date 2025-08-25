"use client";

interface ButtonBarProps {
  buttons: Array<{
    label: string;
    action: () => void;
  }>;
}

export function ButtonBar({ buttons }: ButtonBarProps) {
  return (
    <div className="flex space-x-3">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={button.action}
          className="btn-primary flex-1"
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}
