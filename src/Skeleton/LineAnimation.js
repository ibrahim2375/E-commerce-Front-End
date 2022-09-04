import Placeholder from 'react-bootstrap/Placeholder';

function LineAnimation({width}) {
    return (
        <>
            <Placeholder as="p" animation="glow">
                <Placeholder xs={width} />
            </Placeholder>
            {/* <Placeholder as="p" animation="wave">
                <Placeholder xs={width} />
            </Placeholder> */}
        </>
    );
}

export default LineAnimation;