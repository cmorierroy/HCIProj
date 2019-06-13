/*********************************** 
    navbar.js

    renderNavbar 
    renderLogInModal
    logIn
    renderSignUpModal
    signUp
    renderForgotPwdModal
    logOut
    renderLogOutMsg
***********************************/
var _loggedIn = false;
var _currPage = "home";

var navbarData = {}; // JSON object to store all data passed into the mustache templates

// Navbar is hidden by default
navbarData.hidden = true;

// User is not logged in or signed up by default
navbarData.loggedIn = _loggedIn; 
navbarData.signedUp = false;

// Array of objects displayed on the navbar
navbarData.categories = [
    {
        "category": "Education",
        "func": "renderEducationCards()",
        "icon": "graduation-cap",
    },
    {
        "category": "Food",
        "func": "renderFoodCards()",
        "icon": "cutlery",
    },
    {
        "category": "Fun",
        "func": "renderFunCards()",
        "icon": "ticket",
    },
    {
        "category": "Jobs",
        "func": "renderJobsCards()",
        "icon": "briefcase",
    },
    {
        "category": "Living",
        "func": "renderLivingCards()",
        "icon": "home",
    },
    {
        "category": "Services",
        "func": "renderServicesCards()",
        "icon": "wrench",
    },
    {
        "category": "Shop",
        "func": "renderShopCards()",
        "icon": "shopping-bag",
    },
    {
        "category": "Transportation",
        "func": "renderTransportationCards()",
        "icon": "car",
    },
];



/*********************************** 
    Define html for navbar
    Render mustache template using html and data
    Insert template into div with specified id
***********************************/
function renderNavbar() {
    var navbarTemplate, navbarHtml;

    navbarData.hidden = false;

    navbarTemplate =    "{{^hidden}}" +
                            "<nav class='navbar navbar-inverse navbar-fixed-top'>" +
                                "<div class='container' id='title'>" +
                                    "<h1>CITY COMPANION</h1>" +
                                "</div>" +
                                "<div class='container-fluid'>" +
                                    "<div class='navbar-header'>" +
                                        "<button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbarItems' aria-expanded='false'>" +
                                            "<span class='sr-only'>Toggle navigation</span>" +
                                            "<span class='icon-bar'></span>" +
                                            "<span class='icon-bar'></span>" +
                                            "<span class='icon-bar'></span>" +
                                        "</button>" +
                                        "<a class='navbar-brand' href='index.html'>Home</a>" +
                                    "</div>" +
                                    "<div class='collapse navbar-collapse' id='navbarItems'>" +
                                        "<ul class='nav navbar-nav'>" +
                                            "{{#categories}}" + 
                                                "<li><a href='#' onclick='{{func}}' id='{{category}}'>{{category}} <i class='fa fa-{{icon}} fa-fw' aria-hidden='true'></i></a></li>" +
                                            "{{/categories}}" +
                                        "</ul>" +
                                        "<ul class='nav navbar-nav navbar-right'>" +
                                            "{{^loggedIn}}" +
                                                "<li><a href='#' data-toggle='modal' data-target='#pageModal' onclick='renderLogInModal()'>Log In <i class='fa fa-sign-in fa-fw' aria-hidden='true'></i></a></li>" +
                                                "<li><a href='#' data-toggle='modal' data-target='#pageModal' onclick='renderSignUpModal()'>Sign Up <i class='fa fa-user-plus fa-fw' aria-hidden='true'></i></a></li>" +
                                            "{{/loggedIn}}" +
                                            "{{#loggedIn}}" +
                                                "<li><a href='#' onclick='renderSaveCards()'>Saved Items <i class='fa fa-star fa-fw' aria-hidden='true'></i></a></li>" +
                                                "<li><a href='#' data-toggle='modal' data-target='#pageModal' onclick='logOut()'>Log Out <i class='fa fa-sign-out fa-fw' aria-hidden='true'></i></a></li>" +
                                            "{{/loggedIn}}" +                                      
                                            "<form class='navbar-form navbar-right'>" +
                                                "<button class='btn btn-default' disabled>" +
                                                     "<i class='fa fa-map-marker' aria-hidden='true'></i>" +
                                                "</button>" +
                                                " " +
                                                "<input type='text' class='form-control' placeholder='Search' id='searchInput'>" +
                                                " " +
                                                "<button class='btn btn-default' onclick='searchAllItems()'>" +
                                                    "<i class='fa fa-search' aria-hidden='true'></i>" +
                                                "</button>" +
                                            "</form>" +
                                        "</ul>" +
                                    "</div>" +
                                "</div>" +
                            "</nav>" +
                        "{{/hidden}}";

    navbarHtml = Mustache.render(navbarTemplate, navbarData);

    $("#pageNavbar").html(navbarHtml);
}

