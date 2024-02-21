
// Quadrants 
// 0. Sensing & Intelligence
// 1. Security & Identity
// 2. Automation & Safety
// 3. Connectivity & Integration

// Rings
// 0. Adopt 
// 1. Trial 
// 2. Assess
// 3. Hold 

var radarData = [
    {'label': 'Connectivity - Amazon Sidewalk', 'quadrant': 0, 'ring': 2, 'moved': 0.0, 'active': false},
    {'label': 'Connectivity - LTE-M / NB-IoT', 'quadrant': 0, 'ring': 0, 'moved': 0.0, 'active': true},
    {'label': 'Matter Standard', 'quadrant': 0, 'ring': 1, 'moved': 0.0, 'active': true},
    {'label': 'CAN Bus', 'quadrant': 0, 'ring': 0, 'moved': 0.0, 'active': true},
    {'label': 'Single Pair Ethernet', 'quadrant': 0, 'ring': 1, 'moved': 0.0, 'active': true},
    {'label': 'Wiegand', 'quadrant': 0, 'ring': 3, 'moved': 0.0, 'active': true},
    {'label': 'OSDP', 'quadrant': 0, 'ring': 0, 'moved': 0.0, 'active': true},
    {'label': 'Ethernet / IP (for Readers)', 'quadrant': 0, 'ring': 1, 'moved': 0.0, 'active': false},
    {'label': 'Ultra-low power RF wake methods', 'quadrant': 0, 'ring': 2, 'moved': 0.0, 'active': false},
    {'label': 'NFC Mobile Credentials', 'quadrant': 1, 'ring': 0, 'moved': 0.0, 'active': true},
    {'label': 'NFC as device interface', 'quadrant': 1, 'ring': 2, 'moved': 0.0, 'active': false},
    {'label': 'UWB Credentials / Communication', 'quadrant': 1, 'ring': 1, 'moved': 0.0, 'active': true},
    {'label': 'Aliro Standard', 'quadrant': 1, 'ring': 3, 'moved': 0.0, 'active': true},
    {'label': 'PKOC - Public Key Open Credential Standard', 'quadrant': 1, 'ring': 2, 'moved': 0.0, 'active': true},
    {'label': 'Leaf Credential Standard', 'quadrant': 1, 'ring': 2, 'moved': 0.0, 'active': false},
    {'label': 'Discrete embedded secure elements', 'quadrant': 1, 'ring': 0, 'moved': 0.0, 'active': true},
    {'label': 'LEGIC Platform', 'quadrant': 1, 'ring': 0, 'moved': 0.0, 'active': true},
    {'label': 'Mobile Wallets', 'quadrant': 1, 'ring': 0, 'moved': 0.0, 'active': true},
    {'label': 'BLE Mobile Credentials', 'quadrant': 1, 'ring': 3, 'moved': 0.0, 'active': true},
    {'label': 'Edge AI / ML Platforms', 'quadrant': 2, 'ring': 1, 'moved': 0.0, 'active': true},
    {'label': 'TinyML', 'quadrant': 2, 'ring': 2, 'moved': 0.0, 'active': true},
    {'label': 'ML co-processors / accelerators', 'quadrant': 2, 'ring': 2, 'moved': 0.0, 'active': false},
    {'label': 'Edge computer AI / ML accelerators', 'quadrant': 2, 'ring': 1, 'moved': 0.0, 'active': false},
    {'label': 'ARM Ethos', 'quadrant': 2, 'ring': 2, 'moved': 0.0, 'active': false},
    {'label': 'Neuromorphic Vision', 'quadrant': 2, 'ring': 2, 'moved': 0.0, 'active': false},
    {'label': 'Audio Sensing', 'quadrant': 2, 'ring': 1, 'moved': 0.0, 'active': true},
    {'label': 'LiDAR', 'quadrant': 2, 'ring': 1, 'moved': 0.0, 'active': true},
    {'label': 'RADAR', 'quadrant': 2, 'ring': 0, 'moved': 0.0, 'active': true},
    {'label': 'Passive IR', 'quadrant': 2, 'ring': 3, 'moved': 0.0, 'active': true},
    {'label': 'Ultrasonic', 'quadrant': 2, 'ring': 1, 'moved': 0.0, 'active': true},
    {'label': 'Test Lab Data Factory', 'quadrant': 2, 'ring': 2, 'moved': 0.0, 'active': false},
    {'label': 'Synthentic Data Tools', 'quadrant': 2, 'ring': 2, 'moved': 0.0, 'active': false},
    {'label': 'LLM training platforms', 'quadrant': 2, 'ring': 2, 'moved': 0.0, 'active': false},
    {'label': 'Advanced Camera Lenses', 'quadrant': 2, 'ring': 2, 'moved': 0.0, 'active': false},
    {'label': 'Computer Vision', 'quadrant': 2, 'ring': 1, 'moved': 0.0, 'active': true},
    {'label': 'Safety RTOS', 'quadrant': 3, 'ring': 2, 'moved': 0.0, 'active': false},
    {'label': 'Motion Control Platforms', 'quadrant': 3, 'ring': 2, 'moved': 0.0, 'active': false},
];
