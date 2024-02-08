// we are requesting data from github api 
const xhr=new XMLHttpRequest();
const githubApi='https://api.github.com/users/hiteshchoudhary';
xhr.open('GET',githubApi);  //used to request data from api 
// console.log(xhr.readyState);
xhr.onreadystatechange=function(){
    if(xhr.readyState===4){
        //const res=xhr.responseText;  //this is in string format and hence must be converted to object inorder to fetch data from the responceText
        const res=JSON.parse(xhr.responseText);  //converted to json object
        console.log(res.followers)
    }
    // console.log(xhr.readyState);
}
xhr.send();