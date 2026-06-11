import React, { useState } from "react";

export default function Input() {
  const [title, setTitle] = useState("");
  return (
    <div>
      <input type="text" placeholder="Enter Note..." name="" id="" />
      <button>Add note</button>
    </div>
  );
}
