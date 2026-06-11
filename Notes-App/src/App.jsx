import React, { useState } from "react";

import Input from "./components/Input";
import Display from "./components/Display";

export default function App() {
  const [note, setNote] = useState("");
  return (
    <>
      <Display />
      <Input />
    </>
  );
}
