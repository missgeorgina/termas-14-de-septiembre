let Z2 = 0
let X2 = 0
let Y = 0
player.onChat("5", function () {
    player.say("terma")
    blocks.fill(
    AIR,
    world(-6, -5, -11),
    world(6, 0, 7),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    world(-7, 2, -12),
    world(7, -5, 7),
    FillOperation.Replace
    )
    blocks.fill(
    POLISHED_DIORITE,
    world(-7, 2, -12),
    world(7, -5, 7),
    FillOperation.Outline
    )
    blocks.fill(
    AIR,
    world(-6, -3, -11),
    world(6, 5, 6),
    FillOperation.Replace
    )
})
player.onChat("1", function () {
    player.say("base")
    blocks.fill(
    BLOCK_OF_QUARTZ,
    world(-15, -1, -20),
    world(15, 2, 20),
    FillOperation.Replace
    )
    blocks.fill(
    BLOCK_OF_QUARTZ,
    world(-15, -1, 21),
    world(15, 0, 22),
    FillOperation.Replace
    )
    blocks.fill(
    BLOCK_OF_QUARTZ,
    world(-15, -1, -21),
    world(15, 0, -22),
    FillOperation.Replace
    )
    player.say("esc delanteras")
    shapes.line(
    blocks.blockWithData(QUARTZ_STAIRS, 3),
    world(-15, 2, 20),
    world(15, 2, 20)
    )
    shapes.line(
    blocks.blockWithData(QUARTZ_STAIRS, 3),
    world(-15, 1, 21),
    world(15, 1, 21)
    )
    shapes.line(
    blocks.blockWithData(QUARTZ_STAIRS, 3),
    world(-15, 0, 22),
    world(15, 0, 22)
    )
    player.say("esc traseras")
    shapes.line(
    blocks.blockWithData(QUARTZ_STAIRS, 2),
    world(-15, 2, -20),
    world(15, 2, -20)
    )
    shapes.line(
    blocks.blockWithData(QUARTZ_STAIRS, 2),
    world(-15, 0, -22),
    world(15, 0, -22)
    )
    shapes.line(
    blocks.blockWithData(QUARTZ_STAIRS, 2),
    world(-15, 1, -21),
    world(15, 1, -21)
    )
    player.say("EDIFICIO")
    blocks.fill(
    BLOCK_OF_QUARTZ,
    world(-10, 2, -15),
    world(10, 12, 15),
    FillOperation.Outline
    )
    player.say("techo")
    blocks.fill(
    BLOCK_OF_QUARTZ,
    world(-15, 13, -20),
    world(15, 13, 20),
    FillOperation.Replace
    )
    player.say("capiteles frontales y trasero")
    shapes.line(
    blocks.blockWithData(QUARTZ_STAIRS, 0),
    world(-15, 14, 20),
    world(15, 14, 20)
    )
    shapes.line(
    blocks.blockWithData(QUARTZ_STAIRS, 0),
    world(-15, 14, -20),
    world(15, 14, -20)
    )
    player.say("capiteles laterales")
    shapes.line(
    blocks.blockWithData(QUARTZ_STAIRS, 2),
    world(-15, 14, 20),
    world(-15, 14, -20)
    )
    shapes.line(
    blocks.blockWithData(QUARTZ_STAIRS, 2),
    world(15, 14, 20),
    world(15, 14, -20)
    )
    player.say("hueco entrda principal")
    shapes.circle(
    AIR,
    world(0, 4, 15),
    6,
    Axis.Z,
    ShapeOperation.Replace
    )
    blocks.fill(
    BLOCK_OF_QUARTZ,
    world(-5, 2, 15),
    world(-9, 12, 15),
    FillOperation.Replace
    )
    blocks.fill(
    BLOCK_OF_QUARTZ,
    world(5, 2, 15),
    world(9, 13, 15),
    FillOperation.Replace
    )
    player.say("hueco salida")
    shapes.circle(
    AIR,
    world(0, 4, -15),
    6,
    Axis.Z,
    ShapeOperation.Replace
    )
    blocks.fill(
    BLOCK_OF_QUARTZ,
    world(-5, 2, -15),
    world(-9, 12, -15),
    FillOperation.Replace
    )
    blocks.fill(
    BLOCK_OF_QUARTZ,
    world(5, 2, -15),
    world(9, 13, -15),
    FillOperation.Replace
    )
})
player.onChat("jump", function () {
	
})
player.onChat("2", function () {
    player.say("cupula")
    shapes.sphere(
    WHITE_STAINED_GLASS,
    world(0, 12, 0),
    8,
    ShapeOperation.Outline
    )
    shapes.circle(
    AIR,
    world(0, 12, 0),
    7,
    Axis.Y,
    ShapeOperation.Replace
    )
    shapes.circle(
    AIR,
    world(0, 13, 0),
    7,
    Axis.Y,
    ShapeOperation.Replace
    )
    player.say("borrar media esfera de abajo")
    blocks.fill(
    AIR,
    world(-8, 4, -10),
    world(8, 11, 10),
    FillOperation.Replace
    )
})
player.onChat("test", function () {
	
})
player.onChat("3", function () {
    player.say("entrada")
    blocks.fill(
    BLOCK_OF_QUARTZ,
    world(-9, 2, 9),
    world(9, 11, 9),
    FillOperation.Replace
    )
    shapes.circle(
    AIR,
    world(0, 4, 9),
    6,
    Axis.Z,
    ShapeOperation.Replace
    )
    player.say("acceso2 arco")
    blocks.fill(
    BLOCK_OF_QUARTZ,
    world(-9, 2, 14),
    world(9, 12, 10),
    FillOperation.Replace
    )
    Z2 = 14
    for (let index = 0; index < 6; index++) {
        shapes.circle(
        AIR,
        world(0, 4, Z2),
        6,
        Axis.Z,
        ShapeOperation.Replace
        )
        blocks.fill(
        BLOCK_OF_QUARTZ,
        world(-5, 2, Z2),
        world(-9, 12, Z2),
        FillOperation.Replace
        )
        blocks.fill(
        BLOCK_OF_QUARTZ,
        world(5, 2, Z2),
        world(9, 12, Z2),
        FillOperation.Replace
        )
        Z2 += -1
    }
    player.say("piso")
    blocks.fill(
    DIORITE,
    world(-9, 2, -15),
    world(9, 2, 15),
    FillOperation.Replace
    )
})
player.onChat("4", function () {
    player.say("columnas")
    player.say("frontales")
    X2 = -15
    for (let index = 0; index < 4; index++) {
        blocks.fill(
        BLOCK_OF_QUARTZ,
        world(X2, 2, 20),
        world(X2, 12, 20),
        FillOperation.Replace
        )
        X2 += 10
    }
    player.say("traseras")
    X2 = -15
    Z2 = -20
    for (let index = 0; index < 4; index++) {
        blocks.fill(
        BLOCK_OF_QUARTZ,
        world(X2, 2, Z2),
        world(X2, 12, Z2),
        FillOperation.Replace
        )
        X2 += 10
    }
    player.say("lateral derecha")
    X2 = -15
    Z2 = -20
    for (let index = 0; index < 4; index++) {
        blocks.fill(
        BLOCK_OF_QUARTZ,
        world(X2, 2, Z2),
        world(X2, 12, Z2),
        FillOperation.Replace
        )
        Z2 += 10
    }
    player.say("lateral derecha")
    X2 = 15
    Z2 = -20
    for (let index = 0; index < 4; index++) {
        blocks.fill(
        BLOCK_OF_QUARTZ,
        world(X2, 2, Z2),
        world(X2, 12, Z2),
        FillOperation.Replace
        )
        Z2 += 10
    }
})
player.onChat("6", function () {
    player.say("escaleras y agua")
    blocks.fill(
    WATER,
    world(-9, -4, -14),
    world(9, 1, 8),
    FillOperation.Replace
    )
    Y = 2
    Z2 = 6
    for (let index = 0; index < 2; index++) {
        shapes.line(
        blocks.blockWithData(QUARTZ_STAIRS, 2),
        world(-6, Y, Z2),
        world(6, Y, Z2)
        )
        Y += -1
        Z2 += -1
    }
})
