import { useState, useEffect } from "react";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { TESTING_QUERY } from "../graphql/queries";
import { NextPage, GetServerSideProps } from "next";
import withApollo from "../lib/withApollo";
import { useTestingQuery } from "../generated/index";
import { useQuery } from "@apollo/client";

function Test(props) {
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
  return <div> Hello</div>;
}

export default withApollo(Test, { getDataFromTree });
