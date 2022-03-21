var particleNumber = 75;
// number of particles (change it!)



window.requestAnimFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 2000 / 90);
    };
})();
// requesting the keyframes

var c = document.getElementById('c');
var ctx = c.getContext('2d');
//context and id of canvas

var w = window.innerWidth;
var h = window.innerHeight;
//width and height of canvas

c.width = w;
c.height = h;
//setting the width and height for canvas

var mouse = {
  x: w / 8,
  y: h / 8
};
//mouse position

document.addEventListener('mousemove', function (e) {
  mouse.x = e.clientX || e.pageX;
  mouse.y = e.clientY || e.pageY
}, false);
//finding the mouse position

//when clicked, the set-up function runs
document.addEventListener('mouseover',
  function () {
    var particleNumber = 95;

    var particles = [];
    // the particles storage

    for (i = 0; i < particleNumber; i++) {
      setTimeout(function () {
        particles.push(new createParticle);
      }, i * 10);
      // add a particle (not all at once - setTimeout(); )
    }
    // adding 55 particles

    function createParticle() {
      this.x = mouse.x;
      this.y = mouse.y;
      // the x and y

      this.vx = Math.random() * 9 - 5;
      this.vy = Math.random() * 9 - 5;
      // the velocities

      this.size = 20;
      // the size

      this.life = Math.random() * 500;
      // the life

      var g = 'rgba(80, 12, 113,1.0)';
      var gg = 'rgba(70, 12, 113,1.0)';
      var ggg = 'rgba(58, 12, 113,1.0)';
      var array = [g, gg, ggg];
      this.color = array[Math.floor(Math.random() * 5)];
      // making 3 mandatory colors (change it and fork - i might use that!)

      this.reset = function () {
        // the reset

        this.x = mouse.x;
        this.y = mouse.y;
        this.vx = Math.random() * 9 - 5;
        this.vy = Math.random() * 9 - 5;
        this.size = 20;
        this.life = Math.random() * 66;
      }
    }

    function draw() {
      requestAnimFrame(draw);
      // requesting the keyframes

      ctx.fillStyle = "#262566";
      ctx.fillRect(0, 0, c.width, c.height);
      // the canvas

      for (t = 0; t < particles.length; t++) {
        var p = particles[t];
        // using the particle we want to use

        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
        // making the particle

        p.x += p.vx;
        p.y += p.vy;
        // velocities

        p.life *= 0.9;
        p.size *= 0.89999;
        // making the life and size decrease

        if (p.life < 1) {
          p.reset();
        }
        // reseting the particles when dead
      }
    }

    draw();
    // calling draw
  }, false);




//                 //
// background code //
//                 //

var particles = [];
// the particles storage

for (i = 0; i < particleNumber; i++) {
  setTimeout(function () {
    particles.push(new createParticle);
  }, i * 15);
  // add a particle (not all at once - setTimeout(); )
}
// adding 55 particles

function createParticle() {
  this.x = Math.random() * c.width;
  this.y = Math.random() * c.height;
  // the x and y

  this.vx = Math.random() * 8 - 4;
  this.vy = Math.random() * 8 - 4;
  // the velocities

  this.size = 20;
  // the size

  this.life = Math.random() * 100;
  // the life

  var g = 'rgba(80, 12, 113,1.0)';
  var gg = 'rgba(80, 12, 113,1.0)';
  var ggg = 'rgba(80, 12, 113,1.0)';
  var array = [g, gg, ggg];
  this.color = array[Math.floor(Math.random() * 3)];
  // making 3 mandatory colors (change it and fork - i might use that!)

  this.reset = function () {
    // the reset

    this.x = Math.random() * c.width;
    this.y = Math.random() * c.height;
    this.vx = Math.random() * 8 - 4;
    this.vy = Math.random() * 8 - 4;
    this.size = 20;
    this.life = Math.random() * 33;
  }
}

function draw() {
  requestAnimFrame(draw);
  // requesting the keyframes

  ctx.fillStyle = "#262626";
  ctx.fillRect(0, 0, c.width, c.height);
  // the canvas

  for (t = 0; t < particles.length; t++) {
    var p = particles[t];
    // using the particle we want to use

    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.size, p.size);
    // making the particle

    p.x += p.vx;
    p.y += p.vy;
    // velocities

    p.life *= 0.9;
    p.size *= 0.89999;
    // making the life and size decrease

    if (p.life < 1) {
      p.reset();
    }
    // reseting the particles when dead
  }
}

draw();
