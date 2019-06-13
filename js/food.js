/*********************************** 
    food.js
***********************************/
var foodData = {}; // JSON object to store all data passed into the mustache templates

// Array of food objects
foodData.items = [
	{
		"id" : "food1",
		"category": "Food",
		"subcategory": "Restaurant",
		"name": "Stella’s Café",
		"address": "166 Osborne St",
		"phone": "1-204-453-8562",
		"website": "https://www.stellas.ca",
		"citySection": "River Heights",
		"image": "images/food.jpg"
	},
	{
		"id" : "food2",
		"category": "Food",
		"subcategory": "Restaurant",
		"name": "529 Wellington",
		"address": "529 Wellington Cres",
		"phone": "1-204-487-8325",
		"website": "https://www.529wellington.ca",
		"citySection": "River Heights",
		"image": "images/food.jpg"
	},
	{
		"id" : "food3",
		"category": "Food",
		"subcategory": "Restaurant",
		"name": "Red Top Drive Inn",
		"address": "219 St Mary’s Rd",
		"phone": "1-204-233-7943",
		"website": "https://www.redtopdriveinn.com",
		"citySection": "St. Vital",
		"image": "images/food.jpg"
	},
	{
		"id" : "food4",
		"category": "Food",
		"subcategory": "Restaurant",
		"name": "Nuburger",
		"address": "472 Stradbrook Ave",
		"phone": "1-204-888-1001",
		"website": "https://www.ilovenuburger.com",
		"citySection": "River Heights",
		"image": "images/food.jpg"
	},
	{
		"id" : "food5",
		"category": "Food",
		"subcategory": "Restaurant",
		"name": "Maxime’s Restaurant & Lounge",
		"address": "1131 St Mary’s Rd",
		"phone": "1-204-257-1521",
		"website": "https://www.maximesrestaurant.ca",
		"citySection": "St. Vital",
		"image": "images/food.jpg"
	},
	{
		"id" : "food6",
		"category": "Food",
		"subcategory": "Restaurant",
		"name": "Pizza Hotline",
		"address": "475 St Anne’s Rd",
		"phone": "1-204-222-2222",
		"website": "https://www.pizzahotline.ca",
		"citySection": "St. Vital",
		"image": "images/food.jpg"
	},
	{
		"id" : "food7",
		"category": "Food",
		"subcategory": "Grocery Store",
		"name": "Sobeys",
		"address": "2850 Pembina Hwy",
		"phone": "1-204-261-5047",
		"website": "https://www.sobeys.com",
		"citySection": "Fort Garry",
		"image": "images/food.jpg"
	},
	{
		"id" : "food8",
		"category": "Food",
		"subcategory": "Grocery Store",
		"name": "Costco",
		"address": "1499 Regent Ave W",
		"phone": "1-204-654-4214",
		"website": "https://www.costco.ca",
		"citySection": "Transcona",
		"image": "images/food.jpg"
	},
	{
		"id" : "food9",
		"category": "Food",
		"subcategory": "Grocery Store",
		"name": "CO-OP Grocery",
		"address": "77 Vermillion Rd",
		"phone": "1-204-256-1309",
		"website": "http://www.coopfood.ca",
		"citySection": "St. Vital",
		"image": "images/food.jpg"
	},
	{
		"id" : "food10",
		"category": "Food",
		"subcategory": "Grocery Store",
		"name": "Safeway",
		"address": "594 Mountain Ave",
		"phone": "1-204-589-2588",
		"website": "https://www.safeway.ca",
		"citySection": "Point Douglas",
		"image": "images/food.jpg"
	},
];

foodData.subcategories = [
	{"id":"Restaurant"},
	{"id":"Grocery Store"},
];

foodData.locations = [
	{"id":"Fort Garry"},
	{"id":"Point Douglas"},
	{"id":"River Heights"},
	{"id":"St. Vital"},
	{"id":"Transcona"},
];

