import { createSelector } from '@reduxjs/toolkit';

export const selectLoading = state => state.contacts.loading;

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter.filter;


export const selectAllContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
