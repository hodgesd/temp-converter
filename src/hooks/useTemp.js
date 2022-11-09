import { useReducer } from "react";
import tempReducer from "./tempReducer";

export default () => {
  const [temp, dispatch] = useReducer(tempReducer, {
    celsius: 0,
    fahrenheit: 32,
  });
  return [temp, dispatch];
};
