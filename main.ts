let ball = game.createSprite(2, 2)
ball.turn(Direction.Right, 45)
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        ball.move(1)
        ball.ifOnEdgeBounce()
        basic.pause(200)
    }
    ball.turn(Direction.Right, randint(0, 270))
})
