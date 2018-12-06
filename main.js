"use strict"

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += coffee.name + ' ' ;
    html += coffee.roast;
    // html += '</tr>';

    return html;
}
console.log("What up!")


function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]) + '<br>';
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var allRoast = document.getElementById('all-roast').innerHTML;
    console.log(allRoast);
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (allRoast === selectedRoast){
            filteredCoffees.push(coffee);
        } else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
        // console.log(filteredCoffees);
    });

    document.getElementById('coffee-div').innerHTML = renderCoffees(filteredCoffees);
}



var coffeeSearch = function(event){
    event.preventDefault();
    for(var i =0; i < coffees.length; i++){
      if(coffees[i].name === userCoffee) {
          document.getElementById('coffee-div').innerHTML = coffees[i]
        }
      }
    console.log(userCoffee.value);
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



document.getElementById('coffee-div').innerHTML = renderCoffees(coffees);

// submitButton.addEventListener('click', updateCoffees);
submitButton.addEventListener('click', coffeeSearch);


