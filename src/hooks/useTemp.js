import { useReducer } from "react";
import tempReducer from "./tempReducer";

export default () => {
  const [temp, dispatch] = useReducer(tempReducer, {
    celsius: 0,
    fahrenheit: 32,
  });

  // function to handle the state changes from fahrenheit to celsius and vice versa
  const setTemp = (id, value) => {
    dispatch({
      type: `SET_${id.toUpperCase()}`,
      payload: value,
    });
  };

  const { celsius, fahrenheit } = temp;

  return [celsius, fahrenheit, setTemp];
};
