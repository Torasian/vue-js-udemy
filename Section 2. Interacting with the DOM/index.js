window.onload = function () {
    new Vue({
        // references div with id app
        el: '#app',
        data: {
            title: 'Hello World',
            link: 'http://google.com',
            finishedLink: '<a href="http://google.com">Google</a>'





        },
        methods: {
            sayHello: function () {
                //Accessing data in the VUE instance 
                return this.title;
            }
        }
    });
}