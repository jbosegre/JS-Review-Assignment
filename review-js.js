var $countNumber = 0;
var $maxNum = 100;

function intro() {
    console.log("Introduction to JavaScript");
}

function FizzBuzz(){
    for (var $i = 0; $i < $maxNum; $i++){
        if($i % 3 && !$i % 5){
            console.log("Fizz");
        }
        else if($i % 5 && !$i % 3){
            console.log("Buzz");
        }
        else if ($i % 3 && $i % 5){
            console.log("FizzBuzz");
        }
        else{
            $countNumber += 1;
            console.log($countNumber);
        }
    }
}