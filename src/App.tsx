// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
import ListGroup from "./components/ListGroup"; // importing entire ListGroup folder
import './App.css';

function App() {
  // const [alertVisable, setAlertVisable] = useState(false);

  const items = ["New York", "Los Angeles", "San Francisco"]

  return (
    <>
      {/* {alertVisable && (
        <Alert onClose={() => setAlertVisable(false)}>My alert</Alert>
      )}
      <Button onClick={() => setAlertVisable(true)}>Click Me!</Button> */}
      <ListGroup heading="Miami" items={items} onSelectItem={() => {}}/>
    </>
  );
}

export default App;
