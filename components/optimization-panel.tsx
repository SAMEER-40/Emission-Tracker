"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Lightbulb, Clock, TrendingDown, Calendar, Settings, Target, CheckCircle, Leaf } from "lucide-react"

const optimizationSuggestions = [
  {
    id: 1,
    title: "Schedule deployment to low-carbon region",
    description: "Deploy to EU-North (Sweden) during peak renewable hours",
    impact: "40% emission reduction",
    effort: "low",
    savings: 156.7,
    timeframe: "Next 2 hours",
    status: "recommended",
  },
  {
    id: 2,
    title: "Optimize container resource allocation",
    description: "Right-size CPU and memory for payment-processor service",
    impact: "25% emission reduction",
    effort: "medium",
    savings: 89.3,
    timeframe: "Next deployment",
    status: "in-progress",
  },
  {
    id: 3,
    title: "Enable auto-scaling optimization",
    description: "Implement predictive scaling based on usage patterns",
    impact: "35% emission reduction",
    effort: "high",
    savings: 234.1,
    timeframe: "This week",
    status: "planned",
  },
  {
    id: 4,
    title: "Migrate to ARM-based instances",
    description: "Switch to Graviton processors for better energy efficiency",
    impact: "20% emission reduction",
    effort: "medium",
    savings: 67.8,
    timeframe: "Next month",
    status: "recommended",
  },
]

const scheduledOptimizations = [
  {
    id: 1,
    name: "api-gateway-v2.1.1",
    scheduledTime: "Today, 14:30 UTC",
    region: "eu-north-1",
    expectedSavings: 45.2,
    status: "scheduled",
  },
  {
    id: 2,
    name: "user-service-v1.8.4",
    scheduledTime: "Tomorrow, 02:00 UTC",
    region: "us-west-2",
    expectedSavings: 32.1,
    status: "scheduled",
  },
]

export function OptimizationPanel() {
  const [selectedSuggestion, setSelectedSuggestion] = useState<number | null>(null)

  const getEffortColor = (effort: string) => {
    switch (effort) {
      case "low":
        return "bg-green-100 text-green-800 border-green-300"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-300"
      case "high":
        return "bg-red-100 text-red-800 border-red-300"
      default:
        return "bg-gray-100 text-gray-800 border-gray-300"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "recommended":
        return "bg-blue-100 text-blue-800 border-blue-300"
      case "in-progress":
        return "bg-orange-100 text-orange-800 border-orange-300"
      case "planned":
        return "bg-purple-100 text-purple-800 border-purple-300"
      case "scheduled":
        return "bg-green-100 text-green-800 border-green-300"
      default:
        return "bg-gray-100 text-gray-800 border-gray-300"
    }
  }

  return (
    <div className="space-y-6">
      {/* Optimization Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Potential Savings</CardTitle>
            <Leaf className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-700">547.9 g CO₂</div>
            <p className="text-xs text-gray-600">From active recommendations</p>
          </CardContent>
        </Card>

        <Card className="border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Optimizations</CardTitle>
            <Settings className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-700">3</div>
            <p className="text-xs text-gray-600">Currently being implemented</p>
          </CardContent>
        </Card>

        <Card className="border-purple-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <Target className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-700">87%</div>
            <p className="text-xs text-gray-600">Optimization success rate</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="suggestions" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="suggestions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Optimization Recommendations
              </CardTitle>
              <CardDescription>AI-powered suggestions to reduce your deployment carbon footprint</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {optimizationSuggestions.map((suggestion) => (
                  <div
                    key={suggestion.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      selectedSuggestion === suggestion.id
                        ? "border-blue-300 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedSuggestion(selectedSuggestion === suggestion.id ? null : suggestion.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{suggestion.title}</h3>
                        <p className="text-gray-600 mb-3">{suggestion.description}</p>

                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <Badge className={getStatusColor(suggestion.status)}>{suggestion.status}</Badge>
                          <Badge className={getEffortColor(suggestion.effort)}>{suggestion.effort} effort</Badge>
                          <div className="flex items-center gap-1 text-sm text-green-600">
                            <TrendingDown className="w-3 h-3" />
                            {suggestion.impact}
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {suggestion.timeframe}
                          </div>
                          <div className="flex items-center gap-1">
                            <Leaf className="w-3 h-3" />
                            {suggestion.savings.toFixed(1)} g CO₂ savings
                          </div>
                        </div>
                      </div>

                      <div className="ml-4 flex flex-col gap-2">
                        <Button size="sm" variant="outline">
                          Apply
                        </Button>
                        {suggestion.status === "recommended" && (
                          <Button size="sm" variant="ghost">
                            <Calendar className="w-3 h-3 mr-1" />
                            Schedule
                          </Button>
                        )}
                      </div>
                    </div>

                    {selectedSuggestion === suggestion.id && (
                      <div className="mt-4 pt-4 border-t border-blue-200">
                        <h4 className="font-medium mb-2">Implementation Details</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium">Expected Impact:</span>
                            <p className="text-gray-600">
                              Reduce emissions by {suggestion.savings.toFixed(1)} g CO₂ per deployment
                            </p>
                          </div>
                          <div>
                            <span className="font-medium">Implementation Time:</span>
                            <p className="text-gray-600">{suggestion.timeframe}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Scheduled Optimizations
              </CardTitle>
              <CardDescription>Upcoming optimized deployments and their expected impact</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduledOptimizations.map((optimization) => (
                  <div key={optimization.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">{optimization.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">Scheduled for {optimization.scheduledTime}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span>Region: {optimization.region}</span>
                        <div className="flex items-center gap-1 text-green-600">
                          <Leaf className="w-3 h-3" />
                          {optimization.expectedSavings.toFixed(1)} g CO₂ savings
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(optimization.status)}>
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {optimization.status}
                      </Badge>
                      <Button size="sm" variant="outline">
                        Modify
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Optimization Success Rate</CardTitle>
                <CardDescription>Performance of implemented optimizations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Successful Optimizations</span>
                      <span>87%</span>
                    </div>
                    <Progress value={87} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Average Emission Reduction</span>
                      <span>42%</span>
                    </div>
                    <Progress value={42} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Implementation Rate</span>
                      <span>73%</span>
                    </div>
                    <Progress value={73} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monthly Impact</CardTitle>
                <CardDescription>Carbon savings from optimizations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">7.2 kg</div>
                    <p className="text-sm text-gray-600">CO₂ saved this month</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="font-semibold text-green-700">156</div>
                      <div className="text-gray-600">Optimizations Applied</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="font-semibold text-blue-700">23</div>
                      <div className="text-gray-600">Deployments Optimized</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
