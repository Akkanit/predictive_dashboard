import React, { useState } from 'react';
import { Gauge, AlertTriangle, Calendar, Clock, Thermometer, Activity, BarChart3, Settings, AlertCircle, ChevronDown, ChevronRight, Box, Cog, Cpu, Wrench, ConciergeBell as ConveyorBelt, Zap } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, BarChart, Bar } from "recharts";



function App() {
  const [health] = useState(61);
  const [temperature] = useState(82);
  const [vibration] = useState(65);
  const [nextMaintenance] = useState("2025-04-15");
  const [runningHours] = useState(2847);
  
  const [expandedComponents, setExpandedComponents] = useState<string[]>([]);
  const [expandedSubComponents, setExpandedSubComponents] = useState<string[]>([]);

  const crusherComponents = {
    name: 'Coal Crusher System',
    health: 78,
    components: [
      {
        id: 'hopper',
        name: 'Hopper',
        health: 85,
        temperature: 45,
        vibration: 30,
        subComponents: []
      },
      {
        id: 'chain-feeder',
        name: 'Crusher Chain Feeder',
        health: 75,
        temperature: 65,
        vibration: 45,
        subComponents: [
          { 
            id: 'hydraulic-pump', 
            name: 'Hydraulic Pump', 
            health: 82, 
            temperature: 60, 
            vibration: 40 
          },
          { 
            id: 'hydraulic-motor', 
            name: 'Hydraulic Motor', 
            health: 78, 
            temperature: 65, 
            vibration: 42,
            ampereLoaded: 42.5,
            ampereUnloaded: 22.8,
            ampereShift: 3.2,
            isMotor: true
          },
          { 
            id: 'chain', 
            name: 'Chain', 
            health: 70, 
            temperature: 55, 
            vibration: 50 
          },
          { 
            id: 'head-shaft', 
            name: 'Head Shaft', 
            health: 85, 
            temperature: 58, 
            vibration: 35 
          },
          { 
            id: 'tail-shaft', 
            name: 'Tail Shaft', 
            health: 80, 
            temperature: 56, 
            vibration: 38 
          }
        ]
      },
      {
        id: 'primary-crusher',
        name: 'Primary Crusher',
        health: 70,
        temperature: 82,
        vibration: 65,
        subComponents: [
          { 
            id: 'primary-motor', 
            name: 'Motor', 
            health: 75, 
            temperature: 80, 
            vibration: 60,
            ampereLoaded: 85.2,
            ampereUnloaded: 45.6,
            ampereShift: 8.4,
            isMotor: true
          },
          { 
            id: 'primary-gearbox', 
            name: 'Gearbox', 
            health: 68, 
            temperature: 82, 
            vibration: 65 
          },
          { 
            id: 'drumbreaker', 
            name: 'Drumbreaker/Pulley Shaft', 
            health: 72, 
            temperature: 78, 
            vibration: 58 
          }
        ]
      },
      {
        id: 'cv01',
        name: 'Conveyor CV01',
        health: 90,
        temperature: 55,
        vibration: 40,
        subComponents: [
          { 
            id: 'cv01-motor', 
            name: 'Motor', 
            health: 92, 
            temperature: 52, 
            vibration: 35,
            ampereLoaded: 38.4,
            ampereUnloaded: 20.2,
            ampereShift: 1.8,
            isMotor: true
          },
          { 
            id: 'cv01-gearbox', 
            name: 'Gearbox', 
            health: 88, 
            temperature: 55, 
            vibration: 42 
          },
          { 
            id: 'cv01-drive-bearing', 
            name: 'Drive Pulley Bearing', 
            health: 90, 
            temperature: 50, 
            vibration: 38 
          },
          { 
            id: 'cv01-tail-bearing', 
            name: 'Tail Pulley Bearing', 
            health: 85, 
            temperature: 48, 
            vibration: 36 
          }
        ]
      },
      {
        id: 'secondary-crusher',
        name: 'Secondary Crusher',
        health: 65,
        temperature: 78,
        vibration: 70,
        subComponents: [
          { 
            id: 'secondary-motor', 
            name: 'Motor', 
            health: 70, 
            temperature: 75, 
            vibration: 65,
            ampereLoaded: 78.6,
            ampereUnloaded: 42.3,
            ampereShift: 7.2,
            isMotor: true
          },
          { 
            id: 'secondary-gearbox', 
            name: 'Gearbox', 
            health: 62, 
            temperature: 78, 
            vibration: 72 
          },
          { 
            id: 'twin-rollers', 
            name: 'Drum with Twin Rollers', 
            health: 68, 
            temperature: 76, 
            vibration: 68 
          }
        ]
      },
      {
        id: 'cv02',
        name: 'Conveyor CV02',
        health: 88,
        temperature: 50,
        vibration: 35,
        subComponents: [
          { 
            id: 'cv02-motor', 
            name: 'Motor', 
            health: 90, 
            temperature: 48, 
            vibration: 32,
            ampereLoaded: 35.8,
            ampereUnloaded: 18.9,
            ampereShift: 1.5,
            isMotor: true
          },
          { 
            id: 'cv02-gearbox', 
            name: 'Gearbox', 
            health: 85, 
            temperature: 50, 
            vibration: 38 
          },
          { 
            id: 'cv02-drive-bearing', 
            name: 'Drive Pulley Bearing', 
            health: 88, 
            temperature: 45, 
            vibration: 34 
          },
          { 
            id: 'cv02-tail-bearing', 
            name: 'Tail Pulley Bearing', 
            health: 86, 
            temperature: 46, 
            vibration: 35 
          }
        ]
      },
      {
        id: 'cv03',
        name: 'Conveyor CV03',
        health: 85,
        temperature: 52,
        vibration: 38,
        subComponents: [
          { 
            id: 'cv03-motor', 
            name: 'Motor', 
            health: 88, 
            temperature: 50, 
            vibration: 35,
            ampereLoaded: 36.2,
            ampereUnloaded: 19.1,
            ampereShift: 1.6,
            isMotor: true
          },
          { 
            id: 'cv03-gearbox', 
            name: 'Gearbox', 
            health: 84, 
            temperature: 52, 
            vibration: 40 
          },
          { 
            id: 'cv03-drive-bearing', 
            name: 'Drive Pulley Bearing', 
            health: 86, 
            temperature: 48, 
            vibration: 36 
          },
          { 
            id: 'cv03-bend-bearing', 
            name: 'Bend Pulley Bearing', 
            health: 82, 
            temperature: 51, 
            vibration: 39 
          },
          { 
            id: 'cv03-tripple-car', 
            name: 'Front Pulley Tripple Car Bearing', 
            health: 85, 
            temperature: 49, 
            vibration: 37 
          },
          { 
            id: 'cv03-tail-bearing', 
            name: 'Tail Pulley Bearing', 
            health: 83, 
            temperature: 50, 
            vibration: 38 
          },
          { 
            id: 'cv03-take-up', 
            name: 'Take Up Pulley Bearing', 
            health: 87, 
            temperature: 47, 
            vibration: 35 
          }
        ]
      }
    ]
  };

  const mockMotorProblems = [
    { part: "NDE Bearing", confidenceValue: 85, signal: "High-frequency vibration" },
    { part: "DE Bearing", confidenceValue: 78, signal: "Increased temperature" },
    { part: "Winding", confidenceValue: 92, signal: "Rising current when loaded" },
    { part: "Rotor", confidenceValue: 80, signal: "Unbalanced magnetic pull" },
    { part: "Shaft", confidenceValue: 70, signal: "Excessive axial vibration" },
  ];
  
  const MotorProblemTable = () => {
    const [sortConfig, setSortConfig] = useState({ key: "confidenceValue", direction: "desc" });
    
    const sortedData = [...mockMotorProblems].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  
    const getConfidenceColor = (value) => {
      if (value >= 90) return "text-red-600";
      if (value >= 80) return "text-orange-500";
      if (value >= 70) return "text-yellow-500";
      return "text-green-600";
    };
  
    const handleSort = (key) => {
      setSortConfig((prev) => ({
        key,
        direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
      }));
    };
  
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              {[
                { label: "Part", key: "part" },
                { label: "Confidence Value", key: "confidenceValue" },
                { label: "Signal", key: "signal" },
              ].map(({ label, key }) => (
                <th
                  key={key}
                  className="border px-4 py-2 cursor-pointer hover:bg-gray-300"
                  onClick={() => handleSort(key)}
                >
                  {label} {sortConfig.key === key ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item, index) => (
              <tr key={index} className="border hover:bg-gray-100">
                <td className="border px-4 py-2">{item.part}</td>
                <td className={`border px-4 py-2 font-bold ${getConfidenceColor(item.confidenceValue)}`}>
                  {item.confidenceValue}
                </td>
                <td className="border px-4 py-2">{item.signal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const motorData = [
    { date: "2025-01-01", vibration: 0.8, ampereLoaded: 12, temperature: 38, rpm: 1450, power: 3.2, efficiency: 92, faultConfidence: { bearing: 5, imbalance: 5, overload: 10 } },
    { date: "2025-02-01", vibration: 1.0, ampereLoaded: 12.3, temperature: 38.5, rpm: 1448, power: 3.25, efficiency: 91.8, faultConfidence: { bearing: 10, imbalance: 7, overload: 12 } },
    { date: "2025-03-01", vibration: 1.1, ampereLoaded: 12.5, temperature: 39, rpm: 1446, power: 3.22, efficiency: 91.5, faultConfidence: { bearing: 15, imbalance: 10, overload: 15 } },
    { date: "2025-04-01", vibration: 1.3, ampereLoaded: 12.8, temperature: 39.5, rpm: 1444, power: 3.18, efficiency: 91.2, faultConfidence: { bearing: 20, imbalance: 15, overload: 20 } },
    { date: "2025-05-01", vibration: 1.5, ampereLoaded: 13.0, temperature: 40, rpm: 1442, power: 3.15, efficiency: 91, faultConfidence: { bearing: 30, imbalance: 20, overload: 25 } },
    { date: "2025-06-01", vibration: 1.8, ampereLoaded: 13.5, temperature: 40.8, rpm: 1439, power: 3.12, efficiency: 90.8, faultConfidence: { bearing: 40, imbalance: 30, overload: 30 } },
    { date: "2025-07-01", vibration: 2.0, ampereLoaded: 14.0, temperature: 41.5, rpm: 1436, power: 3.08, efficiency: 90.5, faultConfidence: { bearing: 55, imbalance: 40, overload: 40 } },
    { date: "2025-08-01", vibration: 2.5, ampereLoaded: 14.5, temperature: 42, rpm: 1432, power: 3.05, efficiency: 90, faultConfidence: { bearing: 70, imbalance: 50, overload: 50 } }, // Approaching failure
    { date: "2025-09-01", vibration: 3.2, ampereLoaded: 15.0, temperature: 43, rpm: 1428, power: 3.00, efficiency: 89.5, faultConfidence: { bearing: 85, imbalance: 65, overload: 60 } }, // Critical warning
    { date: "2025-10-01", vibration: 4.0, ampereLoaded: 15.5, temperature: 44, rpm: 1422, power: 2.95, efficiency: 89, faultConfidence: { bearing: 95, imbalance: 80, overload: 75 } }, // Near failure
  ];

  const motorDataList = {
    "hydraulic-motor": [
      { date: "2025-01-01", vibration: 0.5, ampereLoaded: 10, temperature: 36, rpm: 1460, power: 2.8, efficiency: 93, faultConfidence: { bearing: 5, imbalance: 3, overload: 4 } },
      { date: "2025-02-01", vibration: 0.6, ampereLoaded: 10.2, temperature: 36.5, rpm: 1458, power: 2.85, efficiency: 92.8, faultConfidence: { bearing: 7, imbalance: 4, overload: 5 } },
      { date: "2025-03-01", vibration: 0.7, ampereLoaded: 10.4, temperature: 37, rpm: 1456, power: 2.82, efficiency: 92.5, faultConfidence: { bearing: 10, imbalance: 5, overload: 6 } },
      { date: "2025-04-01", vibration: 0.8, ampereLoaded: 10.6, temperature: 37.5, rpm: 1454, power: 2.78, efficiency: 92.2, faultConfidence: { bearing: 15, imbalance: 7, overload: 8 } }
    ],
    "primary-motor": [ // Exponential Deterioration
      { date: "2025-01-01", vibration: 0.8, ampereLoaded: 12, temperature: 38, rpm: 1450, power: 3.2, efficiency: 92, faultConfidence: { bearing: 5, imbalance: 5, overload: 10 } },
      { date: "2025-02-01", vibration: 1.0, ampereLoaded: 12.5, temperature: 39, rpm: 1446, power: 3.15, efficiency: 91.5, faultConfidence: { bearing: 10, imbalance: 10, overload: 15 } },
      { date: "2025-03-01", vibration: 1.5, ampereLoaded: 13.2, temperature: 40.5, rpm: 1440, power: 3.1, efficiency: 90.8, faultConfidence: { bearing: 20, imbalance: 15, overload: 25 } },
      { date: "2025-04-01", vibration: 2.1, ampereLoaded: 14.0, temperature: 42, rpm: 1432, power: 3.05, efficiency: 90, faultConfidence: { bearing: 35, imbalance: 25, overload: 40 } },
      { date: "2025-05-01", vibration: 3.0, ampereLoaded: 15.0, temperature: 44, rpm: 1422, power: 2.95, efficiency: 89, faultConfidence: { bearing: 60, imbalance: 45, overload: 65 } }
    ],
    "cv01-motor": [
      { date: "2025-01-01", vibration: 0.7, ampereLoaded: 11.5, temperature: 37, rpm: 1455, power: 3.0, efficiency: 92.5, faultConfidence: { bearing: 5, imbalance: 5, overload: 6 } },
      { date: "2025-02-01", vibration: 0.8, ampereLoaded: 11.8, temperature: 37.5, rpm: 1453, power: 2.98, efficiency: 92.2, faultConfidence: { bearing: 7, imbalance: 6, overload: 8 } }
    ],
    "secondary-motor": [ // Linear Decline
      { date: "2025-01-01", vibration: 0.6, ampereLoaded: 11, temperature: 36.5, rpm: 1458, power: 2.9, efficiency: 93, faultConfidence: { bearing: 5, imbalance: 4, overload: 5 } },
      { date: "2025-02-01", vibration: 0.7, ampereLoaded: 11.2, temperature: 37, rpm: 1456, power: 2.88, efficiency: 92.8, faultConfidence: { bearing: 7, imbalance: 5, overload: 6 } },
      { date: "2025-03-01", vibration: 0.8, ampereLoaded: 11.5, temperature: 37.5, rpm: 1454, power: 2.85, efficiency: 92.5, faultConfidence: { bearing: 10, imbalance: 7, overload: 8 } },
      { date: "2025-04-01", vibration: 0.9, ampereLoaded: 11.8, temperature: 38, rpm: 1452, power: 2.82, efficiency: 92.2, faultConfidence: { bearing: 12, imbalance: 9, overload: 10 } },
      { date: "2025-05-01", vibration: 1.0, ampereLoaded: 12.0, temperature: 38.5, rpm: 1450, power: 2.8, efficiency: 92, faultConfidence: { bearing: 15, imbalance: 12, overload: 12 } }
    ],
    "cv02-motor": [
      { date: "2025-01-01", vibration: 0.8, ampereLoaded: 11.7, temperature: 37.2, rpm: 1454, power: 2.95, efficiency: 92.5, faultConfidence: { bearing: 7, imbalance: 5, overload: 6 } },
      { date: "2025-02-01", vibration: 0.9, ampereLoaded: 12.0, temperature: 37.6, rpm: 1452, power: 2.92, efficiency: 92.2, faultConfidence: { bearing: 10, imbalance: 7, overload: 8 } }
    ],
    "cv03-motor": [
      { date: "2025-01-01", vibration: 0.6, ampereLoaded: 11.3, temperature: 36.8, rpm: 1457, power: 2.85, efficiency: 93, faultConfidence: { bearing: 6, imbalance: 5, overload: 6 } },
      { date: "2025-02-01", vibration: 0.7, ampereLoaded: 11.5, temperature: 37.2, rpm: 1455, power: 2.82, efficiency: 92.8, faultConfidence: { bearing: 8, imbalance: 6, overload: 7 } }
    ]
  };
  
  
  
  const healthData = [
    { date: "2025-01-01", hopper: 85, chainFeeder: 75, primaryCrusher: 70, conveyorCV01: 90, secondaryCrusher: 65, conveyorCV02: 88, conveyorCV03: 85 },
    { date: "2025-02-01", hopper: 83, chainFeeder: 73, primaryCrusher: 66, conveyorCV01: 88, secondaryCrusher: 63, conveyorCV02: 86, conveyorCV03: 83 },
    { date: "2025-03-01", hopper: 81, chainFeeder: 71, primaryCrusher: 61, conveyorCV01: 86, secondaryCrusher: 61, conveyorCV02: 84, conveyorCV03: 81 },
    { date: "2025-04-01", hopper: 79, chainFeeder: 69, primaryCrusher: 55, conveyorCV01: 84, secondaryCrusher: 59, conveyorCV02: 82, conveyorCV03: 79 },
    { date: "2025-05-01", hopper: 77, chainFeeder: 67, primaryCrusher: 48, conveyorCV01: 82, secondaryCrusher: 57, conveyorCV02: 80, conveyorCV03: 77 },
    { date: "2025-06-01", hopper: 75, chainFeeder: 65, primaryCrusher: 40, conveyorCV01: 80, secondaryCrusher: 55, conveyorCV02: 78, conveyorCV03: 75 },
    { date: "2025-07-01", hopper: 73, chainFeeder: 63, primaryCrusher: 31, conveyorCV01: 78, secondaryCrusher: 53, conveyorCV02: 76, conveyorCV03: 73 },
    { date: "2025-08-01", hopper: 71, chainFeeder: 61, primaryCrusher: 21, conveyorCV01: 76, secondaryCrusher: 51, conveyorCV02: 74, conveyorCV03: 71 },
    { date: "2025-09-01", hopper: 69, chainFeeder: 59, primaryCrusher: 10, conveyorCV01: 74, secondaryCrusher: 49, conveyorCV02: 72, conveyorCV03: 69 },
    { date: "2025-10-01", hopper: 67, chainFeeder: 57, primaryCrusher: 5, conveyorCV01: 72, secondaryCrusher: 47, conveyorCV02: 70, conveyorCV03: 67 }
  ];
  
  

  const problemData = [
    {
      problem: "Overheating in Hydraulic Motor",
      confidenceValue: 92,
      component: "Crusher Chain Feeder",
      subComponent: "Hydraulic Motor",
    },
    {
      problem: "High Vibration in Primary Motor Bearing",
      confidenceValue: 88,
      component: "Primary Crusher",
      subComponent: "Motor",
    },
    {
      problem: "Voltage Fluctuation in CV01 Motor",
      confidenceValue: 85,
      component: "Conveyor CV01",
      subComponent: "Motor",
    },
    {
      problem: "Excessive Noise in Drive Pulley Bearing",
      confidenceValue: 80,
      component: "Conveyor CV01",
      subComponent: "Drive Pulley Bearing",
    },
    {
      problem: "Ampere Overload in Secondary Motor Rotor",
      confidenceValue: 89,
      component: "Secondary Crusher",
      subComponent: "Motor",
    },
    {
      problem: "Lubrication Issue in Tail Pulley Bearing",
      confidenceValue: 76,
      component: "Conveyor CV02",
      subComponent: "Tail Pulley Bearing",
    },
    {
      problem: "Excessive Temperature in Primary Gearbox Shaft",
      confidenceValue: 78,
      component: "Primary Crusher",
      subComponent: "Gearbox",
    },
    {
      problem: "Abnormal Vibration in CV03 Take Up Pulley Bearing",
      confidenceValue: 82,
      component: "Conveyor CV03",
      subComponent: "Take Up Pulley Bearing",
    },
    {
      problem: "High Friction in CV02 Motor Bearing",
      confidenceValue: 84,
      component: "Conveyor CV02",
      subComponent: "Motor",
    },
    {
      problem: "Oil Leakage in Secondary Gearbox",
      confidenceValue: 81,
      component: "Secondary Crusher",
      subComponent: "Gearbox",
    }
  ];

  const fftData = [
    { frequency: "BPFO (Outer Race)", confidence: 85 },
    { frequency: "BPFI (Inner Race)", confidence: 90 },
    { frequency: "BSF (Ball Spin)", confidence: 70 },
    { frequency: "FTF (Cage Frequency)", confidence: 60 },
    { frequency: "Rotor Bar Pass", confidence: 95 },
    { frequency: "Stator Slot Harmonics", confidence: 80 },
    { frequency: "Mechanical Looseness", confidence: 75 },
    { frequency: "Misalignment", confidence: 88 },
    { frequency: "Unbalance", confidence: 92 },
    { frequency: "Eccentricity", confidence: 65 }
  ];
  
  const FFTBarChart = () => {
    return (
      <div className="bg-white p-6 shadow-lg rounded-xl border">
        <h3 className="text-center font-semibold text-lg mb-4 text-gray-700">FFT Analysis - Fault Confidence</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={fftData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="frequency" angle={-45} textAnchor="end" />
            <YAxis label={{ value: "Confidence (%)", angle: -90, position: "insideLeft" }} domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="confidence" fill="#82ca9d" name="Confidence (%)" />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-center text-gray-600 mt-4">Confidence levels for various potential faults based on FFT analysis.</p>
      </div>
    );
  };

  const [sortConfig, setSortConfig] = useState({ key: "confidenceValue", direction: "desc" });

  const getConfidenceColor = (value) => {
    if (value <= 70) return "text-red-600 font-bold"; // 🔴 Critical
    if (value <= 85) return "text-yellow-600 font-bold"; // 🟡 Warning
    return "text-green-600 font-bold"; // 🟢 Safe
  };

  const sortedData = [...problemData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };
  
  
  
  const sensorData = [
    { key: "vibration", color: "#ff7300", label: "Vibration (mm/s)", threshold: 1.5, fault: "Bearing wear or misalignment" },
    { key: "ampereLoaded", color: "#8884d8", label: "Current Load (A)", threshold: 14, fault: "Overload or increased friction" },
    { key: "temperature", color: "#82ca9d", label: "Temperature (°C)", threshold: 40, fault: "Cooling system failure" },
    { key: "rpm", color: "#17a2b8", label: "RPM (Rotations Per Minute)", threshold: 1400, fault: "Mechanical issues or load variation" },
    { key: "power", color: "#d62728", label: "Power Consumption (kW)", threshold: 3.5, fault: "Motor inefficiency or excess load" },
    { key: "efficiency", color: "#2ca02c", label: "Efficiency (%)", threshold: 90, fault: "Possible wear or misalignment" },
  ];

  const getHealthColor = (value: number) => {
    if (value >= 80) return 'text-green-500';
    if (value >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getHealthBg = (value: number) => {
    if (value >= 80) return 'bg-green-100';
    if (value >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const getFaultColor = (value: number) => {
    if (value <= 50) return 'text-green-500';
    if (value <= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getFaultBg = (value: number) => {
    if (value <= 50) return 'bg-green-100';
    if (value <= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const getAmpereShiftStatus = (shift: number) => {
    if (shift <= 2) return { color: 'text-green-500', status: 'Normal' };
    if (shift <= 5) return { color: 'text-yellow-500', status: 'Monitor' };
    return { color: 'text-red-500', status: 'Critical' };
  };

  const StatusCard = ({ title, value, icon: Icon, color = 'text-blue-500' }) => (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <Icon className={`${color} w-6 h-6`} />
      </div>
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
    </div>
  );

  const AlertItem = ({ message, level }) => (
    <div className={`flex items-center gap-2 p-3 rounded-lg ${
      level === 'high' ? 'bg-red-100 text-red-700' : 
      level === 'medium' ? 'bg-yellow-100 text-yellow-700' : 
      'bg-blue-100 text-blue-700'
    }`}>
      <AlertCircle className="w-5 h-5" />
      <span className="text-sm">{message}</span>
    </div>
  );

  const ComponentIcon = ({ type }) => {
    switch (type) {
      case 'Conveyor':
        return <ConveyorBelt className="w-5 h-5" />;
      case 'Crusher':
        return <Cog className="w-5 h-5" />;
      case 'Motor':
        return <Cpu className="w-5 h-5" />;
      case 'Bearing':
        return <Wrench className="w-5 h-5" />;
      default:
        return <Box className="w-5 h-5" />;
    }
  };

  const getColor = (key) => {
    const colors = {
      hopper: "#1f77b4",
      chainFeeder: "#ff7f0e",
      primaryCrusher: "#2ca02c",
      conveyorCV01: "#d62728",
      secondaryCrusher: "#9467bd",
      conveyorCV02: "#8c564b",
      conveyorCV03: "#e377c2",
    };
    return colors[key] || "#000000";
  };

  const SubComponentCard = ({ subComponent, parentBg }) => {
    const isExpanded = expandedSubComponents.includes(subComponent.id);
    const motorData = motorDataList[subComponent.id];
    const toggleExpand = () => {
      setExpandedSubComponents(prev => 
        isExpanded 
          ? prev.filter(id => id !== subComponent.id)
          : [...prev, subComponent.id]
      );
    };

    const getIcon = (name) => {
      if (name.includes('Motor')) return 'Motor';
      if (name.includes('Bearing')) return 'Bearing';
      if (name.includes('Gearbox')) return 'Crusher';
      return 'Default';
    };

    const ampereShiftStatus = subComponent.isMotor ? getAmpereShiftStatus(subComponent.ampereShift) : null;

    return (
      <div className={`rounded-lg p-3 mb-2 ${parentBg} border border-gray-200`}>
        <div className="flex items-center justify-between cursor-pointer" onClick={toggleExpand}>
          <div className="flex items-center gap-2">
            <ComponentIcon type={getIcon(subComponent.name)} />
            <span className="text-sm font-medium">{subComponent.name}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Gauge className={`w-4 h-4 ${getHealthColor(subComponent.health)}`} />
              <span className={`text-sm font-semibold ${getHealthColor(subComponent.health)}`}>
                {subComponent.health}%
              </span>
            </div>
            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </div>
        </div>
        
        {isExpanded && (
          <div className="mt-3 space-y-3 pl-7">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <Thermometer className="w-3 h-3 text-blue-500" />
                <span className="text-xs">Temp: {subComponent.temperature}°C</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-3 h-3 text-purple-500" />
                <span className="text-xs">Vibration: {subComponent.vibration}%</span>
              </div>
            </div>
            {subComponent.isMotor && (
              <div className="space-y-2 pt-1 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <Zap className="w-3 h-3 text-amber-500" />
                  <span className="text-xs font-medium">Ampere Measurements</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>Loaded: {subComponent.ampereLoaded}A</div>
                  <div>Unloaded: {subComponent.ampereUnloaded}A</div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs">Shift:</span>
                  <span className={`text-xs font-medium ${ampereShiftStatus.color}`}>
                    {subComponent.ampereShift}A ({ampereShiftStatus.status})
                  </span>
                </div>
                <Dialog>
  <DialogTrigger className="px-4 py-2 bg-blue-600 text-white rounded-lg">Open Motor Data</DialogTrigger>
  <DialogContent className="w-[90vw] max-w-7xl max-h-[100vh] bg-gray-100 p-6 rounded-lg overflow-y-auto">
    <DialogHeader>
      <DialogTitle className="text-xl font-bold text-gray-800">Motor Health Dashboard</DialogTitle>
    </DialogHeader>

    {/* Grid Layout for Fault Confidence & Frequency Spectrum */}
    <div className="grid grid-cols-2 gap-6 mb-6">
      {/* Fault Confidence Summary Graph */}
      {/* <div className="bg-white p-6 shadow-lg rounded-xl border">
        <h3 className="text-center font-semibold text-lg mb-4 text-gray-700">Fault Confidence (%)</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={motorData} margin={{ top: 20, right: 30, left: 40, bottom: 50 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={{ dy: 10 }} label={{ value: "Date", position: "bottom", dy: 20 }} />
            <YAxis label={{ value: "Confidence (%)", angle: -90, position: "insideLeft", dy: -10 }} />
            <Tooltip />
            <Legend verticalAlign="top" wrapperStyle={{ paddingBottom: 10 }} />
            <Bar dataKey="faultConfidence.bearing" fill="#d62728" name="Bearing Wear" />
            <Bar dataKey="faultConfidence.imbalance" fill="#ff7300" name="Imbalance" />
            <Bar dataKey="faultConfidence.overload" fill="#82ca9d" name="Overload" />
          </BarChart>
        </ResponsiveContainer>
      </div> */}
      <div className="bg-white p-6 shadow-lg rounded-xl border">
        <h3 className="text-center font-semibold text-lg mb-4 text-gray-700">Fault Confidence (%)</h3>
      <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={motorData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="faultConfidence.bearing" stroke="#82ca9d" strokeWidth={2} />
                    <Line type="monotone" dataKey="faultConfidence.imbalance" stroke="#ff7300" strokeWidth={2} />
                    <Line type="monotone" dataKey="faultConfidence.overload" stroke="#d62728" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
      </div>
      <div className="space-y-6">
      <StatusCard 
            title="Fault Confidence (Today)"
            value={`${12}%`}
            icon={Gauge}
            color={getFaultColor(12)}
          />
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Next Maintenance</h2>
                <Calendar className="w-6 h-6 text-blue-500" />
              </div>
              <p className="text-2xl font-bold text-blue-500 mb-2">{nextMaintenance}</p>
              <p className="text-sm text-gray-600">Scheduled maintenance date</p>
            </div>
          <StatusCard 
            title="Fault Confidence (Next 7 days)"
            value={`${13}%`}
            icon={Gauge}
            color={getFaultColor(13)}
          />
      </div>

      <MotorProblemTable/>
      {/* Vibration Frequency Spectrum */}
      <div className="bg-white p-6 shadow-lg rounded-xl border">
        <h3 className="text-center font-semibold text-lg mb-4 text-gray-700">Vibration Frequency Spectrum</h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart
            data={[
              { frequency: 10, amplitude: 0.15 },
              { frequency: 20, amplitude: 0.3 },
              { frequency: 30, amplitude: 0.5 },
              { frequency: 40, amplitude: 0.8 },
              { frequency: 50, amplitude: 1.6 }, // Possible misalignment
              { frequency: 60, amplitude: 1.4 },
              { frequency: 70, amplitude: 2.0 },
              { frequency: 80, amplitude: 1.7 },
              { frequency: 90, amplitude: 1.1 },
              { frequency: 100, amplitude: 2.2 }, // Possible bearing fault
              { frequency: 110, amplitude: 1.0 },
              { frequency: 120, amplitude: 0.5 },
            ]}
            margin={{ top: 30, right: 30, left: 40, bottom: 50 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="frequency"
              label={{ value: "Frequency (Hz)", position: "bottom", dy: 20 }}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              label={{ value: "Amplitude", angle: -90, position: "insideLeft", dy: -10 }}
              tick={{ fontSize: 12 }}
            />
            <Tooltip />
            {/* <Legend verticalAlign="top" wrapperStyle={{ paddingBottom: 10 }} /> */}
            <Line type="monotone" dataKey="amplitude" stroke="#ff7300" strokeWidth={2} dot={{ r: 4 }} />
            <ReferenceLine
              x={50}
              stroke="red"
              strokeDasharray="5 5"
              label={{ value: "Misalignment", position: "top", dy: -10, fill: "red", fontSize: 12 }}
            />
            <ReferenceLine
              x={100}
              stroke="blue"
              strokeDasharray="5 5"
              label={{ value: "Bearing Fault", position: "top", dy: -10, fill: "blue", fontSize: 12 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>

    {/* Individual Sensor Graphs (2x2 Grid) */}
    <div className="grid grid-cols-2 gap-6">
    <div className="bg-white p-6 shadow-lg rounded-xl border">
  <h3 className="text-center font-semibold text-lg mb-4 text-gray-700">Vibration (mm/s)</h3>
  <ResponsiveContainer width="100%" height={350}>
    <LineChart data={motorData} margin={{ top: 60, right: 80, left: 40, bottom: 50 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" tick={{ dy: 10 }} label={{ value: "Date", position: "bottom", dy: 20 }} />
      <YAxis label={{ value: "Vibration (mm/s)", angle: -90, position: "insideLeft", dy: 0 }} />
      <Tooltip />
      <Legend verticalAlign="top" wrapperStyle={{ paddingBottom: 10 }} />
      <Line type="monotone" dataKey="vibration" stroke="#ff7300" strokeWidth={2} dot={{ r: 4 }} />
      <ReferenceLine y={1.5} stroke="red" strokeDasharray="5 5" label={{ value: "Threshold", position: "right", fill: "red" }} />
    </LineChart>
  </ResponsiveContainer>
  {motorData.some((d) => d.vibration > 1.5) && (
    <p className="text-red-600 text-center mt-3 font-semibold">⚠️ Bearing wear or misalignment</p>
  )}
</div>
<div className="space-y-6">
      <StatusCard 
            title="Vibration (Today)"
            value={`${1} ml/sec`}
            icon={Gauge}
            color={getFaultColor(1)}
          />
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Recommend Next Greasing</h2>
                <Calendar className="w-6 h-6 text-blue-500" />
              </div>
              <p className="text-2xl font-bold text-blue-500 mb-2">{"2025-03-15"}</p>
              <p className="text-sm text-gray-600">Scheduled maintenance date</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Next Maintainance</h2>
                <Calendar className="w-6 h-6 text-blue-500" />
              </div>
              <p className="text-2xl font-bold text-blue-500 mb-2">{"2025-04-15"}</p>
              <p className="text-sm text-gray-600">Scheduled maintenance date</p>
            </div>
          <StatusCard 
            title="Base Line Vibration"
            value={`${0.8} ml/sec`}
            icon={Gauge}
            color={getFaultColor(0.8)}
          />
      </div>

<div className="bg-white p-6 shadow-lg rounded-xl border">
  <h3 className="text-center font-semibold text-lg mb-4 text-gray-700">Current Load (A)</h3>
  <ResponsiveContainer width="100%" height={350}>
    <LineChart data={motorData} margin={{ top: 60, right: 80, left: 40, bottom: 50 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" tick={{ dy: 10 }} label={{ value: "Date", position: "bottom", dy: 20 }} />
      <YAxis label={{ value: "Current Load (A)", angle: -90, position: "insideLeft", dy: 0 }} />
      <Tooltip />
      <Legend verticalAlign="top" wrapperStyle={{ paddingBottom: 10 }} />
      <Line type="monotone" dataKey="ampereLoaded" stroke="#8884d8" strokeWidth={2} dot={{ r: 4 }} />
      <ReferenceLine y={14} stroke="red" strokeDasharray="5 5" label={{ value: "Threshold", position: "right", fill: "red" }} />
    </LineChart>
  </ResponsiveContainer>
  {motorData.some((d) => d.ampereLoaded > 14) && (
    <p className="text-red-600 text-center mt-3 font-semibold">⚠️ Overload or increased friction</p>
  )}
</div>

<div className="space-y-6">
      <StatusCard 
            title="Loaded Current (Today)"
            value={`${12.3} Ampere`}
            icon={Zap}
            color={getFaultColor(1)}
          />
      <StatusCard 
            title="Max Loaded Current from Name Plate"
            value={`${18} Ampere`}
            icon={Zap}
            color={'text-red-500'}
          />
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Next Maintainance</h2>
                <Calendar className="w-6 h-6 text-blue-500" />
              </div>
              <p className="text-2xl font-bold text-blue-500 mb-2">{"2025-04-15"}</p>
              <p className="text-sm text-gray-600">Scheduled maintenance date</p>
            </div>
      </div>

<div className="bg-white p-6 shadow-lg rounded-xl border">
  <h3 className="text-center font-semibold text-lg mb-4 text-gray-700">Temperature (°C)</h3>
  <ResponsiveContainer width="100%" height={350}>
    <LineChart data={motorData} margin={{ top: 60, right: 80, left: 40, bottom: 50 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" tick={{ dy: 10 }} label={{ value: "Date", position: "bottom", dy: 20 }} />
      <YAxis label={{ value: "Temperature (°C)", angle: -90, position: "insideLeft", dy: 0 }} />
      <Tooltip />
      <Legend verticalAlign="top" wrapperStyle={{ paddingBottom: 10 }} />
      <Line type="monotone" dataKey="temperature" stroke="#82ca9d" strokeWidth={2} dot={{ r: 4 }} />
      <ReferenceLine y={40} stroke="red" strokeDasharray="5 5" label={{ value: "Threshold", position: "right", fill: "red" }} />
    </LineChart>
  </ResponsiveContainer>
  {motorData.some((d) => d.temperature > 40) && (
    <p className="text-red-600 text-center mt-3 font-semibold">⚠️ Cooling system failure</p>
  )}
</div>

<FFTBarChart/>


    </div>
  </DialogContent>
</Dialog>
              </div>
              
            )}
          </div>
        )}
      </div>
    );
  };

  const ComponentCard = ({ component }) => {
    const isExpanded = expandedComponents.includes(component.id);
    const toggleExpand = () => {
      setExpandedComponents(prev => 
        isExpanded 
          ? prev.filter(id => id !== component.id)
          : [...prev, component.id]
      );
    };

    const getIcon = (name) => {
      if (name.includes('Conveyor')) return 'Conveyor';
      if (name.includes('Crusher')) return 'Crusher';
      return 'Default';
    };

    const bgColor = getHealthBg(component.health);
    

    return (
      <div className={`bg-white rounded-lg shadow-sm p-4 mb-2`}>
        <div className="flex items-center justify-between cursor-pointer" onClick={toggleExpand}>
          <div className="flex items-center gap-3">
            <ComponentIcon type={getIcon(component.name)} />
            <span className="font-medium">{component.name}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Gauge className={`w-4 h-4 ${getHealthColor(component.health)}`} />
              <span className={`font-semibold ${getHealthColor(component.health)}`}>
                {component.health}%
              </span>
            </div>
            {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </div>
        </div>
        
        {isExpanded && (
          <div className="mt-4 space-y-2">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Thermometer className="w-4 h-4 text-blue-500" />
                <span className="text-sm">Temperature: {component.temperature}°C</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-purple-500" />
                <span className="text-sm">Vibration: {component.vibration}%</span>
              </div>
            </div>
            {component.subComponents.length > 0 && (
              <div className="pl-4 space-y-1">
                {component.subComponents.map((sub) => (
                  <SubComponentCard key={sub.id} subComponent={sub} parentBg={bgColor} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-10xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Coal Crusher Maintenance Dashboard</h1>
          <Settings className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatusCard 
            title="Overall Health (Today)"
            value={`${health}%`}
            icon={Gauge}
            color={getHealthColor(health)}
          />
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Next Maintenance</h2>
                <Calendar className="w-6 h-6 text-blue-500" />
              </div>
              <p className="text-2xl font-bold text-blue-500 mb-2">{nextMaintenance}</p>
              <p className="text-sm text-gray-600">Scheduled maintenance date</p>
            </div>
          <StatusCard 
            title="Overall Health (Next 7 days)"
            value={`${61}%`}
            icon={Gauge}
            color={getHealthColor(61)}
          />
          <StatusCard 
            title="Overall Health (Next month)"
            value={`${59}%`}
            icon={Gauge}
            color={getHealthColor(59)}
          />
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
          <div key='overall-health' className="gap-6 bg-white p-6 shadow-lg rounded-xl border">
          <h3 className="text-center font-semibold text-lg mb-4 text-gray-700">Overall Health</h3>
          <ResponsiveContainer width="100%" height={500}>
            <LineChart data={healthData} margin={{ top: 20, right: 30, left: 40, bottom: 50 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tick={{ dy: 10 }} label={{ value: "Date", position: "bottom", dy: 20 }} />
              <YAxis domain={[60, 100]} />
              <Tooltip />
              <Legend verticalAlign="top" wrapperStyle={{ paddingBottom: 10 }} />
            {Object.keys(healthData[0]).filter((key) => key !== "date").map((key) => (
              <Line key={key} type="monotone" dataKey={key} strokeWidth={2} stroke={getColor(key)} />
            ))}
            </LineChart>
          </ResponsiveContainer>
          <div className="overflow-x-auto mb-4">
          <table className="min-w-full border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          <tr>
            {[["problem","Problem"], ["confidenceValue","Confidence Value"], ["component","Component"], ["subComponent","Sub Component"]].map((col, index) => (
              <th
                key={index}
                className="border px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSort(col[0])}
              >
                {col[1]} {sortConfig.key === col[0] ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((data, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{data.problem}</td>
              <td className={`border px-4 py-2 ${getConfidenceColor(data.confidenceValue)}`}>
                {data.confidenceValue}%
              </td>
              <td className="border px-4 py-2">{data.component}</td>
              <td className="border px-4 py-2">{data.subComponent}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
        </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Component Health Status</h2>
                <Box className="w-6 h-6 text-gray-600" />
              </div>
              <div className="space-y-2">
                {crusherComponents.components.map((component) => (
                  <ComponentCard key={component.id} component={component} />
                ))}
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default App;