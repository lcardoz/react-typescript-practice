import { FormEvent, useRef } from "react";

const Form = () => {

  // initialize every ref object with null bc current prop references a dom node, but we dont have access to dom nodes until react renders component, so we initialize with null:
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: '', age: 0 };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (nameRef.current !== null)
      person.name = nameRef.current.value;

    if (ageRef.current !== null)
      person.age = parseInt(ageRef.current.value);

    console.log(person)
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* shortcut to generate code: div.mb-3>label.form-label+input.form-control + tab */}
      {/* mb-3= margin bottom-3 (utility class in bootstrap) */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>
      {/* shortcut to generate code: button.btn.btn-primary + tab */}
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  );
};

export default Form;
