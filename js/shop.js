/*********************************** 
    shop.js
***********************************/
var shopData = {};

shopData.items = [
	{
        "id" : "shop1",
		"category" : "Shop", 
		"subcategory" : "Mall", 
		"name" : "St. Vital Centre", 
		"address" : "1225 St Mary’s Rd", 
		"phone" : "1-204-257-5646", 
		"website" : "http://stvitalcentre.com",
		"citySection": "St. Vital",
        "image": "images/shop.jpg"
	},
	{
        "id" : "shop2",
		"category" : "Shop", 
		"subcategory" : "Mall", 
		"name" : "Polo Park", 
		"address" : "1485 Portage Ave", 
		"phone" : "1-204-784-2501", 
		"website" : "https://www.cfshops.com",
		"citySection": "St. James-Assiniboia",
        "image": "images/shop.jpg" 	
	},
	{
        "id" : "shop3",
		"category" : "Shop", 
		"subcategory" : "Store", 
		"name" : "Canadian Tire", 
		"address" : "Vermillion Rd", 
		"phone" : "1-204-254-5169", 
		"website" : "https://www.canadiantire.ca",
		"citySection": "St. Vital",
        "image": "images/shop.jpg"
	},
	{
        "id" : "shop4",
		"category" : "Shop", 
		"subcategory" : "Store", 
		"name" : "IKEA", 
		"address" : "500 Sterling Lyon Pkwy", 
		"phone" : "1-866-866-4532", 
		"website" : "https://www.ikea.com",
		"citySection": "Fort Garry",
        "image": "images/shop.jpg"
	},
	{
        "id" : "shop5",
		"category" : "Shop", 
		"subcategory" : "Store", 
		"name" : "BestBuy", 
		"address" : "810 St James St Unit A", 
		"phone" : "1-204-783-0976", 
		"website" : "https:www.bestbuy.ca",
		"citySection": "St. James-Assiniboia",
        "image": "images/shop.jpg"
	},
	{
        "id" : "shop6",
		"category" : "Shop", 
		"subcategory" : "Store", 
		"name" : "Michaels", 
		"address" : "1949 Bishop Grandin Blvd", 
		"phone" : "1-204-255-6122", 
		"website" : "https://www/locationsca.michaels.com",
		"citySection": "St. Vital",
        "image": "images/shop.jpg"
	},
	{
        "id" : "shop7",
		"category" : "Shop", 
		"subcategory" : "Mall", 
		"name" : "The Forks", 
		"address" : "105 Waterfront Dr", 
		"phone" : "1-888-942-6302", 
		"website" : "https://www.theforks.com",
		"citySection": "Downtown",
        "image": "images/shop.jpg" 
	},
	{
        "id" : "shop8",
		"category" : "Shop", 
		"subcategory" : "Store", 
		"name" : "MEC Winnipeg", 
		"address" : "303 Portage Ave", 
		"phone" : "1-204-934-4202", 
		"website" : "https://www.mec.ca",
		"citySection": "Downtown",
        "image": "images/shop.jpg"
	},
	{
        "id" : "shop9",
		"category" : "Shop", 
		"subcategory" : "Store", 
		"name" : "Olympia Cycle & Ski", 
		"address" : "326 St Mary’s Rd", 
		"phone" : "1-204-237-8909", 
		"website" : "https://www.olympia.ca",
		"citySection": "St. Vital",
        "image": "images/shop.jpg"
	},
	{
        "id" : "shop10",
		"category" : "Shop", 
		"subcategory" : "Store", 
		"name" : "Hudson’s Bay", 
		"address" : "1910 Pembina Hwy #1", 
		"phone" : "1-204-783-2112", 
		"website" : "https://www.thebay.com",
		"citySection": "St. Vital",
        "image": "images/shop.jpg"
	}
];

shopData.subcategories = [
	{"id":"Store"},
	{"id":"Mall"},
];

shopData.locations = [
	{"id":"Downtown"},
	{"id":"Fort Garry"},
	{"id":"St. James-Assiniboia"},
	{"id":"St. Vital"},
];

