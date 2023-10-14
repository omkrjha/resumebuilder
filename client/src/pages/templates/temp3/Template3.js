import React from 'react';
import '../../../resources/templates.css';
import { BiLinkExternal } from 'react-icons/bi';
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoIosMail,
  IoIosPhonePortrait,
} from 'react-icons/io'; 
import { AiOutlineGlobal } from 'react-icons/ai';
const Template3 = () => {
  const user = JSON.parse(localStorage.getItem('omresume-user'));
  return (
    <div className='template1-parent tempHero'>
      <div className='top d-flex flex-column'>
        <h1 style={{ marginBottom: '7px' }}>
          <u>
            {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
          </u>
        </h1>

        <div className='links'>
          {user.email && (
            <a href={user.email}>
              <IoIosMail />
              {'   '} {user.email}
            </a>
          )}
          {user.address && <a>{user.address}</a>}
          {user.mobileNumber && (
            <a>
              <IoIosPhonePortrait />
              {user.mobileNumber}
            </a>
          )}
          {user.linkedin && (
            <a href={user.linkedin} target='_blank'>
              <IoLogoLinkedin /> {user.linkedin.split('www.')[1]}
            </a>
          )}

          {user.github && (
            <a href={user.github}>
              <IoLogoGithub /> {user.github.split('//')[1]}
            </a>
          )}

          {user.portfolio && (
            <a href={user.portfolio}>
              <AiOutlineGlobal /> {user.portfolio.split('//')[1]}
            </a>
          )}
        </div>
      </div>
      {/* Objective */}
      <div className='objective '>
        <h3 className='head'>Objective</h3>
        <hr style={{ marginBottom: '10px' }} />

        <p>{user.carrierObjective}</p>
      </div>
      {/* Education */}
      <div className='education ' style={{ marginBottom: '5px' }}>
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
      {/*  */}
      <div className='skills' style={{ marginBottom: '5px' }}>
        <h3 className='head'>Skills</h3>
        <hr style={{ marginBottom: '10px' }} />

        <ul className='listz'>
          {user.skills.map((skill, index) => {
            return (
              <React.Fragment key={index}>
                <li>{skill.technology} </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
      &nbsp;
      {/* <div className='divider mt-1'></div> */}
      {/* Training */}
      <div className='experience ' style={{ marginBottom: '5px' }}>
        <h3 className='head'>Training & Certifications</h3>
        <hr style={{ marginBottom: '10px' }} />
        {user.training.map((exp, index) => {
          return (
            <div
              style={{ marginBottom: '-15px' }}
              className='d-flex flex-column'
              key={index}
            >
              <h6>
                <b>{exp.title}</b>
                &nbsp;
                {exp.certLink && (
                  <a href={exp.certLink} target='_blank'>
                    <BiLinkExternal />
                  </a>
                )}
                <span className='rangex'>[{exp.range}] </span>
              </h6>
              <ul>
                {exp.rating.split('. ').map((item, index) => {
                  return <li key={index}>{item}.</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
      {/* Projects */}
      <div className='projects '>
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
                {project.depLink && (
                  <a href={project.depLink} target='_blank'>
                    <BiLinkExternal />
                  </a>
                )}
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
      {/* <div className='divider mt-3'></div> */}
      <div className='achievement'>
        <h3 className='head'>Achievements</h3>
        <hr style={{ marginBottom: '10px' }} />
        {user.achievements.map((achievement, index) => {
          return (
            <div
              style={{ marginBottom: '-15px' }}
              key={index}
              className='d-flex flex-column'
            >
              <ul>
                {achievement.description.split('. ').map((item, index) => {
                  return <li>{item}.</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Template3;
