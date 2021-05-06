import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import { Button } from "./Button";

const Header = styled.h1`
  text-align: center;
`;

type WelcomeParams = {
  username: string,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Welcome() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [amountOfRepos, setAmountOfRepos] = useState<number | null>(null);

  const history = useHistory();
  const { username } = useParams<WelcomeParams>();

  useEffect(() => {
      setLoading(true);
      fetch(`https://api.github.com/users/${username}/repos`)
        .then(res => {
          if (res.status !== 200) {
            throw new Error('Failed to fetch data from GitHub');
          }
          return res.json();
        })
        .then(res => {
          setAmountOfRepos(res.length);
        }).catch(err => {
          console.log(err);
          setError(err.message);
        }).finally(() => {
          setLoading(false);
        })
  }, [username, setAmountOfRepos]);
  return (
    <Wrapper>
      {loading && <Header>Loading...</Header>}
      {!loading && error && <Header>{error}</Header>}
      {!loading && !error && <Header>Welcome! You have { amountOfRepos} repositories on GitHub</Header>}

      <Button onClick={() => history.goBack()}>Go back</Button>
    </Wrapper>
    );
}
