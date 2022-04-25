import { Calendar, Layout } from "antd";
import moment from "moment";
// import "../../styles.css";
import "../../../../styles.css";
import "../../styles.css";

// moment.locale('en');

const { Content } = Layout;

const CalendarContent = () => {
  const getListData = (value) => {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: "warning", content: "真佐人." },
          { type: "success", content: "真佐人" },
        ];
        break;
      case 10:
        listData = [
          { type: "warning", content: "真佐人." },
          { type: "success", content: "真佐人" },
          { type: "error", content: "真佐人" },
        ];
        break;
      case 15:
        listData = [{ type: "warning", content: "真佐人" }];
        break;
      default:
    }
    return listData || [];
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="calendar-events">
        {listData.map((item) => (
          <li key={`${item.content} ${Math.random()}`}>
            {/* <Badge status={item.type} text={item.content} /> */}
            <div>{item.content}</div>
            <div className="event-success-circle" />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="content-calendar">
      <Calendar
        dateCellRender={dateCellRender}
        headerRender={() => null}
        locale={{
          lang: {
            locale: "ja",
            dayFormat: moment.updateLocale("ja", {
              weekdaysMin: ["日", "月", "火", "水", "木", "金", "土"],
            }),
          },
        }}
      />
    </div>
  );
};

export default CalendarContent;
