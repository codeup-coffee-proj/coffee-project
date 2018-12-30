"use strict";
$('#coffee-div').css('color', '#1E3063');
function renderCoffee(coffee) {
    var html = '';
        // '<tr class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += coffee.name + ' ' ;
    html += coffee.roast;
    // html += '</tr>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]) + '<br>';
    }
    return html;
}
function renderNewCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]) + '<br>';
    }
    return html;
}

//This function pushes the coffees that are a particular roast into an array.
function updateCoffees(e) {
    // e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var allRoast = document.getElementById('all-roast').innerHTML;
    // console.log(allRoast);
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (allRoast === selectedRoast){
            filteredCoffees.push(coffee);
        } else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
        // console.log(filteredCoffees);
    });

    document.getElementById('coffee-div').innerHTML = renderCoffees(filteredCoffees) + '<br>';
}

var coffeeSearchArray = [];
//This function displays coffees that match the selection of the user
var coffeeSearch = function(e){
    userCoffee =  document.getElementById('search-input');
    event.preventDefault();
    userCoffee = userCoffee.value.toLowerCase();
    console.log(userCoffee)
    for(var i =0; i < coffees.length; i++){
        var lowerCoffee = coffees[i].name.toLowerCase();
        console.log(lowerCoffee)
        if(lowerCoffee.includes(userCoffee)) {
            coffeeSearchArray.push({id: coffees.length+1, name: coffees[i].name, roast: coffees[i].roast});
        }
    }

    console.log(coffeeSearchArray);
    document.getElementById('coffee-div').innerHTML = '<br>' + renderCoffees(coffeeSearchArray);


    coffeeSearchArray = [];
};



// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


// var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var userCoffee =  document.getElementById('search-input');
var addButton =  document.querySelector('#add');




document.getElementById('coffee-div').innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', coffeeSearch);

userCoffee.addEventListener('keyup', coffeeSearch);

addButton.addEventListener('click', addCoffees);




// roastSelection.addEventListener('input', updateCoffees);
document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('select[name="roast-selection"]').onchange = updateCoffees;
}, false);


var addRoastSelection = document.querySelector('#add-roast-selection');
var addCoffeeSelection = document.querySelector('#add-input');
console.log(coffees);

var newAddedCoffees = [];
//function to add a coffee
function addCoffees(e) {
    e.preventDefault();
    console.log(coffees);

    var addRoast = addRoastSelection.value;
    var addCoffee = addCoffeeSelection.value;
    var newCoffee = {};
    newCoffee ['id'] = coffees.length + 1;
    newCoffee ['name'] = addCoffee;
    newCoffee ['roast'] = addRoast;
    newAddedCoffees.push(newCoffee);
    console.log(newAddedCoffees);
    console.log(coffees);

    document.getElementById('add-coffee-div').innerHTML = renderNewCoffees(newAddedCoffees) + '<br>';
};