import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox, message, Spin } from 'antd';
import '../resources/authentication.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineArrowRight } from 'react-icons/ai';
const Register = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post('api/user/register', values);
      setLoading(false);
      message.success('Registration successfull');
    } catch (error) {
      setLoading(false);
      message.error('Registration failed');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('omresume-user')) {
      navigate('/home');
    }
  });
  return (
    <div className='grid-container'>
      <section className='grid-child lefti box'>
        <p className=''>
          You are just 4 Steps away from Creating Your Dream Resume
          <ul>
            <li>Create an Account(no email needed)</li>
            <li>Log in & Enter All your details in Profile Section.</li>
            <li>TRY any resume you Like.</li>
            <li>And Print that resume.</li>
          </ul>
        </p>
          &nbsp;
      </section>
      <div
        style={{ borderRadius: '8%' }}
        className='auth-parent grid-child righti'
      >
        {loading && <Spin size='large' />}
        <Form
          style={{
            maxWidth: 600,
            border: 'solid',
          }}
          name='register'
          layout='vertical'
          onFinish={onFinish}
        >
          <h1>REGISTER</h1>
          <hr />
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Enter Username',
              },
            ]}
            name='username'
            label='Username'
          >
            <Input
              style={{
                border: 'white',
                height: '36px',
                width: '300px',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '0%',
                right: '-15px',
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
            hasFeedback
          >
            <Input.Password
              style={{
                border: 'white',
                height: '40px',
                display: 'flex',
              }}
            />
          </Form.Item>

          <Form.Item
            name='confirm'
            label='Confirm Password'
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      'The two passwords that you entered do not match!'
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password
              style={{
                border: 'white',
                height: '40px',
                display: 'flex',
              }}
            />
          </Form.Item>
          <Button className='glow-on-hover' type='primary' htmlType='submit'>
            REGISTER
          </Button>
          <p className='nav'>
            Already have an account &nbsp; <AiOutlineArrowRight /> &nbsp;
            <a style={{ color: 'blue' }} href='/login'>
              Login
            </a>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Register;
