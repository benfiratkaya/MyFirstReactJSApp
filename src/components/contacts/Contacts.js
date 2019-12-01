import React from "react";
import PropTypes from "prop-types";
import Loader from "../utilty/Loader";
import Form from "../contacts/Form";
import List from "../contacts/List";
import Filter from "../contacts/Filter";

const Contacts = props => {
  return (
    <div className="Contacts">
      <Filter searchOnChange={props.searchOnChange} />
      <List contacts={props.contacts} />
      <Form addContact={props.addContact} />
    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired,
  searchOnChange: PropTypes.func.isRequired
};

export default Loader(Contacts, "contacts");
