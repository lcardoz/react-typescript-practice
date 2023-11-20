import { useState } from "react";
import produce from "immer";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug1", fixed: false },
    { id: 2, title: "Bug2", fixed: false },
  ]);

  const handleClick = () => {
    // setBugs(bugs.map(bug => bug.id === 1 ? { ... bug, fixed: true} : bug))

    // we can also use Immer to update the object
    setBugs(
      produce((draft) => {
        // draft is our array of bugs
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  console.log(bugs);

  return (
    <>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Fixed" : "New"}'
        </p>
      ))}
      <button onClick={handleClick}>Click Me!</button>
    </>
  );
}

export default App;
