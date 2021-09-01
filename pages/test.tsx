import { useState, useEffect } from "react";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { TESTING_QUERY } from "../graphql/queries";
import { NextPage, GetServerSideProps } from "next";
import withApollo from "../lib/withApollo";
import { useTestingQuery } from "../generated/index";
import { useQuery } from "@apollo/client";

export const getStaticProps = async (context) => {
  // const {data,loading}=await
  console.log(context);
  const data = "dummy";
  return {
    props: {
      data,
    },
  };
};

function Test(props) {
  console.log(props.apollo);
  //   console.log(client)
  return <div> Hello</div>;
}

export default withApollo(Test, { getDataFromTree });
