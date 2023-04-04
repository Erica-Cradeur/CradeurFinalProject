import React from 'react';
import '../../App.css';



function Home() {
  return (
  <>
      <div id="heroImg">
        <p id="header5">Nebraska Humane Society</p>
      </div>

      <div class="main">
      <p id="header">Our Mission</p>
      <div id="missionContainer"><center>
        <p id="ourMission">The Nebraska Humane Society protects, saves and enriches the lives of animals in the communities we serve. We provide education, give sanctuary to animals, encourage adoptions and promote responsible pet ownership.</p>
      </center>
      </div>

      <p id="header2">Adoptable Animals Now!</p>
      <div id="dawgs">
        <div id="dawg">
          <img id="adoptableDogs" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"/>
          <p id="dawglabel">Seve</p>
        </div>
        <div id="dawg">
          <img id="adoptableDogs" src="https://images.unsplash.com/photo-1625316708582-7c38734be31d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=1296&q=60"/>
          <p id="dawglabel">Kona</p>
        </div>
        <div id="dawg">
          <img id="adoptableDogs" src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1294&q=80"/>
          <p id="dawglabel">Squilliam</p>
        </div>
      </div>

      <p id="header2">Upcoming Events</p>
      <div id="events">
      <div id="tieandtailscontainer"><center>
        <img id="tieandtails" src="https://images.unsplash.com/photo-1521128591876-b4ace034003a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/></center>
        <p id="imgCaption"><center>Black Tie and Tails - June 10th</center></p>
      </div>
      <div id="tieandtailscontainer"><center>
        <img id="tieandtails" src="https://media.istockphoto.com/photos/mixed-breed-dog-at-the-dining-room-table-picture-id1197713092?k=20&m=1197713092&s=612x612&w=0&h=DUMDHaU8AtyUf2kh0e-EIdyxWVFlMnk_9GbooFGRj9U="></img>
        <p id="imgCaption"><center>Dining with Dogs - 2023</center></p>
        </center></div>
      </div>

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

    </div>
      
    </>
  );
}
export default Home;