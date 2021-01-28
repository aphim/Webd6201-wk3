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
        this.m_fullName = fullName;
        this.m_contactNumber = contactNumber;
        this.m_emailAddress = emailAddress;
    }
    //toString
    toString() {
        return `Full Name  : ${this.m_fullName} \nContact Number: ${this.m_contactNumber} \nEmail Address: ${this.m_emailAddress}`;
    }

    /**
     * This method returns a JSON object made up of the properties of teh contact class
     * 
     * @returns {Object}
     */
    toJSON()
    {
        return {
            "fullName":this.fullName,
            "contactNumber": this.contactNumber,
            "enailAddress": this.emailAddress
        }
    }

    /**
     * This method converts the contact into a coma seperated value string
     * @returns {string}
     */
    serialize()
    {
        return `${this.m_fullName},${this.m_contactNumber},${this.m_emailAddress}`;
    }

    /**
     *This method takes a coma-separated data string and assigns the value to the contact class properties
     * @param {string} data
     * @return {void}
     */
    deserialize(data)
    {
        let propertyArray = data.split(",");
        this.fullName = propertyArray[0];
        this.ContactNumber = propertyArray[1];
        this.emailAddress = propertyArray[2];
    }
}