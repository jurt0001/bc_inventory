'use strict';

/*****************************************************************
File: Main.js
Author: Christian Josef Jurt

Description: This is React Application displays a list on the Main page.
it also allows you to add a new item to the list.

Version: 0.0.1
Updated: Oct 1, 2017

*****************************************************************/

//creating a header and populating it with a heading and logo for list page
var Header = React.createClass({
	displayName: 'Header',

	propTypes: {},
	render: function render() {
		return React.createElement('div', { className: 'header' }, //setting header className
		React.createElement('h1', {}, 'BC Inventory'),
        React.createElement('hr', {})//hardcoding Page Title
		//,React.createElement('p', {}, React.createElement('img', { src: 'images/launcher_white_copy.png', width: '200px' }) //creating logo and setting size
	//	)
                                  
                                  );
	}
});

//creating a header and populating it with a heading and logo for items page

var Header2 = React.createClass({
	displayName: 'Header2',

	propTypes: {},
	render: function render() {
		return React.createElement('div', { className: 'header' }, //setting header className
		React.createElement('p', {}, 'Item Details', //hardcoding Page Title
		//React.createElement('p', {}, React.createElement('img', { src: 'images/launcher_white_copy.png', width: '200px' }) //creating logo and setting size
		//)
                           ));
	}
});

//creating a header and populating it with a heading and logo for add page   

var Header3 = React.createClass({
	displayName: 'Header3',

	propTypes: {},
	render: function render() {
		return React.createElement('div', { className: 'header' }, //setting header className
		React.createElement('h1', {}, 'Add an Item'), //hardcoding Page Title
		);
	}
});

//Creating a Navigation Menu

var NavMenu = React.createClass({
	displayName: 'NavMenu',

	render: function render() {
		return React.createElement('ul', { className: 'nav-menu' }, //creating an underordered list. assigning className
		React.createElement('li', {}, //adding a menu item
		React.createElement('a', { href: '#' }, 'Inventory Items') //directs to default hash
		), React.createElement('li', {} //adding a menu item
		//,React.createElement('a', { href: '#newitem' }, 'Add an Item') //directs to newitem page
		));
	}
});

//creating list of items for list to be displayed in the Main List page.
var ListItem = React.createClass({
	displayName: 'ListItem',

	propTypes: {
		id: React.PropTypes.number, //setting the id # as a property
		name: React.PropTypes.string.isRequired, //setting the name of the accomplishment as property
		year: React.PropTypes.string.isRequired, //setting the year as a property
		image: React.PropTypes.src, //setting the image. not required
        start: React.PropTypes.string,
        addon: React.PropTypes.string,
        end: React.PropTypes.string
	},

	//creating a render function to actually create the html element of the list item.
	render: function render() {
		return React.createElement('li', {}, React.createElement('a', { className: 'menu-item-link', href: '#/item/' + this.props.id }, //setting custom href
		React.createElement('h2', { className: 'list-item-name' }, this.props.name),
		React.createElement('img', { className: "year", src: this.props.image, width: '260px' })
		//React.createElement('div', {className: 'year'}, this.props.year)//passing the year property into a div 
		), React.createElement('div', {className: "stats"}, React.createElement('p', {}, " Start: " + this.props.start, React.createElement('p', {}, " Add-ons: " + this.props.addon, React.createElement('p', {}, " End: " + this.props.start )))));
	}
});
        
var ListItems = React.createClass({
	displayName: 'ListItems',
	//Creating List of the items
	propTypes: {
		items: React.PropTypes.array.isRequired //only property required is the list item
	},

	render: function render() {
		var listOfListItems = this.props.items.map(function (item) {
			//looping through my items and creating an element for each one.
			return React.createElement(ListItem, item);
		});
		return (//putting my list items into my list
			React.createElement('ul', { className: 'list-menu' }, listOfListItems)
		);
	}
});

