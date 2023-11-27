"use client";

import { setCookie } from "cookies-next";

import { ECOMMERCE_ROLE, ECOMMERCE_TOKEN } from "@/constants";
import request from "@/api";
import { useAppDispatch } from "@/redux/hooks";
import { setIsAuthenticated, setRole } from "@/redux/slices/authSlice";
import './register.css'
type FieldType = {
  username?: string;
  password?: string;
};

const Register = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const userData = {
        username: e.currentTarget.username.value,
        password: e.currentTarget.password.value,
      };
      const {
        data: { accesstoken, user },
      } = await request.post("auth/login", userData);
      setCookie(ECOMMERCE_TOKEN, accesstoken);
      setCookie(ECOMMERCE_ROLE, user.role);

      dispatch(setIsAuthenticated(true));
      dispatch(setRole(user.role));
    } finally {
    }
  };
  const onFinish = (values: FieldType) => {
    console.log("Success:", values);
  };
  return (
    <div className="login__wrapper">
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="form__inp "
          placeholder="firstname"
          name="firstname"
        />
        <input
          type="text"
          className="form__inp "
          placeholder="lastname"
          name="lastname"
        />
        <input
          type="text"
          className="form__inp "
          placeholder="username"
          name="username"
        />
        <input
          type="text"
          className="form__inp"
          placeholder="password"
          name="password"
        />
        <button type="submit" className="login__btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
