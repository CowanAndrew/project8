/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: 
      Date:   

      Filename: script.js
 */


      document.addEventListener("DOMContentLoaded", function() {
            var square = document.getElementById("square");
            var feedback = document.getElementById("feedback");
            
            square.addEventListener("mouseover", function() {
                feedback.innerHTML = "You're hovering over the square";
            });
        });

        document.addEventListener("DOMContentLoaded", function() {
            var triangle = document.getElementById("triangle");
            var feedback = document.getElementById("feedback");
            
            triangle.addEventListener("mouseover", function() {
                feedback.innerHTML = "You're hovering over the triangle";
            });
        });

        document.addEventListener("DOMContentLoaded", function() {
            var circle = document.getElementById("circle");
            var feedback = document.getElementById("feedback");
            
            circle.addEventListener("mouseover", function() {
                feedback.innerHTML = "You're hovering over the circle";
            });
        });
