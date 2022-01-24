import React from "react";
import { Link } from "react-router-dom";
import teamImg from "../../src/img/professional-man.jpg";
import appData from "../components/DataSource/appData";
const AboutStyle = {
  backgroundImage: `url(${
    process.env.PUBLIC_URL + "/contents/assets/images/the-company-banner.jpg"
  })`,
  padding: "100px 0px",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
};

const teamMember = [
  {
    tname: "Jak Ma",
    tdeg: "Web Developer",
  },
  {
    tname: "Json Roy",
    tdeg: "Web Designer",
  },
  {
    tname: "Watson Roy",
    tdeg: "Graphic Designer",
  },
  {
    tname: "Thomas Bold",
    tdeg: "Fullstrack Developer",
  },
];

const aboutTitle = {
  tname: "About Us",
  adesc:
    "We offer excellent value to our customers by bringing them high quality & original brand products from UK USA Korea & Around the world at competitive prices We have in place efficient system and passionate people to source health and beauty products of your choice. Now that we have made shopping of high quality, original brand products from across the world easy for you, you do not need to use fake products, replica cosmetics made of harmful chemicals. Use best products from all over the world to keep your health and beauty bold.Have a look around our range of collection and order your products straight away. Or, if you are interested in any particular product/brand on any WEBSITE of Europe, UK, USA based company please do get in touch with us, we will bring it to you.",
};
const data = appData.BottomAdress;

const About = () => {
  return (
    <div>
      <div className="about-us-main-page" style={AboutStyle}>
        <div className="container">
          <div className="about-us-banner">
            <h2>{aboutTitle.tname}</h2>
            <p>{aboutTitle.adesc}</p>
          </div>
        </div>
      </div>
      <div className="our-promise-area">
        <div className="container">
          <div className="promise-img">
            <img src="/contents/assets/images/aboutpromise.jpg" alt="img" />
          </div>
        </div>
      </div>
      {/* <div className="our-team-area">
                <div className="container">
                    <h2 className="meet-team-title">Meet Our Team</h2>
                    <div className="our-team-main-flex">
                        {
                            teamMember.map(uesTeam => (
                        <div className="our-team-single">
                            <img src={teamImg} alt="img" />
                            <h2>{uesTeam.tname}</h2>
                            <h6>{uesTeam.tdeg}</h6>
                        </div>

                        ))
                        }
                    </div>
                </div>
            </div> */}
      <div className="bottom-about">
        <div className="container">
          <div className="container-about"> 
          <div className="about-container__address">
            <ul>
              <li>
                <i class="fa fa-home" aria-hidden="true"></i>
                <span>{data.address}</span>
              </li>
              <li>
                <i class="fa fa-volume-control-phone" aria-hidden="true"></i>

                <Link to={"tel:" + data.mobile}>{data.mobile}</Link>
              </li>
              <li>
                <i class="fa fa-envelope-o" aria-hidden="true"></i>

                <Link to={"mailto:" + data.email}>{data.email}</Link>
              </li>
            </ul>
          </div>

          <div className="about-container__map">
          <iframe title="Shoppers Park" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3649.4472589128736!2d90.3629873!3d23.8382467!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14866486c7d%3A0xe8693af991501c96!2sIqrasys%20Solutions%20Limited!5e0!3m2!1sen!2sbd!4v1643015386239!5m2!1sen!2sbd" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
        </div> 
      </div>
    </div>
  );
};

export default About;
