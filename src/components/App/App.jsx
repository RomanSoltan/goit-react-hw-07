import s from './App.module.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.loading);
  const isError = useSelector(state => state.contacts.error);

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(fetchContacts({ signal: abortController.signal }));
    return () => {
      abortController.abort();
    };
  }, [dispatch]);

  return (
    <div>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !isError && <b>Request in progress...</b>}
      <ContactList />
      <ToastContainer />
    </div>
  );
}

export default App;
