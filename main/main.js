
const urls = [
    '../Assets/images/main/bidonztlem21.webp',
    '../Assets/images/aktualnosci-produkt-noze.webp',
    '../Assets/images/footer-img.webp',
]
let currIndex = 0
function loadWallpaper(index) {
    document.getElementById('header').style.backgroundImage = `url(${urls[index]})`
}
loadWallpaper(0)
function changeWallpaper(offset){
    if(urls[currIndex + offset])
        loadWallpaper(currIndex + offset);
    else if(currIndex + offset < 0)
        loadWallpaper(urls.length - 1);
    else
        loadWallpaper(0);
}