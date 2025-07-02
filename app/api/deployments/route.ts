import { NextResponse } from "next/server"

const mockDeployments = [
  {
    id: "dep-001",
    name: "api-gateway-v2.1.0",
    status: "running",
    region: "us-east-1",
    emissions: 45.2,
    duration: "2h 15m",
    carbonIntensity: "high",
    provider: "AWS",
    optimization: 35,
    startTime: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    estimatedCompletion: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
  },
  {
    id: "dep-002",
    name: "user-service-v1.8.3",
    status: "completed",
    region: "eu-north-1",
    emissions: 12.8,
    duration: "45m",
    carbonIntensity: "low",
    provider: "Azure",
    optimization: 65,
    startTime: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    completedTime: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
]

export async function GET() {
  return NextResponse.json({
    deployments: mockDeployments,
    total: mockDeployments.length,
    active: mockDeployments.filter((d) => d.status === "running").length,
  })
}

export async function POST(request: Request) {
  const body = await request.json()

  const newDeployment = {
    id: `dep-${Date.now()}`,
    name: body.name,
    status: "pending",
    region: body.region,
    emissions: 0,
    duration: "0m",
    carbonIntensity: getCarbonIntensityLevel(body.region),
    provider: body.provider || "AWS",
    optimization: 0,
    startTime: new Date().toISOString(),
  }

  return NextResponse.json(newDeployment)
}

function getCarbonIntensityLevel(region: string) {
  const levels: { [key: string]: string } = {
    "us-east-1": "high",
    "us-west-2": "low",
    "eu-west-1": "medium",
    "eu-north-1": "low",
    "ap-southeast-1": "medium-high",
    "ap-northeast-1": "medium",
  }

  return levels[region] || "medium"
}
