window.onload = function () {
    new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
            result: function () {
                return this.value === 37 ? 'Done!' : 'Not There Yet';
            }
        },
        watch: {
            result: function (value) {
                // storing view instance
                var vm = this;
                setTimeout(function () {
                    vm.value = 0;
                }, 5000)
            }
        }
    });
}