import React from 'react';
import '../../App.css';

function WaystoGive() {

    return(
        <>
        <div id="headerandsummary">
            <p id="header4">Ways to Give</p>
            <center><p id="summary">You can make a difference for animals right here in our community. As an independent, local nonprofit, NHS is not funded by national humane societies or animal welfare organizations. This is why we need you! NHS has been awarded Charity Navigator’s Four Star designation and GuideStar’s Platinum Seal of Transparency, giving you confidence your donation is making the biggest impact possible</p></center>
        </div>

        <div id="waysToGiveCards">
            <div id="waysToGiveCard">
                <p id="header3">Matching Donations!</p>
                <p id="cardlabel">Matching gifts are an excellent way to double your impact and save the lives of more animals in our community. Many companies will match employee donations or volunteer time. Enter your company name below to find out if matching funds or volunteer grants are offered. If your company offers these benefits, details will be provided.</p>
            </div>

            <div id="waysToGiveCard">
                <p id="header3">Honor and Memorial Gifts</p>
                <p id="cardlabel">Recognize a loved one by making a gift to the animals. Your meaningful gift will show you care about your loved ones and the animals at the Nebraska Humane Society.  </p>
            </div> 

            <div id="waysToGiveCard">
                <p id="header3">Planned Giving</p>
                <p id="cardlabel">Including the Nebraska Humane Society in your estate plans will save lives long after you’re gone. Your commitment will help prop up animals who have been abandoned, abused and neglected in our community. Remembering NHS in your plans will allow us to help the thousands of animals who come through our doors each year.</p>
            </div>

            <div id="waysToGiveCard">
                <p id="header3">For Federal Employees</p>
                <p id="cardlabel">Federal Employees we invite you to show some love to homeless animals through the Heart of the Midland Combined Federal Campaign. Your generosity will help NHS rescue, rehabilitate and rehome homeless pets. CFC donors can give through payroll deduction, which enables you to give a little bit each pay period and have it pay off big at the end of the year. Our designation number is 84441 to show some love for homeless animals.</p>
            </div>

            <div id="waysToGiveCard">
                <p id="header3">IRAs, Stocks, and Donor Advised Funds</p>
                <p id="cardlabel">You can give any amount (up to a maximum of $100,000 per year) from your IRA to a qualified charity, such as NHS, without having to pay income taxes on the money.Do you own appreciated stock? When you donate appreciated stock, held for at least one year, NHS receives the full value of the stock, and you avoid paying capital gains tax (which can be as high as 20%). You receive the same income tax savings you would if you wrote a check but eliminate capital gains taxes. A DAF, which is like a charitable savings account, gives you the flexibility to recommend how much and how often money is granted to qualified charities like the Nebraska Humane Society. DAF allow donors to make a charitable contribution, receive an immediate tax deduction and then recommend grants from the fund over time.</p>
            </div>
            
            <div id="waysToGiveCard">
                <p id="header3">Monthly Giving</p>
                <p id="cardlabel">The Lifesaver League is for animal lovers who want to provide care all year long. The animals at NHS rely on The League as a steady source of income. League members will receive the E-Paws online newsletter, Tail's Tales magazine, exclusive rescue and recovery updates and special sneak peeks throughout the year! Can you help ensure the future of the animals at NHS?</p>
            </div>
            
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
    </>
    )
}

export default WaystoGive;