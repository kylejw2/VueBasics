const app = Vue.createApp({
  data() {
    return {
      firstOutput: '',
      secondOutput: '',
    };
  },
  methods: {
    alert() {
      window.alert('You just clicked the alert button');
    },
    updateOutput(e, inputVar) {
      this[inputVar] = e.target.value;
    },
  },
});

app.mount('#assignment');
