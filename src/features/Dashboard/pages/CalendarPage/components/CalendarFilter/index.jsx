import { LeftOutlined, PlusCircleOutlined, RightOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Select } from "antd";
import "../../../../styles.css";
import "../../styles.css";

const { Option } = Select;

const CalendarFilter = () => {
  return (
    <div className="dashboard-table-content-header-container" style={{ backgroundColor: "#f0f2f5" }}>
      <div className="dashboard-table-content-label">
        <LeftOutlined /> &nbsp; 2021年11月&nbsp;
        <RightOutlined />
      </div>

      <div className="dashboard-table-content-button-header">
        <Select defaultValue="lucy" placeholder="Select Status" style={{ width: 140, marginLeft: 8 }}>
          <Option value="lucy">Lucy</Option>
        </Select>
        <Select defaultValue="lucy" placeholder="Select Operator" style={{ width: 210, marginLeft: 8 }}>
          <Option value="lucy">Lucy</Option>
        </Select>
        <Select defaultValue="lucy" placeholder="Select Agent" style={{ width: 210, marginLeft: 8 }}>
          <Option value="lucy">Lucy</Option>
        </Select>
        <Button icon={<PlusCircleOutlined />} htmlType="button" style={{ marginLeft: 8 }}>
          Set a Call
        </Button>
        <Button type="primary" icon={<UploadOutlined />} htmlType="button" style={{ marginLeft: 8 }}>
          Upload
        </Button>
      </div>
    </div>
  );
};

export default CalendarFilter;
