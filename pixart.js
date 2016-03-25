var button = document.querySelector("button");
var brushBox = document.querySelector(".brush");
var colorBox = document.querySelector("#color-field");
var paintColor = "red";


var pixart = {
  setColor: function () {
    event.preventDefault();
    paintColor = colorBox.value;
    brushBox.style.background = paintColor;
  },

  paintSquare: function() {
    this.style.background = paintColor;
  },

  buildSquares: function() {
    for(var i = 0; i < 8000; i++) {
      var newDiv = document.createElement("div");
      document.body.appendChild(newDiv);
      newDiv.className = "square";
      newDiv.addEventListener("mouseover", this.paintSquare);
    }
  }
};

button.addEventListener( "click", pixart.setColor);
pixart.buildSquares();
