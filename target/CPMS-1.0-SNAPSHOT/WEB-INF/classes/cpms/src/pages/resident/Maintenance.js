import React from 'react';
import { Row, Col } from 'antd';
import SideBarResident from '../../components/SideBarResident';


const MaintenanceResident = () => {
    return (
        <Row>
            <Col span={4.5}>
                <SideBarResident />

            </Col>
            <Col span={5.5}>
                Here is Maintenance for Resident
            </Col>
        </Row>
    )

}

export default MaintenanceResident;