import { filterContact } from 'redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <form>
      <label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={filter}
          onChange={evt => dispatch(filterContact(evt.target.value))}
          required
          placeholder="Find contacts by name"
        />
      </label>
    </form>
  );
};

export default Filter;
