<!DOCTYPE html>
<html lang="en">
		<head>
		<title>Final Year Project</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
		<link href="assets/css/style_light.css" rel="stylesheet" type="text/css">
        <link href="assets/css/typography.css" rel="stylesheet" type="text/css">
        <link href="assets/css/preloader.css" rel="stylesheet" type="text/css">
        <link href="assets/css/social.css" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="assets/css/animate.css">
        <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700,400,300' rel='stylesheet' type='text/css'>
</head>
<body>
<div id="preloader">
    <div class="loading">
    <!-- We make this div spin -->
        <div class="spinner">
            <!-- Mask of the quarter of circle -->
            <div class="mask">
                <!-- Inner masked circle -->
                <div class="maskedCircle"></div>
            </div>
        </div>
    </div>
</div>
<div id="navbar">
	<a href="#" id="drawer-toggle"><img src="assets/images/logo.png" alt="University of Kent logo" /></a>
    <ul id="nav">
    	<li><a href="facts.html">10 Facts</a></li>
    	<li><a href="index.php" class="active">Explore</a></li>
        <li><a href="social.php">Social</a></li>
    </ul>
</div>
<div id="leftnav">
    <button id="label-button" class="slide" type="button"><i class="fa fa-map-marker"></i></button>
    <button id="event-button" class="slide" type="button"><i class="fa fa-calendar"></i></button>
    <button id="investment-button" class="slide" type="button"><i class="fa fa-bar-chart-o"></i></button>
    <button id="search-button" class="slide" type="button"><i class="fa fa-search"></i></button>
    <div id="leftnav-footer">
    	<button id="info-button" class="slide" type="button"><i class="fa fa-cogs"></i></button>
    </div>
</div>
<!--<div id="leftdrawer">
	<h2>Markers</h2>
    <ul>
    	<li><a href="#" class="unchecked" id="labeltoggle"><i class="fa fa-map-marker"></i>Locations</a></li>
        <li><a href="#" class="unchecked" id="subjecttoggle"><i class="fa fa-book"></i>Subject Areas</a></li>
        <li><a href="#" class="unchecked" id="accommodationtoggle"><i class="fa fa-building-o"></i>Accomodation</a></li>
        <li><a href="#" class="unchecked" id="foodtoggle"><i class="fa fa-cutlery"></i>Food &amp; Drink</a></li>
        <li><a href="#" class="unchecked" id="parkingtoggle"><i class="fa fa-road"></i>Parking</a></li>
        <li><a href="#" class="unchecked" id="bustoggle"><i class="fa fa-ticket"></i>Bus routes</a></li>
    </ul>