//Creating the the Main list page
var ListPage = React.createClass({
	displayName: 'ListPage',

	propTypes: {
		items: React.PropTypes.array.isRequired //only property required is the list item(s)
	},

	render: function render() {
		return React.createElement('div', {className: "list-header"}, React.createElement('h1', {className: "item-header"}, "BC Inventory", React.createElement('a', {className: "item-add", href: "#newitem"}, "+")), React.createElement('div', {}, React.createElement(ListItems, { items: this.props.items }) //populating the list page with the list
		));
	},
    
    
});

var ItemPage = React.createClass({
	displayName: 'ItemPage',

	propTypes: {
        id: React.PropTypes.number,
		name: React.PropTypes.string.isRequired, //name will be required
		year: React.PropTypes.string.isRequired, //year is required
		image: React.PropTypes.src
	},

	render: function render() {
		return (//creating item page view
			React.createElement('div', {}, React.createElement('h1', {className: "item-header1"}, this.props.name + " (" + this.props.year + ")", React.createElement('a', {className: "back", href: "#"}, "Back"), React.createElement('hr', {})), React.createElement('div', { className: 'item-view' }, React.createElement('p', { className: 'list-name-header' })),
            React.createElement('div', {className: "bottle-div"}, React.createElement('img', { className: "bottle", src: this.props.image, width: '400px' }, )), React.createElement('div', {className: "edit-button"}, React.createElement('a', { href: "#edit-item-start/" + this.props.id}, "Start"), React.createElement('a', { href: "#edit-item-addon/" + this.props.id}, "Addon"), React.createElement('a', { href: "#edit-item-end/" + this.props.id}, "End")))
		
	)}
});

//Creating and entry form page so the user can add a new item to the list.

var AddEntryForm = React.createClass({
	displayName: 'AddEntryForm',

	propTypes: {
		listItem: React.PropTypes.object.isRequired,
		onChange: React.PropTypes.func.isRequired,
		onSubmit: React.PropTypes.func.isRequired
	},
	onNameChange: function onNameChange(e) {
		this.props.onChange(Object.assign({}, this.props.listItem, { name: e.target.value }));
	},
	onYearChange: function onYearChange(e) {
		this.props.onChange(Object.assign({}, this.props.listItem, { year: e.target.value }));
	},
    
	onSubmit: function onSubmit() {
		//checking to make sure the required fields have been input by user
		if (this.props.listItem.name != '' && this.props.listItem.year != '') {
			this.props.onSubmit(this.props.listItem);
		} else {
			alert('Name and year field are required!!!');
		}
        
	},
	render: function render() {
		//setting up the form
		return React.createElement('form', {}, React.createElement('input', {
			type: 'text',
			placeholder: 'Name',
			value: this.props.listItem.name,
			onChange: this.onNameChange
		}), React.createElement('input', {
			type: 'text',
			placeholder: 'ml',
			value: this.props.listItem.year,
			onChange: this.onYearChange
		}), React.createElement('button', { id: "add-button", type: 'button', onClick: this.onSubmit }, 'Add'));
	}
});

//Creating the page where the add entry form will live
var FormView = React.createClass({
	displayName: 'FormView',

	propTypes: {
		listItem: React.PropTypes.object.isRequired,
		onNewListItemChange: React.PropTypes.func.isRequired,
		onSubmitNewItem: React.PropTypes.func.isRequired
	},

	render: function render() {
		return React.createElement('div', {className: "add-form"}, React.createElement('h1', {className: "item-header"}, "Add Item", React.createElement('a', {className: "back", href: '#' }, 'Back')), React.createElement('hr', {}), React.createElement('div', {}, React.createElement(AddEntryForm, { listItem: this.props.listItem, onChange: this.props.onNewListItemChange, onSubmit: this.props.onSubmitNewItem })));
	}
});
        
var StartFormView = React.createClass({
	displayName: 'StartFormView',

	propTypes: {
		listItem: React.PropTypes.object.isRequired,
		onNewListItemChange: React.PropTypes.func.isRequired,
		onSubmitNewItem: React.PropTypes.func.isRequired
	},

	render: function render() {
		return React.createElement('div', {className: "add-form"}, React.createElement('h1', {className: "item-header"}, " Start", React.createElement('a', {className: "back", href: '#' }, 'Back')), React.createElement('hr', {}), React.createElement('div', {}, React.createElement(StartForm, { listItem: this.props.listItem, onChange: this.props.onNewListItemChange, onSubmit: this.props.onSubmitNewItem})));
	}
});
        
