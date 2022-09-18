import React, { useEffect, useState } from "react";
import {Getall} from '../../hooks/books/functions'
import {Book} from '../../model/book'
import { ReadOutlined, EditOutlined, EllipsisOutlined, SettingOutlined  } from "@ant-design/icons";
import { Row, Col, Space, Card, PageHeader, Avatar } from "antd";
const { Meta } = Card;


function LayoutListBook() {
  const [name, setName] = useState<string>()
  const [author, setAuthor] = useState<string>()
  const [price, setPrice] = useState<string | number>()
  const [coverImage, setCoverImage] = useState<string>()
  useEffect(() => {
     const data: object = Getall()
     console.log(data)
  },[])
  return (
    <Space direction="vertical" size={30} style={{ display: "flex" }}>
      <Row>
        <PageHeader
          className="site-page-header"
          onBack={() => null}
          title="Books"
          subTitle="List of all books"
        />
      </Row>
      <Row>
        <Col span={2}></Col>
        <Col span={20}>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Col>
        <Col span={2}></Col>
      </Row>
    </Space>
  );
}

export default LayoutListBook;
