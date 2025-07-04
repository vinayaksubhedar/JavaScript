// console.log("DOM called");

/*
Document Object Model

Document 
Window - Active Browser Window or Tab
*/

const mainTitle = document.getElementById('main-title');
console.log(mainTitle);

// // console.log(mainTitle.textContent);

// // console.log(mainTitle.clientHeight);
// // console.log(mainTitle.clientWidth);
// // console.log(mainTitle.clientLeft);


// //mainTitle.textContent = "Vinayak Sadanand Subhedar";
const clsListItems = document.getElementsByClassName('list-item');
for(let i=0;i<document.getElementsByClassName('list-item').length;i++)
{
     console.log("Using traditional for loop : ",clsListItems[i].textContent);
}

for(let element of clsListItems)
{
    console.log("Using for of each : ", element.textContent);
}
//const clsListItems = document.getElementsByClassName('list-item');
Array.from(clsListItems).forEach((element)=>{
    console.log("Using for each : ... with Arrow ", element.textContent);
})

Array.from(clsListItems).forEach(function(element){
    console.log("Using for each : ... with Function ", element.textContent);
})

const queryfirstlistitem = document.querySelector('.list-item');
console.log("First list item with class 'list-item'",queryfirstlistitem.textContent)

const querylistitems = document.querySelectorAll('.list-item');

Array.from(querylistitems).forEach(function(element){
    console.log("Using for each : ... with Query Selector All", element.textContent);
})
