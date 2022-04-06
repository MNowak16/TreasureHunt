$("area#t-rex").on("click", function() {
    foundTRex();
    $(lTRex).css("text-decoration", "line-through");
});
$("area#pterodactyl").on("click", function() {
    foundPterodactyl();
    $(lPtero).css("text-decoration", "line-through");
});
$("area#brachiosaurus").on("click", function() {
    foundBrachiosaurus();
    $(lBrachio).css("text-decoration", "line-through");
});
$("area#small_stegosaurus").on("click", function() {
    foundSmallStegosaurus();
    $(lSmStego).css("text-decoration", "line-through");
});
$("area#large_stegosaurus").on("click", function() {
    foundLargeStegosaurus();
    $(lLgStego).css("text-decoration", "line-through");
});
$("area#seahorse").on("click", function() {
    foundSeahorse();
    $(lSeahorse).css("text-decoration", "line-through");
});
$("area#infinity").on("click", function() {
    foundInfinity();
    $(lInfinity).css("text-decoration", "line-through");
});

function foundTRex() {
    fountIt("T-Rex");
}
function foundPterodactyl() {
    fountIt("Pterodactyl");
}
function foundBrachiosaurus() {
    fountIt("Brachiosaurus")
}
function foundSmallStegosaurus() {
    fountIt("Small Stegosaurus")
}
function foundLargeStegosaurus() {
    fountIt("Large Stegosaurus")
}
function foundSeahorse() {
    fountIt("Seahorse")
}
function foundInfinity() {
    fountIt("Infinity")
}

function fountIt(description) {
    $("p#foundItem").append(`You found the ${description}!<br>`);
}