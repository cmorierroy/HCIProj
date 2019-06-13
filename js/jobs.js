/******************************
Category: Jobs
    Subcategories:
	-Job Bank
	-Employment Agency
	-Employment Services
	
******************************/
var jobsData = {};

jobsData.items = [

	{
		"id": "jobs1",
		"category": "Jobs",
		"subcategory": "Employment Services",
		"name": "Osborne Village Resource Centre",
		"address": "Unit 1 - 107 Osborne Street, Winnipeg, MB R3L 1Y4",
		"website": "http://www.ovrc.ca/",
		"phone": "204-989-6503",
		"citySection": "River Heights",
		"image": "images/jobs.jpg"
	},

	{
		"id": "jobs2",
		"category": "Jobs",
		"subcategory": "Employment Services",
		"name": "Opportunities for Employment Inc",
		"address": "300-294 Portage Avenue, Winnipeg, MB R3C 0B9",
		"phone": "204-925-3490",
		"website": "http://www.ofe.ca/",
		"citySection": "Downtown",
		"image": "images/jobs.jpg"
	},

	{
		"id": "jobs3",
		"category": "Jobs",
		"subcategory": "Employment Agency",
		"name": "Westwood Employment Link",
		"website": "http://www.westwoodemployment.com/",
		"phone": "204-453-8381",
		"address": "5 Donald Street #200, Winnipeg, MB R3L 2T4",
		"citySection": "River Heights",
		"image": "images/jobs.jpg"
	},

	{
		"id": "jobs4",
		"category": "Jobs",
		"subcategory": "Employment Agency",
		"name": "David Aplin Group",
		"website": "https://www.aaaviplimos.com/",
		"phone": "204-235-0000",
		"address": "1 Lombard Place #600, Winnipeg, MB R3B 0Y1",
		"citySection": "Downtown",
		"image": "images/jobs.jpg"
	},

];

jobsData.subcategories = [
	{"id":"Employment Agencies"},
	{"id":"Employment Services"},
];

jobsData.locations = [
	{"id":"Downtown"},
	{"id":"River Heights"},
];

function renderJobsFilters() {
	var template, html;

	template = 	"<div class='row'>" +
					"<div class='col-sm-6'>" + 
						"<div class='panel panel-default panel-title'>" +
							"<h3>Jobs</h3>" +
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
												"<li><a href='#' onclick='filterJobs(\"{{id}}\")'>{{id}}</a></li>" +
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
												"<li><a href='#' onclick='filterJobs(\"{{id}}\")'>{{id}}</a></li>" +
											"{{/locations}}" +
										"</ul>" +
									"</div>" +
								"</div>" +
							"</div>" +
				 		"</div>" +
					"</div>" +
				"</div>";

	html = Mustache.render(template,jobsData);
	
	$("#appContent").prepend(html);
}


/*********************************** 
	Create rows of items 
	(2 items per row)
***********************************/
function createJobsCardRows(data) {
	var temp;

	if(data == null) {
		jobsData.rows = [];
		for(var i=0; i<jobsData.items.length; i+=2) {
			temp = {row:[]};
			for(var j=0; j<2; j++) {
				if(jobsData.items[i+j])
					temp.row.push(jobsData.items[i+j]);
			}
			jobsData.rows.push(temp);
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
function renderJobsCards(data) {
	var template, html;
	
	_currPage = "jobs";

	renderNavbar();

	createJobsCardRows(data);

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
													"<a href='#' data-toggle='modal' data-target='#cardModal' onclick='renderJobsCardModal(\"{{id}}\")'>" +
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
														"<a href='#' class='btn btn-default' data-toggle='modal' data-target='#pageModal' onclick='removeJobsItem(\"{{id}}\")'>" +
															"Remove <i class='fa fa-times fa-fw' aria-hidden='true'></i>" +
														"</a>" +
													"{{/saved}}" +
													"{{^saved}}" +
														"<a href='#' class='btn btn-default btn-save-item' data-toggle='modal' data-target='#pageModal' onclick='saveJobsItem(\"{{id}}\")'>" +
															"Save <i class='fa fa-star fa-fw' aria-hidden='true'></i>" +
														"</a>" +
													"{{/saved}}" +
												"{{/loggedIn}}" +
												"{{^loggedIn}}" +
													"<a href='#' class='btn btn-default' data-toggle='modal' data-target='#pageModal' onclick='renderLogInToSaveJobsModal()'>" +
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
		jobsData.loggedIn = _loggedIn;
		html = Mustache.render(template, jobsData);
	}
	else {
		data.loggedIn = _loggedIn;
		html = Mustache.render(template, data);
	}

	$("#appContent").html(html);

	renderJobsFilters();
}

/*********************************** 
	Render a large modal version of item with itemId
	Define html for card
    Render mustache template using html and data
    Insert template into div with specified id
***********************************/
function renderJobsCardModal(itemId) {
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
function saveJobsItem(itemId) {
	for(var i=0; i<jobsData.items.length; i++) {
		if(jobsData.items[i].id == itemId) {
			jobsData.items[i].saved = true;
			_savedItems.push(jobsData.items[i]);
			renderSaveMsgModal();
			renderJobsCards();
		}
	}
}

/*********************************** 
    Remove item from global array of saved items
***********************************/
function removeJobsItem(itemId) {
	var index;

	for(var i=0; i<jobsData.items.length; i++) {
		if(jobsData.items[i].id == itemId) {
			jobsData.items[i].saved = false;
			index = _savedItems.indexOf(jobsData.items[i]);
			_savedItems.splice(index,1);
			renderRemoveMsgModal();
			renderJobsCards();
		}
	}
}

/*********************************** 
    Add item from global array of all items
***********************************/
function addJobsToAll() {
	for(var i=0; i<jobsData.items.length; i++) {
		_allItems.push(jobsData.items[i]);
	}
}

/*********************************** 
    Define html for Log In modal
    Render mustache template using html and data
    Insert template into div with specified id
***********************************/
function renderLogInToSaveJobsModal() {
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

function filterJobs(filter) {
	var data = {};
	data.items = [];

	for(var i=0;i<jobsData.items.length;i++) {
		if(jobsData.items[i].subcategory === filter || jobsData.items[i].citySection === filter) {
			data.items.push(jobsData.items[i]);
		}
	}

	renderJobsCards(data);
}