var AddonFormView = React.createClass({
	displayName: 'AddonFormView',

	propTypes: {
		listItem: React.PropTypes.object.isRequired,
		onNewListItemChange: React.PropTypes.func.isRequired,
		onSubmitNewItem: React.PropTypes.func.isRequired
	},

	render: function render() {
		return React.createElement('div', {className: "add-form"}, React.createElement('h1', {className: "item-header"}, " Addon", React.createElement('a', {className: "back", href: '#' }, 'Back')), React.createElement('hr', {}), React.createElement('div', {}, React.createElement(AddonForm, { listItem: this.props.listItem, onChange: this.props.onNewListItemChange, onSubmit: this.props.onSubmitNewItem})));
	}
});
        
var EndFormView = React.createClass({
	displayName: 'EndFormView',

	propTypes: {
		listItem: React.PropTypes.object.isRequired,
		onNewListItemChange: React.PropTypes.func.isRequired,
		onSubmitNewItem: React.PropTypes.func.isRequired
	},

	render: function render() {
		return React.createElement('div', {className: "add-form"}, React.createElement('h1', {className: "item-header"}, " End", React.createElement('a', {className: "back", href: '#' }, 'Back')), React.createElement('hr', {}), React.createElement('div', {}, React.createElement(EndForm, { listItem: this.props.listItem, onChange: this.props.onNewListItemChange, onSubmit: this.props.onSubmitNewItem})));
	}
});        
        
var StartForm = React.createClass({
	displayName: 'StartForm',

	propTypes: {
		listItem: React.PropTypes.object.isRequired,
		onChange: React.PropTypes.func.isRequired,
		onSubmit: React.PropTypes.func.isRequired
	},
	
    onStartChange: function onStartChange(e) {
		this.props.onChange(Object.assign({}, this.props.listItem, { start: e.target.value }));
	},
	onSubmit: function onSubmit() {
		//checking to make sure the required fields have been input by user
			this.props.onSubmit(this.props.listItem);
		
	},
	render: function render() {
		//setting up the form
		return React.createElement('form', {}, 
            React.createElement('input', {
			placeholder: 'Start',
			value: this.props.listItem.start,
			onChange: this.onStartChange
		}), React.createElement('a', { className: "add-button", href: '#'}
          , React.createElement('button', {id: "add-button", type: 'button', onClick: this.onSubmit }, 'Save')));
	}
});        
        

var AddonForm = React.createClass({
	displayName: 'AddonForm',

	propTypes: {
		listItem: React.PropTypes.object.isRequired,
		onChange: React.PropTypes.func.isRequired,
		onSubmit: React.PropTypes.func.isRequired
	},
	
    onAddonChange: function onAddonChange(e) {
		this.props.onChange(Object.assign({}, this.props.listItem, { addon: e.target.value }));
	},
	onSubmit: function onSubmit() {
		//checking to make sure the required fields have been input by user
			this.props.onSubmit(this.props.listItem);
		
	},
	render: function render() {
		//setting up the form
		return React.createElement('form', {}, 
            React.createElement('input', {
			placeholder: 'Addon',
			value: this.props.listItem.addon,
			onChange: this.onStartChange
		}), React.createElement('a', { className: "add-button", href: '#'}
          , React.createElement('button', {id: "add-button", type: 'button', onClick: this.onSubmit }, 'Save')));
	}
}); 
        
var EndForm = React.createClass({
	displayName: 'EndForm',

	propTypes: {
		listItem: React.PropTypes.object.isRequired,
		onChange: React.PropTypes.func.isRequired,
		onSubmit: React.PropTypes.func.isRequired
	},
	
    onEndChange: function onEndChange(e) {
		this.props.onChange(Object.assign({}, this.props.listItem, { end: e.target.value }));
	},
	onSubmit: function onSubmit() {
		//checking to make sure the required fields have been input by user
			this.props.onSubmit(this.props.listItem);
		
	},
	render: function render() {
		//setting up the form
		return React.createElement('form', {}, 
            React.createElement('input', {
			placeholder: 'End',
			value: this.props.listItem.addon,
			onChange: this.onStartChange
		}), React.createElement('a', { className: "add-button", href: '#'}
          , React.createElement('button', {id: "add-button", type: 'button', onClick: this.onSubmit }, 'Save')));
	}
});
        
        
    
        //onEditedListItemChange was not specified
            
