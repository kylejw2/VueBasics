const app = Vue.createApp({
  data() {
    return {
      name: 'Kyle Wright',
      age: 23,
      image:
        'https://pngimg.com/uploads/free/free_PNG90775.png',
      inputValue: 'Random Placeholder',
    };
  },
  methods: {
    ageInFiveYears() {
      return this.age + 5;
    },
    favoriteNumber() {
      return Math.random();
    },
  },
});

app.mount('#assignment');
