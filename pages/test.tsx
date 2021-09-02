import { useState, useEffect } from "react";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { TESTING_QUERY } from "../graphql/queries";
import { NextPage, GetServerSideProps } from "next";
import withApollo from "../lib/withApollo";
import { useTestingQuery } from "../generated/index";
import { useQuery } from "@apollo/client";
import { useCounter } from "../context/counterContext";

function Test(props) {
  const { incrementCounter, counter } = useCounter();

  const handleClick = () => {
    incrementCounter();
  };

  const callMe = async () => {
    const { data, loading } = await props.apollo.query({
      query: TESTING_QUERY,
    });
    console.log(data);
  };
  useEffect(() => {
    callMe();
  }, []);
  //   console.log(client)
  return (
    <div>
      {" "}
      Hello
      <h1>{counter}</h1>
      <button onClick={() => handleClick()}>Increase</button>
    </div>
  );
}

export default withApollo(Test, { getDataFromTree });
