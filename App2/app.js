const app = Vue.createApp({
  data() {
    return {
      courseGoal1: 'Finish Vue course.',
      courseGoal2: 'Master Vue',
      vueLink: 'https://vuejs.org/',
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoal1;
      } else {
        return this.courseGoal2;
      }
    },
  },
});

app.mount('#user-goal');
