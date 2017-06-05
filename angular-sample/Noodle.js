angular
  // module gives the app a name
  .module('noodleApp',[])
  // .controller part attaches a function as a controller
  .controller('NoodleController', NoodleController);

  // controller function to use
  function NoodleController() {
    // save the value of this so we can use different htis in other functions
    var vm = this;
    vm.flavor = "delicious";
    vm.noodles = [
      {'name': 'spaghetti', 'sauce': 'tomato sauce'},
      {'name': 'macaroni', 'sauce': 'cheese'},
      {'name': 'ramen', 'sauce': 'miso broth'}
    ];
    vm.sayHi = function(){
      console.log(this);
      console.log(vm);
      vm.flavor = 'gross';
    }
  }
