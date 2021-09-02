import { createContext, useContext } from "react";

interface Counter {
  counter: Number;
  incrementCounter: () => void;
}

export const CounterContext = createContext<Counter>({
  counter: 0,
  incrementCounter: () => {},
});

export const useCounter = () => useContext(CounterContext);
