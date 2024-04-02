"use client";
import { useState } from "react";
import "../Input/InputText.css";
import Image from "next/image";
interface Props {
  kind: "id" | "password";
}
const INPUTTYPE = {
  id: {
    placeholder: "아이디를 입력해주세요.",
    errMsg: "아이디를 입력해주세요.",
    checkMsg: "올바른 이메일 주소를 입력해주세요.",
    type: "text",
  },
  password: {
    placeholder: "비밀번호를 입력해주세요.",
    errMsg: "비밀번호를 입력해주세요.",
    checkMsg: "올바른 비밀번호를 입력해주세요.",
    type: "password",
  },
};
const EMAILCHECK = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PWDCHECK = /^(?=.*\d)(?=.*[a-z])[A-Za-z\d@$!%*?&]{8,}$/;
export default function InputText({ kind }: Props) {
  const [errorMsg, setErrorMsg] = useState("");
  const [inputValueType, setInputValueType] = useState(INPUTTYPE[kind].type);
  const [eyeIcon, setEyeIcon] = useState("/images/eye-off.png");

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value) {
      setErrorMsg(INPUTTYPE[kind].errMsg);
    } else if (kind === "id" && !EMAILCHECK.test(value)) {
      setErrorMsg(INPUTTYPE[kind].checkMsg);
    } else if (kind === "password" && !PWDCHECK.test(value)) {
      setErrorMsg(INPUTTYPE[kind].checkMsg);
    } else {
      setErrorMsg("");
    }
  };
  const handleEyeClick = () => {
    setInputValueType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
    setEyeIcon((prevIcon) =>
      prevIcon === "/images/eye-on.png"
        ? "/images/eye-off.png"
        : "/images/eye-on.png"
    );
  };
  return (
    <div>
      <div className="inputContainer">
        <input
          className={`inputText ${errorMsg ? "err" : ""}`}
          placeholder={INPUTTYPE[kind].placeholder}
          onBlur={handleBlur}
          type={inputValueType}
        />
        {kind === "password" && (
          <button onClick={handleEyeClick}>
            <Image
              width={16}
              height={16}
              src={eyeIcon}
              alt="eyeIcon"
              className="eyeIcon"
            />
          </button>
        )}
      </div>

      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
    </div>
  );
}
