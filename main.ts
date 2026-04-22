blocks.onBlockPlaced(GRASS, function () {
	
})
mobs.onMobKilled(CHICKEN, function () {
	
})
blocks.onBlockBroken(IRON_SHOVEL, function () {
	
})
player.onTravelled(WALK, function () {
	
})
mobs.onMobKilled(mobs.monster(ZOMBIE), function () {
    mobs.kill(
    mobs.target(ALL_ENTITIES)
    )
})
