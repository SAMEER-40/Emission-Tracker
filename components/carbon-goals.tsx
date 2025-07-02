"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Target, TrendingDown, Calendar, Award, Leaf, Zap, Globe } from "lucide-react"

const goals = [
  {
    id: 1,
    title: "Net Zero Deployments",
    description: "Achieve carbon-neutral deployments by end of Q2",
    target: 100,
    current: 73,
    unit: "% carbon neutral",
    deadline: "June 30, 2024",
    priority: "high",
    impact: "Prevent 2.4 tons CO₂ annually",
    status: "on-track",
  },
  {
    id: 2,
    title: "Renewable Energy Usage",
    description: "Deploy 80% of workloads in renewable-powered regions",
    target: 80,
    current: 64,
    unit: "% renewable",
    deadline: "March 31, 2024",
    priority: "medium",
    impact: "Support clean energy transition",
    status: "behind",
  },
  {
    id: 3,
    title: "Team Carbon Budget",
    description: "Stay within monthly carbon budget of 500kg CO₂",
    target: 500,
    current: 337,
    unit: "kg CO₂",
    deadline: "Monthly",
    priority: "high",
    impact: "Maintain sustainable practices",
    status: "on-track",
  },
  {
    id: 4,
    title: "Efficiency Optimization",
    description: "Achieve 60% average emission reduction per deployment",
    target: 60,
    current: 47,
    unit: "% reduction",
    deadline: "April 15, 2024",
    priority: "medium",
    impact: "Industry-leading efficiency",
    status: "needs-attention",
  },
]

const achievements = [
  {
    title: "Climate Champion",
    description: "Saved 1000kg CO₂ in a single month",
    icon: "🏆",
    date: "Feb 2024",
    rarity: "rare",
  },
  {
    title: "Green Streak",
    description: "30 consecutive optimized deployments",
    icon: "🔥",
    date: "Jan 2024",
    rarity: "common",
  },
  {
    title: "Renewable Pioneer",
    description: "First team to achieve 90% renewable energy usage",
    icon: "⚡",
    date: "Dec 2023",
    rarity: "legendary",
  },
]

export function CarbonGoals() {
  const [newGoalTarget, setNewGoalTarget] = useState("")
  const [newGoalTitle, setNewGoalTitle] = useState("")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "on-track":
        return "bg-green-100 text-green-800 border-green-300"
      case "behind":
        return "bg-red-100 text-red-800 border-red-300"
      case "needs-attention":
        return "bg-yellow-100 text-yellow-800 border-yellow-300"
      default:
        return "bg-gray-100 text-gray-800 border-gray-300"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return "bg-gradient-to-r from-purple-400 to-pink-400 text-white"
      case "rare":
        return "bg-gradient-to-r from-blue-400 to-cyan-400 text-white"
      case "common":
        return "bg-gradient-to-r from-green-400 to-emerald-400 text-white"
      default:
        return "bg-gray-400 text-white"
    }
  }

  return (
    <div className="space-y-6">
      {/* Goals Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Goals</CardTitle>
            <Target className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-700">{goals.length}</div>
            <p className="text-xs text-gray-600">Climate objectives</p>
          </CardContent>
        </Card>

        <Card className="border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">On Track</CardTitle>
            <TrendingDown className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-700">
              {goals.filter((g) => g.status === "on-track").length}
            </div>
            <p className="text-xs text-gray-600">Goals progressing well</p>
          </CardContent>
        </Card>

        <Card className="border-purple-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Achievements</CardTitle>
            <Award className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-700">{achievements.length}</div>
            <p className="text-xs text-gray-600">Unlocked badges</p>
          </CardContent>
        </Card>

        <Card className="border-orange-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Impact Score</CardTitle>
            <Globe className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-700">8.4/10</div>
            <p className="text-xs text-gray-600">Sustainability rating</p>
          </CardContent>
        </Card>
      </div>

      {/* Active Goals */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            Climate Goals & Targets
          </CardTitle>
          <CardDescription>Track your progress towards carbon neutrality and sustainability milestones</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {goals.map((goal) => (
              <div key={goal.id} className="border rounded-lg p-4 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-lg">{goal.title}</h3>
                      <Badge className={getStatusColor(goal.status)}>{goal.status.replace("-", " ")}</Badge>
                      <Badge className={getPriorityColor(goal.priority)}>{goal.priority} priority</Badge>
                    </div>
                    <p className="text-gray-600 mb-3">{goal.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-600">Progress</div>
                        <div className="font-semibold">
                          {goal.current} / {goal.target} {goal.unit}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Deadline</div>
                        <div className="font-semibold flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {goal.deadline}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Impact</div>
                        <div className="font-semibold text-green-600">{goal.impact}</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{Math.round((goal.current / goal.target) * 100)}%</span>
                      </div>
                      <Progress value={(goal.current / goal.target) * 100} className="h-3" />
                    </div>
                  </div>

                  <div className="ml-4 flex flex-col gap-2">
                    <Button size="sm" variant="outline">
                      <Zap className="w-3 h-3 mr-1" />
                      Boost Progress
                    </Button>
                    <Button size="sm" variant="ghost">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5" />
            Climate Achievements
          </CardTitle>
          <CardDescription>Celebrate your environmental impact milestones</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="border rounded-lg p-4 text-center">
                <div className="text-4xl mb-2">{achievement.icon}</div>
                <h3 className="font-semibold mb-1">{achievement.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                <div className="flex items-center justify-between">
                  <Badge className={getRarityColor(achievement.rarity)}>{achievement.rarity}</Badge>
                  <span className="text-xs text-gray-500">{achievement.date}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Create New Goal */}
      <Card className="border-dashed border-2 border-gray-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            Set New Climate Goal
          </CardTitle>
          <CardDescription>Create a custom sustainability target for your team</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="goal-title">Goal Title</Label>
              <Input
                id="goal-title"
                placeholder="e.g., Reduce deployment emissions by 50%"
                value={newGoalTitle}
                onChange={(e) => setNewGoalTitle(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="goal-target">Target Value</Label>
              <Input
                id="goal-target"
                placeholder="e.g., 50"
                value={newGoalTarget}
                onChange={(e) => setNewGoalTarget(e.target.value)}
              />
            </div>
          </div>
          <Button className="mt-4 bg-green-600 hover:bg-green-700">
            <Leaf className="w-4 h-4 mr-2" />
            Create Climate Goal
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
