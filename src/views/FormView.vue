<template>
<div>
  Formページ
  <head-comp></head-comp>
  <component :is="isComponent"></component>
  <button @click="buttonAction">{{ button }}</button>
</div>
</template>

<script>
import HeadComp from '@/components/form/HeadComp.vue'
import TextareaComp from '@/components/form/TextareaComp.vue'
import StringComp from '@/components/form/StringComp.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'form-view',

  // （ここでは同じ名前だけど）別の名前でstoreのactionをマッピングさせる
  methods: mapActions('Form', {
    buttonAction: 'buttonAction',
  }),

  computed: mapGetters('Form', {
    button: 'getButton',
    isComponent: 'getComponent',
  }),

  components: {
    HeadComp,
    TextareaComp,
    StringComp,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
