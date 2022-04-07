namespace SpriteKind {
    export const GUI = SpriteKind.create()
    export const fire = SpriteKind.create()
    export const ice = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    wackman,
    player_animations[3],
    350,
    false
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    wackman.sayText("failed 2")
    if (inventory[0] == assets.image`myImage1`) {
        speed += 15
        inventory.removeAt(0)
        wackman.sayText("successful")
    } else if (inventory[0] == assets.image`myImage0`) {
        wackman.startEffect(effects.fire, 1000)
        wackman.startEffect(effects.warmRadial, 2000)
        for (let index = 0; index < 10; index++) {
            fire = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, wackman, randint(-30, 30), randint(-30, 30))
            fire.setKind(SpriteKind.fire)
        }
        inventory.removeAt(0)
    } else if (inventory[0] == assets.image`myImage4`) {
        info.changeLifeBy(1)
    } else if (inventory[0] == assets.image`myImage3`) {
        wackman.startEffect(effects.fountain, 1000)
        wackman.startEffect(effects.coolRadial, 2000)
        for (let index = 0; index < 10; index++) {
            ice = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 6 6 6 6 . . . . . . 
                . . . . 6 6 6 5 5 6 6 6 . . . . 
                . . . 7 7 7 7 6 6 6 6 6 6 . . . 
                . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
                . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
                . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
                . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
                . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
                . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
                . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
                . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
                . . . 6 8 8 8 8 8 8 8 8 6 . . . 
                . . . . 6 6 8 8 8 8 6 6 . . . . 
                . . . . . . 6 6 6 6 . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, wackman, randint(-10, 10), randint(-10, 10))
            ice.setKind(SpriteKind.ice)
        }
        inventory.removeAt(0)
    } else {
        wackman.setImage(inventory[0])
        inventory.removeAt(0)
    }
    if (inventory == []) {
        item1.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        item2.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
        item1.setImage(inventory[0])
        item2.setImage(inventory[1])
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    wackman,
    player_animations[1],
    350,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.floorLight0)
    inventory.push(possible_items._pickRandom())
    item1.setImage(inventory[0])
    item2.setImage(inventory[1])
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    wackman,
    player_animations[2],
    350,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    wackman,
    player_animations[0],
    350,
    false
    )
})
function new_room () {
    tiles.setCurrentTilemap(areas._pickRandom())
    tiles.placeOnRandomTile(wackman, sprites.dungeon.collectibleInsignia)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    level += 1
    new_room()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight4, function (sprite, location) {
    if (Math.percentChance(30)) {
        inventory.shift()
    } else if (Math.percentChance(10)) {
        info.changeLifeBy(-1)
    } else {
        speed += -10
    }
    tiles.setTileAt(location, sprites.dungeon.floorLight3)
})
let level = 0
let ice: Sprite = null
let fire: Sprite = null
let possible_items: Image[] = []
let item2: Sprite = null
let item1: Sprite = null
let wackman: Sprite = null
let inventory: Image[] = []
let player_animations: Image[][] = []
let areas: tiles.TileMapData[] = []
areas = [
tilemap`room1`,
tilemap`level3`,
tilemap`die1`,
tilemap`level4`,
tilemap`level7`
]
player_animations = [
assets.animation`wacky boy forward`,
assets.animation`wacky boy left`,
assets.animation`wacky boy right`,
assets.animation`wacky boy back`,
assets.animation`the wacky thing`,
assets.animation`wacky boy DEAD`
]
inventory = [assets.image`myImage1`]
wackman = sprites.create(assets.image`wacky boy item`, SpriteKind.Player)
let speed = 50
controller.moveSprite(wackman, speed, speed)
scene.cameraFollowSprite(wackman)
info.setLife(3)
new_room()
let inv1 = sprites.create(assets.image`inv1`, SpriteKind.GUI)
let inv2 = sprites.create(assets.image`inv0`, SpriteKind.GUI)
inv1.setFlag(SpriteFlag.RelativeToCamera, true)
inv2.setFlag(SpriteFlag.RelativeToCamera, true)
inv1.setPosition(5, 15)
inv2.setPosition(16, 15)
item1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.GUI)
item2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.GUI)
item1.setPosition(7, 17)
item1.setFlag(SpriteFlag.RelativeToCamera, true)
item2.setPosition(18, 17)
item2.setFlag(SpriteFlag.RelativeToCamera, true)
possible_items = [
assets.image`myImage3`,
assets.image`myImage2`,
assets.image`shield`,
assets.image`myImage0`,
assets.image`myImage4`
]
item1.setImage(inventory[0])
item2.setImage(inventory[1])
