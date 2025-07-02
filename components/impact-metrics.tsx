"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Zap, Users } from "lucide-react"

export function ImpactMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card className="border-green-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">CO₂ Saved This Month</CardTitle>
          <Leaf className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-700">2.8 tons</div>
          <p className="text-xs text-gray-600">From optimized deployments</p>
        </CardContent>
      </Card>

      <Card className="border-blue-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Energy Efficiency</CardTitle>
          <Zap className="h-4 w-4 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-700">45%</div>
          <p className="text-xs text-gray-600">Average emission reduction</p>
        </CardContent>
      </Card>

      <Card className="border-purple-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Community Impact</CardTitle>
          <Users className="h-4 w-4 text-purple-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-purple-700">127</div>
          <p className="text-xs text-gray-600">Developers contributing</p>
        </CardContent>
      </Card>
    </div>
  )
}
