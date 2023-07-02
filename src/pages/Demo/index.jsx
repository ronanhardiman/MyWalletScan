import React from 'react';
import { Layout, Typography, Button, message, Space } from 'antd';
import { QrcodeOutlined, CopyOutlined } from '@ant-design/icons';
import QRCode from 'qrcode.react';
import copy from 'copy-to-clipboard';
const { Content } = Layout;
const { Title, Text } = Typography;

const Demo = () => {
    const contentStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 64px)', // Subtracting Header height
        padding: '20px',
        backgroundColor: '#F0F2F5' // Adding a light grey background color
    };

    const textStyle = {
        marginBottom: '20px' // Adding some space below the text
    };
    return (
        <Layout>
            <Content style={contentStyle}>
                <Title level={3} style={textStyle}>如果你觉得这款工具对你有所帮助，可以请作者喝杯咖啡提提神吗😄</Title>
                <Title>demo of cause!</Title>

            </Content>
        </Layout>
    );
}
export default Demo;