window.onload = function(){
document.getElementById('generate').addEventListener('click', function(){
    document.getElementById('password').innerHTML = creator(document.getElementById('number-select').value);
});

var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var capitals = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var symbols = ['!','#','$','%','&','(',')','*','+',",",'-','.','/',':',';','<','=','>','?','@','[',']','^','_','{','|','}','~'];
var nums = [1,2,3,4,5,6,7,8,9,0];


function creator(num){
    var newArr = [];
    result= '';
    if(document.getElementById('capitals').checked){
        newArr = newArr.concat(capitals);
    }
    if (document.getElementById('lower-case').checked){
        newArr = newArr.concat(lowerCase);
    }
    if (document.getElementById('symbols').checked){
        newArr = newArr.concat(symbols);
    }
    if (document.getElementById('nums').checked){
        newArr = newArr.concat(nums);
    }

    if(newArr.length === 0){
        return "You select at least one option";
    }

    for(var i = 0; i < num; i++){
        var random = Math.floor(Math.random() * newArr.length);
        result = result + newArr[random];
    }

    return result;

};
};
function copyText() {
    var newPass = document.getElementById('password');
    newPass.focus();
    newPass.select();
    document.execCommand('copy');
}
document.getElementById('copy').addEventListener('click', copyText, false);


