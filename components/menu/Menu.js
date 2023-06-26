import { UserOutlined, UploadOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Menu, Typography } from 'antd';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter()
    const [current, setCurrent] = useState('mail');
    const [value, setValue] = useState({});
    console.log(value)
    useEffect(() => {
        const storedValue = localStorage.getItem('user');
        setValue(JSON.parse(storedValue))
    }, []);

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal"
        items={router?.pathname === "/" ? [
            {
                key: '1',
                icon: <UserOutlined />,
                label: <span style={{ fontSize: '16px', fontWeight: 'bolder' }}>Web Design By Top.</span>,
            }
        ] : value.role === 'admin' ? [
            {
                key: '1',
                icon: <UserOutlined onClick={() => {
                    localStorage.removeItem('user')
                    router.push('/')
                }} />,
                label: <span>{value?.name + ' ' + value.role}</span>,
            }
        ] : value.role === 'user' ? [
            {
                key: '1',
                icon: <UserOutlined onClick={() => {
                    localStorage.removeItem('user')
                    router.push('/')
                }} />,
                label: <span>{value?.name + ' ' + value.role}</span>,
            }
        ]
            : null
        } />;
};
export default Navbar;