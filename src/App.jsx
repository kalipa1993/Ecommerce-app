import "./App.css";
import Navbar from "./componentes/Navbar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import Cart from "./componentes/Cart";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
			<Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/ofertas/:ofertasId" element={<ItemListContainer/>} />
        <Route path="/cart/:carritoId" element={<Cart />} />
        <Route path="/abarrotes/:abarrotesId" element={<ItemDetailContainer />} />
      </Routes>
      <ItemListContainer/>
			<ItemDetailContainer/>
      <Cart/>
      </BrowserRouter>
    </div>
  );
}

export default App;

