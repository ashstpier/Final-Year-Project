<?php 
$html = file_get_contents('http://www.kent.ac.uk/calendar/'); //get the html returned from the following url

$kent_doc = new DOMDocument();

libxml_use_internal_errors(TRUE); //disable libxml errors

if(!empty($html)){ //if any html is actually returned

  $kent_doc->loadHTML($html);
  libxml_clear_errors(); //remove errors for yucky html
  
  $kent_xpath = new DOMXPath($kent_doc);

  //get all the h2's with an id
  $event = $kent_xpath->query('//div[contains(concat(" ", normalize-space(@class), " "), " event ")]');

$event_string = "<ul id='eventlist'>";
$i = 0;

  if($event->length > 0){
      foreach($event as $row){
		  $titlepath = $kent_xpath->query('.//div[@class="title"]', $row);
		  $title = $titlepath->item(0)->nodeValue;
		  $timepath = $kent_xpath->query('.//div[@class="time"]', $row);
		  $time = $timepath->item(0)->nodeValue;
		  $linkpath = $kent_xpath->query('.//div[@class="title"]/a/@href', $row);
		  $link = $linkpath->item(0)->nodeValue;
		  $linktitlepath = $kent_xpath->query('.//div[@class="categories"]/a', $row);
		  $linktitle = $linktitlepath->item(0)->nodeValue;
		  
		  $event_string .= '<li><h3><a href="http://www.kent.ac.uk/calendar/'.$link.'" target="_blank">'.$title.'</a></h3><span class="category"><a href="http://www.kent.ac.uk/calendar/?view_by=category='.$linktitle.'" target="_blank">'.$linktitle.'</a></span><span class="time">'.$time.'</span></li>';
		  
		  if (++$i == 15) break;
      }
  }
  $event_string .= "</ul>";
}
?>