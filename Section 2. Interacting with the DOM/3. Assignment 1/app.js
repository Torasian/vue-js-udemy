window.onload = function () {
    new Vue({
        // references div with id app
        el: '#exercise',
        data: {
            name: 'William Hawken',
            age: '23',
            link: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg'
        },
        methods: {
            multiplyAge: function () {
                //Accessing data in the VUE instance 
                return this.age * 3;
            },

            randomNumber: function () {
                return Math.random();
            },
        }
    });
}