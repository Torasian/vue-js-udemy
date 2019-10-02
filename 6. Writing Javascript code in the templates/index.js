window.onload = function () {
    new Vue({
        // references div with id app
        el: '#app',
        data: {
            counter: 0,
            x: 0,
            y: 0
        },
        methods: {

            // increase: function () {
            //     this.counter++;
            // },

            increase: function (step, event) {
                this.counter += step;
            },

            // Getting Event Data from the Event Object
            updateCoordinates: function (event) {
                this.x = event.clientX;
                this.y = event.clientY;
            },

            // dummy: function (event) {
            //     event.stopPropagation();
            // },

            alertMe: function () {
                alert("Alert!");
            }

        }
    });
}