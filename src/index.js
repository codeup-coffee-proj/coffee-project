"use strict";
// $(document).ready(function () {
//     console.log('loaded');
    $('#coffee-div').css('color', '#1E3063');

    function renderCoffee(coffee) {
        var html = '';
        html += coffee.name + ' ';
        html += coffee.roast;

        return html;
    }

    function renderCoffees(coffees) {
        var html = '';
        for (var i = 0; i < coffees.length; i++) {
            html += renderCoffee(coffees[i]) + '<br>';
        }
        return html;
    }

    function renderNewCoffees(coffees) {
        var html = '';
        for (var i = 0; i < coffees.length; i++) {
            html += renderCoffee(coffees[i]) + '<br>';
        }
        return html;
    }

//This function pushes the coffees that are a particular roast into an array.
    function updateCoffees(e) {
        var selectedRoast = roastSelection.value;
        var allRoast = document.getElementById('all-roast').innerHTML;
        var filteredCoffees = [];
        coffees.forEach(function (coffee) {
            if (allRoast === selectedRoast) {
                filteredCoffees.push(coffee);
            } else if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });

        document.getElementById('coffee-div').innerHTML = renderCoffees(filteredCoffees) + '<br>';
    }

    var coffeeSearchArray = [];

//This function displays coffees that match the selection of the user
    var coffeeSearch = function (e) {
        userCoffee = document.getElementById('search-input');
        event.preventDefault();
        userCoffee = userCoffee.value.toLowerCase();
        for (var i = 0; i < coffees.length; i++) {
            var lowerCoffee = coffees[i].name.toLowerCase();
            if (lowerCoffee.includes(userCoffee)) {
                coffeeSearchArray.push({id: coffees.length + 1, name: coffees[i].name, roast: coffees[i].roast});
            }
        }
        document.getElementById('coffee-div').innerHTML = '<br>' + renderCoffees(coffeeSearchArray);

        coffeeSearchArray = [];
    };


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
    var coffees = [
        {id: 1, name: 'Light City', roast: 'Light'},
        {id: 2, name: 'Half City', roast: 'Light'},
        {id: 3, name: 'Cinnamon', roast: 'Light'},
        {id: 4, name: 'City', roast: 'Medium'},
        {id: 5, name: 'American', roast: 'Medium'},
        {id: 6, name: 'Breakfast', roast: 'Medium'},
        {id: 7, name: 'High', roast: 'Dark'},
        {id: 8, name: 'Continental', roast: 'Dark'},
        {id: 9, name: 'New Orleans', roast: 'Dark'},
        {id: 10, name: 'European', roast: 'Dark'},
        {id: 11, name: 'Espresso', roast: 'Dark'},
        {id: 12, name: 'Viennese', roast: 'Dark'},
        {id: 13, name: 'Italian', roast: 'Dark'},
        {id: 14, name: 'French', roast: 'Dark'},
    ];


// var tbody = document.querySelector('#coffees');
    var submitButton = document.querySelector('#submit');
    var roastSelection = document.querySelector('#roast-selection');
    var userCoffee = document.getElementById('search-input');
    var addButton = document.querySelector('#add');


    document.getElementById('coffee-div').innerHTML = renderCoffees(coffees);

    submitButton.addEventListener('click', coffeeSearch);

    userCoffee.addEventListener('keyup', coffeeSearch);

    addButton.addEventListener('click', addCoffees);


// roastSelection.addEventListener('input', updateCoffees);
    document.addEventListener('DOMContentLoaded', function (event) {
        document.querySelector('select[name="roast-selection"]').onchange = updateCoffees;
        console.log('what now');
    }, false);


    var addRoastSelection = document.querySelector('#add-roast-selection');
    var addCoffeeSelection = document.querySelector('#add-input');

    var newAddedCoffees = [];

//function to add a coffee
    function addCoffees(e) {
        e.preventDefault();

        var addRoast = addRoastSelection.value;
        var addCoffee = addCoffeeSelection.value;
        var newCoffee = {};
        newCoffee ['id'] = coffees.length + 1;
        newCoffee ['name'] = addCoffee;
        newCoffee ['roast'] = addRoast;
        newAddedCoffees.push(newCoffee);

        document.getElementById('add-coffee-div').innerHTML = renderNewCoffees(newAddedCoffees) + '<br>';
    };
// });