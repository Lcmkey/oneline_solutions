<?php
	// [0...9]
	function timeCal($A, $B, $C, $D) {
    $result = array();

    // AA, AB, AC, AD
  	// BA, BB, BC, BD
  	// CA, CB, CC, CD
  	// DA, DB, DC DD
    $map = array(0, 1, 2, 3);
    $arr = array(
      array($A.$A, $A.$B, $A.$C, $A.$D),
      array($B.$A, $B.$B, $B.$C, $B.$D),
      array($C.$A, $C.$B, $C.$C, $C.$D),
      array($D.$A, $D.$B, $D.$C, $D.$D)
    );

    foreach($arr as $k => $v) {
      foreach($v as $internalK => $internalVal){
        // $k.$k => 00(AA), 11(BB), 22(CC) ,33(DD)
        if($k.$internalK != $k.$k){

          // [0, 1, 2, 3] [1, 3] => [0, 2]
          $buff = array_merge([], array_diff($map, [$k, $internalK]));

          // hours less than 24, minutes less than 60, hour =AB minutes = [CD, DC]
          $validHr = $internalVal < 24;
          if($validHr && $arr[$buff[0]][$buff[1]] < 60){
            $result[] = $internalVal . ":" . $arr[$buff[0]][$buff[1]];
          }
          if($validHr && $arr[$buff[1]][$buff[0]] < 60){
            $result[] = $internalVal . ":" . $arr[$buff[1]][$buff[0]];
          }
        }
      }
    }

    $result = array_unique($result);

		// usort($result, function($a, $b) {
  	// 	return new DateTime($a) <=> new DateTime($b);
		// });

		// php 7.4, Arrow func
		usort($result, fn($a, $b) => new DateTime($a) <=> new DateTime($b));

    print_r($result);

    return count($result);
  }

  // echo "result: " . timeCal(0, 0, 0, 0) . "\n";
	echo "result: " . timeCal(1, 8, 3, 2) . "\n";
	// echo "result: " . timeCal(2, 3, 3, 2) . "\n";
	// echo "result: " . timeCal(6, 2, 4, 7) . "\n";

?>
