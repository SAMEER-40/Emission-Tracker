"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Brain,
  Target,
  Zap,
  BarChart3,
  Activity,
  Globe2,
  TreePine,
  Users,
  Lightbulb,
  Shield,
  Rocket,
  ChevronRight,
  Play,
  CheckCircle,
  Calculator,
} from "lucide-react"
import { algorithmDetails, AlgorithmMathModal } from "@/components/algorithm-math-modal"

const algorithms = algorithmDetails

const impactMetrics = [
  {
    title: "Global CO₂ Reduction",
    value: "847,293 kg",
    description: "Total carbon emissions prevented by our community",
    equivalent: "38,513 trees planted",
    icon: Globe2,
    color: "text-green-600",
  },
  {
    title: "Developer Adoption",
    value: "2,847",
    description: "Climate-conscious developers using the platform",
    equivalent: "60% avg emission reduction",
    icon: Users,
    color: "text-blue-600",
  },
  {
    title: "Cost Savings",
    value: "$42,365",
    description: "Total cost savings from efficiency optimizations",
    equivalent: "ROI: 340% annually",
    icon: Target,
    color: "text-purple-600",
  },
  {
    title: "Real-World Impact",
    value: "1.9M miles",
    description: "Equivalent car driving prevented",
    equivalent: "84,000 gallons gas saved",
    icon: TreePine,
    color: "text-emerald-600",
  },
]

const workflowSteps = [
  {
    step: 1,
    title: "Real-Time Monitoring",
    description: "AI continuously monitors carbon intensity across 50+ regions worldwide",
    algorithms: ["Time Series Forecasting", "Fourier Analysis"],
    icon: Activity,
  },
  {
    step: 2,
    title: "Intelligent Analysis",
    description: "Statistical algorithms analyze deployment patterns and detect anomalies",
    algorithms: ["K-Means Clustering", "Anomaly Detection"],
    icon: Brain,
  },
  {
    step: 3,
    title: "AI Optimization",
    description: "Genetic algorithms evolve optimal deployment configurations",
    algorithms: ["Genetic Algorithm", "Linear Regression"],
    icon: Rocket,
  },
  {
    step: 4,
    title: "Automated Action",
    description: "Platform automatically schedules and optimizes deployments for maximum impact",
    algorithms: ["Predictive Modeling", "Process Control"],
    icon: CheckCircle,
  },
]

