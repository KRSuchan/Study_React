import React, { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  const onChange = (e) => {
    console.log(1, e.target.name);
    console.log(2, e.target.value);
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    console.log(3, nextForm);
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + message);
    setForm({
      username: "",
      message: "",
    });
  };
  return (
    <div>
      <h1>이벤트</h1>
      <input
        value={username}
        onChange={onChange}
        type="text"
        name="username"
        placeholder="유저이름"
      />
      <input
        value={message}
        onChange={onChange}
        onKeyDown={onKeyDown}
        type="text"
        name="message"
        placeholder="아무거나"
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};
export default EventPractice;
