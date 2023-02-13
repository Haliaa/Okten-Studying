const parentElement = document.getElementById("parent");
const box = document.createElement("div");
box.classList.add("box");

//DIV 1
const div1 = document.createElement("div");
const arrowButton = document.createElement("button");
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
arrowButton.classList.add("arrowButton");
sideArrowInCircle.setAttribute("src", "./images/arrow3.svg")
net1.classList.add("net1");
net2.classList.add("net2");
net3.classList.add("net3");
active.innerText = 'Active'
net.append(net1, net2, net3);
netActive.append(net, active);
arrowButton.appendChild(sideArrowInCircle)
div1.append(netActive, arrowButton)


//DIV 2
const div2 = document.createElement("div");
const div21 = document.createElement("div");
const div211 = document.createElement("div");
const div22 = document.createElement("div");
const div23 = document.createElement("div");
const countryFlag = document.createElement("img");
const qr = document.createElement("img");
const circleArrows = document.createElement("img");
const tel = document.createElement("img");
const countryName = document.createElement("div");
const autoRefillText = document.createElement("div");
const timeCall = document.createElement("div");
const qrButton = document.createElement("button");
const autoRefillButton = document.createElement("button");
const callButton = document.createElement("button");
const hrDivider = document.createElement('hr');
div2.classList.add("div2");
div21.classList.add("div21");
div211.classList.add("div211");
div22.classList.add("div22");
div23.classList.add("div23");
countryFlag.classList.add("countryFlag");
countryName.classList.add("countryName");
autoRefillText.classList.add("autoRefillText");
qrButton.classList.add("arrowButton");
circleArrows.classList.add("circleArrows");
tel.classList.add("tel");
hrDivider.classList.add("hrDivider");
timeCall.classList.add("timeCall");
autoRefillButton.classList.add("autoRefillButton");
callButton.classList.add("callButton");
callButton.classList.add("autoRefillButton");
qr.classList.add("qr");
div22.innerText = '5GB/ 7 Days Plan'
timeCall.innerText = '120 min'
autoRefillText.innerText = 'Auto refill'
countryName.innerText = 'Canada'
countryFlag.setAttribute("src", "./images/canada.svg")
circleArrows.setAttribute("src", "./images/circleArrows.svg")
tel.setAttribute("src", "./images/tel.svg")
qr.setAttribute("src", "./images/qrWhite.svg")
// hrDivider.setAttribute("color", 'red')
qrButton.appendChild(qr)
// autoRefillButton.append(<svg viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.0001 10.9999C21.0001 6.58166 17.4184 2.99994 13.0001 2.99994M14 7.12593C15.4057 7.48768 16.5123 8.59432 16.8741 10M16.062 14.2507V14.2507C16.6052 13.5264 17.5886 13.2943 18.3983 13.6992L19.6337 14.3168C20.4404 14.7202 20.8773 15.6135 20.7004 16.4979L20.3216 18.3922C20.1346 19.3271 19.3109 20.0146 18.3636 19.9075C11.1005 19.0859 4.91414 12.8995 4.09253 5.63644C3.98537 4.68912 4.67292 3.86542 5.60777 3.67845L7.50207 3.29959C8.38646 3.12271 9.27982 3.55963 9.68316 4.36632L10.3008 5.60168C10.7057 6.41142 10.4736 7.39483 9.7493 7.93802V7.93802C9.27761 8.2918 8.99002 8.86004 9.21796 9.40381C10.0014 11.2728 12.7272 13.9986 14.5962 14.782C15.14 15.01 15.7082 14.7224 16.062 14.2507Z" stroke="#000000" stroke-width="1.008" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>)
autoRefillButton.append(circleArrows, autoRefillText)
callButton.append(tel, timeCall)

div211.append(countryFlag, countryName)
div21.append(div211, qrButton)
div23.append(autoRefillButton, callButton)
div2.append(hrDivider, div21, div22, div23);


//DIV 2
const div3 = document.createElement("div");
const gb1 = document.createElement("div");
const gb2 = document.createElement("div");
const div31 = document.createElement("div");
const div33 = document.createElement("div");
const allGb = document.createElement("div");
const usedGb = document.createElement("div");
const allGbNumber = document.createElement("div");
const usedGbNumber = document.createElement("div");
const dataStart = document.createElement("div");
const dataFinish = document.createElement("div");


const divContainer = document.createElement("div");
const progress = document.createElement('div');
const progressBar = document.createElement('div');
const SpanSrOnly = document.createElement('span');
div3.classList.add("div3");
div31.classList.add("div31");
div31.classList.add("width100Per");

    
div33.classList.add("div33");
allGbNumber.classList.add("boldWhiteFont");
usedGbNumber.classList.add("boldWhiteFont");
dataStart.classList.add("div22");
dataStart.classList.add("padding-top0");
dataFinish.classList.add("div22");
allGb.classList.add("flex");
usedGb.classList.add("flex");
gb1.classList.add("gb");
gb2.classList.add("gb");
gb1.innerText = 'GB'
gb2.innerText = 'GB'

divContainer.classList.add("container");
progress.classList.add("progress");
progressBar.classList.add("progress-bar");
SpanSrOnly.classList.add("sr-only");
SpanSrOnly.innerText = '70% Complete'
divContainer.setAttribute("style", "width: 240px")
progress.setAttribute("style", "border-radius:50px; background-color:#2493d0; height: 10px; margin-bottom:0")
progressBar.setAttribute("role", "progressbar")
progressBar.setAttribute("aria-valuenow", "70")
progressBar.setAttribute("aria-valuemin", "0")
progressBar.setAttribute("aria-valuemax", "100")
progressBar.setAttribute("style", "width:70%; border-radius:50px; background-color:white;")
dataStart.innerText = "25 August 2022";
dataFinish.innerText = "1 September 2022";

usedGbNumber.classList.add("countryName")
allGbNumber.classList.add("countryName")
usedGbNumber.innerText = "2.67"
allGbNumber.innerText = "5"

allGb.append(allGbNumber, gb1)
usedGb.append(usedGbNumber, gb2)

div31.append(usedGb, allGb)
div33.append(dataStart, dataFinish)
progressBar.appendChild(SpanSrOnly)
progress.appendChild(progressBar)
divContainer.appendChild(progress)
div3.append(div31, divContainer, div33)
box.append(div1, div2, div3);



parentElement.appendChild(box);