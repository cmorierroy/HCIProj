var livingData = {};

livingData.items = [
    {
		"id": "living1",
        "category": "Living",
        "subcategory": "Real Estate",
        "name": "Royal LePage Top Producers",
        "address": "1549 St Mary’s Rd",
        "phone": "1-204-989-6900",
        "website": "https://www.roysllepagetopproducers.com",
        "citySection": "St. Vital",
        "image": "images/living.jpeg"

    },
    {
		"id": "living2",
        "category": "Living",
        "subcategory": "Real Estate",
        "name": "Roger Burns Century 21 Bachman Acs",
        "address": "360 McMillan Ave",
        "phone": "1-204-453-7653",
        "website": "https://www.century21.ca/roger.burns",
        "citySection": "St. Vital",
        "image": "images/living.jpeg"

    },
    {
		"id": "living3",
        "category": "Living",
        "subcategory": "Rentals",
        "name": "One Bedroom Apartment",
        "address": "1035 Monroe Avenue",
        "phone": "1-204-935-9355",
        "website": "https://www.kijiji.ca/v-1-bedroom-apartments-condos/winnipeg/1035-monroe-avenue-1-bedroom-apartment-for-rent/1313376147",
        "citySection": "Transcona",
        "image": "images/living.jpeg"
    },
];

livingData.subcategories = [
	{"id":"Real Estate"},
	{"id":"Rentals"},
];

livingData.locations = [
	{"id":"Transcona"},
	{"id":"St. Vital"},
];


function renderLivingFilters() {
	var template, html;

	template = 	"<div class='row'>" +
					"<div class='col-sm-6'>" + 
						"<div class='panel panel-default panel-title'>" +
							"<h3>Living</h3>" +
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
												"<li><a href='#' onclick='filterLiving(\"{{id}}\")'>{{id}}</a></li>" +
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
												"<li><a href='#' onclick='filterLiving(\"{{id}}\")'>{{id}}</a></li>" +
											"{{/locations}}" +
										"</ul>" +
									"</div>" +
								"</div>" +
							"</div>" +
				 		"</div>" +
					"</div>" +
				"</div>";

	html = Mustache.render(template,livingData);
	
	$("#appContent").prepend(html);
}


/*********************************** 
	Create rows of items 
	(2 items per row)
***********************************/
function createLivingCardRows(data) {
	var temp;

	if(data == null) {
		livingData.rows = [];
		for(var i=0; i<livingData.items.length; i+=2) {
			temp = {row:[]};
			for(var j=0; j<2; j++) {
				if(livingData.items[i+j])
					temp.row.push(livingData.items[i+j]);
			}
			livingData.rows.push(temp);
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
function renderLivingCards(data) {
    var template, html;
	
	_currPage = "living";

    renderNavbar();

    createLivingCardRows(data);

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
													"<a href='#' data-toggle='modal' data-target='#cardModal' onclick='renderLivingCardModal(\"{{id}}\")'>" +
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
														"<a href='#' class='btn btn-default' data-toggle='modal' data-target='#pageModal' onclick='removeLivingItem(\"{{id}}\")'>" +
															"Remove <i class='fa fa-times fa-fw' aria-hidden='true'></i>" +
														"</a>" +
													"{{/saved}}" +
													"{{^saved}}" +
														"<a href='#' class='btn btn-default btn-save-item' data-toggle='modal' data-target='#pageModal' onclick='saveLivingItem(\"{{id}}\")'>" +
															"Save <i class='fa fa-star fa-fw' aria-hidden='true'></i>" +
														"</a>" +
													"{{/saved}}" +
												"{{/loggedIn}}" +
												"{{^loggedIn}}" +
													"<a href='#' class='btn btn-default' data-toggle='modal' data-target='#pageModal' onclick='renderLogInToSaveLivingModal()'>" +
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
		livingData.loggedIn = _loggedIn;
		html = Mustache.render(template, livingData);
	}
	else {
		data.loggedIn = _loggedIn;
		html = Mustache.render(template, data);
	}

	$("#appContent").html(html);

	renderLivingFilters();
}

/*********************************** 
	Render a large modal version of item with itemId
	Define html for card
    Render mustache template using html and data
    Insert template into div with specified id
***********************************/
function renderLivingCardModal(itemId) {
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
function saveLivingItem(itemId) {
	for(var i=0; i<livingData.items.length; i++) {
		if(livingData.items[i].id == itemId) {
			livingData.items[i].saved = true;
			_savedItems.push(livingData.items[i]);
			renderSaveMsgModal();
			renderLivingCards();
		}
	}
}

/*********************************** 
    Remove item from global array of saved items
***********************************/
function removeLivingItem(itemId) {
	var index;

	for(var i=0; i<livingData.items.length; i++) {
		if(livingData.items[i].id == itemId) {
			livingData.items[i].saved = false;
			index = _savedItems.indexOf(livingData.items[i]);
			_savedItems.splice(index,1);
			renderRemoveMsgModal();
			renderLivingCards();
		}
	}
}

/*********************************** 
    Add item from global array of all items
***********************************/
function addLivingToAll() {
	for(var i=0; i<livingData.items.length; i++) {
		_allItems.push(livingData.items[i]);
	}
}

/*********************************** 
    Define html for Log In modal
    Render mustache template using html and data
    Insert template into div with specified id
***********************************/
function renderLogInToSaveLivingModal() {
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

function filterLiving(filter) {
	var data = {};
	data.items = [];

	for(var i=0;i<livingData.items.length;i++) {
		if(livingData.items[i].subcategory === filter || livingData.items[i].citySection === filter) {
			data.items.push(livingData.items[i]);
		}
	}

	renderLivingCards(data);
}






