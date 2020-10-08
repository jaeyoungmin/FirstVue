<template>
  <div class="menu">
    <v-row justify="center">
      <v-expansion-panels popout>
        <v-expansion-panel v-for="(item, i) in items" :key="i">
          <v-expansion-panel-header>
            {{ item.title }}
            <v-spacer></v-spacer>
            <v-icon>mdi-link</v-icon>
          </v-expansion-panel-header>
          <v-expansion-panel-content
            >{{ item.text }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "menu",
  data() {
    return {
      items: [
        {
          title: "Solutions Based",
          text: "ssqweqsds"
        },
        {
          title: "djfhdk",
          text: "sqwezzxfasdasqwess"
        },
        {
          title: "Solutios.",
          text: "ssvzxc vzxcvdfsfs"
        },
        {
          title: "Solused.",
          text: "sfqweq rwqzxcvss"
        },
        {
          title: "Solut",
          text: "ssssdaasdadasd"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>