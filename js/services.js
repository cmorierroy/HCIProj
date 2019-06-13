/*********************************** 
    services.js
***********************************/
var servicesData = {};

servicesData.items = [
	{
        "id" : "services1",
        "category" : "Services", 
		"subcategory": "Civic", 
		"name" : "Manitoba Legislative Building", 
		"address" : "450 Broadway Ave", 
		"phone" : "1-204-945-5813", 
		"website" : "http://www.gov.mb.ca",
		"citySection" : "Downtown",
		"image": "images/services.jpeg"
	},
	{
        "id" : "services2",
		"category" : "Services", 
		"subcategory" : "Civic", 
		"name" : "City Hall", 
		"address" : "510 Main St", 
		"phone" : "1-877-311-4974", 
		"website" : "http://www.winnipeg.ca",
		"citySection" : "Downtown",
		"image": "images/services.jpeg"
	},
	{
        "id" : "services3",
		"category" : "Services", 
		"subcategory" : "Civic", 
		"name" : "Winnipeg Police Headquarters", 
		"address" : "245 Smith St", 
		"phone" : "1-204-986-6313", 
		"website" : "http://www.winnipeg.ca/police",
		"citySection" : "Downtown",
		"image": "images/services.jpeg"
	},
	{
        "id" : "services4",
		"category" : "Services", 
		"subcategory" : "Civic", 
		"name" : "RCMP", 
		"address" : "1091 Portage Ave", 
		"phone" : "1-204-983-5420", 
		"website" : "http://www.rcmp.gc.ca/detach/en/d/687",
		"citySection" : "Downtown",
		"image": "images/services.jpeg"
	},
	{
        "id" : "services5",
		"category" : "Services", 
		"subcategory" : "Civic", 
		"name" : "Winnipeg Fire Paramedic Service", 
		"address" : "1354 Border St", 
		"phone" : "1-204-986-6380", 
		"website" : "http://www.winnipeg.ca/fps/",
		"citySection" : "St. James-Assiniboia",
		"image": "images/services.jpeg"
	},
	{
        "id" : "services6",
		"category" : "Services", 
		"subcategory" : "Public", 
		"name" : "Millennium Library", 
		"address" : "251 Donald Street", 
		"phone" : "1-204-986-6450", 
		"website" : "http://wpl.winnipeg.ca/library/branchpages/branch.aspx?mill",
		"citySection" : "Downtown",
		"image": "images/services.jpeg"
	},
	{
        "id" : "services7",
		"category" : "Services", 
		"subcategory" : "Health Care", 
		"name" : "Health Sciences Centre Winnipeg", 
		"address" : "820 Sherbrook St", 
		"phone" : "1-204-787-3661", 
		"website" : "http://www.hsc.mb.ca",
		"citySection" : "Downtown",
		"image": "images/services.jpeg"
	},
	{
        "id" : "services8",
		"category" : "Services", 
		"subcategory" : "Health Care", 
		"name" : "Winnipeg Clinic", 
		"address": "425 St Mary Ave", 
		"phone" : "1-204-957-1900", 
		"website" : "http://www.winnipegclinic.com/",
		"citySection" : "Downtown",
		"image": "images/services.jpeg"
	},
	{
        "id" : "services9",
		"category" : "Services", 
		"subcategory" : "Health Care", 
		"name" : "St. Boniface Hospital", 
		"address" : "409 Tache Ave", 
		"phone" : "1-204-233-8563", 
		"website" : "http://www.sbgh.mb.ca",
		"citySection" : "St. Boniface",
		"image": "images/services.jpeg"
	},
	{
        "id" : "services10",
		"category" : "Services",
		"subcategory" : "Public", 
		"name" : "James Armstrong Richardson International Airport", 
		"address" : "2000 Wellington Ave", 
		"phone" : "1-204-987-9402", 
		"website" : "http://www.waa.ca",
		"citySection" : "St. James-Assiniboia",
		"image": "images/services.jpeg"
	},
];

servicesData.subcategories = [
	{"id":"Civic"},
	{"id":"Health Care"},
	{"id":"Public"},
];

servicesData.locations = [
	{"id":"Downtown"},
	{"id":"St. Boniface"},
	{"id":"St. James-Assiniboia"},
];

