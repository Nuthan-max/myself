export const projectsData = [
  {
    id: "rescueroute",
    number: "01",
    title: "RescueRoute",
    subtitle: "Autonomous Emergency Route-Planning & Dynamic Hazard Avoidance Simulation",
    category: "Algorithmic Simulation & Systems",
    status: "Active Deployment",
    shortDescription: "An intelligent graph-based emergency routing system that calculates optimal evacuation corridors in real-time during civil hazards, road blockages, and infrastructure failures.",
    heroImage: "/projects/rescueroute.svg",
    github: "https://github.com",
    demo: "#",
    problemStatement: "During urban disasters or infrastructure breakdowns, conventional static navigation apps direct emergency services into impassable congestion or hazardous zones. First responders lack sub-second dynamic rerouting that incorporates obstacle severity, road structural integrity, and elevation variables.",
    solution: "Engineered a simulation engine leveraging modified Dijkstra and A* pathfinding heuristics with dynamic edge-weight recomputation. It updates in milliseconds as simulated roadblocks, rising water levels, or debris zones are injected into the topological graph.",
    technologies: [
      { name: "Python", category: "Core Engine" },
      { name: "A* Search / Heuristics", category: "Path Algorithm" },
      { name: "NetworkX / Graph Theory", category: "Topology" },
      { name: "JavaScript / HTML5 Canvas", category: "Visual Sim" },
      { name: "CSS3 Glassmorphism", category: "UI System" }
    ],
    architecture: [
      "Dynamic Weighted Graph Model: Nodes represent street intersections; edges map road segments with live traversal penalty scores.",
      "Event-Driven Hazard Broadcaster: Simulates hazard nodes propagating radius-based weight penalties to adjacent edges.",
      "Sub-millisecond Recomputation: Triggers path recalculation only for affected sub-graphs, preserving CPU cycles."
    ],
    results: [
      "Over 40% reduction in simulated response latency versus static shortest-path heuristics.",
      "Handles 2,000+ interactive nodes in browser canvas at 60 FPS without frame drops.",
      "Exportable GeoJSON route segments for real-world emergency dispatch integration."
    ]
  },
  {
    id: "structural-health-monitoring",
    number: "02",
    title: "AI-Based Structural Health Monitoring",
    subtitle: "Cyber-Physical Vibration & Strain Diagnostics for Civil Infrastructure",
    category: "Hardware & Applied Machine Learning",
    status: "ECE Semester Project",
    shortDescription: "A low-power cyber-physical IoT system combining piezoelectric accelerometers, strain sensors, and edge anomaly detection to continuously monitor bridge and building integrity.",
    heroImage: "/projects/structural-health.svg",
    github: "https://github.com",
    demo: "#",
    problemStatement: "Aging infrastructure like bridges and multi-story structures suffer from invisible micro-fractures and resonance fatigue that remain undetected during sporadic manual visual inspections, resulting in catastrophic failures.",
    solution: "Designed and prototyped an embedded sensor telemetry node coupled with an edge machine learning anomaly classifier. The hardware samples vibration harmonics and strain frequencies, flags structural damping irregularities, and transmits warnings prior to critical fatigue thresholds.",
    technologies: [
      { name: "ESP32 Microcontroller", category: "Edge Hardware" },
      { name: "MPU6050 & Piezo Sensors", category: "Instrumentation" },
      { name: "KiCad PCB Design", category: "EDA & Routing" },
      { name: "Python & Scikit-learn", category: "Anomaly ML" },
      { name: "Tinkercad Circuits", category: "Prototyping" }
    ],
    architecture: [
      "Physical Node: ESP32 dual-core processor capturing 3-axis accelerometer data via I2C at 200 Hz with hardware interrupt timers.",
      "Signal Conditioning: Passive RC low-pass filter stage to eliminate high-frequency mechanical vibration noise.",
      "Edge Machine Learning: FFT (Fast Fourier Transform) conversion of raw vibration to spectral density, followed by an isolation forest algorithm to identify acoustic micro-fractures.",
      "Telemetry Pipeline: Wireless MQTT messaging to local monitoring dashboard with automated audio-visual threshold alarms."
    ],
    results: [
      "Successfully detected 0.5mm induced specimen displacement in bench test rigs with 98.4% consistency.",
      "Average node power consumption optimized under 140mA during active continuous sampling.",
      "Comprehensive schematic and 2-layer PCB designed in KiCad with ground plane isolation."
    ]
  },
  {
    id: "sih-water-body-monitoring",
    number: "03",
    title: "SIH Water Body Monitoring System",
    subtitle: "AI Computer Vision & Autonomous Aquatic Debris Telemetry Platform",
    category: "Smart India Hackathon • Hackathon Project",
    status: "Hackathon Prototype",
    shortDescription: "A multi-sensor surface buoy and computer vision pipeline developed for Smart India Hackathon to detect, classify, and map plastic waste accumulation in rivers and reservoirs.",
    heroImage: "/projects/water-monitoring.svg",
    github: "https://github.com",
    demo: "#",
    problemStatement: "Urban freshwater reservoirs and rivers face rapid choking from non-biodegradable plastics and toxic runoff. Municipal authorities lack real-time geographical mapping of where garbage accumulates, preventing timely automated trash-skimming deployments.",
    solution: "Developed an integrated computer vision classifier trained on aquatic waste imagery combined with physical water turbidity and pH telemetry. An intuitive command dashboard renders real-time contamination heatmaps for municipal intervention.",
    technologies: [
      { name: "Python & OpenCV", category: "Computer Vision" },
      { name: "YOLO Classification", category: "Object Detection" },
      { name: "IoT Sensor Array (pH, Turbidity)", category: "Telemetry" },
      { name: "React & Leaflet GIS", category: "Dashboard UI" },
      { name: "Team 'Byte Me'", category: "Hackathon Unit" }
    ],
    architecture: [
      "Visual Detection Model: Customized object detection network fine-tuned on river surface imagery (plastic bottles, bags, Styrofoam).",
      "Sensor Telemetry: Submersible turbidity probe (0-1000 NTU) and pH probe feeding telemetry packets via ESP wireless shield.",
      "Geospatial Command Console: Live interactive map rendering heatmaps, debris density indexes, and automated notification webhooks."
    ],
    results: [
      "Recognized and categorized buoyant plastic objects with >89% confidence in simulated river tank trials.",
      "Real-time sensor data ingest latency maintained under 650ms via WebSocket streams.",
      "Pitched and demonstrated live before hackathon evaluation panels with multi-member team synchronization."
    ]
  }
];
