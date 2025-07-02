"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Clock, AlertCircle, Server, Leaf, Zap, Search, Filter } from "lucide-react"

const deployments = [
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
  },
  {
    id: "dep-003",
    name: "payment-processor-v3.0.1",
    status: "running",
    region: "ap-southeast-1",
    emissions: 67.4,
    duration: "1h 32m",
    carbonIntensity: "medium",
    provider: "GCP",
    optimization: 28,
  },
  {
    id: "dep-004",
    name: "notification-service-v2.4.0",
    status: "pending",
    region: "eu-west-1",
    emissions: 0,
    duration: "0m",
    carbonIntensity: "medium",
    provider: "AWS",
    optimization: 0,
  },
  {
    id: "dep-005",
    name: "analytics-engine-v1.2.1",
    status: "failed",
    region: "us-west-2",
    emissions: 23.1,
    duration: "18m",
    carbonIntensity: "high",
    provider: "Azure",
    optimization: 42,
  },
]

export function DeploymentList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "running":
        return <Clock className="w-4 h-4 text-blue-500" />
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "failed":
        return <AlertCircle className="w-4 h-4 text-red-500" />
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-500" />
      default:
        return <Server className="w-4 h-4 text-gray-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      running: "default",
      completed: "secondary",
      failed: "destructive",
      pending: "outline",
    } as const

    return (
      <Badge variant={variants[status as keyof typeof variants] || "outline"}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    )
  }

  const getCarbonIntensityColor = (intensity: string) => {
    switch (intensity) {
      case "low":
        return "text-green-600 bg-green-100"
      case "medium":
        return "text-yellow-600 bg-yellow-100"
      case "high":
        return "text-red-600 bg-red-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const filteredDeployments = deployments.filter((deployment) => {
    const matchesSearch = deployment.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || deployment.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-4">
      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Server className="w-5 h-5" />
            Deployment Tracking
          </CardTitle>
          <CardDescription>Monitor emissions and performance across all deployments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search deployments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="running">Running</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Deployment Cards */}
      <div className="grid gap-4">
        {filteredDeployments.map((deployment) => (
          <Card key={deployment.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  {getStatusIcon(deployment.status)}
                  <div>
                    <h3 className="font-semibold text-lg">{deployment.name}</h3>
                    <p className="text-sm text-gray-600">ID: {deployment.id}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  {getStatusBadge(deployment.status)}

                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium">{deployment.emissions.toFixed(1)} g CO₂</span>
                  </div>

                  <Badge variant="outline" className={getCarbonIntensityColor(deployment.carbonIntensity)}>
                    {deployment.carbonIntensity} carbon
                  </Badge>

                  <div className="text-sm text-gray-600">
                    {deployment.region} • {deployment.provider}
                  </div>

                  <div className="text-sm text-gray-600">Duration: {deployment.duration}</div>

                  {deployment.optimization > 0 && (
                    <div className="flex items-center gap-1 text-sm text-green-600">
                      <Zap className="w-3 h-3" />
                      {deployment.optimization}% optimized
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredDeployments.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <Server className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No deployments found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