function renderServicesFilters() {
	var template, html;

	template = 	"<div class='row'>" +
					"<div class='col-sm-6'>" + 
						"<div class='panel panel-default panel-title'>" +
							"<h3>Services</h3>" +
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
												"<li><a href='#' onclick='filterServices(\"{{id}}\")'>{{id}}</a></li>" +
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
												"<li><a href='#' onclick='filterServices(\"{{id}}\")'>{{id}}</a></li>" +
											"{{/locations}}" +
										"</ul>" +
									"</div>" +
								"</div>" +
							"</div>" +
				 		"</div>" +
					"</div>" +
				"</div>";

	html = Mustache.render(template,servicesData);
	
	$("#appContent").prepend(html);
}


/*********************************** 
	Create rows of items 
	(2 items per row)
***********************************/
function createServicesCardRows(data) {
	var temp;

	if(data == null) {
		servicesData.rows = [];
		for(var i=0; i<servicesData.items.length; i+=2) {
			temp = {row:[]};
			for(var j=0; j<2; j++) {
				if(servicesData.items[i+j])
					temp.row.push(servicesData.items[i+j]);
			}
			servicesData.rows.push(temp);
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
function renderServicesCards(data) {
	var template, html;
	
	_currPage = "services";

	renderNavbar();

	createServicesCardRows(data);

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
													"<a href='#' data-toggle='modal' data-target='#cardModal' onclick='renderServicesCardModal(\"{{id}}\")'>" +
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
														"<a href='#' class='btn btn-default' data-toggle='modal' data-target='#pageModal' onclick='removeServicesItem(\"{{id}}\")'>" +
															"Remove <i class='fa fa-times fa-fw' aria-hidden='true'></i>" +
														"</a>" +
													"{{/saved}}" +
													"{{^saved}}" +
														"<a href='#' class='btn btn-default btn-save-item' data-toggle='modal' data-target='#pageModal' onclick='saveServicesItem(\"{{id}}\")'>" +
															"Save <i class='fa fa-star fa-fw' aria-hidden='true'></i>" +
														"</a>" +
													"{{/saved}}" +
												"{{/loggedIn}}" +
												"{{^loggedIn}}" +
													"<a href='#' class='btn btn-default' data-toggle='modal' data-target='#pageModal' onclick='renderLogInToSaveServicesModal()'>" +
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
		servicesData.loggedIn = _loggedIn;
		html = Mustache.render(template, servicesData);
	}
	else {
		data.loggedIn = _loggedIn;
		html = Mustache.render(template, data);
	}

	$("#appContent").html(html);

	renderServicesFilters();
}

/*********************************** 
	Render a large modal version of item with itemId
	Define html for card
    Render mustache template using html and data
    Insert template into div with specified id
***********************************/
function renderServicesCardModal(itemId) {
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
function saveServicesItem(itemId) {
	for(var i=0; i<servicesData.items.length; i++) {
		if(servicesData.items[i].id == itemId) {
			servicesData.items[i].saved = true;
			_savedItems.push(servicesData.items[i]);
			renderSaveMsgModal();
			renderServicesCards();
		}
	}
}

/*********************************** 
    Remove item from global array of saved items
***********************************/
function removeServicesItem(itemId) {
	var index;

	for(var i=0; i<servicesData.items.length; i++) {
		if(servicesData.items[i].id == itemId) {
			servicesData.items[i].saved = false;
			index = _savedItems.indexOf(servicesData.items[i]);
			_savedItems.splice(index,1);
			renderRemoveMsgModal();
			renderServicesCards();
		}
	}
}

/*********************************** 
    Add item from global array of all items
***********************************/
function addServicesToAll() {
	for(var i=0; i<servicesData.items.length; i++) {
		_allItems.push(servicesData.items[i]);
	}
}

/*********************************** 
    Define html for Log In modal
    Render mustache template using html and data
    Insert template into div with specified id
***********************************/
function renderLogInToSaveServicesModal() {
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

function filterServices(filter) {
	var data = {};
	data.items = [];

	for(var i=0;i<servicesData.items.length;i++) {
		if(servicesData.items[i].subcategory === filter || servicesData.items[i].citySection === filter) {
			data.items.push(servicesData.items[i]);
		}
	}

	renderServicesCards(data);
}

