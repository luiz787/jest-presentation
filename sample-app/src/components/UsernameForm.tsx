import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Button } from "./Button";

const Form = styled.form`
  padding: 32px;
  width: fit-content;
  height: fit-content;
  margin: auto;
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;



export default function LoginForm() {
  const [username, setUsername] = useState("");
  const history = useHistory();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username !== "") {
      history.push(`/welcome/${username}`);
    }
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="githubUsername">Your username on GitHub</label>
      <input id="githubUsername" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>

      <Button type="submit">Ok</Button>
    </Form>
  );
}