</div>-->
<div class="slide-drawer primary">
	<div id="label-panel">
        <h2>Places</h2>
        <h3>Markers</h3>
        <ul>
            <li><a href="#" class="toggle" id="labelall">Show all</a></li>
            <li><a href="#" class="toggle" id="labeltoggle">Building names</a></li>
            <li><a href="#" class="toggle orange" id="accommodationtoggle">Accomodation</a></li>
            <li><a href="#" class="toggle green" id="foodtoggle">Food &amp; Drink</a></li>
            <li><a href="#" class="toggle red" id="shoptoggle">Shops</a></li>
            <li><a href="#" class="toggle blue" id="visitorparking">Visitor parking</a></li>
            <li><a href="#" class="toggle purple" id="permitparking">Permit holder parking</a></li>
            <!--<li><a href="#" class="toggled blue" id="tweettoggle">Tweets</a></li>-->
        </ul>
        <h3>Transport</h3>
        <ul>
            <li><a href="#" class="toggle">Bus routes</a></li>
            <li><a href="#" class="toggle">Bus stops</a></li>
            <li><a href="#" class="toggle">Cycle routes</a></li>
            <li><a href="#" class="toggle">Bike racks</a></li>
        </ul>
    </div>
    <div id="search-panel">
        <h2>Search</h2>
        <ul>
        	<li><a href="#" id="a-z"><i class="fa fa-chevron-right"></i>Buildings A - Z</a></li>
            <li><a href="#" id="subjects"><i class="fa fa-chevron-right"></i>Buildings by subject</a></li>
            <li><a href="#" id="community"><i class="fa fa-chevron-right"></i>Community buildings</a></li>
            <li><a href="#" id="admin"><i class="fa fa-chevron-right"></i>Admin buildings</a></li>
            <li><a href="#" id="accommodation"><i class="fa fa-chevron-right"></i>Accommodation buildings</a></li>
            <li><a href="#" id="maintenance"><i class="fa fa-chevron-right"></i>Maintenance buildings</a></li>
        </ul>
    </div>
    <div id="investment-panel">
        <h2>Investment</h2>
        <h3>Data overlays</h3>
        <ul>
            <li><a href="#" class="toggle blue" id="investmenttoggle">Show latest investments</a></li>
            <li><a href="#" class="toggle red" id="developmenttoggle">Show recent developments</a></li>
        </ul>
        <h3>Upcoming developments</h3>
        <a href="#" class="event">
         	<img src="assets/images/libraryextension.png" alt="Library Extension" />
            <h3>Templeman Library</h3>
            <p>Extension</p>
        </a>
        <a href="#" class="event">
         	<img src="assets/images/libraryextension.png" alt="Turing College" />
            <h3>Turing College</h3>
            <p>New development</p>
        </a>
        <a href="#" class="event">
         	<img src="assets/images/libraryextension.png" alt="SMSAS and Kent Business School" />
            <h3>SMSAS &amp; <br/>Kent Business School</h3>
            <p>New development</p>
        </a>
    </div>
    <div id="event-panel">
        <h2>Events</h2>
        <a href="#" class="event">
         	<img src="assets/images/summerball.png" alt="Summer Ball" />
            <h3>Summer Ball</h3>
            <p>29 Jun 2014</p>
        </a>
        <a href="#" class="event">
         	<img src="assets/images/keynestock.png" alt="Keynestock" />
            <h3>Keynestock</h3>
            <p>15 Apr 2014</p>
        </a>
        <a href="#" class="event">
         	<img src="assets/images/freshersfayre.png" alt="freshersfayre" />
            <h3>Freshers Fayre</h3>
            <p>22 Sep 2014</p>
        </a>
        <h3>Talks</h3>
        <a href="#" class="event">
            <h3>Guillem Anglada - Doppler detection of low-mass</h3>
            <p>ILT - 14 Jun 2014</p>
        </a>
        <a href="#" class="event">
            <h3>COALAS - Designing the COgnitive Assisted Living Ambient System framework</h3>
            <p>KLT2 - 28 Jul 2014</p>
        </a>
        <a href="#" class="event">
            <h3>Everysense Everywhere Human Communication</h3>
            <p>Gulbenkian - 7 Jan 2014</p>
        </a>
    </div>
    <div id="info-panel">
        <h2>Info</h2>
        <ul>
         	<li><a href="#">Help</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Case studies</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Credits</a></li>
            <li><a href="#">UKC website</a></li>
        </ul>
    </div>
