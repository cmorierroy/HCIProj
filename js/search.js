var searchData = {};
searchData.items = [];

var all = {};
all.items = [
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
	{
		"id" : "food1",
		"category": "Food",
		"subcategory": "Restaurant",
		"name": "Stella’s Café",
		"address": "166 Osborne St",
		"phone": "1-204-453-8562",
		"website": "https://www.stellas.ca",
		"citySection": "River Heights",
		"image": "images/food.jpg"
	},
	{
		"id" : "food2",
		"category": "Food",
		"subcategory": "Restaurant",
		"name": "529 Wellington",
		"address": "529 Wellington Cres",
		"phone": "1-204-487-8325",
		"website": "https://www.529wellington.ca",
		"citySection": "River Heights",
		"image": "images/food.jpg"
	},
	{
		"id" : "food3",
		"category": "Food",
		"subcategory": "Restaurant",
		"name": "Red Top Drive Inn",
		"address": "219 St Mary’s Rd",
		"phone": "1-204-233-7943",
		"website": "https://www.redtopdriveinn.com",
		"citySection": "St. Vital",
		"image": "images/food.jpg"
	},
	{
		"id" : "food4",
		"category": "Food",
		"subcategory": "Restaurant",
		"name": "Nuburger",
		"address": "472 Stradbrook Ave",
		"phone": "1-204-888-1001",
		"website": "https://www.ilovenuburger.com",
		"citySection": "River Heights",
		"image": "images/food.jpg"
	},
	{
		"id" : "food5",
		"category": "Food",
		"subcategory": "Restaurant",
		"name": "Maxime’s Restaurant & Lounge",
		"address": "1131 St Mary’s Rd",
		"phone": "1-204-257-1521",
		"website": "https://www.maximesrestaurant.ca",
		"citySection": "St. Vital",
		"image": "images/food.jpg"
	},
	{
		"id" : "food6",
		"category": "Food",
		"subcategory": "Restaurant",
		"name": "Pizza Hotline",
		"address": "475 St Anne’s Rd",
		"phone": "1-204-222-2222",
		"website": "https://www.pizzahotline.ca",
		"citySection": "St. Vital",
		"image": "images/food.jpg"
	},
	{
		"id" : "food7",
		"category": "Food",
		"subcategory": "Grocery Store",
		"name": "Sobeys",
		"address": "2850 Pembina Hwy",
		"phone": "1-204-261-5047",
		"website": "https://www.sobeys.com",
		"citySection": "Fort Garry",
		"image": "images/food.jpg"
	},
	{
		"id" : "food8",
		"category": "Food",
		"subcategory": "Grocery Store",
		"name": "Costco",
		"address": "1499 Regent Ave W",
		"phone": "1-204-654-4214",
		"website": "https://www.costco.ca",
		"citySection": "Transcona",
		"image": "images/food.jpg"
	},
	{
		"id" : "food9",
		"category": "Food",
		"subcategory": "Grocery Store",
		"name": "CO-OP Grocery",
		"address": "77 Vermillion Rd",
		"phone": "1-204-256-1309",
		"website": "http://www.coopfood.ca",
		"citySection": "St. Vital",
		"image": "images/food.jpg"
	},
	{
		"id" : "food10",
		"category": "Food",
		"subcategory": "Grocery Store",
		"name": "Safeway",
		"address": "594 Mountain Ave",
		"phone": "1-204-589-2588",
		"website": "https://www.safeway.ca",
		"citySection": "Point Douglas",
		"image": "images/food.jpg"
	},
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
	},
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
	},
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

