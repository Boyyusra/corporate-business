var button5 = document.getElementById('button5');
var button6 = document.getElementById('button6');

var item5 = document.getElementById('item5');
var item6 = document.getElementById('item6');


button5.onclick=()=>{

   item5.classList.toggle('actives');
   item6.classList.remove('actives');

   button5.classList.toggle('click');
   button6.classList.remove('click');
}
button6.onclick=()=>{

    item6.classList.toggle('actives');
    item5.classList.remove('actives');
 
    button6.classList.toggle('click');
    button5.classList.remove('click');
 }