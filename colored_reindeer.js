var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];

var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

coloredReindeer =[];

for (var i = 0; i < reindeer.length; i++) {
coloredReindeer.push(colors[i] + ' ' + reindeer[i]);
console.log(coloredReindeer[i]);
document.getElementById("reindeer").innerText=coloredReindeer[i];
}
//console.log(coloredReindeer);

/*  for (var i = 0; i < colors.length; i++) {
    for (var j = 0; j < reindeer.length; j++) {
    if (colors[i] === reindeer[j]) {
        coloredReindeer.push(colors[i] + reindeer[j]);
    }
    }
    console.log(coloredReindeer);
    }

*/