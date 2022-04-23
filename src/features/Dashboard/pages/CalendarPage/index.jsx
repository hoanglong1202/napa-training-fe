import { Layout } from 'antd';
import DashboardHeader from '../../components/DashboardHeader';
import { ReactComponent as CalendarPublic } from "../../assets/CalendarPublic.svg";
import '../../styles.css';

const { Content } = Layout;

const CalendarPage = () => {
  return (
    <>
      <DashboardHeader title="カレンダー" icon={<CalendarPublic />} />

      <Content
        className="dashboard-site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        <p>This is Calendar Page</p>{' '}
      </Content>
    </>
  );
};

export default CalendarPage;
