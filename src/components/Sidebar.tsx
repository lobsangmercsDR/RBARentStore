import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import BadgeIcon from '@mui/icons-material/Badge';
import { useState } from 'react'; // Import useState

const { Sider } = Layout;

const Sidebar = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false); // State for collapse

  // Function to change text based on collapse state
  const changeTextOnCollapse = (collapsed: boolean) => {
    if (collapsed) {
      return "RB";
    } else {
      return "Rosy Badia";
    }
  }

  return (
    <Sider
      collapsible
      collapsed={collapsed} // Bind collapse state
      onCollapse={(collapsed) => setCollapsed(collapsed)} // Update state on collapse
      width={300}
      className="h-screen bg-white shadow-md"
    >
      <div className="h-16 flex items-center justify-center font-bold text-xl">
        {changeTextOnCollapse(collapsed)} {/* Use collapse state */}
      </div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["dashboard"]}
        onClick={({ key }) => {
          if (key === "logout") {
            console.log("Cerrar sesión");
            return;
          }
          navigate(key);
        }}
        items={[
          {
            key: "dashboard",
            icon: <DashboardOutlined style={{ fontSize: '18px' }} />,
            label: <span style={{ fontSize: '16px' }}>Dashboard</span>,
          },
          {
            key: "clientes",
            icon: <UserOutlined style={{ fontSize: '18px' }} />,
            label: <span style={{ fontSize: '16px' }}>Clientes</span>,
          },
          {
            key: "rentas",
            icon: <ShoppingCartOutlined style={{ fontSize: '18px' }} />,
            label: <span style={{ fontSize: '16px' }}>Rentas</span>,
            children: [
              {
                key: "rentas-activas",
                label: <span style={{ fontSize: '16px' }}>Rentas Activas</span>,
                icon: <ShoppingCartOutlined style={{ fontSize: '18px' }} />,
              },
              {
                key: "rentas-nueva",
                label: <span style={{ fontSize: '16px' }}>Nueva Renta</span>,
                icon: <BadgeIcon style={{ fontSize: '18px' }} />,
              },
              {
                key: "rentas-historial",
                label: <span style={{ fontSize: '16px' }}>Historial de Rentas</span>,
              },
            ],
          },
          {
            key: "logout",
            icon: <LogoutOutlined style={{ fontSize: '18px' }} />,
            label: <span style={{ fontSize: '16px' }}>Cerrar Sesión</span>,
          },
        ]}
      />
    </Sider>
  );
};

export default Sidebar;
