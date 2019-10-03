window.onload = function () {
  new Vue({
    el: '#exercise',
    data: {
      effectClasses: {
        highlight: false,
        shrink: true
      },
      userClass: '',
      trueClass: true,
      myStyle: {
        width: '100px',
        height: '150px',
        backgroundColor: 'gray'
      },
      progressBar: {
        width: '0px',
        backgroundColor: 'red'
      }
    },
    methods: {

      // Here we alternate the properties highlight and shrink every second
      startEffect: function () {
        var vm = this;
        setInterval(function () {
          vm.effectClasses.highlight = !vm.effectClasses.highlight;
          vm.effectClasses.shrink = !vm.effectClasses.shrink;
        }, 1000);
      },

      //If the width is less than a 100, the progress increase by 10 each time. 

      startProgress: function () {
        var vm = this;
        var width = 0;

        setInterval(function () {
          if (width <= 100) {
            width = width + 10;
            vm.progressBar.width = width + 'px';
          }

        }, 500)
      }

    }
  });
}