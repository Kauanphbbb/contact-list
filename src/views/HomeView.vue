<template>
  <div class="home">
    <ContactList :title="title" :contacts="contacts"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ContactList from '@/components/ContactList.vue';
import db from '@/firebase/db';

export default {
  name: 'HomeView',
  data() {
    return {
      title: 'Home Contacts',
      contacts: [],
    };
  },

  components: {
    ContactList,
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
