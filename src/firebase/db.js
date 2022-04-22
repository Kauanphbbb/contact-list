import {
  getDatabase, ref, set, get, query, orderByChild, equalTo,
} from 'firebase/database';

const db = getDatabase();

async function checkEmailAndPhone(email, phone) {
  const snapshot = await get(query(ref(db, 'contacts'), orderByChild('email'), equalTo(email)));
  console.log(snapshot.exists());
  if (snapshot.exists()) {
    return true;
  }
  const snapshot2 = await get(query(ref(db, 'contacts'), orderByChild('phone'), equalTo(phone)));
  console.log(snapshot2.val());

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

async function addContact(contactId, name, phone, email, picUrl) {
  const check = await checkEmailAndPhone(email, phone);

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
