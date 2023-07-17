var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");



var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");



button1.onclick =() => {
    item1.classList.toggle('actives');
    item2.classList.remove('actives');
    item3.classList.remove('actives');
    item4.classList.remove('actives');

    button1.classList.toggle('click');
    button2.classList.remove('click');
    button3.classList.remove('click');
    button4.classList.remove('click');




}
button2.onclick = () =>
{
    item2.classList.toggle('actives');
    item1.classList.remove('actives');
    item3.classList.remove('actives');
    item4.classList.remove('actives');

    button2.classList.toggle('click');
    button1.classList.remove('click');
    button3.classList.remove('click');
    button4.classList.remove('click');




}
button3.onclick = () =>
{
    item3.classList.toggle('actives');
    item1.classList.remove('actives');
    item4.classList.remove('actives');
    item2.classList.remove('actives');

    button3.classList.toggle('click');
    button2.classList.remove('click');
    button1.classList.remove('click');
    button4.classList.remove('click');
 

    

}
button4.onclick = () =>
{
    item4.classList.toggle('actives');
    item1.classList.remove('actives');
    item3.classList.remove('actives');
    item2.classList.remove('actives');

    button4.classList.toggle('click');
    button2.classList.remove('click');
    button3.classList.remove('click');
    button1.classList.remove('click');


  

}