export function PlatformPreview() {
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(0)
  const [showMathModal, setShowMathModal] = useState(false)
  const [selectedMathAlgorithm, setSelectedMathAlgorithm] = useState(0)

  const DetailIcon = algorithms[selectedAlgorithm].icon

  const handleShowMath = (algorithmIndex: number) => {
    setSelectedMathAlgorithm(algorithmIndex)
    setShowMathModal(true)
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <Card className="border-2 border-green-300 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-green-600 rounded-xl">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900">How EcoImpact DevOps Works</h1>
            </div>

            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Advanced AI and statistical algorithms transform every deployment into climate action, reducing carbon
              emissions by <span className="font-bold text-green-600">60% on average</span> while saving costs and
              improving efficiency.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600">6</div>
                <div className="text-sm text-gray-600">AI Algorithms</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600">94.2%</div>
                <div className="text-sm text-gray-600">Prediction Accuracy</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-purple-600">70%</div>
                <div className="text-sm text-gray-600">Max Emission Reduction</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-orange-600">340%</div>
                <div className="text-sm text-gray-600">Annual ROI</div>
              </div>
            </div>

            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
              <Play className="w-5 h-5 mr-2" />
              See It In Action
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 h-12">
          <TabsTrigger value="overview" className="text-sm">
            Platform Overview
          </TabsTrigger>
          <TabsTrigger value="algorithms" className="text-sm">
            AI Algorithms
          </TabsTrigger>
          <TabsTrigger value="workflow" className="text-sm">
            How It Works
          </TabsTrigger>
          <TabsTrigger value="impact" className="text-sm">
            Global Impact
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-green-600" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Transform the software industry's carbon footprint by making every deployment climate-conscious. We're
                  building the world's first AI-powered emission tracker that doesn't just measure—it prevents.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Real-time carbon intensity monitoring across 50+ regions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">AI-powered optimization reducing emissions by 60% average</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Vendor-neutral: works with AWS, Azure, GCP, on-premise</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Cost savings through intelligent resource optimization</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <Brain className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-medium">AI Prediction</div>
                    <div className="text-xs text-gray-600">6-24h forecasting</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <Zap className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <div className="text-sm font-medium">Auto Optimization</div>
                    <div className="text-xs text-gray-600">Genetic algorithms</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <Shield className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                    <div className="text-sm font-medium">Anomaly Detection</div>
                    <div className="text-xs text-gray-600">Statistical control</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                    <div className="text-sm font-medium">Pattern Analysis</div>
                    <div className="text-xs text-gray-600">ML clustering</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="algorithms" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Advanced AI & Statistical Algorithms
              </CardTitle>
              <CardDescription>
                Six cutting-edge algorithms working together to minimize your carbon footprint
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-3">
                  {algorithms.map((algorithm, index) => {
                    const Icon = algorithm.icon
                    return (
                      <div
                        key={index}
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${
                          selectedAlgorithm === index
                            ? "border-blue-300 bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => setSelectedAlgorithm(index)}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${algorithm.bgColor}`}>
                            <Icon className={`w-5 h-5 ${algorithm.color}`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-sm">{algorithm.name}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className="text-xs">
                                {algorithm.accuracy} accuracy
                              </Badge>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg ${algorithms[selectedAlgorithm].bgColor}`}>
                      <DetailIcon className={`w-6 h-6 ${algorithms[selectedAlgorithm].color}`} />
                    </div>
                    <h3 className="text-lg font-semibold">{algorithms[selectedAlgorithm].name}</h3>
                  </div>

                  <p className="text-gray-700 mb-4">{algorithms[selectedAlgorithm].description}</p>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Accuracy Rate:</span>
                      <Badge className="bg-green-100 text-green-800">{algorithms[selectedAlgorithm].accuracy}</Badge>
                    </div>
                    <div className="pt-4 border-t">
                      <Button
                        onClick={() => handleShowMath(selectedAlgorithm)}
                        className="w-full bg-blue-600 hover:bg-blue-700"
                      >
                        <Calculator className="w-4 h-4 mr-2" />
                        View Mathematical Foundation
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="workflow" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                How Our AI Platform Works
              </CardTitle>
              <CardDescription>
                Four-step intelligent process that transforms deployments into climate action
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {workflowSteps.map((step, index) => {
                  const StepIcon = step.icon
                  return (
                    <div key={index} className="flex items-start gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                          {step.step}
                        </div>
                        {index < workflowSteps.length - 1 && <div className="w-0.5 h-16 bg-green-200 mt-4" />}
                      </div>

                      <div className="flex-1 pb-8">
                        <div className="flex items-center gap-3 mb-3">
                          <StepIcon className="w-6 h-6 text-green-600" />
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                        </div>

                        <p className="text-gray-700 mb-4">{step.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {step.algorithms.map((algorithm, i) => (
                            <Badge key={i} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                              {algorithm}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="impact" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {impactMetrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon className={metric.color} />
                      {metric.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center space-y-4">
                      <div className="text-4xl font-bold text-gray-900">{metric.value}</div>
                      <p className="text-gray-600">{metric.description}</p>
                      <div className={`text-sm font-medium ${metric.color}`}>= {metric.equivalent}</div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <Card className="border-2 border-green-300 bg-gradient-to-r from-green-50 to-emerald-50">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-green-800">🌍 Community Goal Progress</h3>
                <div className="text-5xl font-bold text-green-700">847,293 kg</div>
                <p className="text-green-600">CO₂ emissions prevented this year</p>
                <Progress value={84.7} className="h-4 max-w-md mx-auto" />
                <p className="text-sm text-gray-600">84.7% progress toward 1 million kg goal</p>

                <div className="grid grid-cols-3 gap-4 mt-6 max-w-2xl mx-auto">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">38,513</div>
                    <div className="text-sm text-gray-600">Trees Equivalent</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">1.9M</div>
                    <div className="text-sm text-gray-600">Miles Prevented</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">2,847</div>
                    <div className="text-sm text-gray-600">Developers</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Call to Action */}
      <Card className="border-2 border-blue-300 bg-gradient-to-r from-blue-50 to-cyan-50">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold text-blue-800">Ready to Transform Your Deployments?</h3>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              Join thousands of developers using AI to reduce their carbon footprint while saving costs and improving
              efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-300 text-blue-700 text-lg px-8 py-3 bg-transparent"
              >
                <Brain className="w-5 h-5 mr-2" />
                View Live Demo
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-gray-600 mt-8">
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Free 30-day trial</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Setup in 5 minutes</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Math Modal */}
      <AlgorithmMathModal
        algorithm={algorithms[selectedMathAlgorithm]}
        isOpen={showMathModal}
        onClose={() => setShowMathModal(false)}
      />
    </div>
  )
}
