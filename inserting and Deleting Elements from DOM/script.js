// console.dir(html);
// document.querySelector(".container").tagName  //returns the tag name only html tags 
// document.querySelector(".container").nodeName  //returns the ndoe name it can be a comment node for a text node or a comment node answert is #text
// document.querySelector(".container").childNodes[0].data  // data or nodeValue
// // 'Comment\n  output    

// // return inner html as a string 
// document.querySelector(".container").innerHTML //returns only the html of decendants excluding itself 
// document.querySelector(".container").outerHTML  //returns innerHTML including itself 
// document.designMode="on" you can edit the page as per you basically the text 
// document.querySelector(".container").textContent
// 'Comment\n        box\n        box\n        box\n        box\n    '
document.querySelector(".container").children[1].hidden =true;
// document.querySelector(".container").textContent="jai siyaram"
document.querySelector(".container").attributes 

// attributes--
// getAttribute
// setAttribute
// attributes
// hasAttributes
// removeAttribute

// document.querySelector(".container").setAttribute("style","display:flex; flex-direction:column;")
// document.querySelector(".container").removeAttribute("data-myvalue")

// adding custom attribures using data-
// data-myvalue="34";

// document.querySelector(".container").dataset  //used to view all data attributes value 
// o/p===========DOMStringMap {createdby: 'adi', presentedby: 'TSeries', myvalue: '34'}

// inserting elements in DOM  
// createElement  
div=document.createElement(div);
div.setAttribute("style","border=2x solid black","height=100px","width=100px");
div=document.createElement("div");
document.querySelector(".container").append(div)
// prepand 
// before 
// after 
// replacewith(e)

// insertAdjacentHTML("afterBegin","html") 
// beforeend
// afterend
// afterbegin
// beforebegin

// insertAdjacentText to insert text==requires two arguments posiiton to insert and text 

// remove() to remove a node 

// classlist 
// classlist.add()
// classlist.remove()
// classlist.toggle()
// classlist.contains()
document.querySelector(".container").insertAdjacentText("hello");
