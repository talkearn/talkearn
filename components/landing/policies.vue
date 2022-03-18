<template>
  <v-dialog
      v-model="dialog"
      max-width="800"
  >
    <template v-slot:activator="{ on, attrs }">
      <a rel="noopener noreferrer"
         v-bind="attrs"
         v-on="on">
        <div class="Button-caption">Privacy Policy</div>
      </a>
    </template>
    <v-card class="form-modal">
      <v-card-title class="text-h5">
        <span class="close-dialog" @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </span>
        <p>Privacy Policy</p>
      </v-card-title>
      <v-card-text class="text-dark">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi placeat repudiandae sequi ullam velit. Assumenda
          beatae eius ipsa iusto natus quam quas tenetur voluptates? Deleniti error et ipsam maiores sapiente?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi placeat repudiandae sequi ullam velit. Assumenda
          beatae eius ipsa iusto natus quam quas tenetur voluptates? Deleniti error et ipsam maiores sapiente?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi placeat repudiandae sequi ullam velit. Assumenda
          beatae eius ipsa iusto natus quam quas tenetur voluptates? Deleniti error et ipsam maiores sapiente?
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>

      </v-card-actions>
    </v-card>

  </v-dialog>

</template>

<script>
export default {
  data() {
    return {
      dialog: false
    }
  }
}
</script>

<style scoped>
.text-dark {
  color: #504f4f !important;
}
</style>