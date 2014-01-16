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
         	<img src="assets/images/summerball.png" alt="Summer Ball" />
            <h3>Templeman Library</h3>
            <p>Extension</p>
        </a>
        <a href="#" class="event">
         	<img src="assets/images/summerball.png" alt="Summer Ball" />
            <h3>Turing College</h3>
            <p>New development</p>
        </a>
        <h3>Recent developments</h3>
        <a href="#" class="event">
         	<img src="assets/images/summerball.png" alt="Summer Ball" />
            <h3>Keynes College</h3>
            <p>Extension</p>
        </a>
        <a href="#" class="event">
         	<img src="assets/images/summerball.png" alt="Summer Ball" />
            <h3>Colyer Fergusson</h3>
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
    <div id="modalpanel" class="animated"></div>
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
<script src="assets/js/controls/OrbitControls_r62.js"></script> 

<script src="assets/js/utils/Detector.js"></script> 
<script src="assets/js/utils/stats.min.js"></script> 
<script src="assets/js/utils/tween.min.js"></script> 

<script src="http://mrdoob.github.com/three.js/examples/js/shaders/CopyShader.js"></script>
<script src="http://mrdoob.github.com/three.js/examples/js/shaders/SSAOShader.js"></script>

<script src="http://mrdoob.github.com/three.js/examples/js/postprocessing/EffectComposer.js"></script>
<script src="http://mrdoob.github.com/three.js/examples/js/postprocessing/RenderPass.js"></script>
<script src="http://mrdoob.github.com/three.js/examples/js/postprocessing/MaskPass.js"></script>
<script src="http://mrdoob.github.com/three.js/examples/js/postprocessing/ShaderPass.js"></script>
     
<script src="assets/js/functions.js"></script> 
<script src="assets/js/mouse_events.js"></script>
<script src="assets/js/helvetiker_regular.typeface.js"></script>
<script src="assets/js/core.js"></script>
<script src="assets/js/universal.js"></script>
<script type="text/javascript">
    //<![CDATA[
        $(window).load(function() { // makes sure the whole site is loaded
            setTimeout(function() {
				$('#status').fadeOut(1000); // will first fade out the loading animation
				$('#preloader').delay(350).fadeOut(1000); // will fade out the white DIV that covers the website.
				$('body').delay(350).css({'overflow':'visible'});
				new TWEEN.Tween( camera.position ).to( { x: 0, y: 250, z: 300 }, 3000 ).easing( TWEEN.Easing.Quadratic.InOut).start();
			 }, 750);
        })
    //]]>
</script>
 

</body>
</html>
