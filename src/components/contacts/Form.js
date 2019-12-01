import React from "react";
import PropTypes from "prop-types";

class Form extends React.Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired
  };
  state = {
    name: "",
    phone: ""
  };
  makeID = length => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addContact({
      id: this.makeID(8),
      ...this.state
    });
    this.setState({
      name: "",
      phone: ""
    });
  };
  render() {
    return (
      <div className="Form">
        <form onSubmit={this.onSubmit}>
          <div className="form-row">
            <div className="form-group col">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={this.state.name}
                onChange={this.onChange}
                className="form-control"
              />
            </div>
            <div className="form-group col">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={this.state.phone}
                onChange={this.onChange}
                className="form-control"
              />
            </div>
            <div className="form-group col-auto">
              <button type="submit" className="btn btn-success w-100">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
