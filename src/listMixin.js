export default {
  data () {
    return {
      names: ['Vlad', 'Max', 'Lena', 'Igor'],
      searchName: ''
    }
  },
  computed: {
    filteredNames () {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
      })
    }
  }
}
