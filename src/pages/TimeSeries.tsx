import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const TimeSeries = () => {
  return (
    <div className="min-h-screen bg-gradient-secondary">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Time Series Analysis
              </h1>
              <p className="text-muted-foreground mt-2">
                Visualize power consumption trends over time
              </p>
            </div>
            <Button className="bg-gradient-primary">
              <Download className="mr-2 h-4 w-4" />
              Export Data
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          {/* Main Chart */}
          <Card className="bg-card shadow-soft">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Global Active Power Trend</CardTitle>
                  <CardDescription>Historical power consumption over time</CardDescription>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Last 30 Days</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-96 flex items-center justify-center bg-muted/20 rounded-lg border border-border/50">
                <div className="text-center space-y-2">
                  <div className="h-16 w-16 mx-auto rounded-full bg-gradient-primary opacity-20" />
                  <p className="text-muted-foreground">Chart will be rendered here</p>
                  <p className="text-sm text-muted-foreground/70">Connect to backend API to display data</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { label: "Average Power", value: "1.09 kW", change: "+2.4%" },
              { label: "Peak Power", value: "7.89 kW", change: "+5.1%" },
              { label: "Total Consumption", value: "2,457 kWh", change: "+1.8%" },
              { label: "Efficiency Score", value: "87%", change: "+3.2%" }
            ].map((stat, index) => (
              <Card key={index} className="bg-gradient-card shadow-soft hover:shadow-medium transition-shadow">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                  <p className="text-sm text-accent mt-1">{stat.change}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-card shadow-soft">
              <CardHeader>
                <CardTitle>Voltage Distribution</CardTitle>
                <CardDescription>Voltage fluctuations over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg border border-border/50">
                  <p className="text-muted-foreground text-sm">Voltage chart placeholder</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-soft">
              <CardHeader>
                <CardTitle>Sub-Metering Comparison</CardTitle>
                <CardDescription>Kitchen, laundry, and HVAC consumption</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg border border-border/50">
                  <p className="text-muted-foreground text-sm">Sub-metering chart placeholder</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSeries;
