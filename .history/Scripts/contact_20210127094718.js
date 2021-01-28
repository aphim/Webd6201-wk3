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
    //constructor
    constructor(fullName, contactNumber, emailAddress) {
        this.m_fullName = fullName;
        this.m_contactNumber = contactNumber;
        this.m_emailAddress = emailAddress;
    }
    //toString
    toString() {
        return `Full Name  : ${this.m_fullName} \nContact Number: ${this.m_contactNumber} \nEmail Address: ${this.m_emailAddress}`;
    }
}