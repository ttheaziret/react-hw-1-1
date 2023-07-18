import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ContactsPage() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const title = useSelector((state) => state.contactTitle);

  const withParams = () => {
    dispatch({
      type: "WITH_PARAMS",
      payload: input
    });
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={withParams}>change title with params</button>
      <h1>______________</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button>add</button>
    </div>
  );
}

export default ContactsPage;
