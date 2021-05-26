import "./App.css";
import Count from "./components/Count";
import Header from "./components/Header";
import ShowWindowWidth from "./components/ShowWindowWidth";
import Character from "./components/Characters";

function App() {
  return (
    <div className="App">
      <h1>Hola</h1>
      <ShowWindowWidth />
      <Header />
      <Count />
      <Character />
    </div>
  );
}

export default App;
