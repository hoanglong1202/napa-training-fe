import { Col, Layout, Row } from "antd";
import { ReactComponent as CalendarPublic } from "../../assets/CalendarPublic.svg";
import DashboardHeader from "../../components/DashboardHeader";
import "../../styles.css";
import CalendarAccording from "./components/CalendarAccording";
import CalendarContent from "./components/CalendarContent";
import CalendarFilter from "./components/CalendarFilter";
import CalendarBadget from "./components/CalenderBadget";
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
          backgroundColor: "#f0f2f5",
          padding: 24,
          // height: 744,
          minHeight: 800,
          overflow: "hidden",
        }}
      >
        <CalendarFilter />

        <Row style={{ height: "100%", justifyContent: "space-around" }}>
          <Col span={18}>
            <CalendarContent />
          </Col>
          <Col style={{ backgroundColor: "#fff", marginLeft: 16 }} span={5}>
            <CalendarBadget />

            <CalendarAccording />
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default CalendarPage;
