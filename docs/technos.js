
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
    {'label': 'Connectivity - Amazon Sidewalk', 'quadrant': 0, 'ring': 2, 'moved': 0.0, 'active': false, 'impact': 1, 'description': 'This is an example description for Example Technology.'},
    {'label': 'Connectivity - LTE-M / NB-IoT', 'quadrant': 0, 'ring': 0, 'moved': 0.0, 'active': true, 'impact': 2, 'description': 'This is an example description for Example Technology.'},
    {'label': 'Matter Standard', 'quadrant': 0, 'ring': 1, 'moved': 0.0, 'active': true, 'impact': 2, 'description': 'This is an example description for Example Technology.'},
    {'label': 'CAN Bus', 'quadrant': 0, 'ring': 0, 'moved': 0.0, 'active': true, 'impact': 0, 'description': 'This is an example description for Example Technology.'},
    {'label': 'Single Pair Ethernet', 'quadrant': 0, 'ring': 1, 'moved': 0.0, 'active': true, 'impact': 1, 'description': 'This is an example description for Example Technology.'},
    {'label': 'Wiegand', 'quadrant': 0, 'ring': 3, 'moved': 0.0, 'active': true, 'impact': 0, 'description': 'This is an example description for Example Technology.'},
    {'label': 'OSDP', 'quadrant': 0, 'ring': 0, 'moved': 0.0, 'active': true, 'impact': 2, 'description': 'This is an example description for Example Technology.'},
    {'label': 'Ethernet / IP (for Readers)', 'quadrant': 0, 'ring': 1, 'moved': 0.0, 'active': false, 'impact': 1, 'description': 'This is an example description for Example Technology.'},
    {'label': 'Ultra-low power RF wake methods', 'quadrant': 0, 'ring': 2, 'moved': 0.0, 'active': false, 'impact': 3, 'description': 'This is an example description for Example Technology.'},
    {'label': 'NFC Mobile Credentials', 'quadrant': 1, 'ring': 0, 'moved': 0.0, 'active': true, 'impact': 4, 'description': 'This is an example description for Example Technology.'},
    {'label': 'NFC as device interface', 'quadrant': 1, 'ring': 2, 'moved': 0.0, 'active': false, 'impact': 1, 'description': 'This is an example description for Example Technology.'},
    {'label': 'UWB Credentials / Communication', 'quadrant': 1, 'ring': 1, 'moved': 0.0, 'active': true, 'impact': 4, 'description': 'This is an example description for Example Technology.'},
    {'label': 'Aliro Standard', 'quadrant': 1, 'ring': 3, 'moved': 0.0, 'active': true, 'impact': 3, 'description': 'This is an example description for Example Technology.'},
    {'label': 'PKOC - Public Key Open Credential Standard', 'quadrant': 1, 'ring': 2, 'moved': 0.0, 'active': true, 'impact': 2, 'description': 'This is an example description for Example Technology.'},
    {'label': 'Leaf Credential Standard', 'quadrant': 1, 'ring': 2, 'moved': 0.0, 'active': false, 'impact': 1, 'description': 'This is an example description for Example Technology.'},
    {'label': 'Discrete embedded secure elements', 'quadrant': 1, 'ring': 0, 'moved': 0.0, 'active': true, 'impact': 1, 'description': 'This is an example description for Example Technology.'},
    {'label': 'LEGIC Platform', 'quadrant': 1, 'ring': 0, 'moved': 0.0, 'active': true, 'impact': 1, 'description': 'This is an example description for Example Technology.'},
    {'label': 'Mobile Wallets', 'quadrant': 1, 'ring': 0, 'moved': 0.0, 'active': true, 'impact': 3, 'description': 'This is an example description for Example Technology.'},
    {'label': 'BLE Mobile Credentials', 'quadrant': 1, 'ring': 3, 'moved': 0.0, 'active': true, 'impact': 1, 'description': 'This is an example description for Example Technology.'},
    {'label': 'Edge AI / ML Platforms', 'quadrant': 2, 'ring': 1, 'moved': 0.0, 'active': true, 'impact': 3, 'description': 'This is an example description for Example Technology.'},
    {'label': 'TinyML', 'quadrant': 2, 'ring': 2, 'moved': 0.0, 'active': true, 'impact': 3, 'description': 'This is an example description for Example Technology.'},
    {'label': 'ML co-processors / accelerators', 'quadrant': 2, 'ring': 2, 'moved': 0.0, 'active': false, 'impact': 2, 'description': 'This is an example description for Example Technology.'},
    {'label': 'Edge computer AI / ML accelerators', 'quadrant': 2, 'ring': 1, 'moved': 0.0, 'active': false, 'impact': 2, 'description': 'This is an example description for Example Technology.'},
    {'label': 'ARM Ethos', 'quadrant': 2, 'ring': 2, 'moved': 0.0, 'active': false, 'impact': 2, 'description': 'This is an example description for Example Technology.'},
    {'label': 'Neuromorphic Vision', 'quadrant': 2, 'ring': 2, 'moved': 0.0, 'active': false, 'impact': 2, 'description': 'This is an example description for Example Technology.'},
    {'label': 'Audio Sensing', 'quadrant': 2, 'ring': 1, 'moved': 0.0, 'active': true, 'impact': 3, 'description': 'This is an example description for Example Technology.'},
    {'label': 'LiDAR', 'quadrant': 2, 'ring': 1, 'moved': 0.0, 'active': true, 'impact': 2, 'description': 'This is an example description for Example Technology.'},
    {'label': 'RADAR', 'quadrant': 2, 'ring': 0, 'moved': 0.0, 'active': true, 'impact': 2, 'description': 'This is an example description for Example Technology.'},
    {'label': 'Passive IR', 'quadrant': 2, 'ring': 3, 'moved': 0.0, 'active': true, 'impact': 0, 'description': 'This is an example description for Example Technology.'},
    {'label': 'Ultrasonic', 'quadrant': 2, 'ring': 1, 'moved': 0.0, 'active': true, 'impact': 1, 'description': 'This is an example description for Example Technology.'},
    {'label': 'Test Lab Data Factory', 'quadrant': 2, 'ring': 2, 'moved': 0.0, 'active': false, 'impact': 3, 'description': 'This is an example description for Example Technology.'},
    {'label': 'Synthentic Data Tools', 'quadrant': 2, 'ring': 2, 'moved': 0.0, 'active': false, 'impact': 3, 'description': 'This is an example description for Example Technology.'},
    {'label': 'LLM training platforms', 'quadrant': 2, 'ring': 2, 'moved': 0.0, 'active': false, 'impact': 3, 'description': 'This is an example description for Example Technology.'},
    {'label': 'Advanced Camera Lenses', 'quadrant': 2, 'ring': 2, 'moved': 0.0, 'active': false, 'impact': 1, 'description': 'This is an example description for Example Technology.'},
    {'label': 'Computer Vision', 'quadrant': 2, 'ring': 1, 'moved': 0.0, 'active': true, 'impact': 4, 'description': 'This is an example description for Example Technology.'},
    {'label': 'Safety RTOS', 'quadrant': 3, 'ring': 2, 'moved': 0.0, 'active': false, 'impact': 1, 'description': 'This is an example description for Example Technology.'},
    {'label': 'Motion Control Platforms', 'quadrant': 3, 'ring': 2, 'moved': 0.0, 'active': false, 'impact': 2, 'description': 'This is an example description for Example Technology.'},
];
