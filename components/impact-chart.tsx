"use client"

import { useState, useEffect } from "react"
import { ResponsiveContainer, Tooltip, XAxis, YAxis, Area, AreaChart, Bar, BarChart, ComposedChart } from "recharts"

const generateImpactData = () => {
  const data = []
  const now = new Date()

  for (let i = 29; i >= 0; i--) {
    const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000)
    const baseEmissions = 200 + Math.sin(i * 0.2) * 50
    const optimizedEmissions = baseEmissions * (0.4 + Math.random() * 0.3)
    const carbonSaved = baseEmissions - optimizedEmissions

    data.push({
      date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      fullDate: date,
      baseline: baseEmissions,
      actual: optimizedEmissions,
      saved: carbonSaved,
      treesEquivalent: Math.floor((carbonSaved / 22.4) * 365), // Daily equivalent
      costSavings: carbonSaved * 0.05,
      cumulativeSaved: data.reduce((sum, item) => sum + item.saved, 0) + carbonSaved,
    })
  }
  return data
}

export function ImpactChart() {
  const [data, setData] = useState(generateImpactData())
  const [viewMode, setViewMode] = useState<"emissions" | "impact" | "savings">("impact")

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateImpactData())
    }, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  const totalSaved = data.reduce((sum, item) => sum + item.saved, 0)
  const totalTrees = Math.floor(totalSaved / 22.4)
  const totalCostSavings = totalSaved * 0.05

  return (
    <div className="space-y-4">
      {/* Impact Summary */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center p-3 bg-green-50 rounded-lg">
          <div className="text-2xl font-bold text-green-700">{(totalSaved / 1000).toFixed(1)}kg</div>
          <div className="text-xs text-gray-600">CO₂ Prevented (30 days)</div>
        </div>
        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <div className="text-2xl font-bold text-blue-700">{totalTrees}</div>
          <div className="text-xs text-gray-600">Trees Worth Impact</div>
        </div>
        <div className="text-center p-3 bg-purple-50 rounded-lg">
          <div className="text-2xl font-bold text-purple-700">${totalCostSavings.toFixed(0)}</div>
          <div className="text-xs text-gray-600">Cost Savings</div>
        </div>
      </div>

      {/* View Mode Selector */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setViewMode("impact")}
          className={`px-3 py-1 rounded text-sm ${
            viewMode === "impact" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Environmental Impact
        </button>
        <button
          onClick={() => setViewMode("emissions")}
          className={`px-3 py-1 rounded text-sm ${
            viewMode === "emissions" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Emissions Comparison
        </button>
        <button
          onClick={() => setViewMode("savings")}
          className={`px-3 py-1 rounded text-sm ${
            viewMode === "savings" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Cost Impact
        </button>
      </div>

      {/* Chart */}
      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          {viewMode === "impact" && (
            <ComposedChart data={data}>
              <defs>
                <linearGradient id="colorSaved" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6b7280" }} />
              <YAxis
                yAxisId="left"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#6b7280" }}
                label={{ value: "CO₂ Saved (g)", angle: -90, position: "insideLeft" }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#6b7280" }}
                label={{ value: "Trees Equivalent", angle: 90, position: "insideRight" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
                formatter={(value: number, name: string) => {
                  if (name === "saved") return [`${value.toFixed(1)}g CO₂`, "Carbon Saved"]
                  if (name === "treesEquivalent") return [`${value} trees`, "Environmental Impact"]
                  return [value, name]
                }}
              />
              <Area
                yAxisId="left"
                type="monotone"
                dataKey="saved"
                stroke="#22c55e"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorSaved)"
              />
              <Bar yAxisId="right" dataKey="treesEquivalent" fill="#10b981" opacity={0.6} radius={[2, 2, 0, 0]} />
            </ComposedChart>
          )}

          {viewMode === "emissions" && (
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorBaseline" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6b7280" }} />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#6b7280" }}
                label={{ value: "g CO₂/day", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
                formatter={(value: number, name: string) => [
                  `${value.toFixed(1)} g CO₂`,
                  name === "baseline" ? "Without Optimization" : "With EcoImpact",
                ]}
              />
              <Area
                type="monotone"
                dataKey="baseline"
                stroke="#ef4444"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorBaseline)"
              />
              <Area
                type="monotone"
                dataKey="actual"
                stroke="#22c55e"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorActual)"
              />
            </AreaChart>
          )}

          {viewMode === "savings" && (
            <BarChart data={data}>
              <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6b7280" }} />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#6b7280" }}
                label={{ value: "Cost Savings ($)", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
                formatter={(value: number) => [`$${value.toFixed(2)}`, "Daily Savings"]}
              />
              <Bar dataKey="costSavings" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Impact Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
        <div className="text-center">
          <div className="text-lg font-bold text-green-700">🌍 Climate Impact</div>
          <div className="text-sm text-gray-600 mt-1">
            Your optimizations prevent the equivalent of {Math.floor(totalSaved * 2.3)} miles of car driving
          </div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-blue-700">💡 Energy Saved</div>
          <div className="text-sm text-gray-600 mt-1">
            Equivalent to powering {Math.floor(totalSaved / 8.9)} homes for a day
          </div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-purple-700">🏆 Achievement</div>
          <div className="text-sm text-gray-600 mt-1">You're in the top 10% of climate-conscious developers</div>
        </div>
      </div>
    </div>
  )
}
