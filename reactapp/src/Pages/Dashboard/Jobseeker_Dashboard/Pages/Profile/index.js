import React from "react";
import { Typography, Row, Col, Avatar, Divider, Progress } from "antd";
import { LineChartOutlined, UserOutlined} from "@ant-design/icons";

const { Title, Text } = Typography;

function Profile() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 80 },
    { name: "JavaScript", level: 70 },
    { name: "React", level: 75 },
    { name: "Node.js", level: 60 },
  ];

  return (
    <div style={{ padding: "24px" }}>
      <Row justify="center">
        <Col>
          <Avatar size={150} icon={<UserOutlined />} src="" />
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: "24px" }}>
        <Col>
          <Title level={2}>John Doe</Title>
          <Text type="secondary">Software Developer</Text>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={12}>
          <Title level={4}>About</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit ligula eget lectus elementum, sed vulputate justo lacinia. Maecenas aliquam enim in fringilla eleifend. Morbi vestibulum fermentum libero a laoreet.
          </Text>
        </Col>
        <Col span={12}>
          <Title level={4}>Skills</Title>
          {skills.map((skill) => (
            <div key={skill.name}>
              <Text strong>{skill.name}</Text>
              <Progress percent={skill.level} />
            </div>
          ))}
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={12}>
          <Title level={4}>Location</Title>
          <Text>City, Country</Text>
        </Col>
        <Col span={12}>
          <Title level={4}>Contact Details</Title>
          <Text>Email: john.doe@example.com</Text>
          <Text>Phone: +1 123 456 7890</Text>
        </Col>
      </Row>
      <Divider />
      <Row justify="center" style={{ marginTop: "24px" }}>
        <Col>
          <LineChartOutlined style={{ fontSize: "48px" }} />
          <Text>Graph illustrating something related to the profile</Text>
        </Col>
      </Row>
    </div>
  );
}

export default Profile;
