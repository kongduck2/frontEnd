let str;
function strMethod(){
    str = prompt("문자열을 입력해주세요.");
    document.getElementById('len').innerHTML= str.length;
    document.getElementById('indexOf').innerHTML= str.indexOf("am");
    document.getElementById('lastIndexOf').innerHTML= str.lastIndexOf("am");
    document.getElementById('subs').innerHTML= str.substring(7,11);
    document.getElementById('subs2').innerHTML= str.substring(11);
}
