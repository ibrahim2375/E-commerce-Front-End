import React from 'react'
///bootstrap components
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';

//components
import Featured from './Featured'
import Popular from './Popular'

function ProductsSection() {
    return (
        <Container className="my-5">
            <Tabs
                defaultActiveKey="Featured"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
            >
                <Tab eventKey="Featured" title="Featured">
                    <Featured />
                </Tab>
                <Tab eventKey="Popular" title="Popular">
                    <Popular />
                </Tab>
            </Tabs>
        </Container>
    );
}

export default ProductsSection;