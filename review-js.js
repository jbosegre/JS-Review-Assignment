/**
 * Created by PhpStorm.
 * User: jbosegre
 * Date: 1/14/2019
 * Time: 3:13 PM
 *
 * this javascript page is separate from the main page
 * as its sole purpose is to run all of the javascript
 * function for the review assignment
 */

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

function countBs(string, char) {
    countChar(string, char);
}

function countChar(string, char) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (str.charAt(i) === "char") {
            count++;
        }
    }
    return (count);
}





