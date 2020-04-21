<?php
	// [0...9]
	function timeCal($A, $B, $C, $D) {
    $numList = array($A, $B, $C, $D);
    $result = array();
    $counter = 0;

    // AB, AC, AD,
  	// BA, BC, BD,
  	// CA, CB, CD,
  	// DA, BB, BC

    if($A.$B < 24){
      $result[$A.$B] = [$C.$D, $D.$C];
    }
    if($A.$C < 24){
      $result[$A.$C] = [$B.$D, $D.$B];
    }
    if($A.$D < 24){
      $result[$A.$D] = [$B.$C, $C.$B];
    }

    if($B.$A < 24){
      $result[$B.$A] = [$C.$D, $D.$C];
    }
    if($B.$C < 24){
      $result[$B.$C] = [$A.$D, $D.$A];
    }
    if($B.$D < 24){
      $result[$B.$D] = [$A.$D, $D.$A];
    }

    if($C.$A < 24){
      $result[$C.$A] = [$B.$D, $D.$B];
    }
    if($C.$B < 24){
      $result[$C.$B] = [$A.$D, $D.$A];
    }
    if($C.$D < 24){
      $result[$C.$D] = [$A.$B, $B.$A];
    }

    if($D.$A < 24){
      $result[$D.$A] = [$B.$C, $C.$B];
    }
    if($D.$B < 24){
      $result[$D.$B] = [$A.$C, $C.$A];
    }
    if($D.$C < 24){
      $result[$D.$C] = [$A.$B, $B.$A];
    }

    foreach($result as $key => $val){
      if($key > 24){
        unset($result[$key]);
      }

      foreach($val as $minK => $minV){
        if($minV > 60){
          unset($result[$key][$minK]);
        }
      }
      if(count($val) == 2 && $val[0] == $val[1]){
        unset($result[$key][1]);
      }
    }

    foreach($result as $key => $val){
      foreach($val as $minK => $minV){
        $counter++;
      }
    }

    print_r($result);

    return $counter;
  }

  // echo timeCal(0, 0, 0, 0);
	echo timeCal(1, 8, 3, 2);
	// echo timeCal(2, 3, 3, 2);
	// echo timeCal(6, 2, 4, 7);

?>
