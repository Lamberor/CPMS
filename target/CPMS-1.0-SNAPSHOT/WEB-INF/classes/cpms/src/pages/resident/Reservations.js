import React from 'react';
import { Row, Col } from 'antd';
import SideBarResident from '../../components/SideBarResident';


const ReservationsResident = () => {
    return (
        <Row>
            <Col span={4.5}>
                <SideBarResident />

            </Col>
            <Col span={5.5}>
                Here is Reservations (booked amenity times) for Resident
            </Col>
        </Row>
    )
}

export default ReservationsResident;