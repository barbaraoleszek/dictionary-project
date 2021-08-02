import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <h1 className="text-center pt-5">Dictionary</h1>
      </header>
      <main>
        <div className="row mt-5 justify-content-center">
        <div className="col col-lg-4"><Dictionary /></div>
        </div>
      </main>
      <footer><a href="https://github.com/barbaraoleszek/dictionary-project">Coded by Barbara Oleszek-Leszczyńska</a></footer>
    </div>
  );
}

export default App;
