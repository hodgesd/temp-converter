import Input from "./components/Input";
import useTemp from "./hooks/useTemp";

function App() {
  const [temp, Dispatch] = useTemp();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <main className="bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Temperature Converter
        </h1>

        <div className="flex gap-x-4 justify-center">
          <Input id="celsius"
          label="Celsius"
          value={temp.celsius}
          onChange={Dispatch}
          />

          <Input>id="fahrenheit" />
        </div>
      </main>
    </div>
  );
}

export default App;
