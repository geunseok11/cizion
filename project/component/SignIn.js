import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const text = {
    email,
    password,
  };

  const preloadValues = {
    email: "email",
    password: "password",
  };

  const onPressSignin = useCallback(() => {
    props.navigation.navigate("Home");
  }, [email, password]);

  useEffect(() => {
    register(email);
    register(password);
  }, [register]);

  return <div></div>;
};

export default SignIn;
