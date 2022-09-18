import React, { useState } from "react";
import { Form, Input, Button, InputNumber } from "antd";

function AddBooks() {
  const [value, setValue] = useState<{
    name: string;
    author: string;
    price: number;
  }>({
    name: "",
    author: "",
    price: 0,
  });

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed', errorInfo)
  }

  return (
    <div>
        <Form 
            labelCol={{ span: 4}}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item label="Name: " htmlFor="name" rules={[{ required: true, message: 'Please input your name!'}]}>
                <Input name="name" />
            </Form.Item>
            <Form.Item label="URI Cover: " htmlFor="uri-cover" rules={[{ required: true, message: 'Please input your uri cover!'}]}>
                <Input name="uri-cover" />
            </Form.Item>
            <Form.Item label="Author: " htmlFor="author" rules={[{ required: true, message: 'Please input your author!'}]}>
                <Input name="author" />
            </Form.Item>
            <Form.Item label="price: " htmlFor="price" rules={[{ required: true, message: 'Please input your price!'}]}>
                <InputNumber addonBefore="+" addonAfter="$" defaultValue={0} min={0} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 4, span: 24}}>
              <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    </div>
)}

export default AddBooks;
