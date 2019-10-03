window.onload = function () {
    new Vue({
        // connect to DOM
        el: '#app',
        // Store data to be used
        data: {
            link: 'http://google.com'
        },
        // Methods of the vue instance
        // these get executed all the time
        // Use methods when you don't want to cache the result and you want to recaculate every time the dom get recalulated 
        methods: {
            changeLink: function () {
                this.link = 'http://apple.com'
            }
        }
    });
}