</div>
<div class="slide-drawer secondary">
	<div id="a-z-panel">
    	<h3>A</h3>
        <ul>
            <li><a href="#" data-building="Aphra_Theatre">Aphra Theatre</a></li>
        </ul>
        <h3>B</h3>
        <ul>
            <li><a href="#" data-building="Becket_Court">Becket Court</a></li>
            <li><a href="#" data-building="Bishopden_Court">Bishopden Court</a></li>
            <li><a href="#" data-building="Boiler_House">Boiler House</a></li>
            <li><a href="#" data-building="Bossenden_Court">Bossenden Court</a></li>
        </ul>
        <h3>C</h3>
        <ul>
            <li><a href="#" data-building="Campus_Watch"> Campus Watch</a></li>
            <li><a href="#" data-building="Careers_Employability_Service">Careers Employability Service</a></li>
            <li><a href="#" data-building="Clowes_Court">Clowes Court</a></li>
            <li><a href="#" data-building="Colyer_Fergusson">Colyer Fergusson</a></li>
            <li><a href="#" data-building="Cornwallis_George_Allen_Wing">Cornwallis George Allen Wing</a></li>
            <li><a href="#" data-building="Cornwallis_Mathematics_Institute">Cornwallis Mathematics Institute</a></li>
            <li><a href="#" data-building="Cornwallis_North_East">Cornwallis North East</a></li>
            <li><a href="#" data-building="Cornwallis_North_West">Cornwallis North West</a></li>
            <li><a href="#" data-building="Cornwallis_South_East">Cornwallis South East</a></li>
            <li><a href="#" data-building="Cornwallis_South_West">Cornwallis South West</a></li>
            <li><a href="#" data-building="Cornwallis_South">Cornwallis South</a></li>
            <li><a href="#" data-building="Cornwallis_West">Cornwallis West</a></li>
        </ul>
        <h3>D</h3>
        <ul>
            <li><a href="#" data-building="Darwin_College">Darwin College</a></li>
            <li><a href="#" data-building="Darwin_Houses">Darwin Houses</a></li>
            <li><a href="#" data-building="Denstead_Court">Denstead Court</a></li>
        </ul>
        <h3>E</h3>
        <ul>
            <li><a href="#" data-building="Eliot_College">Eliot College</a></li>
            <li><a href="#" data-building="Ellenden_Court">Ellenden Court</a></li>
            <li><a href="#" data-building="Estates_Department">Estates Department</a></li>
        </ul>
        <h3>F</h3>
        <ul>
            <li><a href="#" data-building="Farthings_Court">Farthings Court</a></li>
        </ul>
		<h3>G</h3>
        <ul>
            <li><a href="#" data-building="Giles_Lane_Teaching_Complex">Giles Lane Teaching Complex</a></li>
            <li><a href="#" data-building="Grimmond">Grimmond</a></li>
            <li><a href="#" data-building="Grimshill_Court">Grimshill Court</a></li>
            <li><a href="#" data-building="Ground_Maintenance">Ground Maintenance</a></li>
            <li><a href="#" data-building="Gulbenkian">Gulbenkian</a></li>
        </ul>
        <h3>H</h3>
        <ul>
            <li><a href="#" data-building="Homestall_Court">Homestall Court</a></li>
            <li><a href="#" data-building="Hothe_Court">Hothe Court</a></li>
        </ul>
        <h3>I</h3>
        <ul>
            <li><a href="#" data-building="Ingram">Ingram</a></li>
            <li><a href="#" data-building="Innovation_Center">Innovation Center</a></li>
        </ul>
        <h3>J</h3>
        <ul>
            <li><a href="#" data-building="Jarman">Jarman</a></li>
            <li><a href="#" data-building="Jennison">Jennison</a></li>
        </ul>
        <h3>K</h3>
        <ul>
            <li><a href="#" data-building="Kemsdale_Court">Kemsdale Court</a></li>
            <li><a href="#" data-building="Kent_Business_School">Kent Business School</a></li>
            <li><a href="#" data-building="Kent_Enterprise_Hub">Kent Enterprise Hub</a></li>
            <li><a href="#" data-building="Kent_Law_School">Kent Law School</a></li>
            <li><a href="#" data-building="Keynes_College">Keynes College</a></li>
            <li><a href="#" data-building="Keynes_Flats">Keynes Flats</a></li>
        </ul>
        <h3>L</h3>
        <ul>
            <li><a href="#" data-building="Locke">Locke</a></li>
            <li><a href="#" data-building="Lypeatt_Court">Lypeatt Court</a></li>
        </ul>
		<h3>M</h3>
        <ul>
            <li><a href="#" data-building="Mandela_Building">Mandela Building</a></li>
            <li><a href="#" data-building="Marley_Court">Marley Court</a></li>
            <li><a href="#" data-building="Marlowe">Marlowe</a></li>
            <li><a href="#" data-building="Missing_Link">Missing Link</a></li>
        </ul>
        <h3>N</h3>
        <ul>
            <li><a href="#" data-building="Nickle_Court">Nickle Court</a></li>
        </ul>
        <h3>O</h3>
        <ul>
            <li><a href="#" data-building="Oaks_Day_Nursery">Oaks Day Nursery</a></li>
            <li><a href="#" data-building="Olive_Cottages">Olive Cottages</a></li>
        </ul>
        <h3>P</h3>
        <ul>
            <li><a href="#" data-building="Parkwood_Administration">Parkwood Administration</a></li>
            <li><a href="#" data-building="Parkwood_Shop">Parkwood Shop</a></li>
            <li><a href="#" data-building="Purchas_Court">Purchas Court</a></li>
        </ul>
        <h3>R</h3>
        <ul>
            <li><a href="#" data-building="Registry">Registry</a></li>
            <li><a href="#" data-building="Research_and_Development_Centre">Research and Development Centre</a></li>
            <li><a href="#" data-building="Rothford">Rothford</a></li>
            <li><a href="#" data-building="Rutherford_College">Rutherford College</a></li>
        </ul>
        <h3>S</h3>
        <ul>
            <li><a href="#" data-building="Senate">Senate</a></li>
            <li><a href="#" data-building="Sports_Centre">Sports Centre</a></li>
            <li><a href="#" data-building="Sports_Pavillion">Sports Pavillion</a></li>
            <li><a href="#" data-building="Stacey">Stacey</a></li>
            <li><a href="#" data-building="Stock_Court">Stock Court</a></li>
        </ul>
        <h3>T</h3>
        <ul>
            <li><a href="#" data-building="Tanglewood">Tanglewood</a></li>
            <li><a href="#" data-building="Templeman_Library">Templeman Library</a></li>
            <li><a href="#" data-building="Thornden_Court">Thornden Court</a></li>
            <li><a href="#" data-building="Tudor_Court">Tudor Court</a></li>
            <li><a href="#" data-building="Tyler_Court_A">Tyler Court A</a></li>
            <li><a href="#" data-building="Tyler_Court_B">Tyler Court B</a></li>
            <li><a href="#" data-building="Tyler_Court_C">Tyler Court C</a></li>
        </ul>
        <h3>U</h3>
        <ul>
            <li><a href="#" data-building="UELT">UELT</a></li>
            <li><a href="#" data-building="University_Medical_Centre">University Medical Centre</a></li>
        </ul>
        <h3>V</h3>
        <ul>
            <li><a href="#" data-building="Venue">Venue</a></li>
        </ul>
        <h3>W</h3>
        <ul>
            <li><a href="#" data-building="Willows_Court">Willows Court</a></li>
            <li><a href="#" data-building="Woodlands">Woodlands</a></li>
            <li><a href="#" data-building="Woodys">Woodys</a></li>
            <li><a href="#" data-building="Woolf_Flats">Woolf Flats</a></li>
            <li><a href="#" data-building="Woolf_College">Woolf College</a></li>
            <li><a href="#" data-building="Woolf_Pavillion">Woolf Pavillion</a></li>
            <li><a href="#" data-building="Woolf_Residential">Woolf Residential</a></li>
        </ul>
    </div>
	<div id="subject-panel">
        <ul>
        	<h3>American Studies</h3>
            <ul>
            	<li><a href="#" data-building="Rutherford_College">Rutherford College</a></li>
        	</ul>
            <h3>Architecture &amp; Anthropology</h3>
            <ul>
            	<li><a href="#" data-building="Marlowe">Marlowe</a></li>
        	</ul>
            <h3>Arts</h3>
            <ul>
            	<li><a href="#" data-building="Jarman">Jarman</a></li>
        	</ul>
            <h3>Biosciences</h3>
            <ul>
            	<li><a href="#" data-building="Stacey">Stacey</a></li>
        	</ul>
            <h3>Business &amp; Economics</h3>
            <ul>
            	<li><a href="#" data-building="Kent_Business_School">Kent Business School</a></li>
                <li><a href="#" data-building="Keynes_College">Keynes College</a></li>
                <li><a href="#" data-building="Rothford">Rothford</a></li>
        	</ul>
            <h3>Computing</h3>
            <ul>
            	<li><a href="#" data-building="Grimmond">Grimmond</a></li>
                <li><a href="#" data-building="Cornwallis_South">Cornwallis South</a></li>
                <li><a href="#" data-building="Cornwallis_South_West">Cornwallis South West</a></li>
        	</ul>
            <h3>Drama</h3>
            <ul>
            	<li><a href="#" data-building="Aphra_Theatre">Aphra Theatre</a></li>
            	<li><a href="#" data-building="Gulbenkian">Gulbenkian</a></li>
                <li><a href="#" data-building="Jarman">Jarman</a></li>
        	</ul>
            <h3>Engineering &amp; Digital Arts</h3>
            <ul>
            	<li><a href="#" data-building="Jennison">Jennison</a></li>
        	</ul>
            <h3>English</h3>
            <ul>
            	<li><a href="#" data-building="Rutherford_College">Rutherford College</a></li>
        	</ul>
            <h3>European Culture &amp; Languages</h3>
            <ul>
            	<li><a href="#" data-building="Cornwallis_North_West">Cornwallis North West</a></li>
                <li><a href="#" data-building="Cornwallis_West">Cornwallis West</a></li>
        	</ul>
            <h3>History</h3>
            <ul>
            	<li><a href="#" data-building="Rutherford_College">Rutherford College</a></li>
        	</ul>
            <h3>Law</h3>
            <ul>
            	<li><a href="#" data-building="Kent_Law_School">Kent Law School</a></li>
        	</ul>
            <h3>Mathematics</h3>
            <ul>
            	<li><a href="#" data-building="Cornwallis_Mathematics_Institute">Cornwallis Mathematics Institute</a></li>
        	</ul>
            <h3>Music</h3>
            <ul>
            	<li><a href="#" data-building="Colyer_Fergusson">Colyer Fergusson</a></li>
        	</ul>
            <h3>Physical Sciences</h3>
            <ul>
            	<li><a href="#" data-building="Ingram">Ingram</a></li>
        	</ul>
            <h3>Psychology</h3>
            <ul>
            	<li><a href="#" data-building="Keynes_College">Keynes College</a></li>
                <li><a href="#" data-building="Olive_Cottages">Olive Cottages</a></li>
        	</ul>
            <h3>Sociology</h3>
            <ul>
            	<li><a href="#" data-building="Cornwallis_George_Allen_Wing">Cornwallis George Allen Wing</a></li>
            	<li><a href="#" data-building="Cornwallis_North_East">Cornwallis North East</a></li>
                <li><a href="#" data-building="Woodlands">Woodlands</a></li>
        	</ul>
            <h3>Sports</h3>
            <ul>
            	<li><a href="#" data-building="Sports_Centre">Sports Centre</a></li>
                <li><a href="#" data-building="Sports_Pavillion">Sports Pavillion</a></li>
        	</ul>
        </ul>
    </div>
    <div id="community-panel">
    	<h3>Community</h3>
        <ul>
        	<li><a href="#" data-building="Locke">Essentials</a></li>
            <li><a href="#" data-building="Gulbenkian">Gulbenkian</a></li>
            <li><a href="#" data-building="Parkwood_Shop">Parkwood Shop</a></li>
            <li><a href="#" data-building="Sports_Centre">Sports Centre</a></li>
            <li><a href="#" data-building="Sports_Pavillion">Sports Pavillion</a></li>
            <li><a href="#" data-building="Templeman_Library">Templeman Library</a></li>
            <li><a href="#" data-building="Venue">Venue</a></li>
            <li><a href="#" data-building="Woodys">Woodys</a></li>
        </ul>
    </div>
    <div id="admin-panel">
    	<h3>Admin</h3>
        <ul>
        	<li><a href="#" data-building="Careers_Employability_Service">Careers Employability Service</a></li>
            <li><a href="#" data-building="Innovation_Center">Innovation Center</a></li>
            <li><a href="#" data-building="Kent_Enterprise_Hub">Kent Enterprise Hub</a></li>
            <li><a href="#" data-building="Mandela_Building">Mandela Building</a></li>
            <li><a href="#" data-building="Parkwood_Administration">Parkwood Administration</a></li>
            <li><a href="#" data-building="Registry">Registry</a></li>
            <li><a href="#" data-building="Research_and_Development_Centre">Research and Development Centre</a></li>
            <li><a href="#" data-building="UELT">Unit for the Enhancement of Learning &amp; Teaching</a></li>
        </ul>
    </div>
    <div id="accommodation-panel">
    	<h3>Campus</h3>
        <ul>
            <li><a href="#" data-building="Darwin_Houses">Darwin Houses</a></li>
            <li><a href="#" data-building="Eliot_College">Eliot College</a></li>
            <li><a href="#" data-building="Keynes_Flats">Keynes Flats</a></li>
            <li><a href="#" data-building="Rutherford_College">Rutherford College</a></li>
            <li><a href="#" data-building="Tyler_Court_A">Tyler Court A</a></li>
            <li><a href="#" data-building="Tyler_Court_B">Tyler Court B</a></li>
            <li><a href="#" data-building="Tyler_Court_C">Tyler Court C</a></li>
            <li><a href="#" data-building="Woolf_Flats">Woolf Flats</a></li>
        </ul>
        <h3>Parkwood</h3>
        <ul>
            <li><a href="#" data-building="Bishopden_Court">Bishopden Court</a></li>
            <li><a href="#" data-building="Bossenden_Court">Bossenden Court</a></li>
            <li><a href="#" data-building="Clowes_Court">Clowes Court</a></li>
            <li><a href="#" data-building="Denstead_Court">Denstead Court</a></li>
            <li><a href="#" data-building="Ellenden_Court">Ellenden Court</a></li>
            <li><a href="#" data-building="Farthings_Court">Farthings Court</a></li>
            <li><a href="#" data-building="Grimshill_Court">Grimshill Court</a></li>
            <li><a href="#" data-building="Homestall_Court">Homestall Court</a></li>
            <li><a href="#" data-building="Hothe_Court">Hothe Court</a></li>
            <li><a href="#" data-building="Kemsdale_Court">Kemsdale Court</a></li>
            <li><a href="#" data-building="Lypeatt_Court">Lypeatt Court</a></li>
            <li><a href="#" data-building="Marley_Court">Marley Court</a></li>
            <li><a href="#" data-building="Nickle_Court">Nickle Court</a></li>
            <li><a href="#" data-building="Purchas_Court">Purchas Court</a></li>
            <li><a href="#" data-building="Stock_Court">Stock Court</a></li>
            <li><a href="#" data-building="Thornden_Court">Thornden Court</a></li>
            <li><a href="#" data-building="Tudor_Court">Tudor Court</a></li>
            <li><a href="#" data-building="Willows_Court">Willows Court</a></li>
        </ul>
    </div>
    <div id="maintenance-panel">
    	<h3>Maintenance</h3>
        <ul>
            <li><a href="#" data-building="Boiler_House">Boiler House</a></li>
            <li><a href="#" data-building="Campus_Watch">Campus Watch</a></li>
            <li><a href="#" data-building="Estates_Department">Estates Department</a></li>
            <li><a href="#" data-building="Ground_Maintenance">Ground Maintenance</a></li>
            <li><a href="#" data-building="Oaks_Day_Nursery">Oaks Day Nursery</a></li>
            <li><a href="#" data-building="University_Medical_Centre">University Medical Centre</a></li>
        </ul>
    </div>
