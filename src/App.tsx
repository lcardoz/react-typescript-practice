import { useState } from "react";

function App() {

  const [pizza, setPizza] = useState({
    name: 'Spicy',
    toppings: ['Mushroom']
  });

  const handleClick = () => {
    setPizza({...pizza, toppings: [...pizza.toppings, 'Pineapple']})
  };

  return (
    <>
      <h1>{pizza.name}</h1>
      <ul>
        {pizza.toppings.map(topping => <li>{topping}</li>)}
      </ul>
      <button onClick={handleClick}>Add Topping!</button>
    </>
  );
}

export default App;
