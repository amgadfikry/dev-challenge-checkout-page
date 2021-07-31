const increase = document.querySelectorAll(".max"),
        decrease = document.querySelectorAll(".min"),
        number = document.querySelectorAll(".num"),
        net = document.querySelector(".net"),
        price = document.querySelectorAll(".info p");
        
function checkNet (n){
    let totalArr = [];
        for(i=0; i< price.length; i++){
            totalArr.push(parseInt(number[i].innerHTML)*parseFloat(price[i].getAttribute("data-price")) );
        }
        let total = totalArr.reduce((acc,items) =>{
            return (acc+items+15).toFixed(2)
        })
        net.innerHTML = `$${total-n}`
}

increase.forEach((el,index)=>{
    el.addEventListener("click", function(){
        number[index].innerHTML  = parseInt(number[index].innerHTML) + 1;
        checkNet(0);
    })
});
decrease.forEach((el,index)=>{
    el.addEventListener("click", function(){
        if(parseInt(number[index].innerHTML) > 0 ){
            number[index].innerHTML= parseInt(number[index].innerHTML) - 1;
            checkNet(0);
        }
        else{
            number[index].innerHTML=0;
        }
        if(net.innerHTML === "$15"){
            net.innerHTML = "$0"
        }
    })
})
