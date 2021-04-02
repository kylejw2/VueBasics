const app = Vue.createApp({
  data() {
    return { number: 0, message: 'Not there yet' };
  },
  computed: {
    result() {
      if (this.number < 37) {
        return 'Not there yet';
      } else if (this.number > 37) {
        return 'Too much!';
      } else {
        return this.number;
      }
    },
  },
  watch: {
    result() {
      const that = this;
      setTimeout(() => {
        that.number = 0;
      }, 1000);
    },
  },
  methods: {
    addNumber(value) {
      this.number += value;
    },
  },
});

app.mount('#assignment');
