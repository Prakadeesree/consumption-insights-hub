import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar as CalendarIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Patterns = () => {
  const hourlyPeaks = [
    { hour: "08:00", usage: "High", reason: "Morning routine" },
    { hour: "13:00", usage: "Medium", reason: "Lunch preparation" },
    { hour: "19:00", usage: "Very High", reason: "Evening peak" },
    { hour: "22:00", usage: "Medium", reason: "Night activities" },
  ];

  const weekdayPatterns = [
    { day: "Monday", avg: "1.12 kW", peak: "8.1 kW" },
    { day: "Tuesday", avg: "1.08 kW", peak: "7.9 kW" },
    { day: "Wednesday", avg: "1.15 kW", peak: "8.4 kW" },
    { day: "Thursday", avg: "1.11 kW", peak: "8.2 kW" },
    { day: "Friday", avg: "1.19 kW", peak: "8.6 kW" },
    { day: "Saturday", avg: "1.25 kW", peak: "9.1 kW" },
    { day: "Sunday", avg: "1.22 kW", peak: "8.9 kW" },
  ];

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
          <div>
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Pattern Analysis
            </h1>
            <p className="text-muted-foreground mt-2">
              Discover hourly and daily consumption patterns
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Hourly Pattern */}
          <Card className="bg-card shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Hourly Consumption Pattern
              </CardTitle>
              <CardDescription>Average power usage throughout the day</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center bg-muted/20 rounded-lg border border-border/50">
                <div className="text-center space-y-2">
                  <Clock className="h-16 w-16 mx-auto text-primary/30" />
                  <p className="text-muted-foreground">24-hour consumption heatmap will be rendered here</p>
                  <p className="text-sm text-muted-foreground/70">Showing peak hours and usage intensity</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Peak Hours */}
          <Card className="bg-gradient-card shadow-soft">
            <CardHeader>
              <CardTitle>Peak Usage Hours</CardTitle>
              <CardDescription>Identify high-consumption time periods</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {hourlyPeaks.map((peak, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-lg bg-background border border-border hover:shadow-soft transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-foreground">{peak.hour}</span>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        peak.usage === 'Very High' ? 'bg-destructive/20 text-destructive' :
                        peak.usage === 'High' ? 'bg-orange-500/20 text-orange-500' :
                        'bg-accent/20 text-accent'
                      }`}>
                        {peak.usage}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{peak.reason}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Daily Pattern */}
          <Card className="bg-card shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-primary" />
                Weekly Consumption Pattern
              </CardTitle>
              <CardDescription>Comparison of usage across weekdays</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center bg-muted/20 rounded-lg border border-border/50 mb-6">
                <div className="text-center space-y-2">
                  <CalendarIcon className="h-16 w-16 mx-auto text-primary/30" />
                  <p className="text-muted-foreground">Weekly pattern chart will be rendered here</p>
                  <p className="text-sm text-muted-foreground/70">Bar chart showing daily averages</p>
                </div>
              </div>

              <div className="space-y-3">
                {weekdayPatterns.map((day, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-semibold text-foreground w-28">{day.day}</span>
                    <div className="flex-1 mx-4">
                      <div className="h-2 bg-background rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-primary transition-all duration-500"
                          style={{ width: `${(parseFloat(day.avg) / 1.25) * 100}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex gap-6 text-sm">
                      <div>
                        <span className="text-muted-foreground">Avg: </span>
                        <span className="font-semibold text-foreground">{day.avg}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Peak: </span>
                        <span className="font-semibold text-primary">{day.peak}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Seasonal Insights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-card shadow-soft">
              <CardHeader>
                <CardTitle>Weekday vs Weekend</CardTitle>
                <CardDescription>Consumption comparison</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Weekday Average</span>
                      <span className="font-semibold text-foreground">1.13 kW</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-primary w-[85%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Weekend Average</span>
                      <span className="font-semibold text-foreground">1.24 kW</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-accent to-chart-4 w-[93%]" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-soft">
              <CardHeader>
                <CardTitle>Key Insights</CardTitle>
                <CardDescription>Pattern analysis findings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Peak consumption occurs at 7-9 PM consistently</p>
                <p>• Weekend usage is 9.7% higher than weekdays</p>
                <p>• Lowest consumption is between 2-5 AM</p>
                <p>• Friday evenings show highest weekly peak</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patterns;
