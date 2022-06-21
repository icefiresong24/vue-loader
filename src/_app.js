export default {
    data() {
        return {
            message: 1

        }
    },
    mounted() {},
    methods: {
        add: function () {
            this.message++;
        }
    },
    template: `<div>{{message}}<button @click="add">+</button></div>`
}