import { Image, Space, Row, PageHeader, Typography, Tag } from "antd";
import React from "react";
import DrawerMain from "../../components/drawer/drawer";

const { Title , Text} = Typography

const LayoutItemBook: React.FC = () => {
  return (
    <Space direction="vertical" size={10} style={{ display: "flex" }}>
      <Row>
        <PageHeader
          className="site-page-header"
          onBack={() => null}
          title="Books"
          subTitle="Item of a book"
        />
      </Row>
      <Row justify="center">
          <Image
            width={300}
            height={400}
            src="https://images.unsplash.com/photo-1661961112134-fbce0fdf3d99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
            preview={{
              src: "https://images.unsplash.com/photo-1661961112134-fbce0fdf3d99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
            }}
          />
      </Row>
      <Row justify="center">
        <Title level={2}>Book name: การพัฒนา</Title> 
        <Title level={2}>{process.env.PORT}</Title> 
      </Row>
      <Row justify="center">
         <Text  code>Author</Text>
         <Text>-</Text>
         <Tag color="success">200$</Tag>
      </Row>
    </Space>
  );
};

export default LayoutItemBook;
