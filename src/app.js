const {TextView, ImageView, ui} = require('tabris');

// Display images with different scale modes

new TextView({
    left: 10, top: 10, right: 10,
    text: 'IT-Rockstars Music Memoryy',
    alignment: 'center'
}).appendTo(ui.contentView);


createImageView('fit', 120);
createImageView('fit', 230);
createImageView('fit', 340);
createImageView('fit', 450);

console.debug("huhu");

function flip(view) {
    console.debug("flipping");

    view.background = '#a8aa13';
}

function createImageView(scaleMode, top) {
    lastTile = new ImageView({
        left: 10, top: top, width: 100, height: 100,
        image: 'resources/target_200.png',
        background: '#aa402f',
        scaleMode: scaleMode
    }).on('tap', ({target: tile}) => flip(tile))
      .appendTo(ui.contentView);

    new ImageView({
        left: 120, top: top, width: 100, height: 100,
        image: 'resources/target_200.png',
        background: '#3222aa',
        scaleMode: scaleMode
    }).appendTo(ui.contentView);
    new ImageView({
        left: 240, top: top, width: 100, height: 100,
        image: 'resources/target_200.png',
        background: '#5aaa76',
        scaleMode: scaleMode
    }).appendTo(ui.contentView);
}