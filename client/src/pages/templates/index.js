import { Button } from 'antd';
import React, { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DefaultLayout from '../../components/DefaultLayout';
import Template1 from './temp1/Template1';
import Template2 from './temp2/Template2';
import Template3 from './temp3/Template3';
import Template4 from './temp4/Template4';
import { useReactToPrint } from 'react-to-print';


const Templates = () => {
  const params = useParams();
  const navigate = useNavigate();
  const componentRef = useRef();
   const handlePrint = useReactToPrint({
     content: () => componentRef.current,
   });

  const gettemplate = () => {
    switch (params.id) {
      case '1': {
        return <Template1 />;
      }
      case '2': {
        return <Template2 />;
      }
      case '3': {
        return <Template3 />;
      }
      case '4': {
        return <Template4 />;
      }
      default: {
        return <Template1 />;
      }
    }
  };
  return (
    <DefaultLayout>
      <div className='d-flex justify-content-end my-5 mx-5'>
        <Button className='back-btn' onClick={() => navigate('/home')}>
          Back
        </Button>
        <Button className='mx-5' onClick={handlePrint}>
          Print
        </Button>
      </div>
      <div ref={componentRef}>{gettemplate()}</div>
    </DefaultLayout>
  );
};

export default Templates;
