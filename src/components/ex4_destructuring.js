import React from "react";

//ใช้ความสามารถของ JS  ตอนแทนที่จะส่ง props มาทั้งก้อน เราใช้วิธี destructuring เป็น {x, y}
export default function ex4_destructuring({
  usernameHint,
  passwordHint,
  handleSubmit,
}) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input
          text="text"
          name="username"
          id="username"
          placeholder={usernameHint}
        ></input>
        <br />
        <label htmlFor="password">password</label>
        <input
          text="text"
          name="password"
          id="password"
          placeholder={passwordHint}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
