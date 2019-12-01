import React from "react";
import Contacts from "../contacts/Contacts";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  state = {
    contacts: null,
    filteredData: null
  };

  addContact = contact => {
    const { contacts } = this.state;
    contacts.push(contact);
    this.setState({
      contacts,
      filteredData: contacts
    });
    console.log(this.state.contacts);
  };
  searchOnChange = search => {
    const { contacts } = this.state;
    this.setState({
      filteredData: contacts.filter(
        contact =>
          contact.name.toLowerCase().search(search.toLowerCase()) !== -1 ||
          contact.phone.toLowerCase().search(search.toLowerCase()) !== -1
      )
    });
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(contacts => contacts.data)
      .then(contacts =>
        this.setState({
          contacts,
          filteredData: contacts
        })
      );
  }

  render() {
    return (
      <div className="Contacts">
        <div className="container my-5">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <Contacts
                addContact={this.addContact}
                contacts={this.state.filteredData}
                searchOnChange={this.searchOnChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
