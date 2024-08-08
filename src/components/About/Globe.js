import markers from '../../Assets/Dataset/MapData.json'
import ReactGlobe from 'react-globe';
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
function Globe() {
    return (
/*        <Container fluid className="about-section">
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>*/
                    <ReactGlobe
                        height="80vh" width={600}
                        initialCameraDistanceRadiusScale={3}
                        markers={markers}
                        options={{
                            enableMarkerTooltip: true,
                            markerEnterAnimationDuration: 3000,
                            markerEnterEasingFunction: ['Bounce', 'InOut'],
                            markerExitAnimationDuration: 3000,
                            markerExitEasingFunction: ['Cubic', 'Out'],
                            markerTooltipRenderer: marker =>
                                `${marker.displayText} - (${marker.city})`,
                            markerRadiusScaleRange: [0.1, 0.02],

                            cameraAutoRotateSpeed: 0.5,
                            cameraMaxPolarAngle: (Math.PI * 9) / 16,
                            cameraMinPolarAngle: (Math.PI * 7) / 16,
                            cameraRotateSpeed: 0.5,
                            enableCameraAutoRotate: true,
                            enableCameraRotate: true,
                        }}
                    />
               /* </Row>
            </Container>
        </Container>*/
    )
}
export default Globe;
