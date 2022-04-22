<template>
  <div class="about">
    <h1>Add Contact</h1>
    <form v-on:submit.prevent="addContact()">
      <label for="name">
        Name:
        <input type="text" id="name" v-model="name">
      </label>
      <label for="email">
        Email:
        <input type="email" id="email" v-model="email">
      </label>
      <label for="phone">
        Phone:
        <input type="tel" id="phone" v-model="phone">
      </label>
      <label for="picUrl">
        Picture URL:
        <input type="url" id="picUrl" v-model="picUrl">
      </label>
      <button  type="submit">Add Contact</button>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/db';

export default {
  name: 'AddContactView',
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      picUrl: '',
    };
  },
  methods: {
    addContact() {
      try {
        db.addContact(1, this.name, this.email, this.phone, this.picUrl);
        this.$router.push('/');
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style scoped>
form, label {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}

button {
  margin-top: 10px;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  cursor: pointer;
}
</style>
