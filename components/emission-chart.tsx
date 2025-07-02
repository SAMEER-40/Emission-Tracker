"use client"

import { useState, useEffect } from "react"
import { ResponsiveContainer, Tooltip, XAxis, YAxis, Area, AreaChart } from "recharts"

const generateData = () => {
  const data = []
  const now = new Date()

  for (let i = 23; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 60 * 60 * 1000)
    data.push({
      time: time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      emissions: Math.floor(Math.random() * 100) + 150 + Math.sin(i * 0.5) * 50,
      baseline: 200,
      optimized: Math.floor(Math.random() * 60) + 80 + Math.sin(i * 0.5) * 30,
    })
  }
  return data
}

export function EmissionChart() {
  const [data, setData] = useState(generateData())

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateData())
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorEmissions" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorOptimized" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6b7280" }} />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#6b7280" }}
            label={{ value: "g CO₂/min", angle: -90, position: "insideLeft" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
            formatter={(value: number, name: string) => [
              `${value.toFixed(1)} g CO₂/min`,
              name === "emissions" ? "Current" : name === "optimized" ? "Optimized" : "Baseline",
            ]}
          />
          <Area
            type="monotone"
            dataKey="emissions"
            stroke="#ef4444"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorEmissions)"
          />
          <Area
            type="monotone"
            dataKey="optimized"
            stroke="#22c55e"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorOptimized)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
