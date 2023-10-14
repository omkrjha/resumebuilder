import React from 'react';
import '../../../resources/templates.css';
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoIosMail,
  IoIosPhonePortrait,
} from 'react-icons/io';
import { AiOutlineGlobal } from 'react-icons/ai';
const Template2 = () => {
  const user = JSON.parse(localStorage.getItem('omresume-user'));

  return (
    <div className='template1-parent tempHero'>
      <div
        style={{ marginBottom: '5px', textDecoration: 'none' }}
        className='top d-flex justify-content-between'
      >
        <span>
          <h1>
            {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
          </h1>
          <div className='links'></div>
          <a href={user.portfolio} target='_blank'>
            <p>
              {' '}
              <AiOutlineGlobal /> &nbsp;
              {user.portfolio.split('//')[1]}
            </p>
          </a>

          <a href={user.github} target='_blank'>
            <p>
              {' '}
              <IoLogoGithub /> &nbsp;
              {user.github.split('//')[1]}
            </p>
          </a>
        </span>
        <div>
          <a href='mailto:{user.email}'>
            {' '}
            <p>
              {' '}
              <IoIosMail /> &nbsp;
              {user.email}
            </p>
          </a>

          <p>{user.address}</p>

          <a href={user.linkedin} target='_blank'>
            <p>
              <IoLogoLinkedin />
              &nbsp; {user.linkedin.split('www.')[1]}
            </p>
          </a>

          <p>
            {' '}
            <IoIosPhonePortrait />
            &nbsp;{user.mobileNumber}
          </p>
        </div>
      </div>

      {/* <div className='divider '></div> */}
      <div> </div>
      {'  '}
      {/* Objective */}
      <div style={{ marginBottom: '6px' }} className='objective '>
        <h3 className='head'>Objective</h3>
        <hr style={{ marginBottom: '10px' }} />

        <p>{user.carrierObjective}</p>
      </div>
      {/* <div className='divider '></div> */}
      {/* Education */}
      <div style={{ marginBottom: '6px' }} className='education '>
        <h3 className='head'>Education</h3>
        <hr style={{ marginBottom: '10px' }} />

        {user.education.map((education, index) => {
          return (
            <div key={index} className='d-flex align-items-center'>
              <h6 style={{ width: 120 }}>
                <b>{education.range} : </b>
              </h6>
              <p>
                <b>{education.qualification}</b> with{' '}
                <b>{education.percentage}%</b> in {education.institution}
              </p>
            </div>
          );
        })}
      </div>

      {/* <div className='divider '></div> */}
      {user.experience != '' && (
        <div style={{ marginBottom: '6px' }} className='experience '>
          <h3 className='head'>Experience</h3>
          <hr style={{ marginBottom: '10px' }} />

          {user.experience.map((exp, index) => {
            return (
              <div
                style={{ marginBottom: '-15px' }}
                className='d-flex flex-column'
                key={index}
              >
                <h6>
                  <b>{exp.company}</b> in <b>{exp.place}</b>
                  <span className='rangex'>[{exp.range}] </span>
                </h6>
                <ul>
                  {exp.description.split('. ').map((item, index) => {
                    return <li key={index}>{item}.</li>;
                  })}
                </ul>
              </div>
            );
          })}
          {/* <div className='divider '></div> */}
        </div>
      )}

      <div style={{ marginBottom: '6px' }} className='projects '>
        <h3 className='head'>Projects</h3>
        <hr style={{ marginBottom: '10px' }} />

        {user.projects.map((project, index) => {
          return (
            <div
              style={{ marginBottom: '-15px' }}
              key={index}
              className='d-flex flex-column'
            >
              <h6>
                <b>{project.title} </b>
                <span className='rangex'>[{project.range}]</span>
              </h6>
              <ul>
                {project.rating.split('. ').map((item, index) => {
                  return <li key={index}>{item}.</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>

      {/* <div className='divider '></div> */}

      <div className='projects '>
        <h3 className='head'>Skills</h3>
        <hr style={{ marginBottom: '10px' }} />
        <ul className='listz'>
          {user.skills.map((skill, index) => {
            return (
              <>
                <li>{skill.technology} </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Template2;