</div>
<div id="mapwrapper">
    <div id="modalpanel" class="animated flipcard">
    	<div class="card">
    		<div id="modalfront" class="face front"></div>
        	<div id="modalback" class="face back"></div>
        </div>
    </div>
    
    <div id="tweet_kentunion" class="tweetpanel animated">
		<?php include_once 'twitter/display-tweet.php';
        	display_tweet('kentunion','time_since', 1, 30);
    	?>
    </div>
    <div id="tweet_unikent" class="tweetpanel animated">
		<?php include_once 'twitter/display-tweet.php';
        	display_tweet('unikent','time_since', 1, 30);
    	?>
    </div>
    <div id="tweet_unikentemploy" class="tweetpanel animated">
		<?php include_once 'twitter/display-tweet.php';
        	display_tweet('unikentemploy','time_since', 1, 30);
    	?>
    </div>
    <div id="tweet_unikent_music" class="tweetpanel animated">
		<?php include_once 'twitter/display-tweet.php';
        	display_tweet('unikent_music','time_since', 1, 30);
    	?>
    </div>
    <div id="tweet_edakent" class="tweetpanel animated">
		<?php include_once 'twitter/display-tweet.php';
        	display_tweet('edakent','time_since', 1, 30);
    	?>
    </div>
    <div id="tweet_parkwoodsc" class="tweetpanel animated">
		<?php include_once 'twitter/display-tweet.php';
        	display_tweet('parkwoodsc','time_since', 1, 30);
    	?>
    </div>
    <div id="controls">
        <button id="rotateleft" type="button" onclick="rotateLeft()"><i class="fa fa-chevron-left"></i></button>
        <div id="controlhover">
        	<button id="refresh" type="button" onclick="refreshView()"><i class="fa fa-chevron-up"></i></button>
            <button id="twod" type="button" onclick="view2D()">2D</button>
        	<button id="tilt" type="button" onclick="tilt()"><i class="fa fa-chevron-down"></i></button>
        </div>
        <button id="rotateright" type="button" onclick="rotateRight()"><i class="fa fa-chevron-right"></i></button>
    </div>
