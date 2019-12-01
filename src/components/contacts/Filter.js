import React from "react";
import PropTypes from "prop-types";

const Filter = props => {
  const onChange = e => {
    props.searchOnChange(e.target.value);
  };
  return (
    <div className="Filter">
      <form onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          name="search"
          placeholder="Search"
          onChange={onChange}
          className="form-control"
          autoComplete="off"
        />
      </form>
    </div>
  );
};

Filter.protoTypes = {
  searchOnChange: PropTypes.func.isRequired
};

export default Filter;
