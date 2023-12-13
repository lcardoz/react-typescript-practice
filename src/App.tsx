import { useEffect, useRef } from "react";

function App() {

  const ref = useRef<HTMLInputElement>(null);

  // useEffect = after render: function inside is called after each render (put any code that causes side effects in here)
  // can only call useEffect at top level of components (App), can call multiple times for different purposes
  useEffect(() => {
    // Side effect: ref.current.focus() changes the state of the DOM outside of the component, component is no longer pure; 
    // need to put code inside useEffect to make pure
    if (ref.current) ref.current.focus();
  })

  useEffect(() => {
    document.title = 'My App';
  })
  

  return (
    <>
      <input ref={ref} type="text" className="form-control" />
    </>
  );
}

export default App;
