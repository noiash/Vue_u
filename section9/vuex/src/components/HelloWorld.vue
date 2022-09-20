<template>
  <div>
    <button @click="increment">+</button>
    <button @click="addCount">+10</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  //methods: {
    //increment(){
      //this.$store.commit('increment')
    //},
    //addCount() {
      //this.$store.commit('addCount', {
        //value: 10
      //})
    //}
  //}
  increment(){
    this.$store.dispatch('incrementAction')
  },
  addCount(){
    this.$store.dispatch('addCountAction', {
      value: 10
    })
  }
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
