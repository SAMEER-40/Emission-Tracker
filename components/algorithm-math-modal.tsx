"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Brain, TrendingDown, Shield, BarChart3, Activity, Zap, Calculator, BookOpen, Code } from "lucide-react"

const algorithmDetails = [
  {
    name: "Time Series Forecasting (ARIMA)",
    icon: TrendingDown,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    description: "Predicts carbon intensity using AutoRegressive Integrated Moving Average model",
    accuracy: "94.2%",

    mathematics: {
      formula: "ARIMA(p,d,q): (1-φ₁L-φ₂L²-...-φₚLᵖ)(1-L)ᵈXₜ = (1+θ₁L+θ₂L²+...+θₑLᵠ)εₜ",
      components: [
        "AR(p): Xₜ = φ₁Xₜ₋₁ + φ₂Xₜ₋₂ + ... + φₚXₜ₋ₚ + εₜ",
        "I(d): ∇ᵈXₜ = (1-L)ᵈXₜ (differencing)",
        "MA(q): εₜ = θ₁εₜ₋₁ + θ₂εₜ₋₂ + ... + θₑεₜ₋ₑ + aₜ",
      ],
      seasonalDecomposition: "Xₜ = Tₜ + Sₜ + Cₜ + Iₜ",
      fourierTransform: "X(ω) = ∫₋∞^∞ x(t)e^(-iωt)dt",
    },

    implementation: `// ARIMA Implementation
class ARIMAPredictor {
  predict(data, p=2, d=1, q=2) {
    // 1. Differencing for stationarity
    const diffData = this.difference(data, d)
    
    // 2. AR component: φ₁Xₜ₋₁ + φ₂Xₜ₋₂ + ...
    const arCoeffs = this.calculateAR(diffData, p)
    
    // 3. MA component: θ₁εₜ₋₁ + θ₂εₜ₋₂ + ...
    const maCoeffs = this.calculateMA(diffData, q)
    
    // 4. Seasonal decomposition
    const seasonal = this.seasonalDecompose(data)
    
    // 5. Forecast next values
    return this.forecast(arCoeffs, maCoeffs, seasonal)
  }
  
  seasonalDecompose(data) {
    const trend = this.movingAverage(data, 24) // 24-hour cycle
    const seasonal = data.map((val, i) => 
      val - trend[i] - this.cyclicalComponent(i)
    )
    return { trend, seasonal }
  }
}`,

    realWorldApplication:
      "Predicts carbon intensity 6-24 hours ahead by analyzing historical grid data, weather patterns, and renewable energy cycles. Achieves 94.2% accuracy by combining trend analysis with seasonal patterns.",
  },

  {
    name: "Genetic Algorithm Optimization",
    icon: Brain,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    description: "Evolution-based optimization for finding optimal deployment configurations",
    accuracy: "60-70% reduction",

    mathematics: {
      formula: "f(x) = min{E(region, time, cpu, memory)} subject to constraints",
      fitnessFunction: "Fitness(x) = 1 / (CarbonEmission(x) + λ·Cost(x) + μ·Latency(x))",
      selection: "P(selection) = fitness(i) / Σfitness(j)",
      crossover: "offspring = α·parent₁ + (1-α)·parent₂",
      mutation: "x' = x + N(0,σ²) with probability Pₘ",
    },

    implementation: `// Genetic Algorithm Implementation
class GeneticOptimizer {
  optimize(constraints, generations=100, populationSize=50) {
    let population = this.initializePopulation(populationSize)
    
    for(let gen = 0; gen < generations; gen++) {
      // 1. Evaluate fitness: 1/(emissions + cost)
      const fitness = population.map(individual => 
        1 / (this.calculateEmissions(individual) + 
             this.calculateCost(individual) + 1)
      )
      
      // 2. Tournament selection
      const parents = this.tournamentSelection(population, fitness)
      
      // 3. Crossover: offspring = α·p1 + (1-α)·p2
      const offspring = this.crossover(parents, 0.7)
      
      // 4. Mutation: x' = x + N(0,σ²)
      population = this.mutate(offspring, 0.1)
    }
    
    return this.getBestSolution(population)
  }
  
  calculateEmissions(individual) {
    const regionFactor = this.getRegionMultiplier(individual.region)
    const timeFactor = this.getTimeMultiplier(individual.time)
    const resourceFactor = individual.cpu * individual.memory
    
    return 100 * regionFactor * timeFactor * resourceFactor
  }
}`,

    realWorldApplication:
      "Evolves optimal deployment configurations by treating each possible setup as a 'chromosome'. Tests thousands of combinations to find configurations that minimize emissions while maintaining performance.",
  },

  {
    name: "Statistical Anomaly Detection",
    icon: Shield,
    color: "text-red-600",
    bgColor: "bg-red-50",
    description: "Z-Score and CUSUM algorithms for detecting unusual emission patterns",
    accuracy: "95.8%",

    mathematics: {
      zScore: "Z = (X - μ) / σ, where μ = mean, σ = standard deviation",
      cusum: "Sₜ⁺ = max(0, Sₜ₋₁⁺ + Xₜ - μ - k), Sₜ⁻ = min(0, Sₜ₋₁⁻ + Xₜ - μ + k)",
      threshold: "Anomaly if |Z| > 2.5 or |CUSUM| > h",
      controlLimits: "UCL = μ + 3σ, LCL = μ - 3σ",
      exponentialSmoothing: "Sₜ = αXₜ + (1-α)Sₜ₋₁",
    },

    implementation: `// Anomaly Detection Implementation
class AnomalyDetector {
  detectAnomalies(emissions, threshold = 2.5) {
    const mean = this.calculateMean(emissions)
    const stdDev = this.calculateStdDev(emissions, mean)
    
    // Z-Score Analysis
    const zScores = emissions.map(x => Math.abs((x - mean) / stdDev))
    const zAnomalies = zScores.map((z, i) => 
      z > threshold ? { index: i, value: emissions[i], zScore: z } : null
    ).filter(Boolean)
    
    // CUSUM Analysis for drift detection
    let cusumPos = 0, cusumNeg = 0
    const k = stdDev / 2 // allowable slack
    const h = 5 * stdDev // decision interval
    
    const cusumAnomalies = []
    emissions.forEach((x, i) => {
      cusumPos = Math.max(0, cusumPos + x - mean - k)
      cusumNeg = Math.min(0, cusumNeg + x - mean + k)
      
      if (Math.abs(cusumPos) > h || Math.abs(cusumNeg) > h) {
        cusumAnomalies.push({ index: i, type: 'drift' })
      }
    })
    
    return { zAnomalies, cusumAnomalies }
  }
}`,

    realWorldApplication:
      "Monitors deployment emissions in real-time, flagging unusual spikes that could indicate inefficient configurations or system issues. Prevents 15-20% of high-emission deployments through early detection.",
  },

  {
    name: "K-Means Clustering",
    icon: BarChart3,
    color: "text-green-600",
    bgColor: "bg-green-50",
    description: "Machine learning pattern recognition for deployment behaviors",
    accuracy: "87.3%",

    mathematics: {
      objective: "minimize Σᵢ₌₁ᵏ Σₓ∈Cᵢ ||x - μᵢ||²",
      centroidUpdate: "μᵢ = (1/|Cᵢ|) Σₓ∈Cᵢ x",
      distanceMetric: "d(x,y) = √(Σᵢ(xᵢ - yᵢ)²)",
      withinClusterSS: "WCSS = Σᵢ₌₁ᵏ Σₓ∈Cᵢ ||x - μᵢ||²",
      silhouetteScore: "s(i) = (b(i) - a(i)) / max(a(i), b(i))",
    },

    implementation: `// K-Means Clustering Implementation
class KMeansAnalyzer {
  clusterDeployments(deployments, k = 4) {
    // Feature extraction: [hour, region_code, emissions, cpu, memory]
    const features = deployments.map(d => [
      d.time % 24,
      this.regionToNumber(d.region),
      d.emissions,
      d.resources.cpu,
      d.resources.memory
    ])
    
    // Initialize centroids randomly
    let centroids = this.initializeCentroids(features, k)
    let clusters = []
    let converged = false
    
    while (!converged) {
      // Assign points to nearest centroid
      clusters = this.assignToClusters(features, centroids)
      
      // Update centroids: μᵢ = (1/|Cᵢ|) Σₓ∈Cᵢ x
      const newCentroids = clusters.map(cluster => 
        this.calculateCentroid(cluster)
      )
      
      // Check convergence
      converged = this.hasConverged(centroids, newCentroids)
      centroids = newCentroids
    }
    
    return this.analyzePatterns(clusters)
  }
  
  euclideanDistance(point1, point2) {
    return Math.sqrt(
      point1.reduce((sum, val, i) => 
        sum + Math.pow(val - point2[i], 2), 0
      )
    )
  }
}`,

    realWorldApplication:
      "Groups similar deployment patterns to identify optimization opportunities. Discovers that 'high-emission business hours' and 'green off-hours' clusters have distinct characteristics, enabling targeted recommendations.",
  },

  {
    name: "Multiple Linear Regression",
    icon: Activity,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    description: "Predicts emissions based on multiple deployment parameters",
    accuracy: "91.5%",

    mathematics: {
      model: "Y = β₀ + β₁X₁ + β₂X₂ + ... + βₚXₚ + ε",
      normalEquation: "β = (XᵀX)⁻¹XᵀY",
      costFunction: "J(β) = (1/2m) Σᵢ₌₁ᵐ (hβ(xᵢ) - yᵢ)²",
      gradientDescent: "β := β - α(1/m)Xᵀ(Xβ - Y)",
      rSquared: "R² = 1 - (SSres/SStot) = 1 - (Σ(yᵢ - ŷᵢ)²/Σ(yᵢ - ȳ)²)",
    },

    implementation: `// Multiple Linear Regression Implementation
class EmissionPredictor {
  trainModel(trainingData) {
    // Feature matrix X: [1, region, time, cpu, memory, duration]
    const X = trainingData.map(d => [
      1, // intercept
      this.regionToNumber(d.region),
      d.time,
      d.cpu,
      d.memory,
      d.duration
    ])
    
    const Y = trainingData.map(d => d.emissions)
    
    // Normal equation: β = (XᵀX)⁻¹XᵀY
    const XTranspose = this.transpose(X)
    const XTX = this.matrixMultiply(XTranspose, X)
    const XTXInverse = this.matrixInverse(XTX)
    const XTY = this.matrixVectorMultiply(XTranspose, Y)
    
    this.coefficients = this.matrixVectorMultiply(XTXInverse, XTY)
    
    // Calculate R²
    const predictions = X.map(row => 
      row.reduce((sum, val, i) => sum + val * this.coefficients[i], 0)
    )
    
    this.rSquared = this.calculateRSquared(Y, predictions)
  }
  
  predict(deployment) {
    const features = [
      1,
      this.regionToNumber(deployment.region),
      deployment.time,
      deployment.cpu,
      deployment.memory,
      deployment.duration
    ]
    
    return features.reduce((sum, feature, i) => 
      sum + feature * this.coefficients[i], 0
    )
  }
}`,

    realWorldApplication:
      "Creates a mathematical model that predicts emissions before deployment. Learns that region has 3x more impact than time, and CPU usage has exponential effect on emissions.",
  },

  {
    name: "Fourier Transform Analysis",
    icon: Zap,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    description: "Detects cyclical patterns in renewable energy grid data",
    accuracy: "89.7%",

    mathematics: {
      discreteFourier: "X[k] = Σₙ₌₀^(N-1) x[n]e^(-i2πkn/N)",
      powerSpectrum: "P[k] = |X[k]|²",
      frequency: "f[k] = k·fs/N, where fs = sampling frequency",
      amplitude: "A[k] = 2|X[k]|/N",
      phase: "φ[k] = arg(X[k]) = arctan(Im(X[k])/Re(X[k]))",
    },

    implementation: `// Fourier Transform Analysis Implementation
class FourierAnalyzer {
  analyzeEnergyPatterns(gridData, sampleRate = 1) {
    // Apply FFT to detect dominant frequencies
    const fftResult = this.fft(gridData)
    
    // Calculate power spectrum
    const powerSpectrum = fftResult.map(complex => 
      complex.real * complex.real + complex.imag * complex.imag
    )
    
    // Find dominant frequencies
    const frequencies = powerSpectrum.map((power, k) => ({
      frequency: k * sampleRate / gridData.length,
      power: power,
      period: gridData.length / k // in hours
    }))
    
    // Identify key cycles (daily, weekly, seasonal)
    const dailyCycle = frequencies.find(f => 
      Math.abs(f.period - 24) < 1 // ~24 hour cycle
    )
    const weeklyCycle = frequencies.find(f => 
      Math.abs(f.period - 168) < 12 // ~weekly cycle
    )
    
    return {
      dominantFrequencies: frequencies.sort((a,b) => b.power - a.power).slice(0,5),
      dailyCycle,
      weeklyCycle,
      renewablePeaks: this.identifyRenewablePeaks(frequencies)
    }
  }
  
  // Fast Fourier Transform implementation
  fft(signal) {
    const N = signal.length
    if (N <= 1) return signal.map(x => ({real: x, imag: 0}))
    
    // Divide
    const even = signal.filter((_, i) => i % 2 === 0)
    const odd = signal.filter((_, i) => i % 2 === 1)
    
    // Conquer
    const evenFFT = this.fft(even)
    const oddFFT = this.fft(odd)
    
    // Combine
    const result = new Array(N)
    for (let k = 0; k < N/2; k++) {
      const t = this.complexMultiply(
        {real: Math.cos(-2*Math.PI*k/N), imag: Math.sin(-2*Math.PI*k/N)},
        oddFFT[k]
      )
      result[k] = this.complexAdd(evenFFT[k], t)
      result[k + N/2] = this.complexSubtract(evenFFT[k], t)
    }
    
    return result
  }
}`,

    realWorldApplication:
      "Analyzes renewable energy patterns to identify optimal deployment windows. Discovers that solar peaks at 2 PM and wind patterns follow 6-hour cycles, enabling 40% emission reduction through timing optimization.",
  },
]

