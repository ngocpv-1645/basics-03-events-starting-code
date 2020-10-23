const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods : {
    confirmInput() {
      this.confirmedName = this.name
    },
    submitForm(event) {
      event.preventDefault();
      alert('Submitted!')
    },
    add(num) {
      this.counter = this.counter + num;
    },
    remove(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    reset() {
      this.name =''
    }
  }
});

app.mount('#events');
