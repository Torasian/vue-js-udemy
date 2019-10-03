console.log('Hello');

window.onload = function () {
    new Vue({
        // references div with id app
        el: '#app',
        data: {
            title: 'Hello World'
        },
        methods: {
            // event object automatically created
            changeTitle: function (event) {
                this.title = event.target.value;
            }
        }
    });
}