function renderFoodFilters() {
	var template, html;

	template = 	"<div class='row'>" +
					"<div class='col-sm-6'>" + 
						"<div class='panel panel-default panel-title'>" +
							"<h3>Food</h3>" +
						"</div>" +
					"</div>" +
					"<div class='col-sm-6'>" +
						"<div class='panel panel-default panel-filters'>" +
							"<div class='row row-filters'>" +
								"<div class='col-xs-4'>" +
									"<div class='dropdown'>" +
										"<button class='btn btn-default dropdown-toggle' type='button' data-toggle='dropdown'>" +
											"Sort By <span class='caret'></span>" +
										"</button>" +
										"<ul class='dropdown-menu'>" +
											"<li><a href='#'>A-Z</a></li>" +
											"<li><a href='#'>Distance</a></li>" +
											"<li><a href='#'>Recently Added</a></li>" +
										"</ul>" +
									"</div>" +
								"</div>" +
								"<div class='col-xs-4'>" +
									"<div class='dropdown'>" +
										"<button class='btn btn-default dropdown-toggle' type='button' data-toggle='dropdown'>" +
											"Subcategories <span class='caret'></span>" +
										"</button>" +
										"<ul class='dropdown-menu'>" +
											"{{#subcategories}}" +
												"<li><a href='#' onclick='filterFood(\"{{id}}\")'>{{id}}</a></li>" +
											"{{/subcategories}}" +
										"</ul>" +
									"</div>" +
								"</div>" +
								"<div class='col-xs-4'>" +
									"<div class='dropdown'>" +
										"<button class='btn btn-default dropdown-toggle' type='button' data-toggle='dropdown'>" +
											"Neighbourhoods <span class='caret'></span>" +
										"</button>" +
										"<ul class='dropdown-menu'>" +
											"{{#locations}}" +
												"<li><a href='#' onclick='filterFood(\"{{id}}\")'>{{id}}</a></li>" +
											"{{/locations}}" +
										"</ul>" +
									"</div>" +
								"</div>" +
							"</div>" +
				 		"</div>" +
					"</div>" +
				"</div>";

	html = Mustache.render(template,foodData);
	
	$("#appContent").prepend(html);
}


/*********************************** 
	Create rows of items 
	(2 items per row)
***********************************/
function createFoodCardRows(data) {
	var temp;

	if(data == null) {
		foodData.rows = [];
		for(var i=0; i<foodData.items.length; i+=2) {
			temp = {row:[]};
			for(var j=0; j<2; j++) {
				if(foodData.items[i+j])
					temp.row.push(foodData.items[i+j]);
			}
			foodData.rows.push(temp);
		}
	}
	else {
		data.rows = [];
		for(var i=0; i<data.items.length; i+=2) {
			temp = {row:[]};
			for(var j=0; j<2; j++) {
				if(data.items[i+j])
					temp.row.push(data.items[i+j]);
			}
			data.rows.push(temp);
		}
	}
}

/*********************************** 
    Define html for card
    Render mustache template using html and data
    Insert template into div with specified id
***********************************/
function renderFoodCards(data) {
	var template, html;
	
	_currPage = "food";

	renderNavbar();

	createFoodCardRows(data);

	template = 	"{{#rows}}" +
						"<div class='row'>" +
							"{{#row}}" +
								"<div class='col-sm-6'>" +
									"<div class='panel panel-default' id='card-{{id}}'>" +
										"<div class='panel-heading'>" +
											"<div class='row'>" +
												"<div class='col-xs-8' id='header-{{id}}'>" +
													"<h4><strong>{{name}}</strong></h4>" +
													"{{category}} / " +
													"{{subcategory}} " +
												"</div>" +
												"<div class='col-xs-4 col-card-expand'>" +
													"<a href='#' data-toggle='modal' data-target='#cardModal' onclick='renderFoodCardModal(\"{{id}}\")'>" +
														"<i class='fa fa-expand fa-fw' aria-hidden='true'></i>" +
													"</a>" +
												"</div>" +
											"</div>" +
										"</div>" +
										"<div class='panel-body' id='body-{{id}}'>" +
											"<div class='row'>" +
												"<div class='col-xs-8'>" +
													"<strong>Address:</strong>  {{address}} <br><br>" +
													"<strong>Phone:</strong>  {{phone}}  <br><br>" +
													"<strong>Website:</strong>  <a href='{{website}}'>{{website}}</a> <br><br>" +
												"</div>" +
												"<div class='col-xs-4 col-card-image'>" +
													"<img src='{{image}}'>" +
												"</div>" +
											"</div>" +
										"</div>" +
										"<div class='panel-footer' id='footer-{{id}}'>" +
											"<div class='btn-group btn-group-justified'>" +
												"{{#loggedIn}}" +
													"{{#saved}}" +
														"<a href='#' class='btn btn-default' data-toggle='modal' data-target='#pageModal' onclick='removeFoodItem(\"{{id}}\")'>" +
															"Remove <i class='fa fa-times fa-fw' aria-hidden='true'></i>" +
														"</a>" +
													"{{/saved}}" +
													"{{^saved}}" +
														"<a href='#' class='btn btn-default btn-save-item' data-toggle='modal' data-target='#pageModal' onclick='saveFoodItem(\"{{id}}\")'>" +
															"Save <i class='fa fa-star fa-fw' aria-hidden='true'></i>" +
														"</a>" +
													"{{/saved}}" +
												"{{/loggedIn}}" +
												"{{^loggedIn}}" +
													"<a href='#' class='btn btn-default' data-toggle='modal' data-target='#pageModal' onclick='renderLogInToSaveFoodModal()'>" +
														"Save <i class='fa fa-star fa-fw' aria-hidden='true'></i>" +
													"</a>" +
												"{{/loggedIn}}" +
												"<a href='#' class='btn btn-default' data-toggle='modal' data-target='#pageModal' onclick='renderShareModal()'>" +
													"Share <i class='fa fa-share-alt fa-fw' aria-hidden='true'></i>" +
												"</a>" +											
											"</div>" +										
										"</div>" +
									"</div>" +
								"</div>" +
							"{{/row}}" +
						"</div>" +
					"{{/rows}}";
	
	if(data == null) {
		foodData.loggedIn = _loggedIn;
		html = Mustache.render(template, foodData);
	}
	else {
		data.loggedIn = _loggedIn;
		html = Mustache.render(template, data);
	}

	$("#appContent").html(html);

	renderFoodFilters();
}

