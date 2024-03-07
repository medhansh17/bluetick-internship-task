import "./form.styles.css";

const Form = () => {
  return (
    <div className="formContainer">
      <h1 className="poppins" id="formHeading">
        Let's Connect
      </h1>
      <form id="form">
        <div className="inputContainer">
          <label htmlFor="Name">Full Name</label>
          <input type="text" name="Name" />
        </div>
        <div className="inputContainer">
          <label htmlFor="Contact">Contact Number</label>
          <input type="text" name="Contact" />
        </div>
        <div className="inputContainer">
          <label htmlFor="Email">Email Address</label>
          <input type="text" name="Email" />
        </div>
        <div className="inputContainer">
          <label htmlFor="Subject">Subject</label>
          <input type="text" name="Subject" />
        </div>
        <div className="inputContainer">
          <label htmlFor="Description">Description</label>
          <textarea type="text" name="Description" rows="8" />
        </div>
      </form>
      <button id="formBtn">Submit</button>
    </div>
  );
};

export default Form;
