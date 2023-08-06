import { useState } from 'react';
import { addContact } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';

export function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    contacts
      .map(contact => contact.name.toLowerCase())
      .includes(name.toLowerCase())
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          required
          placeholder="Name"
        />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
          required
          placeholder="Phone number"
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

export default Form;