//setting up switch statement so user can navigate pages
var state = {};
var setState = function setState(changes) {
	var component = void 0;
	var Properties = {};

	Object.assign(state, changes);

	var splittedUrl = state.location.replace(/^#\/?|\/$/g, '').split('/'); //spliting the URL into two

	switch (splittedUrl[0]) {//starting point for switch statement is first half of the url
		case 'newitem':
			component = FormView; //bring you to add new entry form
			Properties = {
				listItem: state.listItem, 
				onNewListItemChange: function onNewListItemChange(item) {
					setState({ listItem: item });
				},
				onSubmitNewItem: function onSubmitNewItem(item) {
					var itemList = state.items; //getting the existing list of items
					var newKey = itemList.length + 1; //determining the key of the new item
					itemList.push(Object.assign({}, { key: newKey, id: newKey }, item)); //adding the new item into the items array.
				}
			};
			break;
            
        case 'edit-item-start':
            component = StartFormView;
            Properties = {
                listItem: state.listItem,
				onNewListItemChange: function onNewListItemChange(item) {
					setState({ listItem: item });
				},
				onSubmitNewItem: function onSubmitNewItem(item) {
					var itemList = state.items; //getting the existing list of items
					//var newKey = itemList.length + 1; //determining the key of the new item
                    
                    //removing item at index 0 and adding a new one
                    
					itemList.splice(0, 1, (Object.assign({}, { key: 1, id: 1 }, item))); //adding the new item into the items array.
				}    
            };
            break;
            
            case 'edit-item-addon':
            component = AddonFormView;
            Properties = {
                listItem: state.listItem,
				onNewListItemChange: function onNewListItemChange(item) {
					setState({ listItem: item });
				},
				onSubmitNewItem: function onSubmitNewItem(item) {
					var itemList = state.items; //getting the existing list of items
					//var newKey = itemList.length + 1; //determining the key of the new item
                    
                    //removing item at index 0 and adding a new one
                    
					itemList.splice(0, 1, (Object.assign({}, { key: 1, id: 1 }, item))); //adding the new item into the items array.
				}    
            };
            break;
            
            case 'edit-item-end':
            component = EndFormView;
            Properties = {
                listItem: state.listItem,
				onNewListItemChange: function onNewListItemChange(item) {
					setState({ listItem: item });
				},
				onSubmitNewItem: function onSubmitNewItem(item) {
					var itemList = state.items; //getting the existing list of items
					//var newKey = itemList.length + 1; //determining the key of the new item
                    
                    //removing item at index 0 and adding a new one
                    
					itemList.splice(0, 1, (Object.assign({}, { key: 1, id: 1 }, item))); //adding the new item into the items array.
				}    
            };
            break;
            
		case 'item':
			component = ItemPage;
			//determining what to display on items page based on the hash and compared to the item key
			Properties = state.items.find(function (i) {
				return i.key == splittedUrl[1];
			});
			break;
		default:
			//pages always goes to the list when it doesn't meet any of the other switch statements
			component = ListPage;
			Properties = { items: state.items };
	}

	//the rootElement where I will put everything I want to render on the DOM
	var masterElement = React.createElement('div', { className: 'content-area' }, React.createElement(component, Properties));

	//Rendering everthing i've built to the DOM
	ReactDOM.render(masterElement, document.getElementById('react-app'));
};

//adding an event listen to the window so that when the has changes so does the content
window.addEventListener('hashchange', function () {
	return setState({ location: location.hash });
});

//Start the app by declaring the initial state
setState({ listItem: {
		name: '',
		year: '',
		image: 'images/new_item.png',
        start: '',
        addon: '',
        end: ''
	}, location: location.hash,
	items: items });