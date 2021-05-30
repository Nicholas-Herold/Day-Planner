let timeIDs = $('.time-block')
console.log(timeIDs)
let displaytime = document.getElementById('currentDay')
let hour
let test

function hourofday(){
hour = moment().get('hour');
displaytime.textContent = moment().format("lll");
test = hour - 4
console.log(test)
colorchange();
}

setInterval(hourofday,1000)

function colorchange(){
timeIDs.each(function(){
var i = this.id;
console.log(i)
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
