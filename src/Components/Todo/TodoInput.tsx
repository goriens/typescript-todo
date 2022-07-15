import React, { useState } from "react";

interface TodoInputProps {
  onClick: (value: string) => void;
}
export const TodoInput = ({ onClick }: TodoInputProps) => {
  const [text, setText] = useState<string>("");
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };
  const handleAdd: React.MouseEventHandler<HTMLButtonElement> = () => {
    onClick(text);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add something"
        onChange={changeHandler}
        style={{ padding: "5px", fontSize: "16px", margin: "4px" }}
      />
      <button
        style={{ padding: "5px", fontSize: "16px", margin: "4px" }}
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};
