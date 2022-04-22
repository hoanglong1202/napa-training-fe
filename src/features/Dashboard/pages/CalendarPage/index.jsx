import { Layout } from "antd";
import "../../styles.css";

const { Header, Content } = Layout;

const CalendarPage = () => {
  return (
    <>
      <Header className="dashboard-site-layout-header" style={{ margin: 15 }}></Header>

      <Content
        className="dashboard-site-layout-background"
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
        }}
      >
        <p>This is Calendar Page</p>{" "}
      </Content>
    </>
  );
};

export default CalendarPage;
