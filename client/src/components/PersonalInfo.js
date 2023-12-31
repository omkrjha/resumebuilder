import React from 'react';
import { Form, Input } from 'antd';

const { TextArea } = Input;
const PersonalInfo = () => {
  return (
    <div className='row'>
      <div className='col-md-4'>
        <Form.Item
          name='firstName'
          label='First Name'
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
      </div>
      <div className='col-md-4'>
        <Form.Item
          name='lastName'
          label='Last Name'
          rules={[{ required: false }]}
        >
          <Input />
        </Form.Item>
      </div>
      <div className='col-md-4'>
        <Form.Item name='email' label='Email' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </div>
      <div className='col-md-4'>
        <Form.Item
          name='mobileNumber'
          label='Mobile Number'
          rules={[{ required: false }]}
        >
          <Input />
        </Form.Item>
      </div>
      <div className='col-md-4'>
        <Form.Item
          name='linkedin'
          label='Linkedin'
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
      </div>
      <div className='col-md-4'>
        <Form.Item
          name='github'
          label='Github'
          rules={[{ required: false }]}
        >
          <Input />
        </Form.Item>
      </div>
      <div className='col-md-4'>
        <Form.Item
          name='portfolio'
          label='Portfolio'
          rules={[{ required: false }]}
        >
          <Input />
        </Form.Item>
      </div>

      <div className='col-md-12'>
        <Form.Item
          name='carrierObjective'
          label='Carrier Objective'
          rules={[{ required: false }]}
        >
          <TextArea />
        </Form.Item>
      </div>
      <div className='col-md-12'>
        <Form.Item
          name='address'
          label='Address'
          rules={[{ required: false }]}
        >
          <TextArea />
        </Form.Item>
      </div>
     
    </div>
  );
};

export default PersonalInfo;
