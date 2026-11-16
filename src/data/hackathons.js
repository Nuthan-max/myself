export const hackathonsData = [
  {
    id: "sih-2024",
    name: "Smart India Hackathon (SIH)",
    edition: "National Innovation Challenge",
    date: "2024",
    organizer: "Ministry of Education & AICTE",
    teamName: "Byte Me",
    role: "Hardware & Vision Lead",
    projectTitle: "AI Water Body & Plastic Debris Monitoring System",
    badge: "National Hackathon",
    summary: "Led technical architecture and sensor integration in a high-intensity hackathon environment. Synchronized team tasks and delivered working hardware-software demonstration under strict evaluation timelines.",
    contributions: [
      "Engineered the multi-sensor analog signal acquisition pipeline using ESP microcontroller.",
      "Assisted in training and testing the OpenCV & YOLO plastic detection model with water surface datasets.",
      "Designed the data communication protocol feeding the live real-time command dashboard.",
      "Co-delivered the final pitch to the evaluation panel, articulating both engineering rigor and scalability."
    ],
    techStack: ["Python", "OpenCV", "ESP32", "IoT Sensors", "Leaflet Maps"],
    certificateTitle: "Smart India Hackathon Participation Certificate",
    image: "/images/hackathons/sih.svg"
  },
  {
    id: "lpu-innovate-2024",
    name: "LPU Tech Innovate Hackathon",
    edition: "Inter-College Engineering Sprint",
    date: "2024",
    organizer: "Lovely Professional University",
    teamName: "Byte Me",
    role: "Team Lead & Embedded Prototyper",
    projectTitle: "RescueRoute: Dynamic Grid Disaster Response Routing",
    badge: "University Finalist",
    summary: "Developed an emergency evacuation route calculation engine capable of rerouting first responders around dynamic bottlenecks and hazard zones within sub-seconds.",
    contributions: [
      "Formulated the modified A* pathfinding algorithm with real-time obstacle weight penalization.",
      "Built the interactive graphical simulation interface with HTML5 Canvas and JavaScript.",
      "Coordinated team sprints, Git version management, and final pitch slide deck."
    ],
    techStack: ["Python", "JavaScript", "Graph Theory", "Git", "VS Code"],
    certificateTitle: "LPU Tech Innovate Certificate of Excellence",
    image: "/images/hackathons/lpu-hackathon.svg"
  },
  {
    id: "ece-circuit-sprint",
    name: "Silicon & Signals Circuit Hackathon",
    edition: "Department of ECE Technical Sprint",
    date: "2025",
    organizer: "School of Electronics & Electrical Engineering",
    teamName: "Byte Me",
    role: "Circuit & Firmware Architect",
    projectTitle: "Acoustic Resonance Strain Diagnostic Prototype",
    badge: "Special Recognition",
    summary: "A 24-hour hardware hackathon focusing on rapid circuit design, signal filtering, and real-time sensor analysis on custom prototype boards.",
    contributions: [
      "Drafted schematic in KiCad and completed breadboard assembly within 6 hours.",
      "Implemented digital filtering on ESP32 to eliminate ambient laboratory electrical noise.",
      "Demonstrated real-time vibration spectral response on oscilloscope and digital display."
    ],
    techStack: ["KiCad", "ESP32", "C++ / Embedded", "Analog Filters", "Tinkercad"],
    certificateTitle: "Silicon & Signals Hackathon Certificate",
    image: "/images/hackathons/circuit-sprint.svg"
  }
];
