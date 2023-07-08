// import statements
import "./Candidate.css";
import axios from 'axios';
import "antd/dist/reset.css";


import {
  Button,
  Checkbox,
  Form,
  Input,
 
} from "antd";
import { React, useState, useEffect } from "react";


function Candidate(props) {
  const [users, setUsers] = useState( {    
    fullName: "hello",    
    location: "chennai",      
    username: "hello@gmail.com",
    experience: "1 year",
    skills: "Java, Angular",
    
  } );
  const {  type } = props;
  const isAddType = type === 'ADD';
  const isViewType = type === 'VIEW';
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    axios.post('http://localhost:3001/createUser', values)
    .then((users) => {
        console.log(users)
    }).catch(err => console.log(err))
  };

  
  useEffect(()=>{
    axios.get('http://localhost:3001/getUsers')
    .then((users) => {
      console.log(users)
      setUsers(users.data)
    }).catch(err => console.log(err))
  },[])


  return (
    <div className="body">   
      <div className="App">
        <h1 className="h1"> My Profile </h1>

          {isViewType && <Button type = "primary"
          className ="editProfileButton" /* onClick={} */>
            Edit Profile
            </Button>}
              <Form
                form={form}
                name="register"
                onFinish={onFinish}
                
                scrollToFirstError
              >             
              
                <Form.Item
                  name="fullName"
                  label="Full Name"
                  tooltip="Please enter your first name"
                  className="fullname"
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!",
                      whitespace: true,
                    },{
                      pattern: /^[a-z ,.'-]+$/i,
                      message: "Please enter a valid name",
                    }
                  ]}
                >
                  <Input defaultValue={!isAddType ? users?.fullName : ''} disabled={isViewType} />
                </Form.Item>

              

                <Form.Item
                  name="username"
                  label="User Name"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input defaultValue={!isAddType ? users?.email : ''} disabled={isViewType} />
                </Form.Item>

                

                <Form.Item
                  name="location"
                  label="Location"
                  tooltip="Please enter your location"
                  className="location"
                  rules={[
                    {
                      required: true,
                      message: "Please input your location!",
                      whitespace: true,
                    },{
                      pattern: /^[a-z ,.]+$/i,
                      message: "Please enter a location",
                    }
                  ]}
                >
                  <Input defaultValue={!isAddType ? users?.location: ''} disabled={isViewType} />
                </Form.Item>


                <Form.Item
              name="experience"
              label="Experience"
              rules={[
                {
                  required: true,
                  message: 'Please input experience',
                },{
                  pattern: /^[a-z 0-9 ,.'-]+$/i,
                  message: "Please enter a valid experience",
                }
              ]}
            >
              <Input.TextArea showCount maxLength={100} defaultValue={!isAddType ? users?.experience: ''} disabled={isViewType}/>
            </Form.Item>

          

            <Form.Item
              name="skills"
              label="Skills"
              rules={[
                {
                  required: true,
                  message: 'Please input skills',
                },{
                  pattern: /^[a-z ,.'-]+$/i,
                  message: "Please enter a valid skills",
                }
              ]}
            >
              <Input.TextArea showCount maxLength={100} defaultValue={!isAddType ? users?.skills: ''} disabled={isViewType}/>
            </Form.Item>


                
                <Form.Item
                  name="verification"
                  className=""
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject(new Error("Should accept verification")),
                    }
                  ]}
                >
                  {
                    isAddType && 
                    <Checkbox>
                    I have checked and verified all my information.
                  </Checkbox>
                  }
                
                </Form.Item>
                <Form.Item >
                  { isAddType ?
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                    : (!isViewType && <Button type="primary" htmlType="submit" onClick={(e)=>{
                        e.preventDefault();
                        console.log("")
                      }}> Update Profile</Button> )
                  }

                  {isViewType && <Button type = "primary"
              className ="deleteAccountButton" /* onClick={} */>
                Delete Account
                </Button>}
                </Form.Item>

                
            
              </Form>
      
      </div>


    </div>
  );
}

export default Candidate;
