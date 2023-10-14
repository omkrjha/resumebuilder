import { Button, Dropdown } from 'antd';
import React from 'react';
import logoRes from "./logoRes.webp"
import './../resources/defaultLayout.css';
import { UserOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

const DefaultLayout = (props) => {
  const user = JSON.parse(localStorage.getItem('omresume-user'));
  const navigate = useNavigate();
  const items = [
    {
      key: '1',
      label: <Link to='/home'>Home</Link>,
    },
    {
      key: '2',
      label: <Link to='/profile'>Profile</Link>,
    },
    {
      key: '3',
      label: (
        <span
          onClick={() => {
            localStorage.removeItem('omresume-user');
            navigate('/login');
          }}
        >
          Logout
        </span>
      ),
    },
  ];
  return (
    <div className='layout'>
      <div className='header '>
        <Link to='/'>
          <h1>
            
            <img className='logo' src={logoRes} alt="" />
          </h1>
        </Link>
        <Dropdown
          menu={{
            items,
          }}
          placement='bottom'
          arrow
        >
          <Button style={{ color: 'red' }} icon={<UserOutlined />}>
            {user.username.toUpperCase()}
          </Button>
        </Dropdown>
      </div>
      <div className='content'>{props.children}</div>
      <div className='footer'>
        Build by{' '}
        <a
          style={{ color: 'rgba(15, 84, 246, 0.808)' }}
          href='https://omkrjha.netlify.app/'
        >
          @omkrjha
        </a>
      </div>
    </div>
  );
};

export default DefaultLayout;
