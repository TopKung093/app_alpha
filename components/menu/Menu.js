import { UserOutlined, UploadOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter()
    const [current, setCurrent] = useState('mail');
    const [value, setValue] = useState({});
    useEffect(() => {
        const storedValue = localStorage.getItem('user');
        setValue(JSON.parse(storedValue))
    }, []);

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal"
        items={[
            {
                key: '1',
                icon: <UserOutlined onClick={() => {
                    localStorage.removeItem('user')
                    router.push('/')
                }} />,
                label: <span>{value?.name}</span>,
            },
            {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2',
            },
            {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
            },
            {
                key: '4',
                icon: <UploadOutlined />,
                label: 'nav 3',
            },
        ]} />;
};
export default Navbar;