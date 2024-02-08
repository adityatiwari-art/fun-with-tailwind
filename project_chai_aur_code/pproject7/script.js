function card(avatar,fc,un){
    // let HTMLins=''
    document.querySelector(".card").style.display="flex";
    document.querySelector("#DP").setAttribute("style",`background-image:url(${avatar})`) ;
    document.querySelector("#username").innerHTML=un;
    document.querySelector("#fc").innerHTML=fc;
}
const reqData=function(){
    const xhr=new XMLHttpRequest();
    const source='https://api.github.com/users/hiteshchoudhary';
    xhr.open('GET',source);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4){
            const res=JSON.parse(xhr.responseText);
            const DP=res.avatar_url;
            // console.log(DP)
            const followerCount=res.followers;
            // console.log(followerCount)
            const un=res.login;
            // console.log(un)
            card(DP,followerCount,un);
        }
    }
    xhr.send();
}
document.getElementById("getProfile").addEventListener('click',reqData);