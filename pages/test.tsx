import { useState } from "react";

import { TESTING_QUERY } from "../graphql/queries";
import { NextPage ,GetServerSideProps} from "next";
import { useQuery } from "@apollo/client";

const test:NextPage = (props) => {
  return <div>
      {JSON.stringify(props)}
  </div>;
};

export const getServerSideProps:GetServerSideProps=async (context)=>{
    const {data,loading}=await useQuery(TESTING_QUERY)
    
    return{
        props{
           data:data   
        }
    }
}

export default test;
