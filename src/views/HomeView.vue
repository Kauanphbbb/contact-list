<template>
  <div class="home">
    <ContactList :title="title" :contacts="contacts"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ContactList from '@/components/ContactList.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      title: 'Home Contacts',
      contacts: [
        {
          id: 1,
          name: 'John Doe',
          email: 'johnDoe@emial.com',
          phone: '555-555-5555',
          picture: 'https://randomuser.me/api/portraits/men/0.jpg',
        },
        {
          id: 2,
          name: 'Jane Doe',
          email: 'janeDoe@email.com',
          phone: '555-555-5555',
          picture: 'https://randomuser.me/api/portraits/men/28.jpg',
        },
      ],
    };
  },
  components: {
    ContactList,
  },

};
</script>
