import React, { useEffect, useState } from 'react';
import { Button, Form, Input, message, Spin } from 'antd';
import { Navigate, useNavigate } from 'react-router-dom';
import '../resources/authentication.css';
import axios from 'axios';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const user = await axios.post('api/user/login', values);
      message.success('Login successfull');
      localStorage.setItem('omresume-user', JSON.stringify(user.data));
      setLoading(false);
      navigate('/home');
    } catch (error) {
      setLoading(false);
      message.error('Login failed');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('omresume-user')) {
      return navigate('/home');
    }
  }, []);

  return (
    <div style={{ overflow: 'hidden' }} className='grid-container'>
      <section className='grid-child lefti box '>
        <p className='cont'>
          You are just 3 Steps away from Creating Your Dream Resume
          <ul>
            <li>Log in(or Register no email Id Required) & Enter your details in Profile Section.</li>
            <li>TRY any resume you Like.</li>
            <li>And Print that resume.</li>
          </ul>
        </p>
      </section>

      <section className='auth-parent grid-child righti'>
        {loading && <Spin size='large' />}
        <Form
          style={{
            maxWidth: 600,
            border: 'solid',
            borderRadius: '8%',
          }}
          layout='vertical'
          onFinish={onFinish}
        >
          <h1>LOGIN</h1>
          <hr />
          <Form.Item
            name='username'
            label='Username'
            rules={[
              {
                required: true,
                message: 'Enter Your Username!',
              },
            ]}
          >
            <Input
              style={{
                border: 'white',
                height: '36px',
                width: '300px',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '0%',
                right: '-14px',
              }}
              placeholder='username'
            />
          </Form.Item>

          <Form.Item
            name='password'
            label='Password'
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password
              style={{
                border: 'white',
                height: '45px',
                display: 'flex',
              }}
              type='password'
              placeholder=' Password'
            />
          </Form.Item>

          <Button
            className="glow-on-hover" 
            type='primary'
            htmlType='submit'
          >
            LOGIN
          </Button>
          <p className='nav'>
            Don't have an account &nbsp;
            <AiOutlineArrowRight /> &nbsp;
            <a style={{ color: 'blue' }} href='/register'>
              Register
            </a>
          </p>
        </Form>
      </section>
    </div>
  );
};

export default Login;
