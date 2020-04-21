<?php
	// [0...9]
	function timeCal($A, $B, $C, $D) {
		$timeListPos = array();
    $result = array();

    // AB, AC, AD,
  	// BA, BC, BD,
  	// CA, CB, CD,
  	// DA, DB, DC

    if($A.$B < 24){
      $timeListPos[$A.$B] = [$C.$D, $D.$C];
    }
    if($A.$C < 24){
      $timeListPos[$A.$C] = [$B.$D, $D.$B];
    }
    if($A.$D < 24){
      $timeListPos[$A.$D] = [$B.$C, $C.$B];
    }

    if($B.$A < 24){
      $timeListPos[$B.$A] = [$C.$D, $D.$C];
    }
    if($B.$C < 24){
      $timeListPos[$B.$C] = [$A.$D, $D.$A];
    }
    if($B.$D < 24){
      $timeListPos[$B.$D] = [$A.$D, $D.$A];
    }

    if($C.$A < 24){
      $timeListPos[$C.$A] = [$B.$D, $D.$B];
    }
    if($C.$B < 24){
      $timeListPos[$C.$B] = [$A.$D, $D.$A];
    }
    if($C.$D < 24){
      $timeListPos[$C.$D] = [$A.$B, $B.$A];
    }

    if($D.$A < 24){
      $timeListPos[$D.$A] = [$B.$C, $C.$B];
    }
    if($D.$B < 24){
      $timeListPos[$D.$B] = [$A.$C, $C.$A];
    }
    if($D.$C < 24){
      $timeListPos[$D.$C] = [$A.$B, $B.$A];
    }

    foreach($timeListPos as $key => $val){
      if($key > 24){
        unset($timeListPos[$key]);
      }

      foreach($val as $minK => $minV){
        if($minV > 60){
          unset($timeListPos[$key][$minK]);
        }
      }

      if(count($val) == 2 && $val[0] == $val[1]){
        unset($timeListPos[$key][1]);
      }
    }

    foreach($timeListPos as $key => $val){
      foreach($val as $minK => $minV){
				$result[] = $key . ":" . $minV;
      }
    }

		// usort($result, function($a, $b) {
		// 	return new DateTime($a) <=> new DateTime($b);
		// });

		// php 7.4, Arrow func
		usort($result, fn($a, $b) => new DateTime($a) <=> new DateTime($b));

    print_r($result);

    return count($result);;
  }

  // echo "result: " . timeCal(0, 0, 0, 0) . "\n";
	echo "result: " . timeCal(1, 8, 3, 2) . "\n";
	// echo "result: " . timeCal(2, 3, 3, 2) . "\n";
	// echo "result: " . timeCal(6, 2, 4, 7) . "\n";

?>
