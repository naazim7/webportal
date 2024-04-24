
'use client'
import { Col, Container, Row } from 'react-bootstrap';

import dynamic from 'next/dynamic';

const CountUp = dynamic(() => import('react-countup'), { ssr: false });
const VisibilitySensor = dynamic(() => import('react-visibility-sensor'), { ssr: false });

function Counter() {
    return (
        <div>
            <Container fluid className="counterBg mt-5 text-center mb-2">
                <div className="counterBgOverlay">
                    <Row className="my-5 mx-auto">
                        <Col lg={4} md={6} sm={12} className="d-flex flex-column justify-content-center align-items-center p-0">
                            <h1 className="text-white">
                                <CountUp start={0} end={50} duration={1}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start}>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </h1>
                            <h3 className="text-white">Faculty Member</h3>
                        </Col>

                        <Col lg={4} md={6} sm={12} className="d-flex justify-content-center flex-column align-items-center p-0">
                            <h1 className="text-white">
                                <CountUp start={0} end={700} duration={1}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start}>
                                            <span className="counter" ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </h1>
                            <h3 className="text-white">Student</h3>
                        </Col>

                        <Col lg={4} md={6} sm={12} className="d-flex justify-content-center flex-column align-items-center p-0 m-0">
                            <h1 className="text-white">
                                <CountUp start={0} end={10000} duration={1}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start}>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </h1>
                            <h3 className="text-white">Alumni</h3>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Counter;
