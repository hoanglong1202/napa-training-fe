import { Layout } from 'antd';
import DashboardHeader from '../../components/DashboardHeader';
import { ReactComponent as UserPublic } from '../../assets/UserPublic.svg';
import '../../styles.css';

const { Content } = Layout;

const UserPage = () => {
  return (
    <>
      <DashboardHeader title="User" icon={<UserPublic />} />

      <Content
        className="dashboard-site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        <p>This is User Page</p>{' '}
      </Content>
    </>
  );
};

export default UserPage;
