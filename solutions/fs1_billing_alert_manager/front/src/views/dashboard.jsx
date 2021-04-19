import React from 'react';
import Alarm from '../components/alarms/alarm.component';
import {
    Col,
    Row
} from 'reactstrap';
import Instance from '../components/instance/instance.component';
import Images from '../components/image/image.component';


const Dashboard = () => {
    return (
        <div>
            <Row>
                <Col sm={12}>
                    <Alarm />
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <Instance />
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <Images/>
                </Col>
            </Row>
        </div>
    );
}

export default Dashboard;
