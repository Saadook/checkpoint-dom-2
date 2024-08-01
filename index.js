document.addEventListener('DOMContentLoaded',function()){
    console.log('dom loaded and parsed');
    var ChangeColorBtn=document.getElementById('change-color-btn')
    var ColorBox=document.getElementById('color-box')
function getRandomColor(){
    var letters = '0123456789ABCDEF'
    let color ='#'
    for (let i = 0; i < 6; i++) {
        color+= letters[Math.floor(Math.random()*16)]
        
    }
    return color
}


    ChangeColorBtn.addEventListener('click',function()){

    }
}