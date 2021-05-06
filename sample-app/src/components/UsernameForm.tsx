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

  const handleSubmit = () => {
    history.push(`/welcome/${username}`);
  };

  return (
    <Form>
      <label htmlFor="githubUsername">Your username on GitHub</label>
      <input id="githubUsername" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>

      <Button type="submit" onClick={handleSubmit}>Ok</Button>
    </Form>
  );
}
