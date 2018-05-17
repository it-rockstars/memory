const {TextView, ImageView, ui} = require('tabris');

// Display images with different scale modes

new TextView({
  left: 10, top: 10, right: 10,
  text: 'IT-Rockstars Music Memory',
  alignment: 'center'
}).appendTo(ui.contentView);



createImageView('fit', 120);
createImageView('fit', 230);
createImageView('fit', 340);
createImageView('fit', 450);


function createImageView(scaleMode, top) {
    new ImageView({
        left: 10, top: top, width: 100, height: 100,
        image: 'resources/target_200.png',
        background: '#aaaaaa',
        scaleMode: scaleMode
    }).appendTo(ui.contentView);
    new ImageView({
        left: 120, top: top, width: 100, height: 100,
        image: 'resources/target_200.png',
        background: '#aaaaaa',
        scaleMode: scaleMode
    }).appendTo(ui.contentView);
    new ImageView({
        left: 240, top: top, width: 100, height: 100,
        image: 'resources/target_200.png',
        background: '#aaaaaa',
        scaleMode: scaleMode
    }).appendTo(ui.contentView);
}