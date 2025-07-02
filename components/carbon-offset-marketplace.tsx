"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Globe, Award, ShoppingCart } from "lucide-react"

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
          </Car\
