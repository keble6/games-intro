let ball = game.createSprite(2, 2)
ball.turn(Direction.Right, 45)
basic.forever(function () {
    ball.move(1)
    ball.ifOnEdgeBounce()
    basic.pause(100)
})
