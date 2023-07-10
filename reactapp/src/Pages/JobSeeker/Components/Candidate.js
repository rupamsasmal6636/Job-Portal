// import statements
import "./Candidate.css";
import axios from "axios";
import "antd/dist/reset.css";

import { Button, Checkbox, Form, Input } from "antd";
import { React, useState, useEffect } from "react";

function Candidate(props) {
  const [userData, setUserData] = useState({});
  const { type } = props;
  const isAddType = type === "ADD";
  const isViewType = type === "VIEW";
  const [form] = Form.useForm();
  const toast = props.toast;
  const onFinish = (values) => {
    axios
      .post("http://localhost:3001/job-seekers", values)
      .then((userData) => {
        console.log(userData);
      })
      .catch((err) => console.log(err));
  };
  const deleteAccount = () => {
    axios
      .delete(`http://localhost:3001/job-seekers/${props?.uid}`)
      .then((user) => {
        // Routing code to go to HomePage after deletion of Account
        toast.success("User Profile has been deleted successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((err) => console.log(err));
  };
  const updateUser = () => {
    const updatedData = {
      id: props?.uid,
      fullname: form.getFieldValue("fullname"),
      location: form.getFieldValue("location"),
      experience: form.getFieldValue("experience"),
      skills: form.getFieldValue("skills"),
    };
    axios
      .put(`http://localhost:3001/job-seekers`, updatedData)
      .then((user) => {
        // Toastify Message to notify user about data updation status and redirect.
        toast.success("User Profile has been updated successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });

        props.setViewModifyState("VIEW");
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    !isAddType &&
      axios
        .get(`http://localhost:3001/job-seekers/${props?.uid}`)
        .then((user) => {
          console.log(user?.data[0], "is resp");
          setUserData(user?.data[0]);
        })
        .catch((err) => console.log(err));
  }, [isAddType, isViewType]);

  return (
    <div className="body">
      <div className="App">
        <h1 className="h1"> My Profile </h1>
        {isViewType && (
          <Button
            type="primary"
            className="editProfileButton"
            onClick={() => {
              props?.setViewModifyState("MODIFY");
            }}
          >
            Edit Profile
          </Button>
        )}
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            initialValue={!isAddType ? userData?.fullName : ""}
            name="fullName"
            label="Full Name"
            tooltip="Please enter your first name"
            className="fullname"
            rules={[
              {
                required: true,
                message: "Please input your first name!",
                whitespace: true,
              },
              {
                pattern: /^[a-z ,.'-]+$/i,
                message: "Please enter a valid name",
              },
            ]}
          >
            <Input disabled={isViewType} />
          </Form.Item>

          <Form.Item
            initialValue={isAddType ? userData?.username : ""}
            // initialValue = { isAddType : "prepopulated global context value" : disabled}
            name="username"
            label="User Name"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              /* {
                required: true,
                message: "Please input your E-mail!",
              }, */
            ]}
          >
            <Input defaultValue={userData?.username} disabled={!isAddType} />
          </Form.Item>

          <Form.Item
            initialValue={!isAddType ? userData?.location : ""}
            name="location"
            label="Location"
            tooltip="Please enter your location"
            className="location"
            rules={[
              {
                required: true,
                message: "Please input your location!",
                whitespace: true,
              },
              {
                pattern: /^[a-z ,.]+$/i,
                message: "Please enter a location",
              },
            ]}
          >
            <Input disabled={isViewType} />
          </Form.Item>

          <Form.Item
            initialValue={!isAddType ? userData?.experience : ""}
            name="experience"
            label="Experience"
            rules={[
              {
                required: true,
                message: "Please input experience",
              },
              {
                pattern: /^[a-z 0-9 ,.'-]+$/i,
                message: "Please enter a valid experience",
              },
            ]}
          >
            <Input.TextArea showCount maxLength={100} disabled={isViewType} />
          </Form.Item>

          <Form.Item
            initialValue={!isAddType ? userData?.skills : ""}
            name="skills"
            label="Skills"
            rules={[
              {
                required: true,
                message: "Please input skills",
              },
              {
                pattern: /^[a-z ,.'-]+$/i,
                message: "Please enter a valid skills",
              },
            ]}
          >
            <Input.TextArea showCount maxLength={100} disabled={isViewType} />
          </Form.Item>

          <Form.Item
            className=""
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept verification")),
              },
            ]}
          >
            {isAddType && (
              <Checkbox>
                I have checked and verified all my information.
              </Checkbox>
            )}
          </Form.Item>
          <Form.Item>
            {isAddType ? (
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            ) : (
              !isViewType && (
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    updateUser();
                  }}
                >
                  Update Profile
                </Button>
              )
            )}

            {isViewType && (
              <Button
                type="primary"
                className="deleteAccountButton"
                onClick={deleteAccount}
              >
                Delete Account
              </Button>
            )}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Candidate;
