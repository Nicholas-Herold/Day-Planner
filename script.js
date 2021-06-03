let timeIDs = $('.time-block')
console.log(timeIDs)
let displaytime = document.getElementById('currentDay')
let saveBtn = $('.saveBtn')
let hour = '';
let test = '';
let data = {
    value:"",
    text:"",
};
let tag = "";
let found = "";
let storeData = localStorage.getItem("plan")||[];
console.log(storeData)



// used for time tracking
function hourofday(){
hour = moment().get('hour');
displaytime.textContent = moment().format("lll");
test = hour - 4
// console.log(test)
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
    data ={
        value:"", 
        text:""
    };
    tag ="";
    event.preventDefault();
    tag = $(this).parents()
    console.log(tag);
    
    replace()
  
}) 

 

function adding() {
    console.log(data)
    storeData.push(data)
}

function replace (){
    let position = parseInt( tag[1].children[1].id);
    data.value = position;
    data.text = tag[1].children[1].value;
    console.log(position)
    

    

    
        let findval= storeData.findIndex(dat => dat.value == position)
        console.log(findval)
        if (findval == -1){
            adding ()}
        else{
            storeData[findval].text = data.text;}
    console.log(storeData);
    localStorage.setItem('plan', JSON.stringify(storeData));
        return   

    }
  
        

