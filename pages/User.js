import { Card, Row, Typography } from 'antd'


export default function User() {
    return (
        <>
            <Row justify='center' style={{ marginTop: '200px' }}>
                <Card style={{ width: '90%' }}>
                    <Typography style={{ fontSize: '30px', fontWeight: 'bold' }}>Welcome to Homepage User.</Typography>
                </Card>
            </Row>
        </>
    )
}
