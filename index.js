let age = document.getElementById('name').innerHTML

//age = parseInt(age)


if(age > 18){
    document.getElementById('output').innerHTML = "You are eligible to vote"
}else{
    document.getElementById('output').innerHTML = "You are not eligible to vote"
}