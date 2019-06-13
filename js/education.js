/******************************
Category: Education
******************************/
var educationData = {};

educationData.items = [
{ 
	"id": "edu1",
	"category": "Education",
	"subcategory": "University",
	"name": "University of Manitoba",
	"address": "66 Chancellors Circle, Winnipeg, MB R3T 2N2",
	"website": "http://umanitoba.ca/",
	"phone": "1-800-432-1960",
	"citySection": "Fort Garry",
	"image": "images/education.jpg"
},
{ 
	"id": "edu2",
	"category": "Education",
	"subcategory": "University",
	"name": "Universite de Saint-Boniface",
	"address": "200 Avenue de la Cathedrale, Winnipeg, MB R2H 0H7",
	"phone": "204-233-0210",
	"website": "https://ustboniface.ca/",
	"citySection": "St. Boniface",
	"image": "images/education.jpg"
},
{ 
	"id": "edu3",	
	"category": "Education",
	"subcategory": "University",
	"name": "University of Winnipeg",
	"website": "https://www.uwinnipeg.ca/",
	"phone": "204-786-7811",
	"address": "515 Portage Ave, Winnipeg, MB R3B 2E9",
	"citySection": "Downtown",
	"image": "images/education.jpg"
},
{ 
	"id": "edu4",
	"category": "Education",
	"subcategory": "High School",
	"name": "Garden City Collegiate",
	"website": "http://www.7oaks.org/school/gardencity/Pages/default.aspx",
	"phone": "204-339-2058",
	"address": "711 Jefferson Avenue, Winnipeg, MB R2V 0P7",
	"citySection": "Seven Oaks",
	"image": "images/education.jpg"
},
{ 
	"id": "edu5",
	"category": "Education",
	"subcategory": "Primary School",
	"name": "St. John's-Ravenscourt",
	"address": "400 South Drive, Winnipeg, MB R3T 3K5",
	"phone":"204-477-2485",
	"website": "https://www.sjr.mb.ca/page",
	"citySection": "Fort Garry",  
	"image": "images/education.jpg"
},
{ 
	"id": "edu6",
	"category": "Education",
	"subcategory": "College",
	"name": "Red River College",
	"address": "2055 Notre Dame Avenue, Winnipeg, MB R3H 0J9",
	"phone":"204-632-3960",
	"website": "http://www.rrc.ca/",
	"citySection": "St. James-Assiniboia",  
	"image": "images/education.jpg"
},
{ 
	"id": "edu7",
	"category": "Education",
	"subcategory": "College",
	"name": "Robertson College",
	"address": "433 Main Street, Winnipeg, MB R3B 1B3",
	"phone":"204-943-5661",
	"website": "http://www.robertsoncollege.com/",
	"citySection": "Downtown",  
	"image": "images/education.jpg"
},
{ 
	"id": "edu8",
	"category": "Education",
	"subcategory": "Tutoring Centre",
	"name": "Sylvan Learning of West Winnipeg",
	"address": "530 Kenaston Blvd #108, Winnipeg, MB R3N 1Z4",
	"phone":"204-938-7323",
	"website": "https://locations.sylvanlearning.com/ca/west-winnipeg-mb?utm_source=google&utm_medium=local&utm_campaign=google-local",
	"citySection": "River Heights",  
	"image": "images/education.jpg"
},
{ 
	"id": "edu9",
	"category": "Education",
	"subcategory": "Adult Learning Centre",
	"name": "Winnipeg Adult Education Centre",
	"address": "310 Vaughan Street, Winnipeg, MB R3B 2N8",
	"phone": "204-947-1674",
	"website": "https://www.winnipegsd.ca/schools/WinnipegAdultEdCentre/Pages/default.aspx",
	"citySection": "Downtown",  
	"image": "images/education.jpg"
},
{ 
	"id": "edu10",
	"category": "Education",
	"subcategory": "Adult Learning Centre",
	"name": "Winnipeg Adult Education Centre",
	"address": "310 Vaughan Street, Winnipeg, MB R3B 2N8",
	"phone": "204-947-1674",
	"website": "https://www.winnipegsd.ca/schools/WinnipegAdultEdCentre/Pages/default.aspx",
	"citySection": "Downtown", 
	"image": "images/education.jpg" 
},
];

educationData.subcategories = [
	{"id":"Adult Learning Centre"},
	{"id":"College"},
	{"id":"High School"},
	{"id":"Primary School"},
	{"id":"University"}
];

educationData.locations = [
	{"id":"Downtown"},
	{"id":"Fort Garry"},
	{"id":"River Heights"},
	{"id":"Seven Oaks"},
	{"id":"St. James-Assiniboia"}
];

