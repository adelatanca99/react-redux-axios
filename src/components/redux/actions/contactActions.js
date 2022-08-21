export const ActionTypes = {
  ADD_CONTACT: 'ADD_CONTACT',
  DELETE_CONTACT: 'DELETE_CONTACT',
  UPDATE_CONTACT: 'UPDATE_CONTACT',
  GET_CONTACTS: 'GET_CONTACTS',
};

export const getContacts = (contacts) => {
  return {
    type: ActionTypes.GET_CONTACTS,
    contacts,
  };
};

export const addContact = (contact) => {
  return {
    type: ActionTypes.ADD_CONTACT,
    contact,
  };
};

export const deleteContact = (id) => {
  return {
    type: ActionTypes.DELETE_CONTACT,
    id,
  };
};
export const updateContact = (contact) => {
  return {
    type: ActionTypes.UPDATE_CONTACT,
    contact,
  };
};
