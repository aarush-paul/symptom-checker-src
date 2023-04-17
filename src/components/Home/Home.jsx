import React, { Component } from "react";
import "./Home.css";

const Home = (props) => {
  //   console.log("is checked", props, props.isChecked, props.checked);
  return (
    <React.Fragment>
      <div id="Home" className="tablet:grid-col padding-x-2">
        <p><b>OldGro</b> is app made specifically for the old-age population for learning about the possible disease they might carry based on their symptoms.</p>
        <p>Before using OldGro, please read carefully and accept our Terms and Services:</p>
        <ul>
          <li>This checkup is not a diagnosis and is not an alternative to a doctor's appointment</li>
          <li>This checkup is for informational purposes and is not a qualified medical opinion.</li>
          <li>Information that you provide is anonymous and not shared with anyone. We also do not store any information on our server.</li>
          <li>The authors are not responsible for any wrong disease predictions.</li>
        </ul>
        <p><b>INCASE OF EMERGENCIES, PLEASE DO NOT RELY ON THIS SOFTWARE FOR DIAGNOSIS, SEEK IMMEDIATE MEDICAL CARE</b></p>
        <p><a href="tel:100"><button class="w3-button w3-ripple w3-round-xlarge w3-indigo">Click here to contact Police support</button></a></p>
        <p><a href="tel:9830079999"><button class="w3-button w3-ripple w3-round-xlarge w3-indigo">Click here to contact Medical support</button></a></p>
        <form class="usa-form TermsCheckbox">
          <div class="usa-checkbox">
            <input checked={props.isChecked} onChange={props.checked} class="usa-checkbox__input" id="truth" type="checkbox" name="historical-figures-1" value="truth" />
            <label class="usa-checkbox__label" for="truth">
              I agree to the terms and conditions
            </label>
          </div>
        </form>
        <p>Made by Aarush Paul, Mayank Pradhan and Samim Parvej Khan</p>
      </div>

      <div className="tablet:grid-col">{/* <img src="/images/TOS.png" /> */}</div>
    </React.Fragment>
  );
};

export default Home;
