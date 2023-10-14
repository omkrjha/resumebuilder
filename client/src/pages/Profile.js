import React, { useState } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import { Button, Form, message, Spin, Tabs } from 'antd';
import PersonalInfo from '../components/PersonalInfo';
import SkillsEducation from '../components/SkillsEducation';
import ExperienceProjects from '../components/ExperienceProjects';
import Achievements from '../components/Achievements';
import axios from 'axios';

//

const items = [
  {
    key: '1',
    label: `Personal Info`,
    children: <PersonalInfo />,
  },
  {
    key: '2',
    label: `Skills & Education`,
    children: <SkillsEducation />,
  },
  {
    key: '3',
    label: `Experience / Projects`,
    children: <ExperienceProjects />,
  },
  {
    key: '4',
    label: `Achievements`,
    children: <Achievements />,
  },
];
//

const Profile = () => {
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem('omresume-user'));

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const result = await axios.post('api/user/update', {
        ...values,
        _id: user._id,
      });
      localStorage.setItem('omresume-user', JSON.stringify(result.data));
      setLoading(false);
      message.success('Profile updated successfully');
    } catch (error) {
      setLoading(false);
      message.error('Registration failed');
    }
  };

  return (
    <DefaultLayout>
      {loading && <Spin size='large' />}

      <div className='update-profile'>
        <h4>
          <b>Update Profile</b>
        </h4>
        <hr />
        <Form layout='vertical' onFinish={onFinish} initialValues={user}>
          <Tabs defaultActiveKey='1' items={items} />
          <Button htmlType='submit'>UPDATE</Button>
        </Form>
      </div>
    </DefaultLayout>
  );
};

export default Profile;
