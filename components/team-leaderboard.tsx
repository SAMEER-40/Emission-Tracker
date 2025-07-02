"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Trophy, Users, Leaf, TrendingUp, Award, Target, Zap, Crown } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Senior DevOps Engineer",
    carbonSaved: 1247.3,
    deployments: 34,
    efficiency: 67,
    streak: 12,
    badges: ["Climate Champion", "Green Streak", "Efficiency Expert"],
    rank: 1,
    trend: "up",
  },
  {
    id: 2,
    name: "Alex Rodriguez",
    role: "Platform Engineer",
    carbonSaved: 1156.8,
    deployments: 28,
    efficiency: 63,
    streak: 8,
    badges: ["Renewable Pioneer", "Team Player"],
    rank: 2,
    trend: "up",
  },
  {
    id: 3,
    name: "You",
    role: "Full Stack Developer",
    carbonSaved: 1089.4,
    deployments: 31,
    efficiency: 59,
    streak: 15,
    badges: ["Green Streak", "Consistency King"],
    rank: 3,
    trend: "up",
  },
  {
    id: 4,
    name: "Jordan Kim",
    role: "Backend Developer",
    carbonSaved: 987.2,
    deployments: 25,
    efficiency: 58,
    streak: 5,
    badges: ["Rising Star"],
    rank: 4,
    trend: "stable",
  },
  {
    id: 5,
    name: "Morgan Taylor",
    role: "DevOps Engineer",
    carbonSaved: 876.5,
    deployments: 22,
    efficiency: 55,
    streak: 3,
    badges: ["Team Player"],
    rank: 5,
    trend: "down",
  },
]

const teamChallenges = [
  {
    id: 1,
    title: "March Madness: Carbon Reduction Challenge",
    description: "Reduce team emissions by 40% this month",
    progress: 73,
    target: 40,
    reward: "Team lunch + $500 carbon offset donation",
    daysLeft: 8,
    participants: 12,
    status: "active",
  },
  {
    id: 2,
    title: "Renewable Energy Sprint",
    description: "Deploy 90% of workloads in renewable regions",
    progress: 67,
    target: 90,
    reward: "Extra PTO day for all participants",
    daysLeft: 15,
    participants: 8,
    status: "active",
  },
  {
    id: 3,
    title: "Zero Waste Deployment Week",
    description: "Achieve net-zero emissions for all deployments",
    progress: 100,
    target: 100,
    reward: "Climate Champion badges + company recognition",
    daysLeft: 0,
    participants: 15,
    status: "completed",
  },
]

export function TeamLeaderboard() {
  const [selectedPeriod, setSelectedPeriod] = useState<"week" | "month" | "quarter">("month")

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-5 h-5 text-yellow-500" />
      case 2:
        return <Trophy className="w-5 h-5 text-gray-400" />
      case 3:
        return <Trophy className="w-5 h-5 text-amber-600" />
      default:
        return <div className="w-5 h-5 flex items-center justify-center text-sm font-bold text-gray-500">#{rank}</div>
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-green-500" />
      case "down":
        return <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />
      default:
        return <div className="w-4 h-4" />
    }
  }

  const getBadgeColor = (badge: string) => {
    const colors = {
      "Climate Champion": "bg-green-100 text-green-800",
      "Green Streak": "bg-emerald-100 text-emerald-800",
      "Efficiency Expert": "bg-blue-100 text-blue-800",
      "Renewable Pioneer": "bg-yellow-100 text-yellow-800",
      "Team Player": "bg-purple-100 text-purple-800",
      "Consistency King": "bg-indigo-100 text-indigo-800",
      "Rising Star": "bg-pink-100 text-pink-800",
    }
    return colors[badge as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="space-y-6">
      {/* Team Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team Impact</CardTitle>
            <Leaf className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-700">5.4 tons</div>
            <p className="text-xs text-gray-600">CO₂ saved this month</p>
          </CardContent>
        </Card>

        <Card className="border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Members</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-700">{teamMembers.length}</div>
            <p className="text-xs text-gray-600">Climate-conscious developers</p>
          </CardContent>
        </Card>

        <Card className="border-purple-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team Rank</CardTitle>
            <Trophy className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-700">#3</div>
            <p className="text-xs text-gray-600">Out of 47 teams globally</p>
          </CardContent>
        </Card>

        <Card className="border-orange-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Efficiency</CardTitle>
            <Zap className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-700">60%</div>
            <p className="text-xs text-gray-600">Emission reduction rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Active Challenges */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            Team Climate Challenges
          </CardTitle>
          <CardDescription>Compete together to maximize environmental impact</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teamChallenges.map((challenge) => (
              <div
                key={challenge.id}
                className={`border rounded-lg p-4 ${
                  challenge.status === "completed" ? "bg-green-50 border-green-200" : "bg-white"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      {challenge.title}
                      {challenge.status === "completed" && <Award className="w-5 h-5 text-green-600" />}
                    </h3>
                    <p className="text-gray-600 mb-2">{challenge.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{challenge.participants} participants</span>
                      <span>{challenge.daysLeft > 0 ? `${challenge.daysLeft} days left` : "Completed"}</span>
                      <span className="font-medium text-green-600">🎁 {challenge.reward}</span>
                    </div>
                  </div>
                  <Badge
                    className={
                      challenge.status === "completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                    }
                  >
                    {challenge.status}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>
                      {challenge.progress}% of {challenge.target}% target
                    </span>
                  </div>
                  <Progress value={Math.min(challenge.progress, 100)} className="h-3" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Leaderboard */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Climate Impact Leaderboard
              </CardTitle>
              <CardDescription>Top performers in carbon reduction and sustainable practices</CardDescription>
            </div>
            <div className="flex gap-2">
              {(["week", "month", "quarter"] as const).map((period) => (
                <Button
                  key={period}
                  size="sm"
                  variant={selectedPeriod === period ? "default" : "outline"}
                  onClick={() => setSelectedPeriod(period)}
                >
                  {period.charAt(0).toUpperCase() + period.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className={`flex items-center gap-4 p-4 rounded-lg border ${
                  member.name === "You" ? "bg-blue-50 border-blue-200" : "bg-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  {getRankIcon(member.rank)}
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-green-100 text-green-700">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{member.name}</h3>
                    {member.name === "You" && <Badge className="bg-blue-100 text-blue-800">You</Badge>}
                    {getTrendIcon(member.trend)}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                  <div className="flex flex-wrap gap-1">
                    {member.badges.map((badge) => (
                      <Badge key={badge} className={`text-xs ${getBadgeColor(badge)}`}>
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-green-700">{(member.carbonSaved / 1000).toFixed(1)}kg</div>
                    <div className="text-xs text-gray-600">CO₂ Saved</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-700">{member.deployments}</div>
                    <div className="text-xs text-gray-600">Deployments</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-purple-700">{member.efficiency}%</div>
                    <div className="text-xs text-gray-600">Efficiency</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-orange-700">{member.streak}</div>
                    <div className="text-xs text-gray-600">Day Streak</div>
                  </div>
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
            <h3 className="text-xl font-bold text-green-800 mb-2">🚀 Ready to climb the leaderboard?</h3>
            <p className="text-green-700 mb-4">
              Optimize your next deployment and help your team win the March Carbon Challenge!
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-green-600 hover:bg-green-700">
                <Zap className="w-4 h-4 mr-2" />
                Start Optimizing
              </Button>
              <Button variant="outline" className="border-green-300 text-green-700 bg-transparent">
                <Users className="w-4 h-4 mr-2" />
                Invite Team Member
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
