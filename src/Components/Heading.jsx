import PropTypes from "prop-types";

export default function Heading({setShowModel}) {

  function showModel (){
    setShowModel(true)
  }
  
  return (
    <div className="heading">
      <h1 onClick={showModel}>Add Book + </h1>
    </div>
  )
}

Heading.propTypes = {
  setShowModel: PropTypes.func.isRequired,
};
