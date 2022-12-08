import "./App.css";
import Hello from "./componentes/Hello";
import MeuCard from "./componentes/MeuCard";
import ListaLivros from "./componentes/ListaLivros";
function App() {
  return (
    <div>
      <Hello />
      <MeuCard titulo="Card 1">
        <h4>Texto 1 do Card 1</h4>
        <h4>Texto 2 do Card 1</h4>
      </MeuCard>
      <MeuCard titulo="Card 2">
        <h4>Outro texto do Card 2</h4>
      </MeuCard>
      <ListaLivros />
    </div>
  );
}

export default App;
