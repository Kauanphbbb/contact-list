<template>
  <div class="about">
    <h1>Add Contact</h1>
    <form v-on:submit.prevent="addContact()">
    <p v-if="errMessage.length > 0">
      {{errMessage}}
    </p>
      <label for="name">
        Name:
        <input required type="text" id="name" v-model="name">
      </label>
      <label for="email">
        Email:
        <input required type="email" id="email" v-model="email">
      </label>
      <label for="phone">
        Phone:
        <input required type="tel" id="phone" v-model="phone" maxlength="9" v-maska="'####-####'">
      </label>
      <label for="picUrl">
        Picture URL:
        <input required type="url" id="picUrl" v-model="picUrl">
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
      picUrl: 'https://randomuser.me/api/portraits/men/72.jpg',
      errMessage: '',
    };
  },
  methods: {
    async addContact() {
      try {
        const id = db.generateId();
        await db.addContact(id, this.name, this.email, this.phone, this.picUrl);
        this.$router.push('/');
      } catch (err) {
        this.errMessage = err.message;
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

p {
  color: red;
}
</style>
