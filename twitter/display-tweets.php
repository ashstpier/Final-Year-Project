<?php
function get_auth($usr_1,$usr_2,$usr_3,$usr_4,$usr_5,$max_tweets) {
	require 'includes/keys.php';
	require_once 'includes/tmhOAuth.php';

	/*Main Feed -User 1*/
	$tmhOAuth = new tmhOAuth(array(

			'consumer_key' => $consumer_key_1,
			'consumer_secret' => $consumer_secret_1,
			'user_token' => $user_token_1,
			'user_secret' => $user_secret_1
		));

	$code= $tmhOAuth->request('GET', $tmhOAuth->url('1.1/statuses/user_timeline'), array(
			'screen_name' => $usr_1,
			'count' => $max_tweets,
			'include_rts' => $include_rts,
			'exclude_replies' => $exclude_replies
		));

	/*Secondary Feed - User 2*/
	$tmhOAuth1 = new tmhOAuth(array(

			'consumer_key' => $consumer_key_2,
			'consumer_secret' => $consumer_secret_2,
			'user_token' => $user_token_2,
			'user_secret' => $user_secret_2
		));


	$code1 = $tmhOAuth1->request('GET', $tmhOAuth1->url('1.1/statuses/user_timeline'), array(
			'screen_name' => $usr_2,
			'count' => $max_tweets,
			'include_rts' => $include_rts,
			'exclude_replies' => $exclude_replies
		));
		
	/*Secondary Feed - User 3*/
	$tmhOAuth2 = new tmhOAuth(array(

			'consumer_key' => $consumer_key_2,
			'consumer_secret' => $consumer_secret_2,
			'user_token' => $user_token_2,
			'user_secret' => $user_secret_2
		));


	$code2 = $tmhOAuth2->request('GET', $tmhOAuth2->url('1.1/statuses/user_timeline'), array(
			'screen_name' => $usr_3,
			'count' => $max_tweets,
			'include_rts' => $include_rts,
			'exclude_replies' => $exclude_replies
		));
		
	/*Secondary Feed - User 4*/
	$tmhOAuth3 = new tmhOAuth(array(

			'consumer_key' => $consumer_key_2,
			'consumer_secret' => $consumer_secret_2,
			'user_token' => $user_token_2,
			'user_secret' => $user_secret_2
		));


	$code3 = $tmhOAuth3->request('GET', $tmhOAuth3->url('1.1/statuses/user_timeline'), array(
			'screen_name' => $usr_4,
			'count' => $max_tweets,
			'include_rts' => $include_rts,
			'exclude_replies' => $exclude_replies
		));
		
	/*Secondary Feed - User 5*/
	$tmhOAuth4 = new tmhOAuth(array(

			'consumer_key' => $consumer_key_2,
			'consumer_secret' => $consumer_secret_2,
			'user_token' => $user_token_2,
			'user_secret' => $user_secret_2
		));


	$code4 = $tmhOAuth4->request('GET', $tmhOAuth4->url('1.1/statuses/user_timeline'), array(
			'screen_name' => $usr_5,
			'count' => $max_tweets,
			'include_rts' => $include_rts,
			'exclude_replies' => $exclude_replies
		));


	$res_code = array(
		'200',
		'304'
	);
	
	if (in_array($code, $res_code) && in_array($code1,$res_code)  && in_array($code2,$res_code) && in_array($code3,$res_code) && in_array($code4,$res_code)) {
		$data  = $tmhOAuth->response['response'];
		$data1  = $tmhOAuth1->response['response'];
		$data2  = $tmhOAuth2->response['response'];
		$data3  = $tmhOAuth3->response['response'];
		$data4  = $tmhOAuth4->response['response'];
		
		$response = array($data,$data1,$data2,$data3,$data4);
		return $response;
	}
	else
	{
		return $response = '500';
	}
}


function dateSort($val1, $val2)
	{
    	if ($val1['created_at'] == $val2['created_at']) {
        return 0;
		}

    return (strtotime($val1['created_at']) > strtotime($val2['created_at'])) ? -1 : 1;
	}
	
