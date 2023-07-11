import React, { useEffect, useState } from "react";
import { Button, Modal, Descriptions } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function JobDetailsModal({ id, open, setOpen }) {
  const [job, setJob] = useState({
    id: "",
    title: "",
    description: "",
    requirements: "",
    location: "",
  });

  useEffect(() => {
    loadJob();
  }, []);

  const loadJob = async () => {
    const result = await axios.get(`http://localhost:8080/jobs/${id}`);
    setJob(result.data);
  };

  const showModal = () => {
    setOpen(true);
  };
  const handleApply = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        centered
        width={1000}
        open={open}
        onOk={handleApply}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Back
          </Button>,
          <Button key="link" href="#" type="primary" onClick={handleApply}>
            Apply
          </Button>,
        ]}
      >
        <Descriptions title="Job Details" column={2}>
          <Descriptions.Item label="Job id">{job.id}</Descriptions.Item>
          <Descriptions.Item label="Job Tittle">{job.title}</Descriptions.Item>
          <Descriptions.Item label="Job Description">
            {job.description}
          </Descriptions.Item>
          <Descriptions.Item label="Job Requirements">
            {job.requirements}
          </Descriptions.Item>
          <Descriptions.Item label="Job Location">
            {job.location}
          </Descriptions.Item>
        </Descriptions>
      </Modal>
    </>
  );
}
