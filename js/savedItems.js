/*********************************** 
    Save.js

	createCardRows()
	renderCards()
***********************************/
var _savedItems = [];

var saveData = {}; // JSON object to store all data passed into the mustache templates

// Array of Save objects
saveData.items = _savedItems;

saveData.subcategories = [
	{"id":"Adult Learning Centre"},
	{"id":"College"},
	{"id":"High School"},
	{"id":"Primary School"},
	{"id":"University"},
	{"id":"Restaurant"},
	{"id":"Grocery Store"},
	{"id":"Real Estate"},
	{"id":"Rentals"},
	{"id":"Civic"},
	{"id":"Health Care"},
	{"id":"Public"},
	{"id":"Store"},
	{"id":"Mall"},
	{"id":"Air"},
	{"id":"Bus"},
	{"id":"Limousine"},
	{"id":"Taxi"},
	{"id":"Co-op"},
	{"id": "Art"},
	{"id": "Festivals"},
	{ "id": "Movie Theatres"},
	{"id": "Nightlife"},
	{"id": "Recreation Centres"},
	{"id": "Sport"},
	{"id": "Tourism"},
	{"id":"Employment Agencies"},
	{"id":"Employment Services"},
];

saveData.locations = [
	{"id":"Assiniboine South"},
	{"id":"Inkster"},
	{"id":"Downtown"},
	{"id":"Fort Garry"},
	{"id":"Point Douglas"},
	{"id":"River Heights"},
	{"id":"Seven Oaks"},
	{"id":"St. Boniface"},
	{"id":"St. James-Assiniboia"},
	{"id":"St. Vital"},
	{"id":"Transcona"},
];

function renderSaveFilters() {
	var template, html;

	template = 	"<div class='row'>" +
					"<div class='col-sm-6'>" + 
						"<div class='panel panel-default panel-title'>" +
							"<h3>Saved Items</h3>" +
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
												"<li><a href='#' onclick='filterSave(\"{{id}}\")'>{{id}}</a></li>" +
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
												"<li><a href='#' onclick='filterSave(\"{{id}}\")'>{{id}}</a></li>" +
											"{{/locations}}" +
										"</ul>" +
									"</div>" +
								"</div>" +
							"</div>" +
				 		"</div>" +
					"</div>" +
				"</div>";

	html = Mustache.render(template,saveData);
	
	$("#appContent").prepend(html);
}


/*********************************** 
	Create rows of items 
	(2 items per row)
***********************************/
function createSaveCardRows(data) {
	var temp;

	if(data == null) {
		saveData.rows = [];
		for(var i=0; i<saveData.items.length; i+=2) {
			temp = {row:[]};
			for(var j=0; j<2; j++) {
				if(saveData.items[i+j])
					temp.row.push(saveData.items[i+j]);
			}
			saveData.rows.push(temp);
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
function renderSaveCards(data) {
	var template, html;
	
	_currPage = "save";

	renderNavbar();

	if(_savedItems.length==0) {
		template = "<center><div class='panel panel-empty'>" +
						"<h5>No saved items.</h5>" +
					"</div></center>";
	}
	else {

	createSaveCardRows(data);

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
													"<a href='#' data-toggle='modal' data-target='#cardModal' onclick='renderSaveCardModal(\"{{id}}\")'>" +
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
													"<a href='#' class='btn btn-default' data-toggle='modal' data-target='#pageModal' onclick='removeSaveItem(\"{{id}}\")'>" +
														"Remove <i class='fa fa-times fa-fw' aria-hidden='true'></i>" +
													"</a>" +
												"{{/loggedIn}}" +
												"{{^loggedIn}}" +
													"<a href='#' class='btn btn-default' data-toggle='modal' data-target='#pageModal' onclick='renderLogInToSaveSaveModal()'>" +
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
	}
	
	if(data == null) {
		saveData.loggedIn = _loggedIn;
		html = Mustache.render(template, saveData);
	}
	else {
		data.loggedIn = _loggedIn;
		html = Mustache.render(template, data);
	}

	$("#appContent").html(html);

	renderSaveFilters();
}

function renderSaveCardModal(itemId) {
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
    Remove item from global array of saved items
***********************************/
function removeSaveItem(itemId) {
	var index;

	for(var i=0; i<saveData.items.length; i++) {
		if(saveData.items[i].id == itemId) {
			saveData.items[i].saved = false;
			index = _savedItems.indexOf(saveData.items[i]);
			_savedItems.splice(index,1);
			renderRemoveMsgModal();
			renderSaveCards();
		}
	}
}

/*********************************** 
    Success message after item has been saved.
***********************************/
function renderSaveMsgModal() {
    var template, html;
    
	template =	"<div class='modal-body'>" +
					"<button type='button' class='close' data-dismiss='modal'>&times;</button>" +
					"Item has been added to Saved Items page." +
                "</div>";

    html = Mustache.render(template);

    $("#modalContent").html(html);
}

/*********************************** 
    Success message after item has been removed.
***********************************/
function renderRemoveMsgModal() {
    var template, html;
    
	template =	"<div class='modal-body'>" +
					"<button type='button' class='close' data-dismiss='modal'>&times;</button>" +
					"Item has been removed from Saved Items page." +
                "</div>";

    html = Mustache.render(template);

    $("#modalContent").html(html);
}

function filterSave(filter) {
	var data = {};
	data.items = [];

	for(var i=0;i<saveData.items.length;i++) {
		if(saveData.items[i].subcategory === filter || saveData.items[i].citySection === filter) {
			data.items.push(saveData.items[i]);
		}
	}

	renderSaveCards(data);
}