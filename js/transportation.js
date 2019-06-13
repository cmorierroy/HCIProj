/*********************************** 
    transportation.js
***********************************/
var transportationData = {};

transportationData.items = [
    {
		"id": "transport1",
        "category": "Transportation",
        "subcategory": "Bus",
        "name": "Winnipeg Transit",
        "address": "421 Osborne Street",
        "website": "http://winnipegtransit.com",
        "phone": "",
		"citySection": "Inkster",
		"image": "images/transportation.jpg"
    },
    {
		"id": "transport2",
        "category": "Transportation",
        "subcategory": "Bus",
        "name": "Greyhound Bus Depot",
        "address": "2015 Wellington Avenue, Winnipeg, MB R3H 1C1",
        "phone": "204-949-7777",
        "website": "https://www.greyhound.ca/en/locations/terminal.aspx?city=704098",
		"citySection": "St. James-Assiniboia",
		"image": "images/transportation.jpg"
    },
    {
		"id": "transport3",
        "category": "Transportation",
        "subcategory": "Taxi",
        "name": "Duffy’s Taxi",
        "website": "http://www.duffystaxi.com/",
        "phone": "204-925-0101",
        "address": "1100 Notre Dame Avenue, Winnipeg, MB R3E 0N8",
		"citySection": "Seven Oaks",
		"image": "images/transportation.jpg"
    },
    {
		"id": "transport4",
        "category": "Transportation",
        "subcategory": "Limousine",
        "name": "AAA VIP Limousine Service",
        "website": "https://www.aaaviplimos.com/",
        "phone": "204-990-7186",
        "address": "2000 Wellington Avenue, Winnipeg, MB R2P 0J9",
		"citySection": "Downtown",
		"image": "images/transportation.jpg"
    },
    {
		"id": "transport5",
        "category": "Transportation",
        "subcategory": "Air",
        "name": "Winnipeg James Armstrong Richardson International Airport",
        "address": "2000 Wellington Ave, Winnipeg, MB R3H 1C2",
        "phone": "204-987-9402",
        "website": "http://winnipegtransit.com",
		"citySection": "St. James-Assiniboia",
		"image": "images/transportation.jpg"
    },
    {
		"id": "transport6",
        "category": "Transportation",
        "subcategory": "Co-op",
        "name": "Peg City Car Co-op LTD.",
        "address": "460 Main St, Winnipeg, MB R3B 1B7",
        "phone": "204-793-3912",
        "website": "https://pegcitycarcoop.ca/",
		"citySection": "Downtown",
		"image": "images/transportation.jpg"
    },
    {
		"id": "transport7",
        "category": "Transportation",
        "subcategory": "Taxi",
        "name": "Unicity Taxi Ltd",
        "address": "340 Hargrave Pl, Winnipeg, MB R3C 0X5",
        "phone": "204-925-3131",
        "website": "https://pegcitycarcoop.ca/",
		"citySection": "Seven Oaks",
		"image": "images/transportation.jpg"
    },
    {
		"id": "transport8",
        "category": "Transportation",
        "subcategory": "Limousine",
        "name": "London Limos",
        "address": "1595 Erin St, Winnipeg, MB R3E 2T2",
        "phone": "204-488-9590",
        "website": "http://www.londonlimos.ca/",
		"citySection": "Inkster",
		"image": "images/transportation.jpg"
    },
    {
		"id": "transport9",
        "category": "Transportation",
        "subcategory": "Limousine",
        "name": "Sunshine Limo",
        "address": "",
        "phone": "204-667-5332",
        "website": "http://www.sunshinelimo.ca/",
		"citySection": "Assiniboine South",
		"image": "images/transportation.jpg"
    }
];

transportationData.subcategories = [
	{"id":"Air"},
	{"id":"Bus"},
	{"id":"Limousine"},
	{"id":"Taxi"},
	{"id":"Co-op"},
];

transportationData.locations = [
	{"id":"Assiniboine South"},
	{"id":"Downtown"},
	{"id":"Inkster"},
	{"id":"Seven Oaks"},
	{"id":"St. James-Assiniboia"},
];


