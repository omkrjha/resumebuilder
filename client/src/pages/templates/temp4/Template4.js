import React from 'react';
import './temp4.css';
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoIosMail,
  IoIosPhonePortrait,
} from 'react-icons/io';
import { AiOutlineGlobal } from 'react-icons/ai';

{
  /* <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'> */
}

const Template4 = () => {
  const user = JSON.parse(localStorage.getItem('omresume-user'));
  return (
    //
    <div className='container '>
      <div className='headerz'>
        <div className='full-name'>
          <span className=''>{user.firstName.toUpperCase()}</span> &nbsp;
          <span className='last-name'> {user.lastName.toUpperCase()}</span>
        </div>
        <u></u>
        <div className='contact-info'>
          {user.email && (
            <span className='email'>
              <a href={user.email}>
                <IoIosMail />
                {user.email}
              </a>
            </span>
          )}
          {/* <span className='email-val'>{user.email}</span> */}
          <span className='separator'></span>
          {user.mobileNumber && (
            <span className='phone'>
              <a>
                <IoIosPhonePortrait />
                {user.mobileNumber}
              </a>
            </span>
          )}{' '}
          {/* <span className='phone-val'>111-222-3333</span> */}
          <span className='separator'></span>
          {user.linkedin && (
            <span className='phone'>
              <a href={user.linkedin} target='_blank'>
                <IoLogoLinkedin /> Linkedin
              </a>
            </span>
          )}{' '}
          <span className='separator'></span>
          {user.portfolio && (
            <span className='phone'>
              <a href={user.portfolio}>
                <AiOutlineGlobal /> Portfolio
              </a>
            </span>
          )}
        </div>

        <div className='about'>
          {/* <span className='position'>{} </span> */}
          <span className='desc'>{user.carrierObjective}.</span>
        </div>
      </div>
      {/*  */}

      <div className='details'>
        <div style={{  }} className='section'>
          <div className='section__title'>Experience</div>
          {user.experience.map((exp, index) => {
            return (
              <div
                style={{ marginBottom: '-13px' }}
                key={index}
                className='section__list'
              >
                <div style={{ display: 'flex' }} className='section__list-item'>
                  <div style={{ width: '20vw' }} className='leftm'>
                    <div style={{ fontWeight: 'bold' }} className='name'>
                      {exp.company}
                    </div>
                    <div className='addr'>{exp.place}</div>
                    <div className='duration'>[{exp.range}]</div>
                  </div>
                  <div style={{ width: '70vw' }} className='rightm'>
                    {/* <div className='name'>Fr developer</div> */}
                    <div className='desc'>
                      <ul>
                        {exp.description.split('. ').map((item, index) => {
                          return <li key={index}>{item}.</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/*  */}

        <div
          style={{ marginBottom: '40px' }}
          className='section'
        >
          <div className='section__title'>Skills</div>
          <div className='skills'>
            <div className='skills__item'>
              <div className='listz'>
                <ul>
                  {user.skills.map((skill, index) => {
                    return <li>{skill.technology} </li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        &nbsp;
        {/*  */}
        <div style={{ marginBottom: '10px' }} className='section'>
          <div className='section__title'>Education</div>
          <div className='section__list'>
            {user.education.map((education, index) => {
              return (
                <div
                  style={{ marginBottom: '-15px' }}
                  key={index}
                  className='name d-flex align-items-center'
                >
                  <h6 style={{ width: 120 }}>
                    <b>{education.range} : </b>
                  </h6>
                  <p>
                    <span>{education.qualification}</span> with
                    <span>{education.percentage}%</span> in{' '}
                    {education.institution}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/*  */}
        <div className='section'>
          <div className='section__title'>Projects</div>
          <div className='section__list'>
            {user.projects.map((project, index) => {
              return (
                <div
                  key={index}
                  style={{ marginBottom: '-10px' }}
                  className='section__list-item'
                >
                  <div className='name' style={{ marginBottom: '-7px' }}>
                    <h6>
                      <b>{project.title} </b>
                      <span className='rangex'>[{project.range}]</span>
                    </h6>
                  </div>
                  <ul>
                    {project.rating.split('. ').map((item, index) => {
                      return <li key={index}>{item}.</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        {/*  */}
        <div className='section'>
          <div className='section__title'>Achievements</div>
          <div className='section__list'>
            {user.achievements.map((achievement, index) => {
              return (
                <div
                  style={{ marginBottom: '-15px' }}
                  key={index}
                  className='section__list-item d-flex flex-column'
                >
                  <ul>
                    {achievement.description.split('. ').map((item, index) => {
                      return <li key={index}>{item}.</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>

    //
  );
};

export default Template4;
