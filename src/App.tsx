import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <>
      <ListGroup items={items} heading="Cities" />
    </>
  )
}

export default App;
