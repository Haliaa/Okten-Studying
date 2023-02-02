 // let titles = document.head.getElementsByTagName('title');
// console.log(document.head.children);
// console.log(document.body.getElementsByClassName('product'));
// let products = document.getElementsByClassName('product');
// // console.log(products);
//
//
// for (const productDiv of products) {
//     // console.log(productDiv);
//     // productDiv.classList.add('x');
//     // productDiv.classList.add('y');
//     // productDiv.classList.remove('x');
//     // console.log(productDiv.classList.contains('y'));
//
//     productDiv.style.background = 'gray';
//
//
// }
//
// let h1OfBlock1 = products[0].children[0];
// console.log(h1OfBlock1);
// // h1OfBlock1.innerText = '<i>hello</i>';
// h1OfBlock1.innerHTML = '<i>hello</i>';
// node / element
// console.log(document.body.children); // html elements
// console.log(document.body.childNodes); // node - hE text comment
//     id,
// let byId = document.getElementById('xxx'); // html element 1<---
// console.log(byId);


// querySelector

// let queryList = document.querySelector('body > .wrap > .product');

// let queryList = document.querySelectorAll('body > .wrap > .product'); // NODE
// console.log(queryList);

// let xxxList = document.querySelectorAll('#xxx');
// console.log(xxxList);


const parentElement = document.getElementById("parent");

const box = document.createElement("div");
box.classList.add("box");

// div1.setAttribute("src", "images/net.svg")
// div1.src = "images/net.svg"

const div1 = document.createElement("div");
const netActive = document.createElement("div");
const sideArrowInCircle = document.createElement("img");
const active = document.createElement("div");
const net = document.createElement("div");
const net1 = document.createElement('div');
const net2 = document.createElement('div');
const net3 = document.createElement('div');
    div1.classList.add("div1");
    netActive.classList.add("netActive");
    sideArrowInCircle.classList.add("sideArrowInCircle")
    active.classList.add("active");  
    net.classList.add("net");  
    sideArrowInCircle.classList.add("sideArrowInCircle");
    sideArrowInCircle.setAttribute("src", "./images/arrow3.svg")
    net1.classList.add("net1");
    net2.classList.add("net2");
    net3.classList.add("net3");
    active.innerText = 'Active'
    net.append(net1, net2, net3);
netActive.append(net, active);
div1.append(netActive, sideArrowInCircle)

const div2 = document.createElement("div");
const div21 = document.createElement("div");
const div22 = document.createElement("div");
const div23 = document.createElement("div");
const countryFlag = document.createElement("img");
const countryName = document.createElement("div");
const hr = document.createElement('hr');
    div2.classList.add("div2");
    div21.classList.add("div21");
    div22.classList.add("div22");
    div23.classList.add("div23");
    countryFlag.classList.add("countryFlag");
    countryName.classList.add("countryName");
    countryName.innerText = 'Canada'
    hr.setAttribute("color", '#2997d6')
    countryFlag.setAttribute("src", "./images/canada.svg")
div21.append(countryFlag, countryName)
div2.append(hr, div21, div22, div23);

const div3 = document.createElement("div");
    div3.classList.add("div3");

box.appendChild(div1);
box.appendChild(div2);
box.appendChild(div3);
parentElement.appendChild(box);