import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);

  const filter = useSelector(state => state.filters.name);

  const filteredData = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <ul className={s.list}>
      {!filteredData.length ? (
        <p className={s.descr}>No contacts. Please add a new contact</p>
      ) : (
        filteredData.map(contact => <Contact {...contact} key={contact.id} />)
      )}
    </ul>
  );
};
export default ContactList;
