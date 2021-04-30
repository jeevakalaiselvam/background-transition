//Array of images needed in application
const images = [
    "https://images.unsplash.com/photo-1619630110059-13c4617ca2be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80",
    "https://images.unsplash.com/photo-1586155638764-bf045442f5f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
    "https://images.unsplash.com/photo-1470081989310-425cc509b8f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
    "https://images.unsplash.com/photo-1470955233021-2c79a52e5034?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
    "https://images.unsplash.com/photo-1619408507579-368cba59746f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2252&q=80",
    "https://images.unsplash.com/photo-1619017974681-9c7e0a0ddc5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
];

//This represents index of current image shown on screen
let currentImageIndex = 0;

//Declaring DOM references for use later
const container = document.getElementById("container");
const left = document.getElementById("left");
const right = document.getElementById("right");

//Setting a random image as first
currentImageIndex = Math.floor(Math.random() * images.length);
setupImage(getImageURL(currentImageIndex));

function setupImage(image) {
    container.style.backgroundImage = `url(${image})`;
}

//Move a image index back when use clicks left arrow
left.addEventListener("click", () => {
    setupImage(getImageURL(currentImageIndex - 1));
    console.log(currentImageIndex - 1);
});

//Move a image index back when use clicks left arrow
right.addEventListener("click", () => {
    currentImageIndex++;
    setupImage(getImageURL(currentImageIndex + 1));
});

/**
 * This function will return a image URL for index position passed as argument
 * @author Jeeva Kalaiselvam
 * @param {Number} position - This number represents the position of image in index
 * @returns
 */
function getImageURL(position) {
    console.log(position);
    //Check if position is valid, Otherwise loop around the array boundary
    if (position < 0) {
        currentImageIndex = images.length - 1;
        return images[images.length - 1];
    } else if (position > images.length - 1) {
        currentImageIndex = 0;
        return images[0];
    } else {
        currentImageIndex = position;
        return images[position];
    }
}
