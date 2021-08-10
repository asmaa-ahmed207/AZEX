var allitem=document.querySelectorAll(".list li");
var con=document.querySelector('.content');
var btn=document.querySelector('.add');
var total=0;

allitem.forEach(function(item){
    item.onclick=function(){
        total+= parseInt(item.getAttribute('price')) ;
        con.innerHTML+=item.textContent;
        console.log(total)
        if(con.innerHTML !=""){
            btn.style.display="block";
        }
    }
})