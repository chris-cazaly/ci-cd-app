import "./App.css";

function App() {
  const { version } = window["appConfig"] || "demo";
  return (
    <div className="App">
      <p>Hello</p>
      <h3>Version: {version}</h3>
    </div>
  );
}

export default App;
