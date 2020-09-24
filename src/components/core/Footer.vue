<template>
  <div>
    <v-footer color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">{{ link }}</v-btn>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>Vuetify Made with by 🤦‍♂ Jaeyoung Min</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Footer",
  components: {},
  data() {
    return {
      links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"]
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped></style>
