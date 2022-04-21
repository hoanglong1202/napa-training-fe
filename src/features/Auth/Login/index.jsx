import { Layout } from "antd";
import LoginForm from "./components/LoginForm";
import "./styles.css";
const { Content } = Layout;

const Login = () => {
  return (
    <Layout className="container">
      <Content className="content">
        <div className="child-content">
          <div className="logo">freeagent</div>
        </div>

        <div className="child-content">
          <LoginForm />
        </div>

        <div className="child-content child-content-copyright">
          <div className="copyright">©2021 Faeast</div>
        </div>
      </Content>
    </Layout>
  );
};

export default Login;
