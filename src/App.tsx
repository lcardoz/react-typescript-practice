import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  
  const [items, setItems] = useState(["Apples", "Oranges"]);

  return (
    <>
      <NavBar itemsCount={items.length} />
      <Cart items={items} onClear={() => setItems([])} />
    </>
  );
}

export default App;
