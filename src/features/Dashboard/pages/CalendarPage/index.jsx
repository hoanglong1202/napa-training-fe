import { PlusOutlined } from '@ant-design/icons';
import { Badge, Button, Col, Input, Layout, Row } from 'antd';
import { ReactComponent as CalendarPublic } from '../../assets/CalendarPublic.svg';
import DashboardHeader from '../../components/DashboardHeader';
import '../../styles.css';
import CalendarContent from './components/CalendarContent';
import './styles.css';

const { Content } = Layout;

const data = [
  {
    status: 'success',
    name: '未対応',
    quantity: 99,
  },
  {
    status: 'danger',
    name: '連絡済',
    quantity: 99,
  },
  {
    status: 'error',
    name: 'アポ確定',
    quantity: 99,
  },
  {
    status: 'success',
    name: '提案中（回答待ち)',
    quantity: 99,
  },
  {
    status: 'danger',
    name: '連絡不能',
    quantity: 99,
  },
  {
    status: 'error',
    name: '対応済',
    quantity: 99,
  },
];

const CalendarPage = () => {
  const clientBadge = (data) => {
    const result = data.map((user, index) => (
      <Col
        span={8}
        style={{
          textAlign: `end`,
        }}
        key={index}
      >
        {user.name}
        <Badge
          count={user.quantity}
          style={{
            backgroundColor: `${
              user.status === 'success'
                ? '#00C48C'
                : user.status === 'danger'
                ? '#FFA26B'
                : '#FF647C'
            }`,
          }}
        />
      </Col>
    ));
    console.log(result);
    return result;
  };
  const badgets = clientBadge(data);
  return (
    <>
      <DashboardHeader title="カレンダー" icon={<CalendarPublic />} />

      <Content
        className="dashboard-site-layout-background"
        style={{
          margin: '24px 16px',
          backgroundColor: '#f0f2f5',
          padding: 24,
          minHeight: 280,
        }}
      >
        <div
          className="dashboard-table-content-header-container"
          style={{ backgroundColor: '#f0f2f5' }}
        >
          <div className="dashboard-table-content-label">2021年11月</div>

          <div className="dashboard-table-content-button-header">
            <Input.Search
              allowClear
              style={{ width: 264 }}
              placeholder="Select Agent"
            />
            <Button
              type="primary"
              icon={<PlusOutlined />}
              htmlType="button"
              style={{ marginLeft: 16 }}
            >
              Add New
            </Button>
          </div>
        </div>

        <Row>
          <Col span={16}>
            <CalendarContent />
          </Col>
          <Col style={{ backgroundColor: '#fff', marginLeft: 16 }} span={7}>
            <div style={{ backgroundColor: '#2264d1' }}>
              <div className="calender-site-label">Client List</div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 18,
                marginBottom: 9,
              }}
            >
              <div className="calender-site-small-label">Nov 14</div>
              <div
                className="calender-site-small-label"
                style={{
                  fontWeight: 400,
                }}
              >
                Total Client:{' '}
                <span className="calender-site-small-label">99</span>
              </div>
            </div>

            <div
              style={{
                margin: '8px 24px',
              }}
            >
              <Row justify="space-around">{badgets}</Row>
            </div>
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default CalendarPage;
