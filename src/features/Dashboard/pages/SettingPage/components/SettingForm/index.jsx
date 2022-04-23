import { Form, Input, Button } from 'antd';
import '../../styles.css';

const SettingForm = () => {
  const [form] = Form.useForm();

  return (
    <Form form={form} className="setting-form-container">
      <Form.Item
        className="setting-form-input"
        name="access-token"
        label="Access Token"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        className="setting-form-input"
        name="security-code"
        label="Security Code"
        placeholder="Example"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item className="setting-form-button-container">
        <Button htmlType="button">Cancel</Button>
        <Button type="primary" htmlType="button" style={{ marginLeft: 8 }}>
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SettingForm;
