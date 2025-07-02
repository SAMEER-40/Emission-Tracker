"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Leaf, Globe, Award, ShoppingCart, Star, MapPin, CheckCircle, TrendingUp } from "lucide-react"

const offsetProjects = [
  {
    id: 1,
    name: "Amazon Rainforest Conservation",
    location: "Brazil",
    type: "Forest Protection",
    pricePerTon: 12,
    description: "Protect 10,000 hectares of pristine Amazon rainforest from deforestation",
    impact: "Preserves biodiversity and indigenous communities",
    verification: "Gold Standard",
    funded: 78,
    target: 100,
    co2Capacity: 50000,
    image: "🌳",
    rating: 4.9,
    reviews: 234,
  },
  {
    id: 2,
    name: "Solar Farm Development",
    location: "Kenya",
    type: "Renewable Energy",
    pricePerTon: 18,
    description: "Build solar infrastructure providing clean energy to 25,000 households",
    impact: "Replaces coal power and creates local jobs",
    verification: "Verra VCS",
    funded: 45,
    target: 100,
    co2Capacity: 75000,
    image: "☀️",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 3,
    name: "Mangrove Restoration",
    location: "Philippines",
    type: "Blue Carbon",
    pricePerTon: 25,
    description: "Restore 5,000 hectares of mangrove ecosystems for coastal protection",
    impact: "Protects coastlines and marine biodiversity",
    verification: "Plan Vivo",
    funded: 67,
    target: 100,
    co2Capacity: 30000,
    image: "🌊",
    rating: 4.8,
    reviews: 89,
  },
  {
    id: 4,
    name: "Direct Air Capture",
    location: "Iceland",
    type: "Technology",
    pricePerTon: 150,
    description: "Advanced technology that directly removes CO₂ from the atmosphere",
    impact: "Permanent carbon removal with 100% additionality",
    verification: "ISO 14064",
    funded: 23,
    target: 100,
    co2Capacity: 10000,
    image: "🏭",
    rating: 4.6,
    reviews: 67,
  },
]

const userOffsets = [
  {
    project: "Amazon Rainforest Conservation",
    amount: 2.4,
    date: "2024-02-15",
    cost: 28.8,
    certificate: "ARF-2024-001234",
  },
  {
    project: "Solar Farm Development",
    amount: 1.8,
    date: "2024-01-28",
    cost: 32.4,
    certificate: "SFD-2024-005678",
  },
]

export function CarbonOffsetMarketplace() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [offsetAmount, setOffsetAmount] = useState(1)

  const totalOffset = userOffsets.reduce((sum, offset) => sum + offset.amount, 0)
  const totalSpent = userOffsets.reduce((sum, offset) => sum + offset.cost, 0)

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Forest Protection":
        return "bg-green-100 text-green-800"
      case "Renewable Energy":
        return "bg-yellow-100 text-yellow-800"
      case "Blue Carbon":
        return "bg-blue-100 text-blue-800"
      case "Technology":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Offset Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Your Offsets</CardTitle>
            <Leaf className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-700">{totalOffset.toFixed(1)} tons</div>
            <p className="text-xs text-gray-600">CO₂ offset this year</p>
          </CardContent>
        </Card>

        <Card className="border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Investment</CardTitle>
            <ShoppingCart className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-700">${totalSpent.toFixed(0)}</div>
            <p className="text-xs text-gray-600">Climate action investment</p>
          </CardContent>
        </Card>

        <Card className="border-purple-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Impact Score</CardTitle>
            <Award className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-700">9.2/10</div>
            <p className="text-xs text-gray-600">Offset quality rating</p>
          </CardContent>
        </Card>

        <Card className="border-orange-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Projects Supported</CardTitle>
            <Globe className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-700">{userOffsets.length}</div>
            <p className="text-xs text-gray-600">Climate projects funded</p>
          </CardContent>
        </Card>
      </div>

      {/* Available Projects */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Carbon Offset Marketplace
          </CardTitle>
          <CardContent className="text-gray-600">
            Support verified climate projects and offset your deployment emissions
          </CardContent>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offsetProjects.map((project) => (
              <Card key={project.id} className="border hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{project.image}</div>
                      <div>
                        <h3 className="font-semibold text-lg">{project.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin className="w-3 h-3 text-gray-500" />
                          <span className="text-sm text-gray-600">{project.location}</span>
                          <Badge className={getTypeColor(project.type)}>{project.type}</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">${project.pricePerTon}</div>
                      <div className="text-xs text-gray-600">per ton CO₂</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-700">{project.description}</p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Funding Progress</span>
                      <span>
                        {project.funded}% of {project.target}%
                      </span>
                    </div>
                    <Progress value={project.funded} className="h-2" />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500" />
                      <span>{project.rating}</span>
                      <span className="text-gray-500">({project.reviews} reviews)</span>
                    </div>
                    <Badge variant="outline">{project.verification}</Badge>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex items-center gap-2 mb-3">
                      <Label htmlFor={`amount-${project.id}`} className="text-sm">
                        Offset Amount (tons):
                      </Label>
                      <Input
                        id={`amount-${project.id}`}
                        type="number"
                        min="0.1"
                        step="0.1"
                        value={offsetAmount}
                        onChange={(e) => setOffsetAmount(Number.parseFloat(e.target.value))}
                        className="w-20 h-8"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Total: ${(project.pricePerTon * offsetAmount).toFixed(2)}
                      </span>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <ShoppingCart className="w-3 h-3 mr-1" />
                        Purchase Offset
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Your Offset History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            Your Offset Portfolio
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {userOffsets.map((offset, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold">{offset.project}</h3>
                  <p className="text-sm text-gray-600">
                    {offset.amount} tons CO₂ • {offset.date}
                  </p>
                  <p className="text-xs text-gray-500">Certificate: {offset.certificate}</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-green-600">${offset.cost.toFixed(2)}</div>
                  <Badge variant="outline" className="bg-green-50 text-green-700">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="border-green-300 bg-gradient-to-r from-green-100 to-emerald-100">
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-green-800 mb-2">🌍 Go Beyond Net Zero</h3>
            <p className="text-green-700 mb-4">
              Offset your remaining emissions and become carbon negative. Every ton counts in the fight against climate
              change.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-green-600 hover:bg-green-700">
                <TrendingUp className="w-4 h-4 mr-2" />
                Auto-Offset Deployments
              </Button>
              <Button variant="outline" className="border-green-300 text-green-700 bg-transparent">
                <Award className="w-4 h-4 mr-2" />
                View Certificates
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
