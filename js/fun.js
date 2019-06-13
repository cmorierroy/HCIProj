
var funData = {};

funData.items = [
	{
		"id": "fun1",
		"category": "Fun",
		"subcategory": "Nightlife",
		"name": "The Cavern",
		"address": "112 Osborne Street, Winnipeg, MB R3L 1Y5",
		"website": "https://www.cavernwpg.com/",
		"phone": "204-284-7201",
		"citySection": "River Heights",
		"image": "images/fun.jpg"
	},

	{
		"id": "fun2",
		"category": "Fun",
		"subcategory": "Sport",
		"name": "Winnipeg Blue Bombers",
		"address": "",
		"website": "https://www.bluebombers.com/",
		"phone": "",
		"citySection": "Fort Garry",
		"image": "images/fun.jpg"
	},

	{
		"id": "fun3",
		"category": "Fun",
		"subcategory": "Park",
		"name": "Assiniboine Park",
		"address": "55 Pavilion Crescent, Winnipeg, MB R3P 2N6",
		"website": "https://www.assiniboinepark.ca/",
		"phone": "204-927-6000",
		"citySection": "Assiniboine South",
		"image": "images/fun.jpg"
	},

	{
		"id": "fun4",
		"category": "Fun",
		"subcategory": "Tourism",
		"name": "The Forks",
		"address": "1 Forks Market Rd, Winnipeg, MB R3C 4L9",
		"website": "http://www.theforks.com/",
		"phone": "204-947-9236",
		"citySection": "Downtown",
		"image": "images/fun.jpg"
	},

	{
		"id": "fun5",
		"category": "Fun",
		"subcategory": "Festivals",
		"name": "Festival du Voyageur",
		"address": "",
		"website": "https://festivalvoyageur.mb.ca/en/",
		"phone": "",
		"citySection": "St. Boniface",
		"image": "images/fun.jpg"
	},

	{
		"id": "fun6",
		"category": "Fun",
		"subcategory": "Art",
		"name": "Winnipeg Art Gallery",
		"address": "300 Memorial Boulevard, Winnipeg, MB R3C 1V1",
		"website": "http://wag.ca/",
		"phone": "204-786-6641",
		"citySection": "Downtown",
		"image": "images/fun.jpg"
	},

	{
		"id": "fun7",
		"category": "Fun",
		"subcategory": "Festivals",
		"name": "Nuit Blanche",
		"address": "",
		"website": "http://nuitblanchewinnipeg.ca/",
		"phone": "",
		"citySection": "St. Boniface",
		"image": "images/fun.jpg"
	},

	{
		"id": "fun8",
		"category": "Fun",
		"subcategory": "Recreation Centres",
		"name": "Wheelies Roller Rink",
		"address": "1010 Logan Avenue, Winnipeg, MB R3E 1P4",
		"website": "http://wheeliesrollerrink.com/",
		"phone": "204-988-5060",
		"citySection": "Point Douglas",
		"image": "images/fun.jpg"
	},

	{
		"id": "fun9",
		"category": "Fun",
		"subcategory": "Movie Theatres",
		"name": "Scotiabank Theatre",
		"address": "817 St. James Street ",
		"website": "https://www.cineplex.com/",
		"phone": "204-774-1001",
		"citySection": "St. James-Assiniboia",
		"image": "images/fun.jpg"
	},

	{
		"id": "fun10",
		"category": "Fun",
		"subcategory": "Movie Theatres",
		"name": "Cinema City Northgate",
		"address": "1361 - 1399 McPhillips Street, Winnipeg, MB R2V 3C4",
		"website": "https://www.cineplex.com/",
		"phone": "204-339-1642",
		"citySection": "Seven Oaks",
		"image": "images/fun.jpg"
	},
];

funData.subcategories = [
	{"id": "Art"},
	{"id": "Festivals"},
	{ "id": "Movie Theatres"},
	{"id": "Nightlife"},
	{"id": "Recreation Centres"},
	{"id": "Sport"},
	{"id": "Tourism"},
];

funData.locations = [
	{"id":"Assiniboine South"},
	{"id":"Downtown"},
	{"id":"Fort Garry"},
	{"id":"Point Douglas"},
	{"id":"River Heights"},
	{"id":"Seven Oaks"},
	{"id":"St. Boniface"},
	{"id":"St. James-Assiniboia"},
];


