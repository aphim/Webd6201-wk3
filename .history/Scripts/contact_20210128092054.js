"use strict";
// Contact Class
class Contact {

    //Mutator
    get FullName() 
    {
        return this.m_fullName;
    }
    set FullName(value) 
    {
        this.m_fullName = value;
    }
    get ContactNumber() 
    {
        return this.m_fullName;
    }
    set ContactNumber(value) 
    {
        this.m_fullName = value;
    }
    get EmailAddress() 
    {
        return this.m_fullName;
    }
    set EmailAddress(value) 
    {
        this.m_fullName = value;
    }
    
    /**
     * Contact class constructor
     * @param {*} fullName 
     * @param {*} contactNumber 
     * @param {*} emailAddress 
     */
    constructor(fullName = "", contactNumber = "", emailAddress = "") {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
    }

    /**
     *This method overrides the built in toString method for the contact class
     * @returns {string} 
     */
    toString() {
        return `Full Name  : ${this.FullName} \nContact Number: ${this.ContactNumber} \nEmail Address: ${this.EmailAddress}`;
    }

    /**
     * This method returns a JSON object made up of the properties of teh contact class
     * 
     * @returns {Object}
     */
    toJSON()
    {
        return {
            "fullName":this.FullName,
            "contactNumber": this.ContactNumber,
            "enailAddress": this.EmailAddress
        }
    }

    /**
     * This method converts the contact into a coma-separated value string
     * @returns {string}
     */
    serialize()
    {
        if (this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== "")
        {
            return `${this.FullName},${this.ContactNumber},${this.EmailAddress}`;
        }
        else if (this.FullName === "" && this.ContactNumber === "" && this.EmailAddress === "")
        {
            console.error("One or more properties of the Contact is empty");
            return null;
        }
    }

    /**
     *This method takes a coma-separated data string and assigns the value to the contact class properties
     * @param {string} data
     * @return {void}
     */
    deserialize(data)
    {
        let propertyArray = data.split(",");
        this.FullName = propertyArray[0];
        this.ContactNumber = propertyArray[1];
        this.EmailAddress = propertyArray[2];
    }
}