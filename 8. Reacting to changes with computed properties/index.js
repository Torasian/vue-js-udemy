window.onload = function () {
    new Vue({
        // connect to DOM
        el: '#app',
        // Store data to be used
        data: {
            counter: 0,
            secondCounter: 0,
        },
        // Dependent properties
        // You call these as if they were a data item. Anything in computed can be used just like a property in the data object.
        // Caches changing
        // Need to run synchronously 
        computed: {
            output: function () {
                console.log('computed');
                return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
            }
        },
        // Execute code upon data changes
        // An alternative to computed properties: watching for changes
        watch: {
            counter: function (value) {
                // storing view instance
                var vm = this;
                setTimeout(function () {
                    vm.counter = 0;
                }, 2000)
            }
        },
        // Methods of the vue instance
        // these get executed all the time
        // Use methods when you don't want to cache the result and you want to recaculate every time the dom get recalulated 
        methods: {
            result: function () {
                console.log('method')
                return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
            }
        }
    });
}