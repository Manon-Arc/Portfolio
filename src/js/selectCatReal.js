const All = ["IHM", "weatherapp", "danmashi", "appOsyris", "dashboard", "flipper", "escape", "endless", "domolabo", "coffre", "marcus", "robolympiades", "assistant", "mecanum", "bb8", "moduleESP", "bluetooth"]
const ProjSysEmb = ["domolabo", "coffre", "marcus", "robolympiades", "assistant", "mecanum", "bb8", "moduleESP", "bluetooth"]
const ProjDev = ["IHM", "weatherapp", "danmashi", "appOsyris", "dashboard", "flipper", "escape", "endless", "domolabo"]

function selectedCategory(divCliquee, ) {
    var elements = document.getElementsByClassName('txt-category-real');
    for (let j = 0; j < elements.length; j++) {
        if (elements[j].classList.contains('selected-category')) {
            elements[j].classList.remove('selected-category');
        }
    }
    divCliquee.classList.add('selected-category');

    for (let i = 0; i < )
}