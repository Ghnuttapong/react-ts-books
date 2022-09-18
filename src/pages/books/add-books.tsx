import React, { useEffect } from "react";
import FormAdd from "../../components/books-form/add-books";
import { ReadOutlined } from '@ant-design/icons';
import { Row, Col, Space, PageHeader, Avatar } from "antd";

function LayoutFormadd() {
  return (
    <Space direction="vertical" size={30} style={{ display: "flex" }}>
      <Row>
        <PageHeader
          className="site-page-header"
          onBack={()=> null}
          title="Books"
          subTitle="Add a book to the bookstore"
        />
      </Row>
      <Row justify="center">
        <Col>
            <Avatar
            size={{ xs: 50, sm: 55, md: 70, lg: 100, xl: 150, xxl: 200 }}
            icon={<ReadOutlined />}
            />
        </Col>
      </Row>
      <Row>
        <Col span={6}></Col>
        <Col span={10}>
          <FormAdd />
        </Col>
        <Col span={8}></Col>
      </Row>
    </Space>
  );
}

export default LayoutFormadd;
