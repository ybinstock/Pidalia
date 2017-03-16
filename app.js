AFRAME.registerComponent('cursor-listener', {
  init: function() {
    this.el.addEventListener('click', function(evt) {
      console.log('I was clicked at: ', evt.detail.intersection.point);

      console.log('this product', evt.target.className);

      (evt.target).emit('fade');

      localStorage.setItem("product", evt.target.className);

    });

  }
});

//AFRAME.registerComponent('collider-check', {
//  dependencies: ['raycaster'],
//  init: function () {
//    this.el.addEventListener('raycaster-intersected', function () {
//      console.log('Player hit something!');
//    });
//  }
//});

function hideInstructions() {
  $(".text").attr('visible', 'false');
}

setTimeout(hideInstructions, 10000);