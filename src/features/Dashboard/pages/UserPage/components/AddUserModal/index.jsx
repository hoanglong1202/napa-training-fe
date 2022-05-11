import { Form, Input, Modal } from "antd";
import React from "react";

const AddUserModal = ({ handleOk, handleCancel, isModalVisible }) => {
  return (
    <>
      <Modal title="Add New User" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          initialValues={{ remember: true }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item label="Mail" name="mail" rules={[{ required: true, message: "Please input your mail!" }]}>
            <Input maxLength={50} />
          </Form.Item>

          <Form.Item label="Name" name="username" rules={[{ required: true, message: "Please input your username!" }]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddUserModal;
