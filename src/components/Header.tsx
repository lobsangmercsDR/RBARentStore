import { Layout, Avatar, Dropdown, Menu } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";

const { Header } = Layout;

const HeaderBar = () => {
  const menu = (
    <Menu
      items={[
        {
          key: "logout",
          icon: <LogoutOutlined />,
          label: "Cerrar Sesión",
          onClick: () => console.log("Logout"),
        },
      ]}
    />
  );

  return (
    <Header className="bg-white shadow-md flex justify-between px-6 items-center">
      <h1 className="text-xl font-bold text-blue-600">Panel de Administración</h1>
      <Dropdown overlay={menu} placement="bottomRight">
        <Avatar size="large" icon={<UserOutlined />} className="cursor-pointer" />
      </Dropdown>
    </Header>
  );
};

export default HeaderBar;
