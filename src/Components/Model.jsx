import { useState } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

export default function Model({ setShowModel, addItem }) {
  const [checked, setChecked] = useState(false);

  const [data, setData] = useState({
    name: "",
    author: "",
    pages: "",
    isRead: checked,
  });

  const [errors, setErrors] = useState({
    name: "",
    author: "",
    pages: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setData((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function closeModel() {
    setShowModel(false);
  }

  function handleCheck() {
    setChecked((prevChecked) => !prevChecked);
    setData((prevValue) => {
      return { ...prevValue, isRead: !checked };
    });
  }

  function validateForm() {
    let hasErrors = false;
    const newErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "This field is required";
      hasErrors = true;
    }

    if (!data.author.trim()) {
      newErrors.author = "This field is required";
      hasErrors = true;
    }

    if (!data.pages.trim()) {
      newErrors.pages = "This field is required";
      hasErrors = true;
    }

    setErrors(newErrors);
    return !hasErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (validateForm()) {
      addItem(event, data);
      setData({
        name: "",
        author: "",
        pages: "",
      });
      setChecked(false);
      closeModel();
    }
  }

  return (
    <>
      <div className="model-wraper" onClick={closeModel}></div>
      {ReactDOM.createPortal(
        <div className="model">
          <form className="form-contant" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Book name"
              onChange={handleChange}
              name="name"
              value={data.name}
              required
            />
            {errors.name && <span>{errors.name}</span>}
            <input
              type="text"
              placeholder="Author"
              onChange={handleChange}
              name="author"
              value={data.author}
              required
            />
            {errors.author && <span>{errors.author}</span>}
            <input
              type="text"
              placeholder="Pages"
              onChange={handleChange}
              name="pages"
              value={data.pages}
              required
            />
            {errors.pages && <span>{errors.pages}</span>}
            <div className="checkbox">
              <label>Have you read the book?</label>
              <input type="checkbox" checked={checked} onChange={handleCheck} />
            </div>

            <input className="button-28" type="submit" value="Submit" />
          </form>
        </div>,
        document.getElementById("modelContainer")
      )}
    </>
  );
}

Model.propTypes = {
  setShowModel: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
};
