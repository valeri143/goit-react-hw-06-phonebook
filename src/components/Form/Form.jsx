import React, { useState } from "react"
import { Title, FormStyled, Input, Button, Label, Box } from './FormStyled'
import { nanoid } from 'nanoid';

export const Form = ({addContact}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('')

  const onSubmit = (e) =>{
  e.preventDefault();
  if (name.trim() === ''|| number.trim() === '') {
    return;
  }
  const contact = {
    id: nanoid(),
    name: name.trim(),
    number: number.trim(),
  };
  addContact(contact);
  setName('');
  setNumber('')
}
const onChange = (e) => {
  switch (e.target.name) {
    case 'name':
      setName(e.target.value);
      break;
    case 'number':
      setNumber(e.target.value);
      break;
    default:
      console.log(`${e.target.name} does not exist`);
  }
};


   return (
    <Box>
    <Title>Phonebook</Title>
    <FormStyled onSubmit={onSubmit}>
        <Label>
        Name
   <Input
   onChange={onChange}
    type="text"
    name="name"
    value={name}
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
  />
  </Label>
  <Label>
  Number
  <Input
    onChange={onChange}
  type="tel"
  name="number"
  value={number}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
  </Label>
  <Button>Add Contact</Button>
   </FormStyled>
    </Box>
   )}


//    import React, { Component } from "react"
// import { Title, FormStyled, Input, Button, Label, Box } from './FormStyled'
// import { nanoid } from 'nanoid';

// export class Form extends Component {
//   state = {
//     name: '',
//     number: ''
// }
//   onSubmit = (e) =>{
//   e.preventDefault();
//   const { name, number } = this.state;
//   if (name.trim() === ''|| number.trim() === '') {
//     return;
//   }
//   const contact = {
//     id: nanoid(),
//     name: name.trim(),
//     number: number.trim(),
//   };
//   this.props.addContact(contact);
//   this.setState({number: '', name: ''});
// }
//   onChange = ({target}) => {
//   this.setState({ [target.name]: target.value });
//     }

//   render() {
//    return (
//     <Box>
//     <Title>Phonebook</Title>
//     <FormStyled onSubmit={this.onSubmit}>
//         <Label>
//         Name
//    <Input
//    onChange={this.onChange}
//     type="text"
//     name="name"
//     value={this.state.name}
//     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//     required
//   />
//   </Label>
//   <Label>
//   Number
//   <Input
//     onChange={this.onChange}
//   type="tel"
//   name="number"
//   value={this.state.number}
//   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//   required
// />
//   </Label>
//   <Button>Add Contact</Button>
//    </FormStyled>
//     </Box>
//    )}
//    }