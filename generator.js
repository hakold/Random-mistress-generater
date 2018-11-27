const PI = 3.14159;

function startGenerator() {
	showEx()
	var sexnum = Math.round(Math.random());
	switch(sexnum){
		case 0:
			//没xiong有dio
			generateManBody();
			generateAge();
			generateEyes();
			generateSkin();
			generateManHair();
			generateManAttribute();
			generateManCharacter();
			generateManDio();
			document.getElementById("sex").innerHTML = "男性";
			document.getElementById("cupsizeText").innerHTML = "dio长(cm?)";
			generateManDerail();generateManPhoto();
			break;
		case 1:
			//有xiong没dio
		    generateLadyBody();
			generateAge();
			generateSkin();
			generateEyes();
			generateLadyAttribute();
			generateLadyCharacter();
			generateLadyHair();
			generateCup();
			document.getElementById("cupsizeText").innerHTML = "CUP";
			document.getElementById("sex").innerHTML = "女性";
			generateLadyDerail();
			generateLadyPhoto()
			break;
	}
}

//男、女性肤色
function generateSkin() {
    randomData("skin",Skin_data);
}
//男、女性年龄
function generateAge() {
    var gH = Math.round(normalDistribution(23, 2));
    var text1 = document.getElementById("age");
    text1.innerHTML = gH;    
}

//男、女性瞳色
function generateEyes() {
    var text1 = document.getElementById("eyeColor");
    var newColor = randomRGB();
    text1.innerHTML = newColor;
    text1.style.backgroundColor = newColor;
}
//女性身材
function generateLadyBody() {
    var height = normalDistribution(160, 10)
    height = Math.round(height);
    var text1 = document.getElementById("height");
    text1.innerHTML=height;
    var bmi = normalDistribution(20, 1);
    var weight = Math.round(bmi*(height/100)*(height/100));
    var text2 = document.getElementById("weight");
    text2.innerHTML = weight;
}
//女性出轨原因
function generateLadyDerail() {
    randomData("derail",Lady_Derail_data);
}
//女性属性
function generateLadyAttribute() {
    randomData("attribute",Lady_Attribute_data);
}
//女性性格
function generateLadyCharacter() {  
    randomData("character",Lady_Character_data);
}
//女性发型
function generateLadyHair() {
    randomData("hairstyle",Lady_Hair_data);
    var newColor = randomRGB();
    var text2 = document.getElementById("hairColor");
    text2.innerHTML = newColor;
    text2.style.backgroundColor = newColor;
}
//女性cup
function generateCup() {
    randomData("cupsize",Cupsize_data);
}
//女性照片
function generateLadyPhoto() {
	var btn = document.getElementsByTagName("input")[0];
	var img = document.getElementsByTagName("img")[0];
	var imgnum = Math.round(Math.random()*10)
	srclink = "images/lady/" + String(imgnum) + ".jpg"
	img.src = srclink;
	btn.onclick = function () {
                if (btn.value == "显示"){
                    btn.value = "隐藏";
                    img.style.display = "block";
                }else {
                    btn.value = "显示";
                    img.style.display = "none";
                }
            }
}
function showEx(){
	var tr = document.getElementsByTagName("tr")[13];
	tr.style.display = "block";
}
//男性身材
function generateManBody() {
    var height = normalDistribution(170, 10)
    height = Math.round(height);
    var text1 = document.getElementById("height");
    text1.innerHTML=height;
    var bmi = normalDistribution(20, 1);
    var weight = Math.round(bmi*(height/100)*(height/100));
    var text2 = document.getElementById("weight");
    text2.innerHTML = weight;
}
//男性性格
function generateManCharacter() {  
    randomData("character",Man_Character_data);
}
//男性属性
function generateManAttribute() {  
    randomData("attribute",Man_Attribute_data);
}
//男性发型
function generateManHair() {  
	randomData("hairstyle",Man_Hair_data);
    var newColor = randomRGB();
    var text2 = document.getElementById("hairColor");
    text2.innerHTML = newColor;
    text2.style.backgroundColor = newColor;
}
//男性dio长
function generateManDio() {  
    var DioLong = Math.round(normalDistribution(11, 3));
    var text1 = document.getElementById("cupsize");
    text1.innerHTML = DioLong;    
}
//男性出轨原因
function generateManDerail() {
    randomData("derail",Man_Derail_data);
}
//男性照片
function generateManPhoto() {
	var btn = document.getElementsByTagName("input")[0];
	var img = document.getElementsByTagName("img")[0];
	var imgnum = Math.round(Math.random()*10)
	srclink = "images/man/" + String(imgnum) + ".jpg"
	img.src = srclink;
	btn.onclick = function () {
                if (btn.value == "显示"){
                    btn.value = "隐藏";
                    img.style.display = "block";
                }else {
                    btn.value = "显示";
                    img.style.display = "none";
                }
            }
}
function showExList(){
	var x = (window.screen.availHeight-500)/2
	var y = (window.screen.availWidth-500)/2
	window.open("list.html","小三列表","width="+1000+",height="+700+",status=no,toolbar=no,menubar=no,location=no,scrollbars=yes,center:=yes,top="+x+",left="+y); 
}
function normalDistribution(u, v) {
    // Box-Muller
    var x1 = Math.random();
    var x2 = Math.random();
    var nD = Math.sqrt(-2*Math.log(x1))*Math.sin(2*PI*x2)*v+u;
    return nD;
}
function randomRGB() {
    var rValue = Math.round(Math.random()*255).toString(16);
    var gValue = Math.round(Math.random()*255).toString(16);
    var bValue = Math.round(Math.random()*255).toString(16);
    if(rValue.length <2)
        rValue = "0" + rValue;
    if(gValue.length <2)
        gValue = "0" + gValue;
    if(bValue.length <2)
        bValue = "0" + bValue;                
    return "#"+rValue+gValue+bValue;
}
function randomData(elementId,dataName) {
    var t1Num = Math.floor(Math.random()*dataName.length);
    var text1 = document.getElementById(elementId);
    text1.innerHTML = dataName[t1Num];    
}
