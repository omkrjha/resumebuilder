
import React from 'react';
import { Form, Input, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
const { TextArea } = Input;
function Achievements() {
  return (
    <div>
      <h5>
        <b>Achievements</b>
      </h5>
      <hr />
      <Form.List name='achievements'>
        {(fields, { add, remove }) => (
          <>
            <div className='row'>
              {fields.map(({ key, name, ...restField }) => (
                <React.Fragment key={key}>
                  {/*  */}
                  <div className='col-md-6'>
                    <Form.Item
                      {...restField}
                      name={[name, 'description']}
                      rules={[
                        { required: true, message: 'Missing Description' },
                      ]}
                    > 
                      <TextArea placeholder='Achievements' />
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
                Add Achievements
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
}

export default Achievements;
