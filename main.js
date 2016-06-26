
var game = new Phaser.Game(840, 560);

function preload() {

    game.load.tilemap('matching', 'assets/maze..json', null, Phaser.Tilemap.TILED_JSON);
	game.load.image('tiles', 'assets/maze.png');

    game.load.spritesheet('chick', 'assets/mageSprite.png', 20, 23);
}

var speed = 3;
var groove = 0;
var player;

function create() {

    map = game.add.tilemap('matching');

    tileset = game.add.tileset('tiles');
    
    layer = game.add.tilemapLayer(0, 0, 840, 560, tileset, map, 0);

	
	player.anchor.setTo(0.5, 0.5);
	player.body.immovable = true;


    cursors = game.input.keyboard.createCursorKeys();
}



function update() {

	movePlayer(player);

  //  Run collision
  //game.physics.collide(player, candies, hitCandy, null, this);
  //game.physics.collide(player, baddies, hitBaddie, null, this);
	
		
	
}

function getPower (player, candy) {
}

function hitBaddie (player, cat) {
}

function moveBaddie(cat) {
}

function movePlayer(chick) {

	var p;
	var q;
	var tileAbove;
	var tileLeft;
	var currentTile;

  //console.log("bodyX = "+chick.body.x);
  //console.log("X = "+chick.x);
  //console.log("bodyY = "+chick.body.y);
  //console.log("Y = "+chick.y);

  
  //chick.body.x = chick.x;
  //chick.body.y = chick.y;
	//chick.x = storedX;
	//chick.y = storedY;

	p = layer.getTileX(chick.x);
	q = layer.getTileY(chick.y);

	tileAbove = map.getTile(p,q-1);
	//tileBelow = map.getTile(p,q+1);
	tileLeft = map.getTile(p-1,q);
	//tileRight = map.getTile(p+1,q);

	currentTile = map.getTile(p,q);
		

   	if (cursors.up.isDown)
   	{
	}

    if (cursors.down.isDown)
    {
    }

    if (cursors.left.isDown)
    {
    }
    if (cursors.right.isDown)
    {
    } 


}

function maze(x,y) {
	var p = x;
	var q = y;
	var north = map.getTile(p,q-1).index == 8;
	
	var walk = game.rnd.integerInRange(1,4);
	//check that there is a direction to move to
	if(map.getTile(p,q-1).index == 8 ||	map.getTile(p,q+1).index == 8 || map.getTile(p+1,q).index == 8 || map.getTile(p-1,q).index == 8){
		//TODO: generate the tile and recursively call depending on which direction we walk.
	}
	//TODO else if no direction we can walk then return.
}
 
function display(m) {
	
	// debug stuff ------
	myString1 = m.x.toString();
	myString2 = m.y.toString();

	myString3 = m.horiz.length.toString();
	myString4 = m.verti.length.toString();

	console.log("horiz:");
	for (i=0; i<m.horiz.length; i++)
		{console.log(m.horiz[i])}

	console.log("verti:");
	for (i=0; i<m.verti.length; i++)
		{console.log(m.verti[i])}
	// -------------------


}

function render() {

	game.debug.renderText('# cellsX: ' + myString1, 630, 48, 'rgb(255,0,0)');
	game.debug.renderText('# cellsY: ' + myString2, 630, 80, 'rgb(255,0,0)');

	game.debug.renderText('Change dimensions', 620, 212, 'rgb(0,255,0)');
	game.debug.renderText('at line 22:', 620, 226, 'rgb(0,255,0)');
	game.debug.renderText('display(maze(X,Y))', 620, 240, 'rgb(0,255,0)');

	game.debug.renderText('(reload for new maze)', 220, 14, 'rgb(255,255,255)');

	// game.debug.renderText('currentTile: ' + currentTile, 620, 300, 'rgb(255,0,0)');
	// game.debug.renderText('tileAbove: ' + tileAbove, 620, 332, 'rgb(255,0,0)');
	// game.debug.renderText('tileBelow: ' + tileBelow, 620, 364, 'rgb(255,0,0)');	
	// game.debug.renderText('tileLeft: ' + tileLeft, 620, 396, 'rgb(255,0,0)');	
	// game.debug.renderText('tileRight: ' + tileRight, 620, 428, 'rgb(255,0,0)');	

	game.debug.renderText('(sX-14) % 27: ' + (storedX-14) % 27, 620, 460, 'rgb(255,0,0)');	
	game.debug.renderText('(sY-14) % 27: ' + (storedY-14) % 27, 620, 492, 'rgb(255,0,0)');

}
