import { Avatar, Layout } from 'antd';
import '../../styles.css';

const { Header } = Layout;

const DashboardHeader = ({ title, icon }) => {
  return (
    <Header className="dashboard-site-layout-header" style={{ margin: 15 }}>
      <div>
        <Avatar
          size={36}
          style={{
            backgroundColor: 'transparent',
            border: '1px solid #f8faff',
          }}
          icon={icon}
        />
      </div>
      <p className="dashboard-site-layout-header-label">{title}</p>
    </Header>
  );
};

export default DashboardHeader;
