/*****************************************************************
File: Main.js
Author: Christian Josef Jurt

Description: This is React Application displays a list on the Main page.
it also allows you to add a new item to the list.

Version: 0.0.1
Updated: Oct 1, 2017

*****************************************************************/


var items = [
	{key: 1, id: 1, name: 'Beaus Lugtread', year: '700ml', description: "", image: 'images/beer.png', start: "100", addon: "12", end: "24"},
	{key: 2, id: 2, name: 'White Wine', year: '1000ml', description:  "", image: 'images/white_wine.png', start: "0", addon: "0", end: "0"},
	{key: 3, id: 3, name: 'Red Wine', year: '1000ml', description: "", image: 'images/red_wine.png', start: "0", addon: "0", end: "0"},
	{key: 4, id: 4, name: 'Jameson', year: '700ml', description: "", image: 'images/jameson.png', start: "0", addon: "0", end: "0"},
    {key: 5, id: 5, name: 'Jack Daniels', year: '700ml', description: "", image: 'images/jack.png', start: "0", addon: "0", end: "0"},
    {key: 6, id: 6, name: 'Rum', year: '700ml', description: "", image: 'images/bacardi.png', start: "0", addon: "0", end: "0"},
    {key: 7, id: 7, name: 'Vodka', year: '700ml', description: "", image: 'images/vodka.png', start: "0", addon: "0", end: "0"},
    {key: 8, id: 8, name: 'Water', year: '350ml', description: "", image: 'images/water.png', start: "0", addon: "0", end: "0"},
    {key: 9, id: 9, name: 'Cola', year: '350ml', description: "", image: 'images/coke.png', start: "0", addon: "0", end: "0"},
    {key: 10, id: 10, name: 'Ginger Ale', year: '350ml', description: "", image: 'images/ginger_ale_can.png', start: "0", addon: "0", end: "0"},
    {key: 11, id: 11, name: 'Diet Coke', year: '350ml', description: "", image: 'images/diet_coke_can.png', start: "0", addon: "0", end: "0"},
    {key: 12, id: 12, name: '7UP', year: '350ml', description: "", image: 'images/7up_can.png', start: "0", addon: "0", end: "0"},
    {key: 13, id: 13, name: 'Club Soda', year: '350ml', description: "", image: 'images/club_soda_can.png', start: "0", addon: "0", end: "0"},
    {key: 14, id: 14, name: 'Tonic', year: '350ml', description: "", image: 'images/tonic_can.png', start: "0", addon: "0", end: "0"}
    
    ]
    