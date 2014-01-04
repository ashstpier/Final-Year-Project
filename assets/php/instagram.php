<?php
// Client ID for Instagram API
$instagramClientID = '2e97330eee8a4b0e9fa1c5f7d656050a';

$api = 'https://api.instagram.com/v1/tags/kentuni/media/recent?client_id=' .$instagramClientID. '&amp;count=20';
$api2 = 'https://api.instagram.com/v1/tags/kentunion/media/recent?client_id=' .$instagramClientID. '&amp;count=20'; //api request (edit this to reflect tags)
$cache = 'cache/instagram.json';

if(file_exists($cache) && filemtime($cache) > time() - 60*60){
    // If a cache file exists, and it is newer than 1 hour, use it
    $images = json_decode(file_get_contents($cache),true); //Decode as an json array
}
else{
    // Make an API request and create the cache file
    // For example, gets the 32 most popular images on Instagram
    $response = get_curl($api); //change request path to pull different photos
	$response2 = get_curl($api2);
	
    $images = array();

    if($response){
        // Decode the response and build an array
        foreach(json_decode($response)->data as $item){

            $title = (isset($item->caption))?mb_substr($item->caption->text,0,70,"utf8"):null;
            $src = $item->images->standard_resolution->url;
			$date = (isset($item->created_time))?$item->created_time:null;
			$class = "kentuni";
			
            $images[] = array(
            "title" => htmlspecialchars($title),
            "src" => htmlspecialchars($src),
			"date" => date('j M Y', $date),
			"class" => $class
            );
        }
        file_put_contents($cache,json_encode($images)); //Save as json
    }
	if($response2){
        // Decode the response and build an array
        foreach(json_decode($response2)->data as $item){

            $title = (isset($item->caption))?mb_substr($item->caption->text,0,70,"utf8"):null;
            $src = $item->images->standard_resolution->url;
			$date = (isset($item->created_time))?$item->created_time:null;
			$class = "kentunion";
			
            $images[] = array(
            "title" => htmlspecialchars($title),
            "src" => htmlspecialchars($src),
			"date" => date('j M Y', $date),
			"class" => $class
            );
        }
        file_put_contents($cache,json_encode($images)); //Save as json
    }
}

//Debug out

foreach ($images as $insta) {
	$title = $insta['title'];
	$src = $insta['src'];
	$date = $insta['date'];
	$class = $insta['class'];
	
	$day = substr($date, 0, 2);
	$month = date('F', strtotime($date));
	$year = substr($date, -4);
	
	$full_date = $day . ' ' . $month . ' ' . $year;
	$sort_date = strtotime($full_date);
	
	$instagram .= '<article class="item instagram ' . $class . '"><img class="instagram_img" src="' . $src . '" alt="' . $title . '" /><p>' . $title . '</p><div class="tweet-footer"><i class="fa fa-instagram"></i>&nbsp; tagged <a href="#" data-filter=".' . $class . '">#' . $class . '</a> on ' . $full_date . '<span class="hidden_date">' . $sort_date . '</span></div></article>';
}

print_r($instagram);

//Added curl for faster response
function get_curl($url){
    if(function_exists('curl_init')){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL,$url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt ($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt ($ch, CURLOPT_SSL_VERIFYPEER, 0); 
        $output = curl_exec($ch);
        echo curl_error($ch);
        curl_close($ch);
        return $output;
    }else{
        return file_get_contents($url);
    }

}

?>