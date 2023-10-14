import React from 'react';
import { Form, Input, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import "./index.css";
const { TextArea } = Input;


function ExperienceProjects() {
  return (
    <div>
      <h5>
        <b>Experience</b>
      </h5>
      <hr />
      <Form.List name='experience'>
        {(fields, { add, remove }) => (
          <>
            <article className='exp'>
              <div className='row'>
                {fields.map(({ key, name, ...restField }) => (
                  <React.Fragment key={key}>
                    <div className='col-md-2'>
                      <Form.Item
                        {...restField}
                        name={[name, 'company']}
                        rules={[
                          { required: true, message: 'Missing Company Name' },
                        ]}
                      >
                        <Input placeholder='Company' />
                      </Form.Item>
                    </div>

                    {/* <div className='col-md-1'>
                    <Form.Item
                      {...restField}
                      name={[name, 'years']}
                      rules={[
                        { required: true, message: 'Missing Time' },
                      ]}
                    >
                      <Input placeholder='Years' />
                    </Form.Item>
                  </div> */}

                    <div className='col-md-2'>
                      <Form.Item
                        {...restField}
                        name={[name, 'place']}
                        rules={[
                          { required: true, message: 'Missing Place name' },
                        ]}
                      >
                        <Input placeholder='Place' />
                      </Form.Item>
                    </div>
                    <div className='col-md-2'>
                      <Form.Item
                        {...restField}
                        name={[name, 'range']}
                        rules={[
                          { required: true, message: 'Missing Time Range' },
                        ]}
                      >
                        <Input placeholder='Time Range' />
                      </Form.Item>
                    </div>
                    {/*  */}
                    <div className='col-md-4'>
                      <Form.Item
                        {...restField}
                        name={[name, 'description']}
                        rules={[
                          { required: true, message: 'Missing Description' },
                        ]}
                      >
                        <TextArea placeholder='Description' />
                      </Form.Item>
                    </div>
                    {/*  */}
                    <div className='col-md-2'>
                      <MinusCircleOutlined
                        style={{ fontSize: 25, color: 'tomato' }}
                        onClick={() => remove(name)}
                      />
                    </div>
                  </React.Fragment>
                ))}
              </div>

              <Form.Item>
                <Button
                  type='dashed'
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Experience
                </Button>
              </Form.Item>
            </article>
          </>
        )}
      </Form.List>

      <h5>
        <b>Projects</b>
      </h5>
      <hr />
      <Form.List name='projects'>
        {(fields, { add, remove }) => (
          <>
            <article className='proj'>
              <div className='row'>
                {fields.map(({ key, name, ...restField }) => (
                  <React.Fragment key={key}>
                    <div className='col-md-3'>
                      <Form.Item
                        {...restField}
                        name={[name, 'title']}
                        rules={[
                          { required: true, message: 'Missing Project Name' },
                        ]}
                      >
                        <Input placeholder='Title' />
                      </Form.Item>
                    </div>

                    <div className='col-md-4'>
                      <Form.Item
                        {...restField}
                        name={[name, 'rating']}
                        rules={[
                          { required: true, message: 'Missing Description' },
                        ]}
                      >
                        <TextArea placeholder='Description' />
                      </Form.Item>
                    </div>
                    <div className='col-md-2 year'>
                      <Form.Item
                        {...restField}
                        name={[name, 'range']}
                        rules={[
                          { required: true, message: 'Missing Time Range' },
                        ]}
                      >
                        <Input placeholder='Time Range' />
                      </Form.Item>
                    </div>

                    <div className='col-md-1 linkz'>
                      <Form.Item
                        {...restField}
                        name={[name, 'depLink']}
                        rules={[
                          { required: false, message: 'Missing Time Range' },
                        ]}
                      >
                        <Input placeholder='Deployed Link' />
                      </Form.Item>
                    </div>

                    <div className='col-md-2'>
                      <MinusCircleOutlined
                        style={{ fontSize: 25, color: 'tomato' }}
                        onClick={() => remove(name)}
                      />
                    </div>
                  </React.Fragment>
                ))}
              </div>

              <Form.Item>
                <Button
                  type='dashed'
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Project
                </Button>
              </Form.Item>
            </article>
          </>
        )}
      </Form.List>

      <h5>
        <b>Training & Courses</b>
      </h5>
      <hr />
      <Form.List name='training'>
        {(fields, { add, remove }) => (
          <>
            <div className='row'>
              {fields.map(({ key, name, ...restField }) => (
                <React.Fragment key={key}>
                  <div className='col-md-3'>
                    <Form.Item
                      {...restField}
                      name={[name, 'title']}
                      rules={[
                        {
                          required: true,
                          message: 'Missing Training/Course Name',
                        },
                      ]}
                    >
                      <Input placeholder='Title' />
                    </Form.Item>
                  </div>

                  <div className='col-md-4'>
                    <Form.Item
                      {...restField}
                      name={[name, 'rating']}
                      rules={[
                        {
                          required: false,
                          message: 'Missing Description name',
                        },
                      ]}
                    >
                      <TextArea placeholder='Description' />
                    </Form.Item>
                  </div>
                  <div className='col-md-2 year'>
                    <Form.Item
                      {...restField}
                      name={[name, 'range']}
                      rules={[
                        { required: true, message: 'Missing Time Range' },
                      ]}
                    >
                      <Input placeholder='Time Range' />
                    </Form.Item>
                  </div>

                  <div className='col-md-1 linkz'>
                    <Form.Item
                      {...restField}
                      name={[name, 'certLink']}
                      rules={[
                        { required: false, message: 'Missing Time Range' },
                      ]}
                    >
                      <Input placeholder='Certificate Link' />
                    </Form.Item>
                  </div>

                  <div className='col-md-2'>
                    <MinusCircleOutlined
                      style={{ fontSize: 25, color: 'tomato' }}
                      onClick={() => remove(name)}
                    />
                  </div>
                </React.Fragment>
              ))}
            </div>

            <Form.Item>
              <Button
                type='dashed'
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Training
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
}

export default ExperienceProjects;

