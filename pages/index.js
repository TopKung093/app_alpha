import { Card, Row, Input, Col, Button, Form } from 'antd'
import axios from 'axios';
import { useRouter } from 'next/router'
import { useState } from 'react';

export default function Home() {
  const router = useRouter()
  const [form] = Form.useForm();

  const login = async (value) => {
    const res = await axios.post('http://localhost:4000/user/login', value)
      .catch((err) => alert(err))
    if (res.status === 200) {
      alert('success')
      localStorage.setItem('user', JSON.stringify(res.data));
      if (res.data.role === 'admin') {
        router.push('/Admin')
      } else if (res.data.role === 'user') {
        router.push('/User')
      }
    }
  }
  return (
    <>
      <Row justify='center' style={{ marginTop: '200px' }}>
        <Form
          form={form}
          onFinish={login}
        >
          <Card style={{ width: '90%' }}>
            <Form.Item label='username' name='username'>
              <Input />
            </Form.Item>
            <Form.Item label='password' name='password'>
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Row justify='center'>
                <Button htmlType='submit'>Login</Button>
              </Row>
            </Form.Item>
          </Card>
        </Form>
      </Row>
    </>
  )
}
