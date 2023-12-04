function tekshir(){
    var radio2 = document.getElementById('radio2');
    console.log(radio2.checked);
    var h1modal = document.getElementById('h1modal');
    
    if(radio2.checked == true){
        h1modal.innerText = "To'g'ri";
        h1modal.style.color = "green";
    }
    else{
        h1modal.innerText = "Noto'g'ri";
        h1modal.style.color = "red";
    }
}