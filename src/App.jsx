import "./App.css";
import Navbar from "./componentes/Navbar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";

function App() {
  return (
    <div className="App">
     
			<Navbar />
			<ItemDetailContainer/>
    </div>
  );
}

export default App;

