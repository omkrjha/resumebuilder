import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import './home.css';
import HomePage1 from './homeui/HomePage1';
import HomePage2 from './homeui/HomePage2';
import { Layout, Space } from 'antd';

const Home = () => {
  return (
    <DefaultLayout>
      <div className='home1'>
        <HomePage1 />
      </div>
      <u>
        <h1>Resume Format</h1>
      </u>
      &nbsp;
      <div className='home2'>
        <HomePage2 />
      </div>
    </DefaultLayout>
  );
};

export default Home;
