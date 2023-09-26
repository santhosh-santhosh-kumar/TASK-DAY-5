let json=[{
    "name":"santhosh",
    "age":'28',
    "place":"erode",
    "dob":"05011996"
},{
    "name":"kumar",
    "age":'25',
    "place":"gobi",
    "dob":"05011995"
}];
//for loop
for(var i=0;i<json.length;i++){
  console.log(json[i].name)
}


//for in loop
for(var key in json){
  console.log(json[key] .age)
}

//for of loop
for(var num of json){
  console.log(num.place)
}

//forEach()
json.forEach(val=>console.log(val))