function renderTransportationFilters() {
	var template, html;

	template = 	"<div class='row'>" +
					"<div class='col-sm-6'>" + 
						"<div class='panel panel-default panel-title'>" +
							"<h3>Transportation</h3>" +
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
												"<li><a href='#' onclick='filterTransportation(\"{{id}}\")'>{{id}}</a></li>" +
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
												"<li><a href='#' onclick='filterTransportation(\"{{id}}\")'>{{id}}</a></li>" +
											"{{/locations}}" +
										"</ul>" +
									"</div>" +
								"</div>" +
							"</div>" +
				 		"</div>" +
					"</div>" +
				"</div>";

	html = Mustache.render(template,transportationData);
	
	$("#appContent").prepend(html);
}


/*********************************** 
	Create rows of items 
	(2 items per row)
***********************************/
function createTransportationCardRows(data) {
	var temp;

	if(data == null) {
		transportationData.rows = [];
		for(var i=0; i<transportationData.items.length; i+=2) {
			temp = {row:[]};
			for(var j=0; j<2; j++) {
				if(transportationData.items[i+j])
					temp.row.push(transportationData.items[i+j]);
			}
			transportationData.rows.push(temp);
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
function renderTransportationCards(data) {
	var template, html;
	
	_currPage = "transportation";

    renderNavbar();

    createTransportationCardRows(data);

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
													"<a href='#' data-toggle='modal' data-target='#cardModal' onclick='renderTransportationCardModal(\"{{id}}\")'>" +
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
														"<a href='#' class='btn btn-default' data-toggle='modal' data-target='#pageModal' onclick='removeTransportationItem(\"{{id}}\")'>" +
															"Remove <i class='fa fa-times fa-fw' aria-hidden='true'></i>" +
														"</a>" +
													"{{/saved}}" +
													"{{^saved}}" +
														"<a href='#' class='btn btn-default btn-save-item' data-toggle='modal' data-target='#pageModal' onclick='saveTransportationItem(\"{{id}}\")'>" +
															"Save <i class='fa fa-star fa-fw' aria-hidden='true'></i>" +
														"</a>" +
													"{{/saved}}" +
												"{{/loggedIn}}" +
												"{{^loggedIn}}" +
													"<a href='#' class='btn btn-default' data-toggle='modal' data-target='#pageModal' onclick='renderLogInToSaveTransportationModal()'>" +
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
		transportationData.loggedIn = _loggedIn;
		html = Mustache.render(template, transportationData);
	}
	else {
		data.loggedIn = _loggedIn;
		html = Mustache.render(template, data);
	}

	$("#appContent").html(html);

	renderTransportationFilters();
}

/*********************************** 
	Render a large modal version of item with itemId
	Define html for card
    Render mustache template using html and data
    Insert template into div with specified id
***********************************/
function renderTransportationCardModal(itemId) {
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
function saveTransportationItem(itemId) {
	for(var i=0; i<transportationData.items.length; i++) {
		if(transportationData.items[i].id == itemId) {
			transportationData.items[i].saved = true;
			_savedItems.push(transportationData.items[i]);
			renderSaveMsgModal();
			renderTransportationCards();
		}
	}
}

/*********************************** 
    Remove item from global array of saved items
***********************************/
function removeTransportationItem(itemId) {
	var index;

	for(var i=0; i<transportationData.items.length; i++) {
		if(transportationData.items[i].id == itemId) {
			transportationData.items[i].saved = false;
			index = _savedItems.indexOf(transportationData.items[i]);
			_savedItems.splice(index,1);
			renderRemoveMsgModal();
			renderTransportationCards();
		}
	}
}

/*********************************** 
    Add item from global array of all items
***********************************/
function addTransportationToAll() {
	for(var i=0; i<transportationData.items.length; i++) {
		_allItems.push(transportationData.items[i]);
	}
}

/*********************************** 
    Define html for Log In modal
    Render mustache template using html and data
    Insert template into div with specified id
***********************************/
function renderLogInToSaveTransportationModal() {
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

function filterTransportation(filter) {
	var data = {};
	data.items = [];

	for(var i=0;i<transportationData.items.length;i++) {
		if(transportationData.items[i].subcategory === filter || transportationData.items[i].citySection === filter) {
			data.items.push(transportationData.items[i]);
		}
	}

	renderTransportationCards(data);
}




