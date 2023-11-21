const Form = () => {
  return (
    <form>
      {/* shortcut to generate code: div.mb-3>label.form-label+input.form-control + tab */}
      {/* mb-3= margin bottom-3 (utility class in bootstrap) */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input id="age" type="number" className="form-control" />
      </div>
      {/* shortcut to generate code: button.btn.btn-primary + tab */}
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  );
};

export default Form;
