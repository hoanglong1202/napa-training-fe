import { DownOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import "../../../../styles.css";
import "../../styles.css";

const { Panel } = Collapse;

const exampleText = (
  <div className="according-collapse-content-container">
    <div className="according-collapse-content-title">メール:</div>
    <div className="according-collapse-content">Ciprian@gmail.com</div>

    <div className="according-collapse-content-title">電話番号:</div>
    <div className="according-collapse-content">+82 9075347095</div>

    <div className="according-collapse-content-title">携帯電話番号:</div>
    <div className="according-collapse-content">+82 12355468</div>

    <div className="according-collapse-content-title">満期日:</div>
    <div className="according-collapse-content">MM-DD-YYYY</div>

    <div className="according-collapse-content-title">代理店コード:</div>
    <div className="according-collapse-content">CODE-1234</div>

    <div className="according-collapse-content-title">サブコード:</div>
    <div className="according-collapse-content">SUBCODE-1234</div>

    <div className="according-collapse-content-title">前契約証券番号:</div>
    <div className="according-collapse-content">CODE-OLD-VESION</div>
  </div>
);

const data = [
  {
    status: "success",
    name: "真佐人",
    sub: "未対応",
    quantity: 99,
  },
  {
    status: "danger",
    name: "壮史朗",
    sub: "連絡不能",
    quantity: 99,
  },
  {
    status: "error",
    name: "伸太郎",
    sub: "連絡済",
    quantity: 99,
  },
  {
    status: "success",
    name: "回答待ち",
    sub: "未対応",
    quantity: 99,
  },
  {
    status: "danger",
    name: "美桜",
    sub: "未対応",
    quantity: 99,
  },
];

const CalendarAccording = () => {
  const accordingTitle = (title) => {
    return (
      <div className="dashboard-table-content-label">
        {title} &nbsp;
        <span>
          <InfoCircleOutlined />
        </span>
      </div>
    );
  };

  const accordingExtra = (title, status) => {
    return (
      <div>
        <div className="calendar-according-label-container">
          <div
            className="calendar-according-label"
            style={{
              color: "#2D2D2D",
              backgroundColor: "#fff",
              border: "1px solid #aaa",
              margin: 0,
            }}
          >
            オペレーター &nbsp;
            <span>
              <DownOutlined />
            </span>
          </div>

          <div
            className="calendar-according-label"
            style={{
              backgroundColor: `${status === "success" ? "#00C48C" : status === "danger" ? "#FFA26B" : "#FF647C"}`,
            }}
          >
            {title} &nbsp;
            <span>
              <DownOutlined />
            </span>
          </div>
        </div>

        <div className="calendar-according-button">ビデオ通話リンク作成</div>
      </div>
    );
  };

  const renderBadget = (data) => {
    const result = data.map((x, index) => (
      <Panel key={index} showArrow={false} header={accordingTitle(x.name)} extra={accordingExtra(x.sub, x.status)}>
        {exampleText}
      </Panel>
    ));
    return result;
  };

  return (
    <Collapse className="calendar-collapse" defaultActiveKey={["1"]} bordered={false}>
      {renderBadget(data)}
    </Collapse>
  );
};

export default CalendarAccording;
