// import { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  // const form = useForm()
  // console.log(form)
  // destructuring form object and grabbing register function:
  const { register, handleSubmit } = useForm();
  // call register and give it an argument which is the name of an input field, like name or age:
  // console.log(register("name"));

  // const [person, setPerson] = useState({
  //   name: "",
  //   age: "",
  // });

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   console.log(person);
  // };

  // hover over data in handleSubmit function and see that data parameter has a data type of FieldValues:
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    // <form onSubmit={handleSubmit((data) => console.log(data))}> // change to below:
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* shortcut to generate code: div.mb-3>label.form-label+input.form-control + tab */}
      {/* mb-3= margin bottom-3 (utility class in bootstrap) */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          // onChange={(e) => setPerson({ ...person, name: e.target.value })}
          {...register("name")}
          // value={person.name}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          // onChange={(e) => setPerson({ ...person, age: e.target.value })}
          {...register("age")}
          // value={person.age}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      {/* shortcut to generate code: button.btn.btn-primary + tab */}
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
