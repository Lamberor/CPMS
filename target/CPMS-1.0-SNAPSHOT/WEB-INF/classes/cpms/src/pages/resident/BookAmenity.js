import React from 'react';
import { Row, Col } from 'antd';
import SideBarResident from '../../components/SideBarResident';


const BookAmenityResident = () => {
    return (
        <Row>
            <Col span={4.5}>
                <SideBarResident />

            </Col>
            <Col span={5.5}>
                Here is Book Amenity for Resident
            </Col>
        </Row>
    )

}

export default BookAmenityResident;