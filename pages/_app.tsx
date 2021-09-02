import "../styles/globals.css";
import { CounterContext } from "../context/counterContext";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => {
    setCounter((counter) => counter + 1);
  };
  return (
    <CounterContext.Provider value={{ counter, incrementCounter }}>
      <Component {...pageProps} />
    </CounterContext.Provider>
  );
}

export default MyApp;
