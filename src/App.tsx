import { useState } from "react";

function App() {

  const [bugs, setBugs] = useState([
    { id: 1, title: 'Bug1', fixed: false },
    { id: 2, title: 'Bug2', fixed: false },
  ])

  const handleClick = () => {
    setBugs(bugs.map(bug => bug.id === 1 ? { ... bug, fixed: true} : bug))
  };

  console.log(bugs)

  return (
    <>
      <button onClick={handleClick}>Click Me!</button>
    </>
  );
}

export default App;
