"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Globe, Zap, Leaf, Server, TrendingDown, TrendingUp } from "lucide-react"

const regions = [
  {
    name: "US East (Virginia)",
    code: "us-east-1",
    provider: "AWS",
    carbonIntensity: 420,
    level: "high",
    deployments: 8,
    emissions: 1247.3,
    renewable: 35,
    trend: "up",
    coordinates: { x: 25, y: 35 },
  },
  {
    name: "US West (Oregon)",
    code: "us-west-2",
    provider: "AWS",
    carbonIntensity: 180,
    level: "low",
    deployments: 5,
    emissions: 432.1,
    renewable: 85,
    trend: "down",
    coordinates: { x: 15, y: 40 },
  },
  {
    name: "EU West (Ireland)",
    code: "eu-west-1",
    provider: "AWS",
    carbonIntensity: 280,
    level: "medium",
    deployments: 6,
    emissions: 678.9,
    renewable: 65,
    trend: "down",
    coordinates: { x: 50, y: 25 },
  },
  {
    name: "EU North (Sweden)",
    code: "eu-north-1",
    provider: "AWS",
    carbonIntensity: 95,
    level: "low",
    deployments: 4,
    emissions: 234.7,
    renewable: 95,
    trend: "down",
    coordinates: { x: 55, y: 15 },
  },
  {
    name: "Asia Pacific (Singapore)",
    code: "ap-southeast-1",
    provider: "AWS",
    carbonIntensity: 350,
    level: "medium-high",
    deployments: 7,
    emissions: 892.4,
    renewable: 45,
    trend: "up",
    coordinates: { x: 75, y: 65 },
  },
  {
    name: "Asia Pacific (Tokyo)",
    code: "ap-northeast-1",
    provider: "AWS",
    carbonIntensity: 320,
    level: "medium",
    deployments: 3,
    emissions: 456.2,
    renewable: 55,
    trend: "down",
    coordinates: { x: 85, y: 45 },
  },
]

export function RegionMap() {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "low":
        return "bg-green-500"
      case "medium":
        return "bg-yellow-500"
      case "medium-high":
        return "bg-orange-500"
      case "high":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case "low":
        return "bg-green-100 text-green-800 border-green-300"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-300"
      case "medium-high":
        return "bg-orange-100 text-orange-800 border-orange-300"
      case "high":
        return "bg-red-100 text-red-800 border-red-300"
      default:
        return "bg-gray-100 text-gray-800 border-gray-300"
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Regional Carbon Intensity Map
          </CardTitle>
          <CardDescription>Real-time carbon intensity and deployment distribution across regions</CardDescription>
        </CardHeader>
        <CardContent>
          {/* World Map Visualization */}
          <div className="relative bg-gradient-to-b from-blue-100 to-green-100 rounded-lg p-8 mb-6 h-[400px] overflow-hidden">
            <svg viewBox="0 0 100 80" className="w-full h-full">
              {/* Simplified world map outline */}
              <path
                d="M10,20 L30,15 L45,25 L60,20 L80,25 L90,30 L85,50 L70,55 L50,60 L30,55 L15,45 Z"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="0.5"
                opacity="0.3"
              />

              {/* Region markers */}
              {regions.map((region, index) => (
                <g key={region.code}>
                  <circle
                    cx={region.coordinates.x}
                    cy={region.coordinates.y}
                    r="3"
                    className={`${getLevelColor(region.level)} opacity-80`}
                  />
                  <circle
                    cx={region.coordinates.x}
                    cy={region.coordinates.y}
                    r="6"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                    opacity="0.8"
                  />
                  <text
                    x={region.coordinates.x}
                    y={region.coordinates.y - 8}
                    textAnchor="middle"
                    className="text-xs font-medium fill-gray-700"
                  >
                    {region.deployments}
                  </text>
                </g>
              ))}
            </svg>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-sm border">
              <h4 className="text-sm font-medium mb-2">Carbon Intensity</h4>
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span>Low</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span>Medium</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span>High</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Regional Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {regions.map((region) => (
          <Card key={region.code} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{region.name}</CardTitle>
                <Badge className={getLevelBadgeColor(region.level)}>{region.level}</Badge>
              </div>
              <CardDescription>
                {region.code} • {region.provider}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="flex items-center gap-1 text-gray-600 mb-1">
                    <Zap className="w-3 h-3" />
                    Carbon Intensity
                  </div>
                  <div className="font-semibold">{region.carbonIntensity} g CO₂/kWh</div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-gray-600 mb-1">
                    <Server className="w-3 h-3" />
                    Deployments
                  </div>
                  <div className="font-semibold">{region.deployments} active</div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600">Renewable Energy</span>
                  <span className="font-medium">{region.renewable}%</span>
                </div>
                <Progress value={region.renewable} className="h-2" />
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <div className="flex items-center gap-1 text-sm">
                  <Leaf className="w-4 h-4 text-green-600" />
                  <span>{(region.emissions / 1000).toFixed(1)} kg CO₂</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  {region.trend === "up" ? (
                    <TrendingUp className="w-4 h-4 text-red-500" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-green-500" />
                  )}
                  <span className={region.trend === "up" ? "text-red-600" : "text-green-600"}>
                    {region.trend === "up" ? "↑" : "↓"} Trend
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
