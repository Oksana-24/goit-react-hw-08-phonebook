import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { Loader } from '../components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectLoading } from 'redux/contacts/selectors';
import { Helmet } from 'react-helmet';
import { Form } from 'components/Form/Form';

export function Contacts() {
  const isLoading = useSelector(selectLoading);

  return (
    <div>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contact</h2>
      <Filter />
      <ContactList />
      {isLoading && <Loader />}
    </div>
  );
}
export default Contacts;
