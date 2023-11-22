import { FieldValues, useForm } from "react-hook-form";

// so we can see properties of errors object in auto completion, and for type safety:
interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  
  // destructuring form object and grabbing register function, with nested destructuring of formState; pass in our interface:
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // hover over data in handleSubmit function and see that data parameter has a data type of FieldValues:
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    // <form onSubmit={handleSubmit((data) => console.log(data))}> // change to below:
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          // validations: react-hook-form only calls handler function if form is valid:
          {...register("name", { required: true, minLength: 2 })}
          id="name"
          type="text"
          className="form-control"
        />
        {/* need ? after name: optional chaining, in case errors object is empty:  */}
        {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required.</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">The name must be at least 2 characters.</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
