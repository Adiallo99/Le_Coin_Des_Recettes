import PropTypes from "prop-types";

function Categories ({categories}){

    return(
        <select>
            <option>---</option>
            <option value={categories.id}>{categories.name}</option>
        </select>

    );

}

Categories.propTypes = {
    categories: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
     
    }).isRequired,
  };

export default Categories;