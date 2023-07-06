import { useState, useEffect } from "react"
import { Form } from "./Form/Form"
import { ContactLIst } from "./ContactList/ContactList";

const LS_KEY = 'contacts'

export const App = () =>  {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(LS_KEY);
   return savedContacts !== null ? JSON.parse(savedContacts) : []
  })
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts))
  }, [contacts])

  const addContact = (contact) => {
  const existingContact = contacts.some(({name}) => contact.name.toLowerCase() === name.toLowerCase());
  if (existingContact) {
    alert('This contact already exists in the phonebook!');
    return;
  }
  setContacts( [...contacts, contact] );
  }

  const onFilterChange = (e) => {
      setFilter(e.target.value);
    };
  const onDelete = (id) => {
     setContacts(prevState => prevState.filter((contact) => contact.id !== id));
    };
  return (
    <>
    <Form addContact={addContact}/>
    <ContactLIst contacts={contacts} filter={filter} onFilterChange={onFilterChange} onDelete={onDelete}/>
    </>
  )
};





// import { Component } from "react"
// import { Form } from "./Form/Form"
// import { ContactLIst } from "./ContactList/ContactList";

// const LS_KEY = 'contacts'

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: ''
//   }

//   componentDidMount = () => {
//   const savedContacts = localStorage.getItem(LS_KEY);
//   if (savedContacts && savedContacts.length) {
//     this.setState({ contacts: JSON.parse(savedContacts) });
//   }
//   };

//   componentDidUpdate = (_, prevState) => {
//   const {contacts} = this.state;
//   if(prevState.contacts !== contacts){
//     localStorage.setItem(LS_KEY, JSON.stringify(contacts))
//   }
//   }
//   addContact = (contact) => {
//   const existingContact = this.state.contacts.some(({name}) => contact.name.toLowerCase() === name.toLowerCase());
//   if (existingContact) {
//     alert('This contact already exists in the phonebook!');
//     return;
//   }
//   this.setState({
//     contacts: [...this.state.contacts, contact]
//   });}
//   onFilterChange = (e) => {
//       this.setState({ filter: e.target.value });
//     };
//   onDelete = (id) => {
//       this.setState((prevState) => ({
//         contacts: prevState.contacts.filter((contact) => contact.id !== id),
//       }));
//     };
//   render(){
//   return (
//     <>
//     <Form addContact={this.addContact}/>
//     <ContactLIst contacts={this.state.contacts} filter={this.state.filter} onFilterChange={this.onFilterChange} onDelete={this.onDelete}/>
//     </>
//   )
// }
// };


