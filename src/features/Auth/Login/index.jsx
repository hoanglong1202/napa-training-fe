import { Layout } from "antd";
import LoginForm from "./components/LoginForm";
import "./styles.css";
const { Content } = Layout;

const Login = () => {
  return (
    <Layout className="container">
      <Content className="content">
        <div className="logo">freeagent</div>

        <LoginForm />

        <div className="copyright">©2021 Faeast</div>
      </Content>
    </Layout>
  );
};

export default Login;
