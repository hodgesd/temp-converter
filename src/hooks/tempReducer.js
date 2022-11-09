// function to handle the state changes from fahrenheit to celsius and vice versa

export default function (state, action) {
  switch (action.type) {
    case "SET_CELSIUS": {
      return {
        ...state,
        celsius: action.payload,
        fahrenheit: action.payload * 1.8 + 32,
      };
    }

    case "SET_FAHRENHEIT": {
      return {
        ...state,
        celsius: (action.payload - 32) / 1.8,
        fahrenheit: action.payload,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
