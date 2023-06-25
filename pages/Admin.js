import { Card, Row, Typography } from 'antd'


export default function Admin() {
    return (
        <>
            <Row justify='center' style={{ marginTop: '200px' }}>
                <Card style={{ width: '90%' }}>
                    <Typography style={{fontSize: '30px',fontWeight: 'bold'}}>Welcome to Homepage Admin.</Typography>
                </Card>
            </Row>
        </>
    )
}
