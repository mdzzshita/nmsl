var btnList=document.querySelectorAll('.btn-group .btn');
var totalQty=document.getElementsByName('totalQty')[0];

// for (const key in btnList) {
//     if (btnList.hasOwnProperty(key)) {
//         const element = btnList[key];
//         switch(element.name){
//             case 'increase':element.addEventListener('click',increaseValue);break;
//             case 'decrease':element.addEventListener('click',decreaseValue);break;
//             case 'addToCart':element.addEventListener('click',addToCart);break;
//         }        
//     }
// }



function increaseValue(e){
      var qtyObj=  e.target.nextElementSibling;
      var qty=parseInt(qtyObj.innerText);
      qty++;
      qtyObj.innerText=qty;
      console.log(qty);        
}
function decreaseValue(e){
    var qtyObj=  e.target.previousElementSibling;
    var qty=parseInt(qtyObj.innerText);
   if(qty>1) qty--;
   else qty=0;
    qtyObj.innerText=qty;
    console.log(qty);        
}

function addToCart(e){
    var qtyObj=  e.target.previousElementSibling.previousElementSibling;
    var qty=parseInt(qtyObj.innerText);
    var total=parseInt(totalQty.innerText);
    total+=qty;
    totalQty.innerText=total;  
}



var ie=document.getElementsByName('increase');

var de=document.getElementsByName('decrease');

var at=document.getElementsByName('addToCart');




for(var i=0;i<ie.length;i++)
{
    ie[i].addEventListener('click', increaseValue);
    de[i].addEventListener('click', decreaseValue);
    at[i].addEventListener('click', addToCart);
}

// for(var i=0;i<de.length;i++)
// {
//     de[i].addEventListener('click', decreaseValue);
// }
// for(var i=0;i<at.length;i++)
// {
//     at[i].addEventListener('click', addToCart);
// }