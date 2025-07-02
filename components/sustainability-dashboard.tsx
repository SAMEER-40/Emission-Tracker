"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function SustainabilityDashboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sustainability Report</CardTitle>
        <CardDescription>Generate audit-ready emissions and sustainability reports.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600">
          Coming soon: detailed KPIs, compliance metrics, and downloadable PDF exports.
        </p>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Download Sample Report
        </Button>
      </CardContent>
    </Card>
  )
}