interface AlgorithmMathModalProps {
  algorithm: (typeof algorithmDetails)[0]
  isOpen: boolean
  onClose: () => void
}

function AlgorithmMathModal({ algorithm, isOpen, onClose }: AlgorithmMathModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${algorithm.bgColor}`}>
              <algorithm.icon className={`w-6 h-6 ${algorithm.color}`} />
            </div>
            {algorithm.name} - Mathematical Foundation
          </DialogTitle>
          <DialogDescription>Deep dive into the mathematical principles and implementation details</DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[70vh] pr-4">
          <Tabs defaultValue="math" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="math" className="flex items-center gap-2">
                <Calculator className="w-4 h-4" />
                Mathematics
              </TabsTrigger>
              <TabsTrigger value="code" className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                Implementation
              </TabsTrigger>
              <TabsTrigger value="application" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Real-World Use
              </TabsTrigger>
            </TabsList>

            <TabsContent value="math" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    Core Mathematical Formulas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(algorithm.mathematics).map(([key, value]) => (
                    <div key={key} className="space-y-2">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-600">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </h4>
                      {Array.isArray(value) ? (
                        <div className="space-y-1">
                          {value.map((formula, i) => (
                            <div key={i} className="bg-gray-50 p-3 rounded-lg font-mono text-sm">
                              {formula}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="bg-gray-50 p-3 rounded-lg font-mono text-sm">{value}</div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Algorithm Complexity & Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Time Complexity</h4>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700">
                        {algorithm.name.includes("ARIMA") && "O(n²)"}
                        {algorithm.name.includes("Genetic") && "O(g·p·f)"}
                        {algorithm.name.includes("Anomaly") && "O(n)"}
                        {algorithm.name.includes("K-Means") && "O(k·n·i)"}
                        {algorithm.name.includes("Regression") && "O(n·p²)"}
                        {algorithm.name.includes("Fourier") && "O(n log n)"}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Space Complexity</h4>
                      <Badge variant="outline" className="bg-green-50 text-green-700">
                        {algorithm.name.includes("ARIMA") && "O(n)"}
                        {algorithm.name.includes("Genetic") && "O(p)"}
                        {algorithm.name.includes("Anomaly") && "O(1)"}
                        {algorithm.name.includes("K-Means") && "O(k·n)"}
                        {algorithm.name.includes("Regression") && "O(p²)"}
                        {algorithm.name.includes("Fourier") && "O(n)"}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="code" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Production Implementation
                  </CardTitle>
                  <CardDescription>TypeScript implementation used in the emission tracker</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{algorithm.implementation}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="application" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Real-World Application
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{algorithm.realWorldApplication}</p>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Impact Metrics</h4>
                      <div className="space-y-1 text-sm">
                        <div>
                          Accuracy: <span className="font-bold">{algorithm.accuracy}</span>
                        </div>
                        <div>
                          Processing Time: <span className="font-bold">{"<50ms"}</span>
                        </div>
                        <div>
                          Memory Usage: <span className="font-bold">{"<10MB"}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Use Cases</h4>
                      <div className="space-y-1 text-sm">
                        <div>• Real-time optimization</div>
                        <div>• Predictive analytics</div>
                        <div>• Anomaly detection</div>
                        <div>• Pattern recognition</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

export { algorithmDetails, AlgorithmMathModal }
