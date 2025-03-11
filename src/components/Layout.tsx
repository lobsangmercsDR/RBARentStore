import { Layout } from "antd";
import Sidebar from "./Sidebar";
import HeaderBar from "./Header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const { Content } = Layout;

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Layout className="min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      <Layout className="flex flex-col">
        {/* Header */}
        <HeaderBar />

        {/* Contenido Principal */}
        <Content className="p-6 bg-gray-100">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