</div>
<!--<div id="footer">
    <ul>
        <li><a href="pages/about.php">About</a></li>
        <li><a href="pages/casestudies.php">Case Studies</a></li>
        <li><a href="http://www.kent.ac.uk/">UKC Website</a></li>
        <li><a href="pages/disclaimer.php">Disclaimer</a></li>
        <li><a href="pages/credits.php">Credits</a></li>
    </ul>
</div>-->

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>

<script src="assets/js/three_r62.min.js"></script> 
<script src="assets/js/controls/FirstPersonControls.js"></script> 

<script src="assets/js/utils/Detector.js"></script> 
<script src="assets/js/utils/stats.min.js"></script> 
<script src="assets/js/utils/tween.min.js"></script> 
     
<script type="text/javascript">
var container, stats, camera, scene, renderer, projector, controls, ground, group = new THREE.Object3D(), group = new THREE.Object3D(), xml;
var depthMaterial, depthTarget, composer;
var clickobjects = [], tweetobjects = [], sprites = [], locationIcons = [], foodIcons = [], shopIcons = [], tweetIcons = [], visitorParking = [], permitParking = [], rotate = [], investmentArray = [], developmentArray = [];
var jsonFileNames = [
	'assets/models/Aphra_Theatre.js',
	'assets/models/Becket_Court.js',
	'assets/models/Bishopden_Court.js',
	'assets/models/Boiler_House.js',
	'assets/models/Bossenden_Court.js',
	'assets/models/Campus_Watch.js',
	'assets/models/Careers_Employability_Service.js',
	'assets/models/Clowes_Court.js',
	'assets/models/Colyer_Fergusson.js',
	'assets/models/Cornwallis_George_Allen_Wing.js',
	'assets/models/Cornwallis_Mathematics_Institute.js',
	'assets/models/Cornwallis_North_East.js',
	'assets/models/Cornwallis_North_West.js',
	'assets/models/Cornwallis_South_East.js',
	'assets/models/Cornwallis_South_West.js',
	'assets/models/Cornwallis_South.js',
	'assets/models/Cornwallis_West.js',
	'assets/models/Darwin_College.js',
	'assets/models/Darwin_Houses.js',
	'assets/models/Denstead_Court.js',
	'assets/models/Eliot_College.js',
	'assets/models/Ellenden_Court.js',
	'assets/models/Estates_Department.js',
	'assets/models/Farthings_Court.js',
	'assets/models/Giles_Lane_Teaching_Complex.js',
	'assets/models/Grimmond.js',
	'assets/models/Grimshill_Court.js',
	'assets/models/Ground_Maintenance.js',
	'assets/models/Gulbenkian.js',
	'assets/models/Homestall_Court.js',
	'assets/models/Hothe_Court.js',
	'assets/models/Ingram.js',
	'assets/models/Innovation_Center.js',
	'assets/models/Jarman.js',
	'assets/models/Jennison.js',
	'assets/models/Kemsdale_Court.js',
	'assets/models/Kent_Business_School.js',
	'assets/models/Kent_Enterprise_Hub.js',
	'assets/models/Kent_Law_School.js',
	'assets/models/Keynes_College.js',
	'assets/models/Keynes_Flats.js',
	'assets/models/Locke.js',
	'assets/models/Lypeatt_Court.js',
	'assets/models/Mandela_Building.js',
	'assets/models/Marley_Court.js',
	'assets/models/Marlowe.js',
	'assets/models/Missing_Link.js',
	'assets/models/Nickle_Court.js',
	'assets/models/Oaks_Day_Nursery.js',
	'assets/models/Olive_Cottages.js',
	'assets/models/Parkwood_Administration.js',
	'assets/models/Parkwood_Shop.js',
	'assets/models/Purchas_Court.js',
	'assets/models/Registry.js',
	'assets/models/Research_and_Development_Centre.js',
	'assets/models/Rothford.js',
	'assets/models/Rutherford_College.js',
	'assets/models/Senate.js',
	'assets/models/Sports_Centre.js',
	'assets/models/Sports_Pavillion.js',
	'assets/models/Stacey.js',
	'assets/models/Stock_Court.js',
	'assets/models/Tanglewood.js',
	'assets/models/Templeman_Library.js',
	'assets/models/Thornden_Court.js',
	'assets/models/Tudor_Court.js',
	'assets/models/Tyler_Court_A.js',
	'assets/models/Tyler_Court_B.js',
	'assets/models/Tyler_Court_C.js',
	'assets/models/UELT.js',
	'assets/models/University_Medical_Centre.js',
	'assets/models/Venue.js',
	'assets/models/Willows_Court.js',
	'assets/models/Woodlands.js',
	'assets/models/Woodys.js',
	'assets/models/Woolf_Blocks.js',
	'assets/models/Woolf_Main.js',
	'assets/models/Woolf_Pavillion.js',
	'assets/models/Woolf_Residential.js'
];

