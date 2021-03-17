const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    subtract(num) {
      this.counter -= num;
    },
    setName(e) {
      this.name = e.target.value;
    },
    submitForm() {
      window.alert('Submitted!');
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
  },
});

app.mount('#events');
