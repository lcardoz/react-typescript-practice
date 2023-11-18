import ListGroup from "./components/ListGroup"; // importing entire ListGroup folder
import { BsFillCalendarFill } from 'react-icons/bs';


function App() {

  const items = ["New York", "Los Angeles", "San Francisco"]

  return (
    <>
      <ListGroup heading="Miami" items={items} onSelectItem={() => {}}/>
      <BsFillCalendarFill color="red" size="40" />
    </>
  );
}

export default App;
