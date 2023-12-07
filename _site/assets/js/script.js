var can = document.getElementById('canvas');
var ctx = can.getContext('2d');
var img = new Image();
var textfield = document.getElementById("textfield");
img.src = "assets/images/Germany.svg";

function updateText() {
        let text = textfield.value;
        // ctx.font="45px Goldman Sans Condensed Regular" 
        ctx.font="45px Goldman Sans Condensed, Noto Sans, sans-serif" 
        ctx.clearRect(0, 0, can.width, can.height);
        ctx.drawImage(img, 0, 0, 512, 256);
        let lineheight = 45
        var lines = text.split('\n');
        for (var i = 0; i < lines.length; i++) {
                ctx.fillText(lines[i], 160, 55 + (i * lineheight))
        }
}

window.setInterval(updateText, 1)
