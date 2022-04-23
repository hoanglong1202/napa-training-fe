import { Avatar, Divider, Layout, Menu } from "antd";
import clsx from "clsx";
import React from "react";
import { NavLink, useLocation, useNavigate, useResolvedPath } from "react-router-dom";
import { ReactComponent as AccountPublic } from "../../assets/AccountPublic.svg";
import { ReactComponent as CalendarPublic } from "../../assets/CalendarPublic.svg";
import { ReactComponent as SettingPublic } from "../../assets/SettingPublic.svg";
import { ReactComponent as UserPublic } from "../../assets/UserPublic.svg";
import { ReactComponent as ProfilePublic } from "../../assets/Profile.svg";
import { ReactComponent as ExitIcon } from "../../assets/Exit.svg";
import "./styles.css";

const { Sider } = Layout;

const menu = [
  {
    key: "1",
    icon: (color) => <CalendarPublic fill={color} />,
    label: "Calendar",
    path: "/dashboard",
    route: "",
  },
  {
    key: "2",
    icon: (color) => <UserPublic fill={color} />,
    label: "User",
    path: "/dashboard/user",
    route: "/user",
  },
  {
    key: "3",
    icon: (color) => <AccountPublic fill={color} />,
    label: "Account",
    path: "/dashboard/account",
    route: "/account",
  },
  {
    key: "4",
    icon: (color) => <SettingPublic fill={color} />,
    label: "Setting",
    path: "/dashboard/setting",
    route: "/setting",
  },
];

const DashboardSider = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = useResolvedPath("");

  const activeColor = "#ffffff";
  const inactiveColor = "#9DC2FF";

  const onNavigate = (path) => {
    navigate(path);
  };

  return (
    <Sider collapsedWidth={96} className="dashboard-sider-container" trigger={null} collapsed={true}>
      <div className="dashboard-sider">
        <div className="dashboard-sider-logo-container">
          <div className="dashboard-sider-logo">
            <Avatar size={36} style={{ backgroundColor: "#133774" }}>
              F
            </Avatar>
          </div>
          <div className="dashboard-sider-divider">
            <Divider />
          </div>
        </div>

        <div className="dashboard-sider-menu-container">
          <Menu theme="white" mode="inline" selectedKeys={location.pathname} defaultSelectedKeys={menu[0].path}>
            {menu.map((x) => {
              return (
                <Menu.Item
                  key={x.path}
                  title={x.label}
                  onClick={() => onNavigate(x.path)}
                  className="dashboard-sider-menu-item"
                >
                  <NavLink to={`${pathname}${x.route}`} end>
                    {({ isActive }) => (
                      <p
                        className={
                          isActive
                            ? clsx("dashboard-menu-navlink", "dashboard-menu-navlink-active")
                            : "dashboard-menu-navlink"
                        }
                      >
                        {x.icon(isActive ? activeColor : inactiveColor)}
                      </p>
                    )}
                  </NavLink>
                </Menu.Item>
              );
            })}
          </Menu>
        </div>

        <div className="dashboard-sider-footer-container">
          <div className="dashboard-sider-logo" onClick={() => onNavigate('/dashboard/profile')}>
            <Avatar size={36} style={{ backgroundColor: "#fff", border: '1px solid #133774' }} icon={<ProfilePublic />} />
          </div>
          <div className="dashboard-sider-divider">
            <Divider />
          </div>
          <div className="dashboard-sider-footer">
            <ExitIcon />
            <p className="dashboard-sider-footer-label">ログアウト</p>
          </div>
        </div>
      </div>
    </Sider>
  );
};

export default DashboardSider;
