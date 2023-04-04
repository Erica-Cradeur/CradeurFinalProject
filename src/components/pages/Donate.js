import React from 'react';
import '../../App.css';
import $ from 'jquery';

function Donate() {
  return (
    <>
      <p id="header2">Support the NHS!</p>

      <form action="" method="get">
        <div id="donation-form-container">
          <div id="donation-form">
            <p id="donateheader">Donate Here:</p>

            <div id="namecontainer">
              <div id="firstName">
                <label for="fname" id="fnameText">First name:</label>
                <input type="text" id="fname" name="fname" />
              </div>
              <div id="lastName">
                <label for="lname" id="lnameText">Last name:</label>
                <input type="text" id="lname" name="lname" />
              </div>
            </div>


            <div id="amountContainer">
              <button id="amountButton">$10</button>
              <button id="amountButton">$25</button>
              <button id="amountButton">$50</button>
              <button id="amountButton">$100</button>
              <div>
              <label for="otherAmount" id="amountText">Other Amount: </label>
              <input type="number" id="otherAmount" min="1" max="10000"></input></div>
            </div>
            
            <div id="cardContainer">
              <div>
                <label for="ccn" id="cardText">Credit Card Number: </label>
                <input type="number" id="ccn" placeholder="xxxx xxxx xxxx"></input>
              </div>
            </div>

            <div id="buttonDiv">
              <input type="submit" id="submitButton" value="Finish"></input>
            </div>
          </div>
        </div>
      </form>
    <div><center><hr/></center></div>

    <div id="footerContainer">
      <div id="locationContainer">
        <p id="footerTitle">Location</p>
        <p id="footerInfo">Nebraska Humane Society
          8929 Fort Street
          Omaha, Nebraska 68134
          <br/>
          <u>Phone:</u> 402-444-7800
          <br/>
          <u>Animal control:</u> 402-444-7800, ext. 1</p>
      </div>

      <div id="adoptionHoursContainer">
        <p id="footerTitle">Adoption Hours</p>
        <p id="footerInfo"><u>Monday through Friday:</u> noon to 7 p.m.
          <br/>
          <u>Saturday and Sunday:</u> 10 a.m. to 5 p.m.</p>
      </div>
      
      <div id="businessHoursContainer">
        <p id="footerTitle">Business Hours</p>
        <p id="footerInfo"><u>Monday through Friday:</u> 9 a.m. to 7 p.m.
          <br/>
          <u>Saturday and Sunday:</u> 10 a.m. to 5 p.m.</p>
      </div>
    </div>
   </>
  );
}

export default Donate;