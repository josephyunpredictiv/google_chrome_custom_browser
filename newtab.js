document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("resizableImage"); // Get the image by ID
  
    // Define the desired width and height to make the image larger
    const desiredWidth = window.innerWidth * 2; // Twice the screen width
    const desiredHeight = window.innerHeight * 2; // Twice the screen height
  
    // Resize the image
    image.style.width = `${desiredWidth}px`;
    image.style.height = `${desiredHeight}px`;
  });

  function changeBackgroundColor() {
    var rectangle = document.querySelector('.filter-rectangle');
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    // var opacity = Math.random().toFixed(2);
    var opacity = Math.floor(Math.random() * 2);
    rectangle.style.backgroundColor = `rgb(${red}, ${green}, ${blue}, ${opacity})`;
  }
  
  setInterval(changeBackgroundColor, 1000); // Change color every 1 second