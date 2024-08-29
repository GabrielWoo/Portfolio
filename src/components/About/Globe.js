import markers from '../../Assets/Dataset/MapData.json'
import ReactGlobe from 'react-globe';
function Globe() {
    return (
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
                            // Camera Options
                            cameraAutoRotateSpeed: 0.5,
                            cameraRotateSpeed: 0.5,
                            enableCameraAutoRotate: true,
                            enableCameraRotate: true,
                            // Zoom settings
                            cameraDistanceRadiusScale: 10,
                            cameraMaxDistanceRadiusScale: 5,
                            cameraZoomSpeed: 5,
                            enableCameraZoom: true,
                        }}
                    />
    )
}
export default Globe;
