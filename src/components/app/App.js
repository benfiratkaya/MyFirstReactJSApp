import React from "react";
import Contacts from "../contacts/Contacts";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  state = {
    contacts: [],
    isLoading: true
  };

  addContact = contact => {
    const { contacts } = this.state;
    contacts.push(contact);
    this.setState({
      contacts
    });
  };

  searchOnChange = search => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter(
        contact =>
          contact.name.toLowerCase().search(search.toLowerCase()) !== -1 ||
          contact.phone.toLowerCase().search(search.toLowerCase()) !== -1
      )
    });
    console.log(this.state.contacts);
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(contacts => contacts.data)
      .then(contacts =>
        this.setState({
          contacts,
          isLoading: false
        })
      );
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div className="Contacts">
        <div className="container my-5">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {isLoading ? (
                <div className="d-flex justify-content-center my-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : (
                <Contacts
                  searchOnChange={this.searchOnChange}
                  addContact={this.addContact}
                  contacts={this.state.contacts}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
