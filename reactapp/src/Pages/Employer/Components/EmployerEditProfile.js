import React , {useEffect, useState} from 'react'
import { Layout, Space ,Button ,Form, Input,Col, Row} from 'antd';
import { useNavigate } from "react-router-dom";
import Footer from '../../LandingPage/Components/Footer';
//import axios from "axios";
const { Header, footer, Content } = Layout;

const headerStyle = {
  color:"White",
  textAlign: 'center',
  height: '15vh',
  padding: 30,
  lineHeight: '10vh',
  };

const contentStyle = {
  textAlign: 'center',
  padding: '25px',
  minHeight: '75vh',
  lineHeight: '120px',
  color: 'black',
  backgroundColor: 'white',
};
const footerStyle = {
  textAlign: 'left',
  color: '#fff',
  backgroundColor: 'black',
};

const layout = {
  labelCol: { span: 60 , },
  wrapperCol: { span: 60 ,},
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be greater than ${min} ',
  },
};

export default function EmployerEditProfile() {
  //const [employer,setEmployer]=useState({});
  const onFinish = (values) => {
    console.log(values);
    //putemployer(values);
  };
   //const putemployer=(data)=>{
  //axios.put(`${url}/employers`,data).then(
    //(response)=>{
       //setEmployer(response.data);
    //},
    //(error)=>{
      //console.log(error);
      //toast.error("something went wrong");
    //}
  //);
//};


  const navigate = useNavigate();
  return (
    <div> 
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout>
                <Header style={headerStyle}><h1><b>EDIT YOUR PROFILE</b></h1></Header>
                <Content style={contentStyle}>
                <Row>
                        <Col span={6}>
                      
                        <div >
                          <Button  size="large" onClick={() => navigate(-1)}>
                            Go back
                          </Button>
                         </div>
                         </Col>
                         <Col span={15} >
                         <div >
                              <h2><b>Fill all the required fields...</b></h2>
                          </div>
                              <Form
                                 {...layout}
                                  name="nest-messages"
                                  onFinish={onFinish}
                                 style={{ maxWidth: 600 }}
                                  validateMessages={validateMessages}
                              >
                              <Form.Item name={['employer', 'name']} label="Name" rules={[{ required: true }] } id="name"
                              >
                              <Input />
                              </Form.Item>
                              
                              <Form.Item name={['employer', 'location']} label="Location" rules={[{ required: true }]} id="location"
                              >
                              <Input />
                              </Form.Item>
                              <Form.Item name={['employer', 'description']} label="Description" rules={[{ required: true }]} id="description" 
                              >
                              <Input.TextArea />
                              </Form.Item>
                              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                              <Button type="primary" htmlType="submit" >
                              Update Profile
                              </Button>
                            </Form.Item>
                            </Form>
                            </Col>
                            </Row>
                        </Content>
                <Footer/>
            </Layout>
    </Space>
</div>
  )
}