var buildingNames = [
	'Aphra Theatre',
	'Becket Court',
	'Bishopden Court',
	'Boiler House',
	'Bossenden Court',
	'Campus Watch',
	'Careers Employability Service',
	'Clowes Court',
	'Colyer Fergusson',
	'Cornwallis George Allen Wing',
	'Cornwallis Mathematics Institute',
	'Cornwallis North East',
	'Cornwallis North West',
	'Cornwallis South East',
	'Cornwallis South West',
	'Cornwallis South',
	'Cornwallis West',
	'Darwin College',
	'Darwin Houses',
	'Denstead Court',
	'Eliot College',
	'Ellenden Court',
	'Estates Department',
	'Farthings Court',
	'Giles Lane Teaching Complex',
	'Grimmond',
	'Grimshill Court',
	'Ground Maintenance',
	'Gulbenkian',
	'Homestall Court',
	'Hothe Court',
	'Ingram',
	'Innovation Center',
	'Jarman',
	'Jennison',
	'Kemsdale Court',
	'Kent Business School',
	'Kent Enterprise Hub',
	'Kent Law School',
	'Keynes College',
	'Keynes Flats',
	'Locke',
	'Lypeatt Court',
	'Mandela Building',
	'Marley Court',
	'Marlowe',
	'Missing Link',
	'Nickle Court',
	'Oaks Day Nursery',
	'Olive Cottages',
	'Parkwood Administration',
	'Parkwood Shop',
	'Purchas Court',
	'Registry',
	'Research and Development Centre',
	'Rothford',
	'Rutherford College',
	'Senate',
	'Sports Centre',
	'Sports Pavillion',
	'Stacey',
	'Stock Court',
	'Tanglewood',
	'Templeman Library',
	'Thornden Court',
	'Tudor Court',
	'Tyler Court A',
	'Tyler Court B',
	'Tyler Court C',
	'UELT',
	'University Medical Centre',
	'Venue',
	'Willows Court',
	'Woodlands',
	'Woodys',
	'Woolf Flats',
	'Woolf College',
	'Woolf Pavillion',
	'Woolf Residential'
];

