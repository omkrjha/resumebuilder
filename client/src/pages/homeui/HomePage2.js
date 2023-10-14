import React, { useState } from 'react';
import './homepage2.css';
import temp1Img from '../templates/temp1/temp1.png';
import temp2Img from '../templates/temp2/temp2.png';
import temp3Img from '../templates/temp3/temp3.png';
import temp4Img from '../templates/temp4/temp4.png';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/src/modal';
import { Button } from 'antd';

const HomePage2 = () => {
    const [currImg, setCurrImg] = useState(temp4Img);
  const navigate = useNavigate();
  const templates = [
    {
      title: 'Resume for Freshers',
      image: temp1Img,
    },
    {
      title: 'Experienced Resume Format',
      image: temp2Img,
    },
    {
      title: 'New format resume',
      image: temp3Img,
    },
    {
      title: 'New format resume',
      image: temp4Img,
    },
  ];
  return (
    <React.Fragment>
      <div className='row home'>
        {templates.map((template, index) => {

          return (
            <div key={index} className='col-md-4'>
              <div className='template'>
                <img
                  key={index}
                  src={template.image}
                  height='400'
                  alt={template.title}
                  style={{ width: '100%' }}
                />
                {/* modal */}
                <div
                  className='modal fade'
                  id='imageTarget'
                  tabIndex={index + 1}
                  aria-hidden='true'
                >
                  <div className='modal-dialog'>
                    <div className='modal-content'>
                      <div className='modal-body'>
                        <button
                          type='button'
                          className='btn-close'
                          data-bs-dismiss='modal'
                          aria-label='Close'
                        ></button>
                        <img src={currImg} className='d-block w-100' alt='' />
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className='text'>
                  <p>{template.title}</p>

                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Button
                      data-bs-toggle='modal'
                      data-bs-target='#imageTarget'
                      onClick={() => setCurrImg(template.image)}
                    >
                      Preview
                    </Button>
                    &nbsp;
                    <Button onClick={() => navigate(`/templates/${index + 1}`)}>
                      TRY
                    </Button>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default HomePage2;
