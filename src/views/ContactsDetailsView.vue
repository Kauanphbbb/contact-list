<template>
<div class="container">
  <div class="card" v-for="contact in contacts" :key="contact.id">
    <div class="card-img">
      <img :src="contact.picUrl" alt="profile picture">
    </div>
    <div class="card-details">
      <h2>{{ contact.name }}</h2>
      <p>{{ contact.email }}</p>
      <p>{{ contact.phone }}</p>
    </div>
  </div>
</div>
</template>

<script>
import db from '@/firebase/db';

export default {
  name: 'ContactsDetailsView',
  data() {
    return {
      contacts: [],
    };
  },
  mounted() {
    this.getAll();
  },
  methods: {
    async getAll() {
      try {
        const contacts = await db.getAll();
        this.contacts = contacts;
      } catch (err) {
        console.log(err);
      }
    },
  },
};

</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 300px;
  margin: 10px;
  border-radius: 10px;
  background-color: #f5f5f5;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

.card-img {
  width: 100%;
  height: 100px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #fff;
}

.card-img img {
  width: 100%;
  height: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.card-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  background-color: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-size: 12px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
