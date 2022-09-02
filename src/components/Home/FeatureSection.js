import React from 'react'
///bootstrap components
import Container from 'react-bootstrap/Container';
//mui icons
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';

const FeatureCards = [
    {
        id: 0,
        title: 'Free Shopping',
        description: 'Orders $50 or more',
        Icon: LocalShippingOutlinedIcon
    },
    {
        id: 1,
        title: 'Free Returns',
        description: 'Within 30 days',
        Icon: ShoppingBagOutlinedIcon
    },
    {
        id: 2,
        title: 'Get 20% Off 1 Item',
        description: 'When you sign up',
        Icon: WorkHistoryOutlinedIcon
    },
    {
        id: 3,
        title: 'Support Center',
        description: '24/7 amazing services',
        Icon: PersonSearchOutlinedIcon
    },
]
function FeatureSection() {
    return (
        <div className="py-5">
            <Container className="bg-ligth w-100 d-flex justify-content-between  align-items-center gap-5 flex-wrap">
                {
                    FeatureCards.map(Feature => (
                        <div className="d-flex justify-content-center align-items-center gap-3" key={Feature.id}>
                            <Feature.Icon className='main-color' sx={{ fontSize: 40 }} />
                            <div>
                                <h5 className='main-color m-0'>{Feature.title}</h5>
                                <p className='text-muted m-0'>{Feature.description}</p>
                            </div>
                        </div>
                    ))

                }
            </Container>
        </div>
    );
}

export default FeatureSection;