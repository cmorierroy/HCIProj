function renderAboutPage() {
    var template, html;

    template =  "<div class='panel panel-default panel-about'>" +
                    "<h1>About Us</h1>" +
                    "<p>We are three university students that have been tasked with designing a website." +
                    "<br>Our design team is commited to doing our utmost in order to receive a passing grade." +
                    "<br>We hope that our dedication is apparent to the graders and that they will be kind to us. " +
                    "Our GPAs thank you for your time.</p>" +
                "</div>" +
                "<div class='panel panel-about'>" +
                    "<h1>The Team</h1><br><br>" +
                    "<div class='row'>" +
                        "<div class='col-sm-4'>" +
                            "<img src='images/mj_bio_pic.jpg' class='img-about'>" +
                            "<br>" +
                            "<h4><b>Mary Jo Ramos</b></h4>" +
                            "<br>" +
                            "<p>24 year old Computer Science student <br> who loves food, shopping, and video games.</p>" +
                        "</div>" +
                        "<div class='col-sm-4'>" +
                            "<img src='images/ced_bio_pic.jpg' class='img-about'>" +
                            "<br>" +
                            "<h4><b>Cedric Morier-Roy</b></h4>" +
                            "<br>" +
                            "<p>Computer Science student in existence since 1993 <br> who enjoys making music, playing soccer, and cooking. </p>" +
                        "</div>" +
                        "<div class='col-sm-4'>" +
                            "<img src='images/dow_bio_pic.jpg' class='img-about'>" +
                            "<br>" +
                            "<h4><b>Dow Griffith</b></h4>" +
                            "<br>" +
                            "<p>24 year old doof who should be doing real work <br> instead of making this stuff up.</p>" +
                        "</div>" +
                    "</div>" +
                "</div>";

    html = Mustache.render(template);

    $("#appContent").html(html);
}

function renderContactPage() {
    var template, html;

    template =  "<div class='panel panel-default panel-contact'>" +
                    "<center><h1>Contact Us</h1></center>" +
                    "<p>If there are any questions, concerns, comments or bugs please do not hesitate to contact anyone of our 24/7* support staff.</p>" +
                    "<p>Dow Griffith: griffi16@myumanitoba.ca</p>" +
                    "<p>Cedric Morier-Roy: morierrc@myumanitoba.ca</p>" +
                    "<p>Mary Jo Ramos: umramo43@myumanitoba.ca</p>" +
                    "<p>*Support staff is not paid and therefore is not motivated to provide support late at night</p>" +
                "</div>";

    html = Mustache.render(template);

    $("#appContent").html(html);
}

function renderBusinessPage() {
    var template, html;

    template =  "<div class='panel panel-default panel-contact'>" +
                    "<center><h1>Add Business</h1></center>" +
                    "<p>Submit your business or event to be added to this site. Provide an email for future contact, the name of your" +
                    "submission and a description for further details. Note that  all submissions are subject to review.</p>" +
                    "<form>" +
                        "<div class = 'form-group'>" +
                            "<label for = 'email'>Email address: </label>" +
                            "<input type = 'email' class = 'form-control' id='email'>" +
                        "</div>" +
                        "<div class = 'form-group'>" +
                            "<label for = 'bName'>Business name: </label>" +
                            "<input type = 'bName' class = 'form-control' id='bName'>" +
                        "</div>" +
                        "<div class = 'form-group'>" +
                            "<label for = 'desc'>Description: </label>" +
                            "<textarea class = 'form-control' rows = '6' id = 'description'></textarea>" +
                         "</div>" +
                        "<button type='submit' class='btn btn-default'>Submit</button>" +
                    "</form>" +
                "</div>";

    html = Mustache.render(template);

    $("#appContent").html(html);
}
