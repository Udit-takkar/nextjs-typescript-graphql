import { get } from "lodash";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../lib/withApollo";
import { useCharacterQuery } from "../../generated";

function SingleCharacterQuery({ query }) {
  const id = get(query, "id");

  const { data } = useCharacterQuery({ variables: { id } });

  return <div>{JSON.stringify(data)} </div>;
}

export default withApollo(SingleCharacterQuery, { getDataFromTree });
