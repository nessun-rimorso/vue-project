<template>
  <div>
    <div>
      <h2>{{ title }}</h2>

      <input type="text" v-model="searchName">

      <ul>
        <li v-for="(name, index) of filteredNames" :key="index">
          {{ name }}
        </li>
      </ul>

      <hr>

      <app-list></app-list>
    </div>
  </div>
</template>

<script>
import ListMixin from './listMixin'

export default {
  data () {
    return {
      title: 'Hello'
    }
  },
  filters: {
    lowercase (value) {
      return value.toLowerCase()
    }
  },
  mixins: [ListMixin]
}
</script>
