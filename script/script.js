// band color section
const ringButtons = document.querySelectorAll('.ring-button');
for (let i = 0; i < ringButtons.length; i++){
    const ringBtn = ringButtons[i];
    
    ringBtn.addEventListener("click", function(event){
        //click bottons and change 
        const color = event.target.id.replace("-color", "")

        for(let j = 0; j< ringButtons.length; j++){
            ringButtons[j].classList.remove('border-purple-600');
            ringButtons[j].classList.add('border-gray-300');
        }

        event.target.classList.add("border-purple-600")
        event.target.classList.remove("border-gray-300")

        const productImage = document.getElementById("product-image");
        // productImage.src = '../images/teal.png';
        productImage.src = "../images/" + color + ".png"
    })
}

// wrist size section
function selectWristSize(size) {
    const sizes = ["S", "M", "L", "XL"];
    for (let i = 0; i < sizes.length; i++) {
      const button = document.getElementById("size-" + sizes[i]);
      const elemnt = sizes[i];
      if (size === elemnt) {
        button.classList.add("border-purple-600");
      } else {
        button.classList.remove("border-purple-600");
      }
    }
  }

// button section
const quantityElemnt = document.querySelectorAll(".quantity-button");
for (btn of quantityElemnt){
    btn.addEventListener('click', function(event){
        // tarnary oparetor
        const amount = event.target.innerText === "+" ? 1 : -1;
        // select quarent quantity and convert string to number
        const quarentQuantity = document.getElementById("quantity");
        const currentquantity = parseInt(quarentQuantity.innerText);
        // quantity sum and sub
        const newQuantity = Math.max(0, currentquantity + amount);
        console.log(newQuantity)
       // quantity number chance 
        quarentQuantity.innerText = newQuantity;
    })
}

//add to card 
let cartCount = 0 ;
document.getElementById("add-to-cart").addEventListener
('click', function(){
  const quantity = parseInt(document.getElementById('quantity').innerText);
  
  
  if(quantity > 0){
    document.getElementById("checkout-container").classList.remove('hidden');
    cartCount = cartCount + quantity;
    document.getElementById('cart-count').innerText = cartCount;
  }
  else{
    alert('Please select a quantiity')
  }
})




