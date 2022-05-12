import { Form, Input, Modal } from "antd";
import React from "react";

const AddAccountModal = ({ handleOk, handleCancel, isModalVisible }) => {
  return (
    <>
      <Modal title="Add New Account" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          initialValues={{ remember: true }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please input your mail!" }]}>
            <Input maxLength={50} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item label="Agent Name" name="name" rules={[{ required: true, message: "Please input your mail!" }]}>
            <Input maxLength={50} />
          </Form.Item>

          <Form.Item label="Agent Code" name="code" rules={[{ required: true, message: "Please input your mail!" }]}>
            <Input maxLength={50} />
          </Form.Item>

          <Form.Item
            label="Expired Date"
            name="expiryDate"
            rules={[{ required: true, message: "Please input your mail!" }]}
          >
            <Input maxLength={50} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddAccountModal;
