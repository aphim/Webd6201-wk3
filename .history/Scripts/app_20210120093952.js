/* custom JavaScript goes here */

//IIFE - Immediately Invoked Function Expression
//AKA - Anonymous Self-Executing Function
//Closure - limits scope leak

"use strict";

(function()
{

    function Start()
    {
        console.log("App Started...");

        let paragraphOneText = "This is a simple site to demonstrate DOM Manipulation for ICE 1";
        
        //Different ways to select a paragraph element "paragraph one"
        let paragraphOneElement = document.getElementById("paragraphOne");
        
        //let paragraphOneParagraph = document.getElementsByTagName("p")[0];
        //let paragraphOneQuery = document.querySelector("p");
        //console.log(paragraphOneElement);
        //console.log(paragraphOneParagraph);
        //console.log(paragraphOneQuery);

        paragraphOneElement.textContent = paragraphOneText;
    }

    

    window.addEventListener("load", Start);

})();