import { Layout } from 'antd';
import DashboardHeader from '../../components/DashboardHeader';
import { ReactComponent as AccountPublic } from "../../assets/AccountPublic.svg";
import '../../styles.css';

const { Content } = Layout;

const AccountPage = () => {
  return (
    <>
      <DashboardHeader title="Account" icon={<AccountPublic />} />

      <Content
        className="dashboard-site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        <p>This is Account Page</p>{' '}
      </Content>
    </>
  );
};

export default AccountPage;
