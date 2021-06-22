//adding and removing items
var plus=document.getElementsByClassName("plus-btn")
var minus=document.getElementsByClassName("minus-btn")
var del=document.getElementsByClassName("delete-btn")
var quantities=document.getElementsByClassName("qtt")
var faves=document.getElementsByClassName("like-btn")


function sum(){
var unitprice=document.getElementsByClassName("price")
var totalprice=document.getElementsByClassName("total")

    let s=0;
    for(var i=0;i<unitprice.length;i++){
        s=s+Number(unitprice.item(i).getAttribute('data-value'))*Number(quantities.item(i).value);
        }
    totalprice[1].innerHTML=s;
}


//innerHTML doesn't work for quantities because the type is input
//scope of event.target WTF!!!!!!!!!!!!!!!!!!! 3lech

for(var i=0;i<plus.length;i++){

    quantities[i].addEventListener('change', (event) => {
        if(Number(event.target.value)>0) 
        sum()
        else {
            alert("please type a valid number! :)"); 
            event.target.value=0;
            sum()
        }
    })

    plus[i].addEventListener("click",function(){
        // console.log(this.previousElementSibling.value)
        this.previousElementSibling.value=Number(this.previousElementSibling.value)+1;
        sum()
})
    minus[i].addEventListener("click",function(){
        //console.log(this.previousElementSibling)
        if(Number(this.nextElementSibling.value)>0)  
            this.nextElementSibling.value=Number(this.nextElementSibling.value)-1;
        sum()
})
    del[i].addEventListener("click",function(){
        console.log(del);
      (this.parentElement).parentElement.remove();
      sum()
    })

    faves[i].addEventListener('click', (event) => {
        if (event.target.style.backgroundPosition) {
            event.target.style.backgroundPosition = null
        } else {
            event.target.style.backgroundPosition = 'right'
        }
    });
}

//mozilla isn't behaving like chrome WHY??
/*Initializing cart
function init() {
    quantities.value=0
}

window.onload= function() {
    init();

  };

*/