searchData.subcategories = [
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

searchData.locations = [
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

function searchAllItems() {
	var key, lowerName, lowerCat, lowerSub;
	searchData.items = [];

	key = $('#searchInput').val();
	key = key.toLowerCase().replace(/\s+/g, '');

	for (var i = 0; i < all.items.length; i++) {
		lowerName = all.items[i].name.toLowerCase().replace(/\s+/g, '');
		lowerCat = all.items[i].category.toLowerCase().replace(/\s+/g, '');
		lowerSub = all.items[i].subcategory.toLowerCase().replace(/\s+/g, '');

		if (lowerName === key || lowerCat === key || lowerSub === key) {
			searchData.items.push(all.items[i]);
		}
	}

	renderSearchCards();
}


function renderSearchFilters() {
	var template, html;

	template = 	"<div class='row'>" +
					"<div class='col-sm-6'>" + 
						"<div class='panel panel-default panel-title'>" +
							"<h3>Search Results</h3>" +
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
												"<li><a href='#' onclick='filterSearch(\"{{id}}\")'>{{id}}</a></li>" +
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
												"<li><a href='#' onclick='filterSearch(\"{{id}}\")'>{{id}}</a></li>" +
											"{{/locations}}" +
										"</ul>" +
									"</div>" +
								"</div>" +
							"</div>" +
				 		"</div>" +
					"</div>" +
				"</div>";

	html = Mustache.render(template,searchData);
	
	$("#appContent").prepend(html);
}


/*********************************** 
	Create rows of items 
	(2 items per row)
***********************************/
function createSearchCardRows(data) {
	var temp;

	if(data == null) {
		searchData.rows = [];
		for(var i=0; i<searchData.items.length; i+=2) {
			temp = {row:[]};
			for(var j=0; j<2; j++) {
				if(searchData.items[i+j])
					temp.row.push(searchData.items[i+j]);
			}
			searchData.rows.push(temp);
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
function renderSearchCards(data) {
	var template, html;
	
	_currPage = "search";

	renderNavbar();

	createSearchCardRows(data);

	if(searchData.items.length==0) {
		template = "<center><div class='panel panel-empty'>" +
						"<h5>There were no matches for your search.</h5>" +
					"</div></center>";
	}
	else {
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
													"<a href='#' data-toggle='modal' data-target='#cardModal' onclick='renderSearchCardModal(\"{{id}}\")'>" +
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
														"<a href='#' class='btn btn-default' data-toggle='modal' data-target='#pageModal' onclick='removeSearchItem(\"{{id}}\")'>" +
															"Remove <i class='fa fa-times fa-fw' aria-hidden='true'></i>" +
														"</a>" +
													"{{/saved}}" +
													"{{^saved}}" +
														"<a href='#' class='btn btn-default btn-save-item' data-toggle='modal' data-target='#pageModal' onclick='saveSearchItem(\"{{id}}\")'>" +
															"Save <i class='fa fa-star fa-fw' aria-hidden='true'></i>" +
														"</a>" +
													"{{/saved}}" +
												"{{/loggedIn}}" +
												"{{^loggedIn}}" +
													"<a href='#' class='btn btn-default' data-toggle='modal' data-target='#pageModal' onclick='renderLogInToSaveSearchModal()'>" +
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
		searchData.loggedIn = _loggedIn;
		html = Mustache.render(template, searchData);
	}
	else {
		data.loggedIn = _loggedIn;
		html = Mustache.render(template, data);
	}

	$("#appContent").html(html);

	renderSearchFilters();
}

/*********************************** 
	Render a large modal version of item with itemId
	Define html for card
    Render mustache template using html and data
    Insert template into div with specified id
***********************************/
function renderSearchCardModal(itemId) {
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
function saveSearchItem(itemId) {
	for(var i=0; i<searchData.items.length; i++) {
		if(searchData.items[i].id == itemId) {
			searchData.items[i].saved = true;
			_savedItems.push(searchData.items[i]);
			renderSaveMsgModal();
			renderSearchCards();
		}
	}
}

/*********************************** 
    Remove item from global array of saved items
***********************************/
function removeSearchItem(itemId) {
	var index;

	for(var i=0; i<searchData.items.length; i++) {
		if(searchData.items[i].id == itemId) {
			searchData.items[i].saved = false;
			index = _savedItems.indexOf(searchData.items[i]);
			_savedItems.splice(index,1);
			renderRemoveMsgModal();
			renderSearchCards();
		}
	}
}

/*********************************** 
    Define html for Log In modal
    Render mustache template using html and data
    Insert template into div with specified id
***********************************/
function renderLogInToSaveSearchModal() {
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

function filterSearch(filter) {
	var data = {};
	data.items = [];

	for(var i=0;i<searchData.items.length;i++) {
		if(searchData.items[i].subcategory === filter || searchData.items[i].citySection === filter) {
			data.items.push(searchData.items[i]);
		}
	}

	renderSearchCards(data);
}