/*********************************** 
    Define html for Log In modal
    Render mustache template using html and data
    Insert template into div with specified id
***********************************/
function renderLogInModal() {
    var modalTemplate, modalHtml;
    
    modalTemplate = "<div class='modal-header'>" +
                        "<button type='button' class='close' data-dismiss='modal'>&times;</button>" +
                        "<h4 class='modal-title'><strong>Log In</strong></h4>" +
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

    modalHtml = Mustache.render(modalTemplate);

    $("#modalContent").html(modalHtml);
}

/*********************************** 
    Function linked to Log In button in Log In modal
    Set loggedIn and signedUp values to true
    Re-load the navbar to change Log In and Sign Up  
    to Saved Items and Log Out
***********************************/
function logIn() {
    _loggedIn = true;
    navbarData.loggedIn = _loggedIn;
    navbarData.signedUp = true;

    renderNavbar();

    if(_currPage == "education") {
        renderEducationCards();
    }
    if(_currPage == "food") {
        renderFoodCards();
    }
    if(_currPage == "fun") {
        renderFunCards();
    }
    if(_currPage == "jobs") {
        renderJobsCards();
    }
    if(_currPage == "living") {
        renderLivingCards();
    }
    if(_currPage == "save") {
        renderSaveCards();
    }
    if(_currPage == "search") {
        renderSearchCards();
    }
    if(_currPage == "shop") {
        renderShopCards();
    }
    if(_currPage == "services") {
        renderServicesCards();
    }
    if(_currPage == "transportation") {
        renderTransportationCards();
    }
}

/*********************************** 
    Define html for Sign Up modal
    Render mustache template using html and data
    Insert template into div with specified id
***********************************/
function renderSignUpModal() {
    var modalTemplate, modalHtml;
    
    modalTemplate = "<div class='modal-header'>" +
                        "<button type='button' class='close' data-dismiss='modal'>&times;</button>" +
                        "<h4 class='modal-title'><strong>Sign Up</strong></h4>" +
                    "</div>" +
                    "<div class='modal-body'>" +
                        "<form>" +
                            "<div class='form-group'>" +
                                "<label for='email'>Email address:</label>" +
                                "<input type='email' class='form-control' id='signUpEmail'>" +
                            "</div>" +
                            "<div class='form-group'>" +
                                "<label for='pwd'>Password:</label>" +
                                "<input type='password' class='form-control' id='signUpPwd'>" +
                            "</div>" +
                            "<span style='display:inline'>" +
                                "<button type='button' class='btn btn-default' data-dismiss='modal' onclick='signUp()'>Sign Up</button>" +
                                "    " +
                                "<button type='button' class='btn btn-default' data-dismiss='modal'>Cancel</button>" +
                            "</span>" +
                        "</form>" +
                    "</div>";

    modalHtml = Mustache.render(modalTemplate);

    $("#modalContent").html(modalHtml);
}

/*********************************** 
    Function linked to Sign Up button in Sign Up modal
    Set signedUp to true
    Show the success message
***********************************/
function signUp() {
    navbarData.signedUp = true;
    renderSignUpMsg();
}

/*********************************** 
    Show sign up message in a modal
***********************************/
function renderSignUpMsg() {
    var modalTemplate, modalHtml;

    modalTemplate = "<div class='modal-body'>" +
                        "<button type='button' class='close' data-dismiss='modal'>&times;</button>" +
                        "{{#signedUp}}" +
                            "Successfully signed up! Please log in." +
                        "{{/signedUp}}" +
                    "</div>";

    modalHtml = Mustache.render(modalTemplate,navbarData);
    
    $("#modalContent").html(modalHtml);
}

/*********************************** 
    Define html for Forgot Password modal
    Render mustache template using html and data
    Insert template into div with specified id
***********************************/
function renderForgotPwdModal() {
    var modalTemplate, modalHtml;
    
    modalTemplate = "<div class='modal-header'>" +
                        "<button type='button' class='close' data-dismiss='modal'>&times;</button>" +
                        "<h4 class='modal-title'><strong>Forgot Password</strong></h4>" +
                    "</div>" +
                    "<div class='modal-body'>" +
                        "<form>" +
                            "<div class='form-group'>" +
                                "Send password reset email." +
                                "<br><br>" +
                                "<label for='email'>Email address:</label>" +
                                "<input type='email' class='form-control' id='forgotPwdEmail'>" +
                            "</div>" +
                            "<span style='display:inline'>" +
                                "<button type='button' class='btn btn-default' data-dismiss='modal' onclick='renderEmailSentMsg()'>Send</button>" +
                                "    " +
                                "<button type='button' class='btn btn-default' data-dismiss='modal'>Cancel</button>" +
                            "</span>" +
                        "</form>" +
                    "</div>";

    modalHtml = Mustache.render(modalTemplate);

    $("#modalContent").html(modalHtml);
}

