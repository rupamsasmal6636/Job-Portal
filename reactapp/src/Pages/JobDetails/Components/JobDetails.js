import React from 'react'
import { Button, Modal, Descriptions } from 'antd';
import { useState } from 'react';

export default function () {
    const [open, setOpen] = useState(false);
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
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal  centered width={1000} open={open} onOk={handleApply} onCancel={handleCancel} footer={[
          <Button key="back" onClick={handleCancel}>
            Back
          </Button>,
          <Button key="link"
          href="#" type="primary" onClick={handleApply}>
            Apply
          </Button>,
        ]}>
        <Descriptions title="Job Details" column={2}>
            <Descriptions.Item label="Job id">7126545</Descriptions.Item>
            <Descriptions.Item label="Posted on">21/06/2023</Descriptions.Item>
            <Descriptions.Item label="Company Name">Virtusa</Descriptions.Item>
            <Descriptions.Item label="Job Role">FullStack Java Developer</Descriptions.Item>
            <Descriptions.Item label="Required Skills">Java, SpringBoot, React, MySQL</Descriptions.Item>
            <Descriptions.Item label="Job Location">Hyderabad</Descriptions.Item>
            <Descriptions.Item label="Job Description">
            Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad.Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              at ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad.
            </Descriptions.Item>
        </Descriptions>
      </Modal>
    </>
  )
}
