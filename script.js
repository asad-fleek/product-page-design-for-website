let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");
const form = document.querySelector("form");
const quantityInput = document.querySelector(".quantity-select input");

form.addEventListener("submit", function (e) {
    e.preventDefault(); 

 
    const size = document.querySelector('input[name="size"]:checked');

 
    const color = document.querySelector('input[name="color"]:checked');

     const quantity = quantityInput.value;

     console.log("Selected Size:", size ? size.id : "Not selected");
    console.log("Selected Color:", color ? color.id : "Not selected");
    console.log("Quantity:", quantity);
});

btn[0].onclick = function(){
    productImg.src = "./images/image1.png";

for(bt of btn){
    bt.classList.remove("active");
}
this.classList.add("active");
};
btn[1].onclick = function(){
    productImg.src = "./images/image2.png";
    for(bt of btn){
    bt.classList.remove("active");
}
this.classList.add("active");
};
btn[2].onclick = function(){
    productImg.src = "./images/image3.png";
    for(bt of btn){
    bt.classList.remove("active");
}
this.classList.add("active");
};





