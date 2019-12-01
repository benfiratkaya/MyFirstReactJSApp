import React from "react";
import PropTypes from "prop-types";
import "./List.css";
import NoData from "../utilty/NoData";

class List extends React.Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired
  };
  render() {
    return (
      <div className="List">
        <ul className="list-group">
          {this.props.contacts
            .sort((a, b) => b.id - a.id)
            .map(contact => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={contact.id}
              >
                <span>{contact.name}</span>
                <span>{contact.phone}</span>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default NoData(List, "contacts");