/*********************************** 
    Function linked to Sent button in Forgot Password modal
    Show forgot password message in a modal
***********************************/
function renderEmailSentMsg() {
    var modalTemplate, modalHtml;

    modalTemplate = "<div class='modal-body'>" +
                        "<button type='button' class='close' data-dismiss='modal'>&times;</button>" +
                        "Password reset email sent."
                    "</div>";

    modalHtml = Mustache.render(modalTemplate,navbarData);
    
    $("#modalContent").html(modalHtml);
}

/*********************************** 
    Function linked to Log Out button on navbar
    Set loggedIn to false
    Show success message
    Re-load the navbar to change Saved Items and Log Out
    to Log In and Sign Up  
***********************************/
function logOut() {
    _loggedIn = false;
    navbarData.loggedIn = _loggedIn;
    renderLogOutMsg();
    renderNavbar();
    if(_currPage == "education") {
        renderEducationCards();
    }
    if(_currPage == "food") {
        renderFoodCards();
    }
    if(_currPage == "fun") {
        renderFunCards();
    }
    if(_currPage == "jobs") {
        renderJobsCards();
    }
    if(_currPage == "living") {
        renderLivingCards();
    }
    if(_currPage == "save") {
        renderSaveCards();
    }
    if(_currPage == "search") {
        renderSearchCards();
    }
    if(_currPage == "shop") {
        renderShopCards();
    }
    if(_currPage == "services") {
        renderServicesCards();
    }
    if(_currPage == "transportation") {
        renderTransportationCards();
    }
}

/*********************************** 
    Show log out message in a modal
***********************************/
function renderLogOutMsg() {
    var modalTemplate, modalHtml;

    modalTemplate = "<div class='modal-body'>" +
                        "<button type='button' class='close' data-dismiss='modal'>&times;</button>" +
                        "{{^loggedIn}}" +
                            "Successfully logged out." +
                        "{{/loggedIn}}" +
                    "</div>";

    modalHtml = Mustache.render(modalTemplate,navbarData);
    
    $("#modalContent").html(modalHtml);
}

 function renderLocationModal() {
    var modalTemplate, modalHtml;

    modalTemplate = "<div class='modal-header'>" +
                        "<button type='button' class='close' data-dismiss='modal'>&times;</button>" +
                        "<h4 class='modal-title'><strong>Select a city:</strong></h4>" +
                    "</div>" +
                    "<div class='modal-body'>" +
                        "<select>" +
                            "<option value='winnipeg'>Winnipeg, MB</option>" +
                        "</select>" +
                    "</div>";

    modalHtml = Mustache.render(modalTemplate,navbarData);

    $("#modalContent").html(modalHtml);      
 }

 function renderShareModal() {
    var modalTemplate, modalHtml;
    
    modalTemplate = "<div class='modal-header'>" +
                        "<button type='button' class='close' data-dismiss='modal'>&times;</button>" +
                        "Share" +
                    "</div>" +
                    "<div class='modal-body'>" +
                        "<div class='row' id='shareModal'>" +
                            "<div class='col-xs-3'>" +
                                "<a href='#' data-dismiss='modal'><i class='fa fa-envelope fa-4x' aria-hidden='true'></i></a>" +
                            "</div>" +
                            "<div class='col-xs-3'>" +
                                "<a href='#' data-dismiss='modal'><i class='fa fa-dropbox fa-4x' aria-hidden='true'></i></a>" +
                             "</div>" +
                             "<div class='col-xs-3'>" +
                                "<a href='#' data-dismiss='modal'><i class='fa fa-google-plus-square fa-4x' aria-hidden='true'></i></a>" +
                             "</div>" +
                            "<div class='col-xs-3'>" +
                                "<a href='#' data-dismiss='modal'><i class='fa fa-facebook-square fa-4x' aria-hidden='true'></i></a>" +
                            "</div>" +
                        "</div>" +
                    "</div>";

    modalHtml = Mustache.render(modalTemplate);
    
    $("#modalContent").html(modalHtml);
 }
