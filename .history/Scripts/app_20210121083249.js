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
        paragraphOneElement.className = "fs-5";

        // step 1. Create an element
        let newParagraph = document.createElement("p");
        //step 2. configure element
        newParagraph.setAttribute("id", "paragraphTwo");
        newParagraph.textContent = "...And this is paragraph two";
        //Step 3. select the parent element
        let mainContent = document.getElementsByTagName("main")[0];
        //step 4. Add/insert the element
        mainContent.appendChild(newParagraph);

        newParagraph.className = "fs-6";

        //////another way to add an element ///////
        //let paragraphThree =`<p class="fs-7 fw-bold">And this is the Third Paragraph</p>`;
        //mainContent.innerHTML = paragraphThree;

        let paragraphDiv = document.createElement("div");
        let paragraphThree = `<p id="paragraphThree" class="fs-7 fw-bold">And this is the third paragraph</p>`
        paragraphDiv.innerHTML = paragraphThree;

        //insertion before a node
        //newParagraph.before(paragraphDiv);
        newParagraph.after(paragraphDiv);

        //deletions
        //paragraphOneElement.remove();
        mainContent.removeChild(paragraphOneElement);

        //Update / modification of an element


    }

    

    window.addEventListener("load", Start);

})();