var init = function (window) {
    'use strict';

    var
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');

    window.opspark.makeGame = function() {
        window.opspark.game = {};

        var game = window.opspark.game;
        var circle;
        var circles = [];

        function drawCircle() {
            circle = draw.randomCircleInArea(canvas, true, true, "#FFFFFF", 1);
            physikz.addRandomVelocity(circle, canvas, 5, 5);
            view.addChild(circle);
            circles.push(circle);
        }
        
        for (var i = 0; i < 100; i++) {
            drawCircle();
        }

        function update() {
            for (var i = 0; i < circles.length; i++) {
                physikz.updatePosition(circles[i]);
                game.checkCirclePosition(circles[i]);
              }
        }

        game.checkCirclePosition = function(circle) {
            var rightEdge = circle.x + circle.radius;
            var leftEdge = circle.x - circle.radius;
            var topEdge = circle.y - circle.radius;
            var bottomEdge = circle.y + circle.radius;
            if (leftEdge > canvas.width ) {
                circle.x = 0; // places the circle on the left if it surpasses the right of the screen
            }
            if (topEdge > canvas.height) {
                circle.y = 0; // places the circle on the top if it surpasses the bottom of the screen
            }
            if (rightEdge < 0) {
                circle.x = canvas.width; // places the circle on the right if it surpasses the left of the screen
            }
            if (bottomEdge < 0) {
                circle.y = canvas.height; // places the circle on the bottom if it surpasses the top of the screen
            }
        }

        // do not remove this code
        view.addChild(fps);
        app.addUpdateable(fps);
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        app.addUpdateable(window.opspark.game);
    }
};

// do not remove this code
if ((typeof process !== 'undefined') && (typeof process.versions.node !== 'undefined')) {
    // export any references you need for tests here
    module.exports = init;
}
