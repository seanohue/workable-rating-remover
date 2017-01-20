var thumbsUps = document.getElementsByClassName("icon-thumb-up");
var thumbsDowns = document.getElementsByClassName("icon-thumb-down");
var widgets = document.getElementsByClassName("rating-widget__item");
var toHide = [thumbsUps, thumbsDowns, widgets];

for (var i in toHide) {
    var currentList = toHide[i];

    for (var j in currentList) {
        try {
            currentList[j].style.display = 'none';
        } catch (e) {
            console.log(currentList[j]);
            if (!currentList[j].style) {
                currentList[j].style = { display: 'none' };
            } else {
                console.log(e);
            }
        }
    }
}

