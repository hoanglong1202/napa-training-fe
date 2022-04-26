import { Badge, Col, Row } from "antd";
import "../../../../styles.css";
import "../../styles.css";

const data = [
  {
    status: "success",
    name: "未対応",
    quantity: 99,
  },
  {
    status: "danger",
    name: "連絡済",
    quantity: 99,
  },
  {
    status: "error",
    name: "アポ確定",
    quantity: 99,
  },
  {
    status: "success",
    name: "回答待ち",
    quantity: 99,
  },
  {
    status: "danger",
    name: "連絡不能",
    quantity: 99,
  },
  {
    status: "error",
    name: "対応済",
    quantity: 99,
  },
];

const CalendarBadget = () => {
  const clientBadge = (data) => {
    const result = data.map((user, index) => (
      <Col
        span={8}
        style={{
          textAlign: `${index % 3 === 0 ? "start" : "end"}`,
        }}
        key={index}
      >
        {user.name}
        <Badge
          count={user.quantity}
          style={{
            backgroundColor: `${
              user.status === "success" ? "#00C48C" : user.status === "danger" ? "#FFA26B" : "#FF647C"
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
      <div style={{ backgroundColor: "#2264d1" }}>
        <div className="calender-site-label">Client List</div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
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
          Total Client: <span className="calender-site-small-label">99</span>
        </div>
      </div>

      <div
        style={{
          margin: "8px 24px",
        }}
      >
        <Row justify="space-around">{badgets}</Row>
      </div>
    </>
  );
};

export default CalendarBadget;