function cache_json($usr_1,$usr_2,$usr_3,$usr_4,$usr_5,$max_tweets,$time) {

$cache = 'cache/all_tweets.json';
	
	if (!file_exists($cache)) {//if cache file doesnt exist
		if (!file_exists('cache')) {//if folder doesn't exist
			$cache_dir = mkdir('cache');//create folder
			}
		$cache_data = true;
	}
	else {
		$cache_time = time() - filemtime($cache);
	
		if ($cache_time > 60 * $time) {

				$cache_data = true;
				}
		}

	
	if (isset($cache_data)) {
		$data = get_auth($usr_1, $usr_2, $usr_3, $usr_4, $usr_5, $max_tweets);
		
		if ($data != '500')
		{
			$json_1 = json_decode($data[0],true);
			$json_2 = json_decode($data[1],true);
			$json_3 = json_decode($data[2],true);
			$json_4 = json_decode($data[3],true);
			$json_5 = json_decode($data[4],true);
			$my_data = array_merge($json_1,$json_2,$json_3,$json_4,$json_5);
			usort($my_data, 'dateSort');	
			$cached = file_put_contents($cache, serialize($my_data));
		}
	}
	$tweets =  unserialize(file_get_contents($cache));
	return $tweets;
	
}
function dateDiff($time1, $time2, $precision = 6) {
		if (!is_int($time1)) {
			$time1 = strtotime($time1);
		}
		if (!is_int($time2)) {
			$time2 = strtotime($time2);
		}
		if ($time1 > $time2) {
			$ttime = $time1;
			$time1 = $time2;
			$time2 = $ttime;
		}
		$intervals = array(
			'year',
			'month',
			'day',
			'hour',
			'minute',
			'second'
		);
		$diffs     = array();
		foreach ($intervals as $interval) {
			$diffs[$interval] = 0;
			$ttime            = strtotime("+1 " . $interval, $time1);
			while ($time2 >= $ttime) {
				$time1 = $ttime;
				$diffs[$interval]++;
				$ttime = strtotime("+1 " . $interval, $time1);
			}
		}
		$count = 0;
		$times = array();
		foreach ($diffs as $interval => $value) {
			if ($count >= $precision) {
				break;
			}
			if ($value > 0) {
				if ($value != 1) {
					$interval .= "s";
				}
				$times[] = $value . " " . $interval;
				$count++;
			}
		}
		return implode(", ", $times);
	}
function display_tweets($usr_1, $usr_2, $usr_3, $usr_4, $usr_5, $style ='', $max_tweets = 10, $time = 60 ) {
	
	$tweets = cache_json($usr_1,$usr_2,$usr_3,$usr_4,$usr_5,$max_tweets,$time);

	if (!empty($tweets)) {
		foreach ($tweets as $tweet) {
			$name			= $tweet['user'];
			$username		= $name['screen_name'];
			$profile_image	= $name['profile_image_url'];
			$pubDate        = $tweet['created_at'];
			$tweet          = $tweet['text'];
			$today          = time();
			$time           = substr($pubDate, 11, 5);
			$day            = substr($pubDate, 0, 3);
			$date           = substr($pubDate, 7, 4);
			$month          = substr($pubDate, 4, 3);
			$year           = substr($pubDate, 25, 5);
			$english_suffix = date('jS', strtotime(preg_replace('/\s+/', ' ', $pubDate)));
			$full_month     = date('F', strtotime($pubDate));


			#pre-defined tags
			$default   =  $date . $full_month . $year;
			$full_date = $day . $date . $month . $year;
			$ddmmyy    = $date . $month . $year;
			$mmyy      = $month . $year;
			$mmddyy    = $month . $date . $year;
			$ddmm      = $date . $month;
			
			$sort_date = strtotime($default);

			#Time difference
			$timeDiff = dateDiff($today, $pubDate, 1);

			# Turn URLs into links
			$tweet = preg_replace('@(https?://([-\w\.]+)+(:\d+)?(/([\w/_\./-]*(\?\S+)?)?)?)@', '<a target="blank" title="$1" href="$1">$1</a>', $tweet);

			#Turn hashtags into links
			$tweet = preg_replace('/#([0-9a-zA-Z_-]+)/', "<a target='blank' title='$1' href=\"http://twitter.com/search?q=%23$1\">#$1</a>", $tweet);

			#Turn @replies into links
			$tweet = preg_replace("/@([0-9a-zA-Z_-]+)/", "<a target='blank' title='$1' href=\"http://twitter.com/$1\">@$1</a>", $tweet);


			$twitter .= "<article class='item twitter " . $username . "'><a href='https://twitter.com/" . $username . "' target='_blank'><img class='tweet_img' src='" . $profile_image . "' alt='" . $username . "' /></a><div class='tweet-content'>" . $tweet;

			if (isset($style)) {
				if (!empty($style)) {
					$when  = ($style == 'time_since' ? 'about' : 'on');
					$twitter.="<div class='tweet-footer'><i class='fa fa-twitter'></i>&nbsp; by <a href='https://twitter.com/" . $username . "' target='_blank'>" . $username . "</a> <span>" . $when;

					switch ($style) {
					case 'eng_suff': {
							$twitter .= $english_suffix . '&nbsp;' . $full_month;
						}
						break;
					case 'time_since'; {
							$twitter .= $timeDiff . "&nbsp;ago";
						}
						break;
					case 'ddmmyy'; {
							$twitter .= $ddmmyy;
						}
						break;
					case 'ddmm'; {
							$twitter .= $ddmm;
						}
						break;
					case 'full_date'; {
							$twitter .= $full_date;
						}
						break;
					case 'default'; {
							$twitter .= $default;
						}
					} //end switch statement
					$twitter .= "</span><span class='hidden_date'>" . $sort_date . "</span></div></div></article>"; //end of List
				}
			}

		} //end of foreach
	} else {
		$twitter .= '<article>No tweets</article>';
	} //end if statement
 //end of Unordered list (Notice it's after the foreach loop!)
	echo $twitter;
}
?>