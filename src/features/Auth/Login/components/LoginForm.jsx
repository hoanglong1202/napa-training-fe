import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onNavigate = () => {
    navigate("/dashboard")
  }

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="username"
        // rules={[
        //   {
        //     required: true,
        //     message: "Please input your username!",
        //   },
        // ]}
      >
        <Input className="login-input" placeholder="ユーザID" />
      </Form.Item>

      <Form.Item
        name="password"
        // rules={[
        //   {
        //     required: true,
        //     message: "Please input your password!",
        //   },
        // ]}
      >
        <Input.Password className="login-input" placeholder="パスワード" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-button" onClick={onNavigate}>
          <span className="login-button-label">ログイン</span>
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
