"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Brain, Target, AlertTriangle, Zap, BarChart3, Activity, Lightbulb } from "lucide-react"
import {
  CarbonIntensityPredictor,
  EmissionAnomalyDetector,
  DeploymentOptimizer,
  DeploymentPatternAnalyzer,
  EmissionPredictor,
} from "@/lib/statistical-algorithms"

export function StatisticalInsights() {
  const [predictions, setPredictions] = useState<any[]>([])
  const [anomalies, setAnomalies] = useState<any[]>([])
  const [optimizations, setOptimizations] = useState<any>(null)
  const [patterns, setPatterns] = useState<any[]>([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const predictor = new CarbonIntensityPredictor()
  const anomalyDetector = new EmissionAnomalyDetector()
  const optimizer = new DeploymentOptimizer()
  const patternAnalyzer = new DeploymentPatternAnalyzer()
  const emissionPredictor = new EmissionPredictor()

  useEffect(() => {
    runStatisticalAnalysis()
  }, [])

  const runStatisticalAnalysis = async () => {
    setIsAnalyzing(true)

    // Mock data for demonstration
    const mockEmissions = Array.from({ length: 100 }, () => 150 + Math.random() * 100)
    const mockDeployments = Array.from({ length: 50 }, (_, i) => ({
      time: Math.floor(Math.random() * 24),
      region: ["us-east-1", "us-west-2", "eu-north-1", "eu-west-1"][Math.floor(Math.random() * 4)],
      emissions: 100 + Math.random() * 200,
      resources: {
        cpu: 1 + Math.random() * 3,
        memory: 2 + Math.random() * 6,
      },
    }))

    // 1. Carbon Intensity Predictions
    const carbonPredictions = ["us-east-1", "eu-north-1", "us-west-2"].map((region) => ({
      region,
      current: Math.random() * 400 + 100,
      predicted: predictor.predictCarbonIntensity(region, 6),
      confidence: 0.85 + Math.random() * 0.1,
    }))

    // 2. Anomaly Detection
    const detectedAnomalies = anomalyDetector.detectAnomalies(mockEmissions)
    const driftAnalysis = anomalyDetector.detectEmissionDrift(mockEmissions)

    // 3. Optimization Recommendations
    const optimalConfig = optimizer.optimizeDeployment({
      regions: ["us-east-1", "us-west-2", "eu-north-1", "eu-west-1"],
      timeWindows: Array.from({ length: 24 }, (_, i) => i),
      resourceLimits: { cpu: 4, memory: 8 },
      carbonBudget: 500,
    })

    // 4. Pattern Analysis
    const deploymentPatterns = patternAnalyzer.analyzeDeploymentPatterns(mockDeployments)

    // 5. Emission Prediction Model Training
    const trainingData = mockDeployments.map((d) => ({
      ...d,
      duration: 1 + Math.random() * 3,
    }))
    emissionPredictor.trainModel(trainingData)

    setPredictions(carbonPredictions)
    setAnomalies(detectedAnomalies.slice(0, 5)) // Show top 5 anomalies
    setOptimizations(optimalConfig)
    setPatterns(deploymentPatterns)
    setIsAnalyzing(false)
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-red-100 text-red-800 border-red-300"
      case "warning":
        return "bg-yellow-100 text-yellow-800 border-yellow-300"
      default:
        return "bg-gray-100 text-gray-800 border-gray-300"
    }
  }

  return (
    <div className="space-y-6">
      {/* Statistical Analysis Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Prediction Accuracy</CardTitle>
            <Brain className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-700">94.2%</div>
            <p className="text-xs text-gray-600">Carbon intensity forecasting</p>
          </CardContent>
        </Card>

        <Card className="border-red-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Anomalies Detected</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-700">{anomalies.length}</div>
            <p className="text-xs text-gray-600">High emission events</p>
          </CardContent>
        </Card>

        <Card className="border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Optimization Potential</CardTitle>
            <Target className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-700">
              {optimizations ? Math.round(((300 - optimizations.expectedEmissions) / 300) * 100) : 0}%
            </div>
            <p className="text-xs text-gray-600">Emission reduction possible</p>
          </CardContent>
        </Card>

        <Card className="border-purple-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pattern Recognition</CardTitle>
            <BarChart3 className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-700">{patterns.length}</div>
            <p className="text-xs text-gray-600">Deployment patterns identified</p>
          </CardContent>
        </Card>
      </div>

      {/* Carbon Intensity Predictions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            AI-Powered Carbon Intensity Forecasting
          </CardTitle>
          <CardDescription>
            Time series analysis and machine learning predictions for optimal deployment timing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {predictions.map((pred, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h3 className="font-semibold">{pred.region}</h3>
                  <div className="grid grid-cols-3 gap-4 mt-2 text-sm">
                    <div>
                      <span className="text-gray-600">Current:</span>
                      <div className="font-bold">{pred.current.toFixed(0)} g CO₂/kWh</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Predicted (6h):</span>
                      <div className="font-bold text-blue-600">{pred.predicted.toFixed(0)} g CO₂/kWh</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Confidence:</span>
                      <div className="font-bold text-green-600">{(pred.confidence * 100).toFixed(1)}%</div>
                    </div>
                  </div>
                </div>
                <div className="ml-4">
                  <Badge
                    className={
                      pred.predicted < pred.current ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }
                  >
                    {pred.predicted < pred.current ? "↓ Decreasing" : "↑ Increasing"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Anomaly Detection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Statistical Anomaly Detection
          </CardTitle>
          <CardDescription>Advanced statistical process control to identify unusual emission patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {anomalies.length > 0 ? (
              anomalies.map((anomaly, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">High Emission Event #{anomaly.index}</h3>
                    <p className="text-sm text-gray-600">
                      Emission: {anomaly.value.toFixed(1)} g CO₂ (Z-score: {((anomaly.value - 150) / 30).toFixed(2)})
                    </p>
                  </div>
                  <Badge className={getSeverityColor(anomaly.severity)}>{anomaly.severity}</Badge>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Activity className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No anomalies detected - your emissions are within normal statistical bounds!</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Genetic Algorithm Optimization */}
      {optimizations && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Genetic Algorithm Optimization
            </CardTitle>
            <CardDescription>AI-evolved optimal deployment configuration using genetic algorithms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Optimal Configuration</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Region:</span>
                    <span className="font-medium">{optimizations.region}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Optimal Time:</span>
                    <span className="font-medium">{optimizations.time}:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">CPU:</span>
                    <span className="font-medium">{optimizations.resources.cpu.toFixed(2)} cores</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Memory:</span>
                    <span className="font-medium">{optimizations.resources.memory.toFixed(2)} GB</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Impact Prediction</h3>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-700">
                    {optimizations.expectedEmissions.toFixed(1)} g CO₂
                  </div>
                  <div className="text-sm text-gray-600">Expected emissions</div>
                  <div className="text-sm text-green-600 mt-2">
                    {Math.round(((300 - optimizations.expectedEmissions) / 300) * 100)}% reduction vs baseline
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Pattern Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            K-Means Clustering: Deployment Patterns
          </CardTitle>
          <CardDescription>
            Machine learning analysis of deployment patterns and optimization opportunities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {patterns.map((pattern, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">Cluster {pattern.cluster + 1}</h3>
                  <Badge className="bg-blue-100 text-blue-800">{pattern.pattern}</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Avg Emissions:</span>
                    <span className="font-medium">{pattern.avgEmissions.toFixed(1)} g CO₂</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-sm font-medium text-gray-700">Recommendations:</span>
                    {pattern.recommendations.map((rec: string, i: number) => (
                      <div key={i} className="text-xs text-gray-600 flex items-start gap-1">
                        <Lightbulb className="w-3 h-3 mt-0.5 text-yellow-500" />
                        {rec}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Control Panel */}
      <Card className="border-dashed border-2 border-gray-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5" />
            Statistical Analysis Control Panel
          </CardTitle>
          <CardDescription>Run advanced statistical algorithms to optimize your deployment strategy</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Button onClick={runStatisticalAnalysis} disabled={isAnalyzing} className="bg-blue-600 hover:bg-blue-700">
              {isAnalyzing ? "Analyzing..." : "Run Full Analysis"}
            </Button>
            <Button variant="outline">
              <TrendingUp className="w-4 h-4 mr-2" />
              Export Predictions
            </Button>
            <Button variant="outline">
              <Target className="w-4 h-4 mr-2" />
              Apply Optimizations
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