/*********************************** 
	Render a large modal version of item with itemId
	Define html for card
    Render mustache template using html and data
    Insert template into div with specified id
***********************************/
function renderFoodCardModal(itemId) {
	var template, html, header, body, footer;

	header = $('#header-'+itemId).html();
	body = $('#body-'+itemId).html();
	footer = $('#footer-'+itemId).html();

	template = 		"<div class='modal-header'>" +
						"<button type='button' class='close' data-dismiss='modal'>&times;</button>" +
						header +
                    "</div>" +
                    "<div class='modal-body'>" +
						body +
					"</div>" +
					"<div class='modal-footer'>" +
						footer +
					"</div>";

    html = Mustache.render(template);

	$("#cardModalContent").html(html);
}

/*********************************** 
    Add item to global array of saved items
***********************************/
function saveFoodItem(itemId) {
	for(var i=0; i<foodData.items.length; i++) {
		if(foodData.items[i].id == itemId) {
			foodData.items[i].saved = true;
			_savedItems.push(foodData.items[i]);
			renderSaveMsgModal();
			renderFoodCards();
		}
	}
}

/*********************************** 
    Remove item from global array of saved items
***********************************/
function removeFoodItem(itemId) {
	var index;

	for(var i=0; i<foodData.items.length; i++) {
		if(foodData.items[i].id == itemId) {
			foodData.items[i].saved = false;
			index = _savedItems.indexOf(foodData.items[i]);
			_savedItems.splice(index,1);
			renderRemoveMsgModal();
			renderFoodCards();
		}
	}
}

/*********************************** 
    Add item from global array of all items
***********************************/
function addFoodToAll() {
	for(var i=0; i<foodData.items.length; i++) {
		_allItems.push(foodData.items[i]);
	}
}

/*********************************** 
    Define html for Log In modal
    Render mustache template using html and data
    Insert template into div with specified id
***********************************/
function renderLogInToSaveFoodModal() {
    var template, html;
    
    template = "<div class='modal-header'>" +
                        "<button type='button' class='close' data-dismiss='modal'>&times;</button>" +
                        "<h4 class='modal-title'><strong>Please log in to use this feature:</strong></h4>" +
                    "</div>" +
                    "<div class='modal-body'>" +
                        "<form>" +
                            "<div class='form-group'>" +
                                "<label for='email'>Email address:</label>" +
                                "<input type='email' class='form-control' id='logInEmail'>" +
                            "</div>" +
                            "<div class='form-group'>" +
                                "<label for='pwd'>Password:</label>" +
                                "<input type='password' class='form-control' id='logInPwd'>" +
                                "<a href='#' onclick='renderForgotPwdModal()'>Forgot password?</a>" +
                            "</div>" +
                            "<span style='display:inline'>" +
                                "<button type='button' class='btn btn-default' data-dismiss='modal' onclick='logIn()' id=''>Log In</button>" +
                                "    " +
                                "<button type='button' class='btn btn-default' data-dismiss='modal'>Cancel</button>" +
                            "</span>" +
                        "</form>" +
                    "</div>";

    html = Mustache.render(template);

    $("#modalContent").html(html);
}

function filterFood(filter) {
	var data = {};
	data.items = [];

	for(var i=0;i<foodData.items.length;i++) {
		if(foodData.items[i].subcategory === filter || foodData.items[i].citySection === filter) {
			data.items.push(foodData.items[i]);
		}
	}

	renderFoodCards(data);
}




