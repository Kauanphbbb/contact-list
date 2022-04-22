import {
  getDatabase, ref, set, get, query, orderByChild, equalTo,
} from 'firebase/database';

const db = getDatabase();

function checkEmailAndPhone(email, phone) {
  const snapshot = query(ref(db, 'contacts'), orderByChild('email'), equalTo(email));
  if (snapshot.exists()) {
    return true;
  }
  const snapshot2 = query(ref(db, 'contacts'), orderByChild('phone'), equalTo(phone));
  if (snapshot2.exists()) {
    return true;
  }
  return false;
}

async function getAll() {
  const snapshot = await get(ref(db, 'contacts'));
  const contacts = [];
  if (snapshot.exists()) {
    snapshot.forEach((childSnapshot) => {
      const contact = childSnapshot.val();
      contact.id = childSnapshot.key;
      contacts.push(contact);
    });

    return contacts;
  }
  return [];
}

function addContact(contactId, name, phone, email, picUrl) {
  const check = checkEmailAndPhone(email, phone);

  if (check) {
    throw new Error('Email or phone already exists');
  }

  if (!contactId || !name || !phone || !email || !picUrl) {
    throw new Error('Missing required fields');
  }

  set(ref(db, `contacts/${contactId}`), {
    name,
    phone,
    email,
    picUrl,
  });

  return {
    name, phone, email, picUrl,
  };
}

function generateId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export default {
  addContact,
  generateId,
  getAll,
};