function renderShopFilters() {
	var template, html;

	template = 	"<div class='row'>" +
					"<div class='col-sm-6'>" + 
						"<div class='panel panel-default panel-title'>" +
							"<h3>Shop</h3>" +
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
												"<li><a href='#' onclick='filterShop(\"{{id}}\")'>{{id}}</a></li>" +
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
												"<li><a href='#' onclick='filterShop(\"{{id}}\")'>{{id}}</a></li>" +
											"{{/locations}}" +
										"</ul>" +
									"</div>" +
								"</div>" +
							"</div>" +
				 		"</div>" +
					"</div>" +
				"</div>";

	html = Mustache.render(template,shopData);
	
	$("#appContent").prepend(html);
}


/*********************************** 
	Create rows of items 
	(2 items per row)
***********************************/
function createShopCardRows(data) {
	var temp;

	if(data == null) {
		shopData.rows = [];
		for(var i=0; i<shopData.items.length; i+=2) {
			temp = {row:[]};
			for(var j=0; j<2; j++) {
				if(shopData.items[i+j])
					temp.row.push(shopData.items[i+j]);
			}
			shopData.rows.push(temp);
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
function renderShopCards(data) {
	var template, html;
	
	_currPage = "shop";

	renderNavbar();

	createShopCardRows(data);

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
													"<a href='#' data-toggle='modal' data-target='#cardModal' onclick='renderShopCardModal(\"{{id}}\")'>" +
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
														"<a href='#' class='btn btn-default' data-toggle='modal' data-target='#pageModal' onclick='removeShopItem(\"{{id}}\")'>" +
															"Remove <i class='fa fa-times fa-fw' aria-hidden='true'></i>" +
														"</a>" +
													"{{/saved}}" +
													"{{^saved}}" +
														"<a href='#' class='btn btn-default btn-save-item' data-toggle='modal' data-target='#pageModal' onclick='saveShopItem(\"{{id}}\")'>" +
															"Save <i class='fa fa-star fa-fw' aria-hidden='true'></i>" +
														"</a>" +
													"{{/saved}}" +
												"{{/loggedIn}}" +
												"{{^loggedIn}}" +
													"<a href='#' class='btn btn-default' data-toggle='modal' data-target='#pageModal' onclick='renderLogInToSaveShopModal()'>" +
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
		shopData.loggedIn = _loggedIn;
		html = Mustache.render(template, shopData);
	}
	else {
		data.loggedIn = _loggedIn;
		html = Mustache.render(template, data);
	}

	$("#appContent").html(html);

	renderShopFilters();
}

/*********************************** 
	Render a large modal version of item with itemId
	Define html for card
    Render mustache template using html and data
    Insert template into div with specified id
***********************************/
function renderShopCardModal(itemId) {
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
function saveShopItem(itemId) {
	for(var i=0; i<shopData.items.length; i++) {
		if(shopData.items[i].id == itemId) {
			shopData.items[i].saved = true;
			_savedItems.push(shopData.items[i]);
			renderSaveMsgModal();
			renderShopCards();
		}
	}
}

/*********************************** 
    Remove item from global array of saved items
***********************************/
function removeShopItem(itemId) {
	var index;

	for(var i=0; i<shopData.items.length; i++) {
		if(shopData.items[i].id == itemId) {
			shopData.items[i].saved = false;
			index = _savedItems.indexOf(shopData.items[i]);
			_savedItems.splice(index,1);
			renderRemoveMsgModal();
			renderShopCards();
		}
	}
}

/*********************************** 
    Add item from global array of all items
***********************************/
function addShopToAll() {
	for(var i=0; i<shopData.items.length; i++) {
		_allItems.push(shopData.items[i]);
	}
}

/*********************************** 
    Define html for Log In modal
    Render mustache template using html and data
    Insert template into div with specified id
***********************************/
function renderLogInToSaveShopModal() {
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

function filterShop(filter) {
	var data = {};
	data.items = [];

	for(var i=0;i<shopData.items.length;i++) {
		if(shopData.items[i].subcategory === filter || shopData.items[i].citySection === filter) {
			data.items.push(shopData.items[i]);
		}
	}

	renderShopCards(data);
}
