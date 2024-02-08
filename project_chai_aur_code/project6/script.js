window.addEventListener('keypress',(e)=>{
    if(e.key===" "){
        document.getElementById('key').innerHTML=`Space  ${e.keyCode}`;
        }
        else
    document.getElementById('key').innerHTML=`${e.key} ${e.keyCode} ${e.code}`;
    console.log(e);
})