function renderFunFilters() {
	var template, html;

	template = 	"<div class='row'>" +
					"<div class='col-sm-6'>" + 
						"<div class='panel panel-default panel-title'>" +
							"<h3>Fun</h3>" +
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
												"<li><a href='#' onclick='filterFun(\"{{id}}\")'>{{id}}</a></li>" +
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
												"<li><a href='#' onclick='filterFun(\"{{id}}\")'>{{id}}</a></li>" +
											"{{/locations}}" +
										"</ul>" +
									"</div>" +
								"</div>" +
							"</div>" +
				 		"</div>" +
					"</div>" +
				"</div>";

	html = Mustache.render(template,funData);
	
	$("#appContent").prepend(html);
}


/*********************************** 
	Create rows of items 
	(2 items per row)
***********************************/
function createFunCardRows(data) {
	var temp;

	if(data == null) {
		funData.rows = [];
		for(var i=0; i<funData.items.length; i+=2) {
			temp = {row:[]};
			for(var j=0; j<2; j++) {
				if(funData.items[i+j])
					temp.row.push(funData.items[i+j]);
			}
			funData.rows.push(temp);
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
function renderFunCards(data) {
	var template, html;
	
	_currPage = "fun";

	renderNavbar();

	createFunCardRows(data);

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
													"<a href='#' data-toggle='modal' data-target='#cardModal' onclick='renderFunCardModal(\"{{id}}\")'>" +
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
														"<a href='#' class='btn btn-default' data-toggle='modal' data-target='#pageModal' onclick='removeFunItem(\"{{id}}\")'>" +
															"Remove <i class='fa fa-times fa-fw' aria-hidden='true'></i>" +
														"</a>" +
													"{{/saved}}" +
													"{{^saved}}" +
														"<a href='#' class='btn btn-default btn-save-item' data-toggle='modal' data-target='#pageModal' onclick='saveFunItem(\"{{id}}\")'>" +
															"Save <i class='fa fa-star fa-fw' aria-hidden='true'></i>" +
														"</a>" +
													"{{/saved}}" +
												"{{/loggedIn}}" +
												"{{^loggedIn}}" +
													"<a href='#' class='btn btn-default' data-toggle='modal' data-target='#pageModal' onclick='renderLogInToSaveFunModal()'>" +
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
		funData.loggedIn = _loggedIn;
		html = Mustache.render(template, funData);
	}
	else {
		data.loggedIn = _loggedIn;
		html = Mustache.render(template, data);
	}

	$("#appContent").html(html);

	renderFunFilters();
}

/*********************************** 
	Render a large modal version of item with itemId
	Define html for card
    Render mustache template using html and data
    Insert template into div with specified id
***********************************/
function renderFunCardModal(itemId) {
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
function saveFunItem(itemId) {
	for(var i=0; i<funData.items.length; i++) {
		if(funData.items[i].id == itemId) {
			funData.items[i].saved = true;
			_savedItems.push(funData.items[i]);
			renderSaveMsgModal();
			renderFunCards();
		}
	}
}

/*********************************** 
    Remove item from global array of saved items
***********************************/
function removeFunItem(itemId) {
	var index;

	for(var i=0; i<funData.items.length; i++) {
		if(funData.items[i].id == itemId) {
			funData.items[i].saved = false;
			index = _savedItems.indexOf(funData.items[i]);
			_savedItems.splice(index,1);
			renderRemoveMsgModal();
			renderFunCards();
		}
	}
}

/*********************************** 
    Add item from global array of all items
***********************************/
function addFunToAll() {
	for(var i=0; i<funData.items.length; i++) {
		_allItems.push(funData.items[i]);
	}
}

/*********************************** 
    Define html for Log In modal
    Render mustache template using html and data
    Insert template into div with specified id
***********************************/
function renderLogInToSaveFunModal() {
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

function filterFun(filter) {
	var data = {};
	data.items = [];

	for(var i=0;i<funData.items.length;i++) {
		if(funData.items[i].subcategory === filter || funData.items[i].citySection === filter) {
			data.items.push(funData.items[i]);
		}
	}

	renderFunCards(data);
}






