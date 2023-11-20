import { useState } from "react";

function App() {

  const [tags, setTags] = useState(['happy', 'cheerful']);

  const handleClick = () => {
    // Add item to array:
    setTags([...tags, 'sad']);
    
    // Remove item from array, use filter method:
    setTags(tags.filter(tag => tag !== 'happy'));

    // Update array, use map method:
    setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag))
  };
  console.log(tags)

  return (
    <>
      <button onClick={handleClick}>Click Me!</button>
    </>
  );
}

export default App;
