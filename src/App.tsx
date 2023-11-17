import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisable, setAlertVisable] = useState(false);

  return (
    <>
      {alertVisable && (
        <Alert onClose={() => setAlertVisable(false)}>My alert</Alert>
      )}
      <Button onClick={() => setAlertVisable(true)}>Click Me!</Button>
    </>
  );
}

export default App;
