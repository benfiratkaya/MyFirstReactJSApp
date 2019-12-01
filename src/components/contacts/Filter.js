import React from "react";
import PropTypes from "prop-types";

class Filter extends React.Component {
  static propTypes = {
    searchOnChange: PropTypes.func.isRequired
  };
  state = {
    search: ""
  };
  onChange = e => {
    this.setState({
      search: e.target.value
    });
    this.props.searchOnChange(this.state.search);
  };
  render() {
    return (
      <div className="Filter">
        <form onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            name="search"
            placeholder="Search"
            value={this.state.search}
            onChange={this.onChange}
            className="form-control"
            autoComplete="off"
          />
        </form>
      </div>
    );
  }
}

export default Filter;
