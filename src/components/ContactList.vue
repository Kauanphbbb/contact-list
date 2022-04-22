<template>
  <div class="contact-home">
    <h1>{{title}}</h1>

    <ul class="contact-list">
      <li v-for="contact in contacts" :key="contact.id">
      <div class="profile-pic">
        <img :src="contact.picture" alt="profile picture">
      </div>
        <span>{{contact.name}}</span>
        <span>{{contact.email}}</span>
        <span>{{contact.phone}}</span>
        <div class="buttons-container">
          <button class="button-edit" @click="editContact(contact)">Edit</button>
          <button class="delete-button" @click="deleteContact(contact)">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ContactList',
  props: {
    title: String,
    contacts: Array,
  },
};
</script>

<style scoped>
.contact-list {
  padding: 20px;
  list-style: none;
}

.contact-list li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.buttons-container button {
  margin: 0 10px;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 5px
}

.button-edit {
  background-color: #4CAF50;
  color: #fff;
}

.delete-button {
  background-color: #f44336;
  color: #fff;
}

.profile-pic  {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
}

.profile-pic img {
  width: 100%;
  height: 100%;
}
</style>
