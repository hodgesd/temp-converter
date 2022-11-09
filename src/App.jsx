import Input from "./components/Input";
import useTemp from "./hooks/useTemp";

function App() {
  const { celsius, fahrenheit, Dispatch } = useTemp();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <main className="bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Temperature Converter
        </h1>

        <div className="flex gap-x-4 justify-center">
          <Input
            id="celsius"
            label="Celsius"
            value={celsius}
            onChange={Dispatch}
          />
          <Input
            id="fahrenheit"
            label="Fahrenheit"
            value={fahrenheit}
            onChange={Dispatch}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
