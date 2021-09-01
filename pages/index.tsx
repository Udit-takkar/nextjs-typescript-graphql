import { useQuery } from "@apollo/client";
import Head from "next/head";
import Image from "next/image";
import { CHARACTERS_QUERY } from "../graphql/queries";
import styles from "../styles/Home.module.css";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../lib/withApollo";
import { useCharactersQuery } from "../generated";
import Link from "next/link";

function Home() {
  const { data } = useCharactersQuery();

  // console.log(data);
  return (
    <div>
      {data &&
        data.characters.results.map((character) => {
          return (
            <div key={character.id}>
              <Image
                src={character.image}
                alt={character.name}
                width="200px"
                height="200px"
              />
              <Link href="/characters/[id]" as={`characters/${character.id}`}>
                {character.name}
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default withApollo(Home, { getDataFromTree });
