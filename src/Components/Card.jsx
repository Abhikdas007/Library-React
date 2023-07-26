import PropTypes from "prop-types";
import { useState } from "react";

export default function Card({ name, author, pages, isRead, deletItem, id }) {
  const [read, setRead] = useState(isRead);
  function changeBg (){
    setRead(!read)
  }
  return (
    <div className="card">
      <h3>{name}</h3>
      <h3>{author}</h3>
      <h3>{pages + " Pages"}</h3>
      <button
        className="card-btn"
        style={{ backgroundColor: read ? "#9fff9c" : "#ff9c9c" }}
        onClick={changeBg}
      >
       
        {read ? "Read" : "UnRead"}
      </button>
      <button
        className="card-btn"
        onClick={() => {
          deletItem(id);
        }}
      >
        Remove
      </button>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  pages: PropTypes.string.isRequired,
  isRead: PropTypes.bool.isRequired,
  deletItem: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
