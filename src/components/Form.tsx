import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// with z, we can define the shape or schema of our form and add all our validation rules, give it custom messages if we want:
const schema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  // form has a name field which is a string with a min of 2 characters, chain method calls
  age: z
    .number({ invalid_type_error: "Age field is required." })
    .min(18, { message: "Age must be at least 18." }),
  // set validation rule for age field by passing object and set invalid_type_error with custom error
});

// remove FormData interface and call z.infer and <typeof schema> which returns a typescript type which is similar to a typescript interface:
type FormData = z.infer<typeof schema>;

const Form = () => {
  // destructuring form object and grabbing register function, with nested destructuring of formState; pass in our interface:
  const {
    register,
    handleSubmit,
    // use isValid prop to see if form is valid(complete):
    formState: { errors, isValid },
    // pass configuration object and set resolver to zodResolver function which we call and pass our schema objec:
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // hover over data in handleSubmit function and see that data parameter has a data type of FieldValues:
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          // remove validation rules here while registering this field bc theyre now defined in our schema:
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {/* zod takes care of rendering error messages based on the schema that we defined above, only need one error message which can be rendered dynamically */}
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          // value property of input fields always returns string, so we need to instruct react-hook-form to register value as a number:
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      {/* disable button if form is not valid: */}
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
