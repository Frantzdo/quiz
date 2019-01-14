/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var cityPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore = question1() + question2() + question3() ;
        
        function question1(q1Result) {
            if(q1Result === "Juice") {
                return 1;
            }
            else if(q1Result === "Soda") {
                return 2
            }
            else if (q1Result === "Water") {
                return 3
            } 
        }
        
        function question2(q2Result) {
            if(q2Result === "Halloween") {
                return 1;
            }
            else if (q2Result === "Thanksgiving") {
                return 2;
            }
            else if (q2Result ==="Christmas") {
                return 3;
            }
        }
        
        function question3(q3Result) {
            if(q3Result === "Walking") {
                return 1;
            }
            else if (q3Result === "Biking") {
                return 2;
            }
            else if (q3Result === "Driving") {
                return 3;
            }
            else if (q3Result === "Transportation") {
                return 3;
            }
        
        }
        
        function congrats (q1Result){
            return q1Result;
        }
        
        var yes = q1Result;
        
        var city = "New York";
        
        if (true) {
            city = "LA";
        } else if (false) {
            city = "Houston";
        }
        
        alert(city);
        
    });

});
