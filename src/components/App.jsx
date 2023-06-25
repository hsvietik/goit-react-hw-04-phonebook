import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  const addContact = (nameToAdd, numberToAdd) => {
    const contactExists = contacts.find(({ name }) => name === nameToAdd);
    if (contactExists) {
      return Notiflix.Notify.failure(
        `${nameToAdd} is already in contacts.`,
        100
      );
    }
    setContacts(prevState => [
      ...prevState,
      { id: nanoid(), name: nameToAdd, number: numberToAdd },
    ]);
  };

  const changeFilter = filter => {
    setFilter(filter.toLowerCase());
  };

  const deleteContact = idToDelete => {
    setContacts(prevState => prevState.filter(({ id }) => id !== idToDelete));
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  let filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter onChange={changeFilter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
}