var objects = [], plane;
var mouse = new THREE.Vector2(),
offset = new THREE.Vector3(),
INTERSECTED, SELECTED;

var WIDTH = $(window).width();
var HEIGHT = $(window).height();
	
init();
animate();

function init() {
	
	container = document.createElement( 'div' );
	container.id = 'app';
	document.getElementById("mapwrapper").appendChild( container );
	
	camera = new THREE.PerspectiveCamera( 20, window.innerWidth / window.innerHeight, 10, 2000 );
	camera.position.y = 3;
	
	//////// ORBIT CONTROLS /////////

	controls = new THREE.FirstPersonControls(camera); // Handles camera control
	controls.movementSpeed = 100; // How fast the player can walk around
	controls.lookSpeed = 0.075; // How fast the player can look around with the mouse
	controls.lookVertical = false; // Don't allow the player to look up or down. This is a temporary fix to keep people from flying
	controls.noFly = true; // Don't allow hitting R or F to go up or down
	
	///////// SCENE SETUP //////////

	scene = new THREE.Scene();
	//scene.fog = new THREE.Fog( 0xffffff, 0.00002 );
	
	/////////// LIGHTS ////////////
	
	var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
	directionalLight.position.set( 1, 5, 1 );
	scene.add( directionalLight );
	
	var ambientLight = new THREE.AmbientLight( 0xcccccc );
	scene.add( ambientLight );

	/////////// GEOMETRY /////////////
	
	texture = THREE.ImageUtils.loadTexture('assets/images/map.jpg', {}, function() {
		renderer.render(scene);
	})
	mapmaterial = new THREE.MeshBasicMaterial({map: texture})
	ground = new THREE.Mesh( new THREE.PlaneGeometry( 1200, 960, 8, 8 ), mapmaterial );
	ground.rotation.x += 270 * Math.PI / 180;
	ground.material.needsUpdate = true;
	scene.add( ground );
	group.add( ground );
	
	plane = new THREE.Mesh( new THREE.PlaneGeometry( 1200, 960, 8, 8 ), new THREE.MeshBasicMaterial( { transparent: true, wireframe: true } ) );
	plane.visible = false;
	scene.add( plane );
	plane.rotation.x += 270 * Math.PI / 180;
	
	var material = new THREE.MeshLambertMaterial({ color: 0xcccccc });
	
	var loader = new THREE.JSONLoader();
	
	loader.load( "assets/models/trees.js", function( geometry, materials ) {
        mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial(materials) );
        mesh.scale.set( 1, 1, 1 );
		group.add( mesh );
    } );
	
	/*loader.load( "assets/models/cloud.js", function( geometry, materials ) {
        mesh = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial({ color: 0xcccccc, transparent: true, opacity: 0.8 }) );
        mesh.scale.set( 1, 1, 1 );
		mesh.position.set( 0, 0, 0);
		group.add( mesh );
    } );*/
	
	for(var i = 0; i < jsonFileNames.length; i++){
		var spriteName = buildingNames[i];
		var meshName = jsonFileNames[i].split("/")[2].split(".")[0];
		loader.load(jsonFileNames[i], makeHandler(meshName, spriteName));
	}
	
	function makeHandler(meshName, spriteName) {
		return function(geometry, materials) {
			mesh =  new THREE.Mesh( geometry, material );
			mesh.scale.set( 1, 1, 1 );
			mesh.position.set( 0, -0.1, 0 );
			clickobjects.push( mesh );
			group.add( mesh );
			mesh.name = meshName;
		};
	}
	
	objects.push( group );
	
	//////////// RENDERER ////////////
	
	scene.add( group );
	
	projector = new THREE.Projector();

	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );

	container.appendChild( renderer.domElement );

	stats = new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.bottom = '0px';
	stats.domElement.style.right = '0px';
	container.appendChild( stats.domElement );
	container.style.cursor = 'move';
	

	//

	window.addEventListener( 'resize', onWindowResize, false );

	/*			
	///////////// DEPTH //////////////
	
	var depthShader = THREE.ShaderLib[ "depthRGBA" ];
	var depthUniforms = THREE.UniformsUtils.clone( depthShader.uniforms );

	depthMaterial = new THREE.ShaderMaterial( { fragmentShader: depthShader.fragmentShader, vertexShader: depthShader.vertexShader, uniforms: depthUniforms } );
	depthMaterial.blending = THREE.NoBlending;

	////////////// SSAO //////////////
	
	composer = new THREE.EffectComposer( renderer );
	composer.addPass( new THREE.RenderPass( scene, camera ) );

	depthTarget = new THREE.WebGLRenderTarget( window.innerWidth, window.innerHeight, { minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter, format: THREE.RGBAFormat } );
	
	var effect = new THREE.ShaderPass( THREE.SSAOShader );
	effect.uniforms[ 'tDepth' ].value = depthTarget;
	effect.uniforms[ 'size' ].value.set( window.innerWidth, window.innerHeight );
	effect.uniforms[ 'cameraNear' ].value = camera.near;
	effect.uniforms[ 'cameraFar' ].value = camera.far;
	effect.renderToScreen = true;
	composer.addPass( effect );
	*/
	
}
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
	positionTrackingOverlay();
}

function animate() {
	controls.update();
	stats.update();
	render();
	requestAnimationFrame( animate );
}
function render() {
	renderer.render( scene, camera );
}

//<![CDATA[
        $(window).load(function() { // makes sure the whole site is loaded
            setTimeout(function() {
				$('#status').fadeOut(1000); // will first fade out the loading animation
				$('#preloader').delay(350).fadeOut(1000); // will fade out the white DIV that covers the website.
				$('body').delay(350).css({'overflow':'visible'});
				
			 }, 750);
        })
    //]]>
</script>
 

</body>
</html>
