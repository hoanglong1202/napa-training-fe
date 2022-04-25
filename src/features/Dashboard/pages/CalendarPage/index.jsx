import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Input, Layout, Row } from "antd";
import { ReactComponent as CalendarPublic } from "../../assets/CalendarPublic.svg";
import DashboardHeader from "../../components/DashboardHeader";
import "../../styles.css";
import CalendarContent from "./components/CalendarContent";
import "./styles.css";

const { Content } = Layout;

const CalendarPage = () => {
  return (
    <>
      <DashboardHeader title="カレンダー" icon={<CalendarPublic />} />

      <Content
        className="dashboard-site-layout-background"
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
        }}
      >
        <div className="dashboard-table-content-header-container" style={{ backgroundColor: "#f0f2f5" }}>
          <div className="dashboard-table-content-label">2021年11月</div>

          <div className="dashboard-table-content-button-header">
            <Input.Search allowClear style={{ width: 264 }} placeholder="Select Agent" />
            <Button type="primary" icon={<PlusOutlined />} htmlType="button" style={{ marginLeft: 16 }}>
              Add New
            </Button>
          </div>
        </div>

        <Row gutter={[8, 8]}>
          <Col span={16}>
            <CalendarContent />
          </Col>
          <Col style={{ backgroundColor: "#fff" }} span={8}>
            Client List
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default CalendarPage;
