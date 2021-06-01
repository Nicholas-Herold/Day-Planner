let timeIDs = $('.time-block')
console.log(timeIDs)
let displaytime = document.getElementById('currentDay')
let saveBtn = $('.saveBtn')
let hour = '';
let test = '';
let data = {
    id: "",
    text:"",
};
let storeData = localStorage.getItem("plan")||[];



// used for time tracking
function hourofday(){
hour = moment().get('hour');
displaytime.textContent = moment().format("lll");
test = hour - 4
console.log(test)
colorchange();
}

setInterval(hourofday,1000)


// Changes colors of rows depending on time of day
function colorchange(){
timeIDs.each(function(){
var i = this.id;
if(test == i ){
    console.log('hello');
    $(this).addClass('present');
}

if (test < i) {
    $(this).addClass("future")
}

if (test > i){
    $(this).addClass('past ')
}
});
}






saveBtn.on('click',function(event){
    event.preventDefault();
    var tag = $(this).parents()
    console.log(tag);
    data.id = (tag[1].id);
    data.text = tag[1].childNodes[3].value;
    console.log(data)
    data.push
  
}) 

