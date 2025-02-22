import s from './App.module.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />

      <SearchBox />
      <ContactList />
      <ToastContainer />
    </div>
  );
}

export default App;
