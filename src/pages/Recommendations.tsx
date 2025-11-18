import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Lightbulb, TrendingDown, Zap, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const Recommendations = () => {
  const recommendations = [
    {
      id: 1,
      title: "Shift Peak Usage Hours",
      impact: "High",
      savings: "$45/month",
      description: "Your peak consumption occurs at 7-9 PM. Consider running heavy appliances during off-peak hours (11 PM - 6 AM) to reduce costs.",
      icon: Clock,
      category: "Usage Pattern"
    },
    {
      id: 2,
      title: "Address High Voltage Events",
      impact: "Medium",
      savings: "$28/month",
      description: "Detected voltage spikes during evening hours. Installing a voltage stabilizer could prevent appliance damage and reduce energy waste.",
      icon: Zap,
      category: "Energy Quality"
    },
    {
      id: 3,
      title: "Optimize Weekend Consumption",
      impact: "Medium",
      savings: "$32/month",
      description: "Weekend usage is 15% higher than weekdays. Review appliance usage patterns on weekends to identify optimization opportunities.",
      icon: TrendingDown,
      category: "Behavioral"
    },
    {
      id: 4,
      title: "Reduce Standby Power",
      impact: "Low",
      savings: "$12/month",
      description: "Baseline consumption remains at 0.3 kW even during low-activity hours. Use smart plugs to eliminate standby power drain.",
      icon: Lightbulb,
      category: "Efficiency"
    },
  ];

  const metrics = [
    { label: "Potential Monthly Savings", value: "$117", icon: DollarSign },
    { label: "Annual Reduction", value: "1,240 kWh", icon: TrendingDown },
    { label: "Optimization Score", value: "72/100", icon: Zap },
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
              AI Recommendations
            </h1>
            <p className="text-muted-foreground mt-2">
              Personalized suggestions to optimize your energy usage
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Savings Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="bg-gradient-card shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                      <p className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                        {metric.value}
                      </p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center">
                      <metric.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recommendations List */}
          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <Card 
                key={rec.id}
                className="bg-card shadow-soft hover:shadow-medium transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${
                        rec.impact === 'High' ? 'from-primary to-chart-3' :
                        rec.impact === 'Medium' ? 'from-accent to-chart-4' :
                        'from-chart-5 to-chart-2'
                      } flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Lightbulb className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl">{rec.title}</CardTitle>
                          <Badge 
                            variant={rec.impact === 'High' ? 'default' : 'secondary'}
                            className={rec.impact === 'High' ? 'bg-gradient-primary' : ''}
                          >
                            {rec.impact} Impact
                          </Badge>
                          <Badge variant="outline" className="text-accent border-accent">
                            {rec.category}
                          </Badge>
                        </div>
                        <CardDescription className="text-base">
                          {rec.description}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <p className="text-sm text-muted-foreground">Est. Savings</p>
                      <p className="text-2xl font-bold text-accent">{rec.savings}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-gradient-primary">
                      Learn More
                    </Button>
                    <Button size="sm" variant="outline">
                      Mark as Done
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Implementation Guide */}
          <Card className="bg-gradient-card shadow-medium">
            <CardHeader>
              <CardTitle>Implementation Guide</CardTitle>
              <CardDescription>Steps to maximize your energy savings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Monitor and Track</h4>
                      <p className="text-sm text-muted-foreground">
                        Use this dashboard daily to monitor your consumption patterns and identify trends.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Prioritize Actions</h4>
                      <p className="text-sm text-muted-foreground">
                        Start with high-impact recommendations for maximum savings potential.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Implement Changes</h4>
                      <p className="text-sm text-muted-foreground">
                        Apply recommendations gradually and measure their impact over 2-3 weeks.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Review Results</h4>
                      <p className="text-sm text-muted-foreground">
                        Check back regularly to see your progress and adjust strategies as needed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Import Clock here to fix the reference
import { Clock } from "lucide-react";

export default Recommendations;
