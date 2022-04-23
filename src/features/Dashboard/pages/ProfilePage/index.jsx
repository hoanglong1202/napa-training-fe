import { Layout } from 'antd';
import DashboardHeader from '../../components/DashboardHeader';
import { ReactComponent as ProfilePublic } from '../../assets/Profile.svg';
import '../../styles.css';

const { Content } = Layout;

const ProfilePage = () => {
  return (
    <>
      <DashboardHeader title="Profile" icon={<ProfilePublic />} />

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
          <span className="content-title">Account Setting</span>
        </div>

        <p>This is Profile Page</p>
      </Content>
    </>
  );
};

export default ProfilePage;