function renderEducationFilters() {
	var template, html;

	template = 	"<div class='row'>" +
					"<div class='col-sm-6'>" + 
						"<div class='panel panel-default panel-title'>" +
							"<h3>Education</h3>" +
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
												"<li><a href='#' onclick='filterEducation(\"{{id}}\")'>{{id}}</a></li>" +
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
												"<li><a href='#' onclick='filterEducation(\"{{id}}\")'>{{id}}</a></li>" +
											"{{/locations}}" +
										"</ul>" +
									"</div>" +
								"</div>" +
							"</div>" +
				 		"</div>" +
					"</div>" +
				"</div>";

	html = Mustache.render(template,educationData);
	
	$("#appContent").prepend(html);
}


/*********************************** 
	Create rows of items 
	(2 items per row)
***********************************/
function createEducationCardRows(data) {
	var temp;

	if(data == null) {
		educationData.rows = [];
		for(var i=0; i<educationData.items.length; i+=2) {
			temp = {row:[]};
			for(var j=0; j<2; j++) {
				if(educationData.items[i+j])
					temp.row.push(educationData.items[i+j]);
			}
			educationData.rows.push(temp);
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
function renderEducationCards(data) {
	var template, html;
	
	_currPage = "education";

	renderNavbar();

	createEducationCardRows(data);

	template = 	"{{#rows}}" +
						"<div class='row'>" +
							"{{#row}}" +
								"<div class='col-sm-6'>" +
									"<div class='panel panel-default' id='card-{{id}}'>" +
										"<div class='panel-heading panel-heading-card'>" +
											"<div class='row'>" +
												"<div class='col-xs-8' id='header-{{id}}'>" +
													"<h4><strong>{{name}}</strong></h4>" +
													"{{category}} / " +
													"{{subcategory}} " +
												"</div>" +
												"<div class='col-xs-4 col-card-expand'>" +
													"<a href='#' data-toggle='modal' data-target='#cardModal' onclick='renderEducationCardModal(\"{{id}}\")'>" +
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
														"<a href='#' class='btn btn-default' data-toggle='modal' data-target='#pageModal' onclick='removeEducationItem(\"{{id}}\")'>" +
															"Remove <i class='fa fa-times fa-fw' aria-hidden='true'></i>" +
														"</a>" +
													"{{/saved}}" +
													"{{^saved}}" +
														"<a href='#' class='btn btn-default btn-save-item' data-toggle='modal' data-target='#pageModal' onclick='saveEducationItem(\"{{id}}\")'>" +
															"Save <i class='fa fa-star fa-fw' aria-hidden='true'></i>" +
														"</a>" +
													"{{/saved}}" +
												"{{/loggedIn}}" +
												"{{^loggedIn}}" +
													"<a href='#' class='btn btn-default' data-toggle='modal' data-target='#pageModal' onclick='renderLogInToSaveEducationModal()'>" +
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
		educationData.loggedIn = _loggedIn;
		html = Mustache.render(template, educationData);
	}
	else {
		data.loggedIn = _loggedIn;
		html = Mustache.render(template, data);
	}

	$("#appContent").html(html);

	renderEducationFilters();
}

/*********************************** 
	Render a large modal version of item with itemId
	Define html for card
    Render mustache template using html and data
    Insert template into div with specified id
***********************************/
function renderEducationCardModal(itemId) {
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
function saveEducationItem(itemId) {
	for(var i=0; i<educationData.items.length; i++) {
		if(educationData.items[i].id == itemId) {
			educationData.items[i].saved = true;
			_savedItems.push(educationData.items[i]);
			renderSaveMsgModal();
			renderEducationCards();
		}
	}
}

/*********************************** 
    Remove item from global array of saved items
***********************************/
function removeEducationItem(itemId) {
	var index;

	for(var i=0; i<educationData.items.length; i++) {
		if(educationData.items[i].id == itemId) {
			educationData.items[i].saved = false;
			index = _savedItems.indexOf(educationData.items[i]);
			_savedItems.splice(index,1);
			renderRemoveMsgModal();
			renderEducationCards();
		}
	}
}

/*********************************** 
    Add item from global array of all items
***********************************/
function addEducationToAll() {
	for(var i=0; i<educationData.items.length; i++) {
		_allItems.push(educationData.items[i]);
	}
}

/*********************************** 
    Define html for Log In modal
    Render mustache template using html and data
    Insert template into div with specified id
***********************************/
function renderLogInToSaveEducationModal() {
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

function filterEducation(filter) {
	var data = {};
	data.items = [];

	for(var i=0;i<educationData.items.length;i++) {
		if(educationData.items[i].subcategory === filter || educationData.items[i].citySection === filter) {
			data.items.push(educationData.items[i]);
		}
	}

	renderEducationCards(data);
}




