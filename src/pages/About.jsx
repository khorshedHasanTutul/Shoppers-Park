import React from 'react';
import teamImg from '../../src/img/professional-man.jpg'
const AboutStyle =
    {
        backgroundImage: `url(${process.env.PUBLIC_URL + '/contents/assets/images/the-company-banner.jpg'})`,
        padding: '100px 0px',
        backgroundSize: '100% 100%',
        backgroundRepeat: "no-repeat",
    }

const teamMember = [
    {
        tname: 'Jak Ma',
        tdeg: 'Web Developer',
    },
    {
        tname: 'Json Roy',
        tdeg: 'Web Designer',
    },
    {
        tname: 'Watson Roy',
        tdeg: 'Graphic Designer',
    },
    {
        tname: 'Thomas Bold',
        tdeg: 'Fullstrack Developer',
    }
]    

 const aboutTitle = {
     tname: 'About Us',
     adesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iusto illo maxime porro blanditiis tempore, atque, aut in, fuga velit quos nostrum soluta delectus ratione aliquid. Exercitationem, minus. Labore, harum! fuga velit quos nostrum soluta delectus ratione aliquid. Exercitationem, minus. Labore, harum!'
 }   


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
            <div className="our-team-area">
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
            </div>
       </div>
    );
};

export default About;