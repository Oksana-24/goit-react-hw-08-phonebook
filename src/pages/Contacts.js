import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { Loader } from '../components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading } from 'redux/contacts/selectors';
import { Helmet } from 'react-helmet';
import { Form } from 'components/Form/Form';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

export function Contacts() {
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
