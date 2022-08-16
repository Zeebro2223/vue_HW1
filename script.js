var app = new Vue({
  el: "#app",
  data: {
    writedTask: "",
    TodoId: 1,
    items: [],
  },
  methods: {
    addNewTask: function () {
      if (this.writedTask === "") {
        return items;
      } else {
        this.items.push({
          id: this.TodoId++,
          title: this.writedTask,
        });
        this.writedTask = "";
      }
    },
    removeTask: function (index) {
      this.items.splice(index, 1);
    },
  },
  computed: {
    checkedNum: function () {
      const sum =
        this.items.filter((item) => item.checked).length / this.items.length;
      return sum;
    },
  },
});
