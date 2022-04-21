import { Layout } from "antd";
import "./App.css";
import Routing from "./router";
const { Content } = Layout;

function App() {
  return (
    <Layout>
      <Content className="App">
        <Routing />
      </Content>
    </Layout>
  );
}

export default App;
