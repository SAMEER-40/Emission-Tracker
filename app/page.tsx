"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Leaf,
  Target,
  TrendingDown,
  AlertTriangle,
  Award,
  TreePine,
  Car,
  Zap,
  Globe2,
  Users,
  Calendar,
  DollarSign,
  Info,
} from "lucide-react"
import { ImpactChart } from "@/components/impact-chart"
import { CarbonGoals } from "@/components/carbon-goals"
import { SustainabilityDashboard } from "@/components/sustainability-dashboard"
import { ImpactMetrics } from "@/components/impact-metrics"
import { TeamLeaderboard } from "@/components/team-leaderboard"
import { CarbonOffsetMarketplace } from "@/components/carbon-offset-marketplace"
import { StatisticalInsights } from "@/components/statistical-insights"
import { PlatformPreview } from "@/components/platform-preview"

export default function Dashboard() {
  const [realTimeEmissions, setRealTimeEmissions] = useState(89.3)
  const [carbonSaved, setCarbonSaved] = useState(2847.6)
  const [treesEquivalent, setTreesEquivalent] = useState(127)
  const [carbonBudgetUsed, setCarbonBudgetUsed] = useState(67)
  const [sustainabilityScore, setSustainabilityScore] = useState(8.4)
  const [showPreview, setShowPreview] = useState(false)

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeEmissions((prev) => Math.max(50, prev + (Math.random() - 0.6) * 15))
      setCarbonSaved((prev) => prev + Math.random() * 2)
      setTreesEquivalent(Math.floor(carbonSaved / 22.4)) // 1 tree absorbs ~22.4kg CO2/year
    }, 3000)
    return () => clearInterval(interval)
  }, [carbonSaved])

  const isHighEmission = realTimeEmissions > 150
  const budgetAlert = carbonBudgetUsed > 80

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header with Impact Focus */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
              <div className="p-2 bg-green-600 rounded-xl">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              EcoImpact DevOps
            </h1>
            <p className="text-lg text-gray-700 mt-2 font-medium">
              Transforming software deployments into climate action
            </p>
            <p className="text-sm text-gray-600">
              Join 2,847 developers reducing their carbon footprint by 60% on average
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              onClick={() => setShowPreview(!showPreview)}
              variant="outline"
              className="border-blue-300 text-blue-700 bg-blue-50 hover:bg-blue-100"
            >
              <Info className="w-4 h-4 mr-2" />
              {showPreview ? "Hide" : "How It Works"}
            </Button>
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300 px-3 py-1">
              <Award className="w-4 h-4 mr-1" />
              Climate Leader
            </Badge>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-700">{sustainabilityScore}/10</div>
              <div className="text-xs text-gray-600">Sustainability Score</div>
            </div>
          </div>
        </div>

        {/* Platform Preview Section - Prominently Displayed */}
        {showPreview && (
          <div className="animate-in slide-in-from-top duration-500">
            <PlatformPreview />
          </div>
        )}

        {/* Critical Alerts */}
        {(isHighEmission || budgetAlert) && (
          <Alert className="border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              {isHighEmission && "⚠️ High emission deployment detected! "}
              {budgetAlert && "🚨 Carbon budget 80% exceeded! "}
              <Button size="sm" className="ml-2 bg-red-600 hover:bg-red-700">
                Take Action
              </Button>
            </AlertDescription>
          </Alert>
        )}

        {/* Impact Metrics - Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">CO₂ Saved This Month</CardTitle>
              <Leaf className="h-5 w-5 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-700">{(carbonSaved / 1000).toFixed(1)} kg</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingDown className="w-3 h-3 mr-1" />
                Equivalent to {treesEquivalent} trees planted
              </p>
              <div className="mt-2 text-xs text-gray-600">
                🌍 Preventing {(carbonSaved * 0.0022).toFixed(1)}°C temperature rise contribution
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Real Impact Equivalent</CardTitle>
              <Car className="h-5 w-5 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-700">{Math.floor(carbonSaved * 2.3)} miles</div>
              <p className="text-xs text-blue-600">Car driving prevented</p>
              <div className="mt-2 text-xs text-gray-600">
                🚗 = {Math.floor((carbonSaved * 2.3) / 25)} gallons of gas saved
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Carbon Budget</CardTitle>
              <Target className="h-5 w-5 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-700">{carbonBudgetUsed}%</div>
              <Progress value={carbonBudgetUsed} className="mt-2 h-2" />
              <p className="text-xs text-gray-600 mt-1">
                {carbonBudgetUsed > 80 ? "⚠️ Budget exceeded!" : "✅ On track for net-zero"}
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cost Savings</CardTitle>
              <DollarSign className="h-5 w-5 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-700">${(carbonSaved * 0.05).toFixed(0)}</div>
              <p className="text-xs text-orange-600">From efficiency gains</p>
              <div className="mt-2 text-xs text-gray-600">
                💰 ROI: {(((carbonSaved * 0.05) / 1000) * 100).toFixed(0)}% this month
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Climate Impact Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="border-emerald-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe2 className="w-5 h-5 text-emerald-600" />
                  Climate Impact Dashboard
                </CardTitle>
                <CardDescription>
                  Your deployments are making a real difference in fighting climate change
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ImpactChart />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TreePine className="w-5 h-5 text-green-600" />
                  Environmental Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-green-700">{treesEquivalent}</div>
                  <div className="text-sm text-gray-600">Trees Worth of CO₂ Absorbed</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-blue-700">{Math.floor(carbonSaved / 8.9)}</div>
                  <div className="text-sm text-gray-600">Days of Home Energy Saved</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-purple-700">{Math.floor(carbonSaved / 0.4)}</div>
                  <div className="text-sm text-gray-600">Smartphone Charges Prevented</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  Team Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Your Contribution</span>
                    <Badge className="bg-green-100 text-green-800">Top 15%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Team Ranking</span>
                    <span className="font-bold text-blue-600">#3 of 47</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Global Impact</span>
                    <span className="font-bold text-purple-600">12.4 tons CO₂</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="impact" className="space-y-4">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="impact">Climate Impact</TabsTrigger>
            <TabsTrigger value="goals">Carbon Goals</TabsTrigger>
            <TabsTrigger value="leaderboard">Team Challenge</TabsTrigger>
            <TabsTrigger value="offsets">Carbon Offsets</TabsTrigger>
            <TabsTrigger value="reporting">Sustainability Report</TabsTrigger>
            <TabsTrigger value="analytics">AI Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="impact" className="space-y-4">
            <ImpactMetrics />
          </TabsContent>

          <TabsContent value="goals" className="space-y-4">
            <CarbonGoals />
          </TabsContent>

          <TabsContent value="leaderboard" className="space-y-4">
            <TeamLeaderboard />
          </TabsContent>

          <TabsContent value="offsets" className="space-y-4">
            <CarbonOffsetMarketplace />
          </TabsContent>

          <TabsContent value="reporting" className="space-y-4">
            <SustainabilityDashboard />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <StatisticalInsights />
          </TabsContent>
        </Tabs>

        {/* Call to Action Section */}
        <Card className="border-green-300 bg-gradient-to-r from-green-100 to-emerald-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-2">🌍 Ready to make an even bigger impact?</h3>
                <p className="text-green-700 mb-4">
                  Optimize your next deployment and help us reach our goal of preventing 1 million kg of CO₂ emissions
                  this year.
                </p>
                <div className="flex items-center gap-4">
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Zap className="w-4 h-4 mr-2" />
                    Optimize Next Deployment
                  </Button>
                  <Button variant="outline" className="border-green-300 text-green-700 bg-transparent">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Green Deployment
                  </Button>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-700">847,293 kg</div>
                <div className="text-sm text-green-600">Community CO₂ Saved</div>
                <Progress value={84.7} className="w-32 mt-2" />
                <div className="text-xs text-gray-600 mt-1">84.7% to 1M kg goal</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
