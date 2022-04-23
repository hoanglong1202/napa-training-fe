import { Layout } from 'antd';
import DashboardHeader from '../../components/DashboardHeader';
import { ReactComponent as SettingPublic } from '../../assets/SettingPublic.svg';
import '../../styles.css';
import SettingForm from './components/SettingForm';

const { Content } = Layout;

const SettingPage = () => {
  return (
    <>
      <DashboardHeader title="Setting" icon={<SettingPublic />} />

      <Content
        className="dashboard-site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        <div
          style={{
            margin: '17px 30px',
          }}
        >
          <span className="content-title">Setting Video</span>
        </div>

        <div className="content-container">
          <SettingForm />
        </div>
      </Content>
    </>
  );
};

export default SettingPage;
