/* custom JavaScript goes here */

//IIFE - Immediately Invoked Function Expression
//AKA - Anonymous Self-Executing Function
//Closure - limits scope leak


"use strict";
/*
let myContact = 
{
    "fullName":"Tom Smith",
    "ContactNumber":"4165555555",
    "EmailAddress":"tom@example.ca",
    "saysHello": function(){
        console.log(`${fullName} says Hello!`);
    },
    "someOtherList":{
        "friendsList":[
            "Peter Parker", "Tony stark", "Stephen Strange"
        ]
    }
};*/

(function()
{
function displayHome()
{

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
        //mainContent.firstElementChild.textContent = "Welcome Home!";

        mainContent.innerHTML =
        `<h1 id="firstHeading">Welcome to WEBD6201 - Lab 1</h1>
        <p id="paragraphOne" class="fs-3 fw-bold">This is my first paragraph</p>`
    
}
function displayAbout()
{
    
}
function displayProjects()
{
    
}
function displayServices()
{
    
}
function displayContactList() 
    {
      if (localStorage.length > 0) 
      {
        let contactList = document.getElementById("contactList");

        let data = "";

        for (let index = 0; index < localStorage.length; index++) 
        {
          let contactData = localStorage.getItem((index + 1).toString());

          let contact = new Contact();
          contact.deserialize(contactData);

          data += `<tr>
          <th scope="row">${index + 1}</th>
          <td>${contact.FullName}</td>
          <td>${contact.ContactNumber}</td>
          <td>${contact.EmailAddress}</td>
        </tr>`;
        }

        contactList.innerHTML = data;
      }
    }

function displayContact()
{
    let messageArea = document.getElementById("messageArea");
    messageArea.hidden = true;
    //form validation
    let fullName = document.getElementById("fullName");
        fullName.addEventListener("blur", function() 
        {
            if(fullName.value.length < 2)
            {
                fullName.focus();
                fullName.select();
                messageArea.hidden = false;
                messageArea.textContent = "Please enter an appropriate Name";
            }
            else
            {
                messageArea.removeAttribute("class");
                messageArea.hidden = true;
            }
        });



    let sendButton = document.getElementById("sendButton");
    sendButton.addEventListener("click", function(event)
    {
        //event.preventDefault();
        let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
        
        if(contact.serialize())
        {
            localStorage.setItem((localStorage.length + 1).toString(), contact.serialize());
        }

    });
}




    function Start()
    {
        console.log("App Started...");

        switch(document.title)
        {
            case "Home":
                displayHome();
                break;
            case "About":
                displayAbout();
                break;
            case "Projects":
                displayProjects();
                break;
            case "Services":
                displayServices();
                break;
            case "Contact":
                displayContact();
                break;
            case "Contact-List":
                displayContact();
                break;
        }
        
    }

    

    window.addEventListener("load", Start);

})();