import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, TrendingUp, AlertTriangle, Layers, Clock, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const features = [
    {
      icon: Activity,
      title: "Time Series Analysis",
      description: "Visualize power consumption trends over time with interactive charts",
      path: "/time-series",
      gradient: "from-primary to-chart-3"
    },
    {
      icon: TrendingUp,
      title: "Forecasting",
      description: "Predict future energy consumption using ARIMA models",
      path: "/forecasting",
      gradient: "from-accent to-chart-4"
    },
    {
      icon: AlertTriangle,
      title: "Anomaly Detection",
      description: "Identify unusual consumption patterns and potential issues",
      path: "/anomaly",
      gradient: "from-destructive to-orange-500"
    },
    {
      icon: Layers,
      title: "Clustering Analysis",
      description: "Group similar consumption patterns for better insights",
      path: "/clustering",
      gradient: "from-chart-5 to-chart-2"
    },
    {
      icon: Clock,
      title: "Pattern Analysis",
      description: "Discover hourly and daily consumption patterns",
      path: "/patterns",
      gradient: "from-chart-2 to-primary"
    },
    {
      icon: Zap,
      title: "Recommendations",
      description: "Get AI-powered suggestions to optimize energy usage",
      path: "/recommendations",
      gradient: "from-chart-4 to-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-primary py-20 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
              <Zap className="h-4 w-4" />
              Power Consumption Analytics
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Smart Energy
              <br />
              <span className="text-white/90">Analysis Dashboard</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Analyze household power consumption patterns with advanced machine learning algorithms and beautiful visualizations
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto max-w-6xl px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Data Points", value: "2M+", icon: Activity },
            { label: "Analysis Types", value: "6", icon: Layers },
            { label: "Accuracy", value: "98%", icon: TrendingUp }
          ].map((stat, index) => (
            <Card key={index} className="bg-card shadow-soft hover:shadow-medium transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl font-bold text-foreground">
            Comprehensive Analysis Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore your power consumption data with our suite of advanced analytical features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group bg-gradient-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardHeader>
                <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to={feature.path}>
                  <Button 
                    className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                  >
                    View Analysis
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Data Overview Section */}
      <section className="container mx-auto max-w-6xl px-4 pb-20">
        <Card className="bg-gradient-card shadow-medium">
          <CardHeader>
            <CardTitle className="text-2xl">Dataset Overview</CardTitle>
            <CardDescription>
              Individual Household Electric Power Consumption Data
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Measured Variables</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Global Active Power (kilowatts)</li>
                  <li>• Global Reactive Power (kilowatts)</li>
                  <li>• Voltage (volts)</li>
                  <li>• Global Intensity (amperes)</li>
                  <li>• Sub-metering 1, 2, 3 (watt-hours)</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Analysis Features</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Time series trend analysis</li>
                  <li>• ARIMA-based forecasting</li>
                  <li>• Isolation Forest anomaly detection</li>
                  <li>• K-Means clustering</li>
                  <li>• Pattern recognition (hourly/daily)</li>
                  <li>• AI-powered recommendations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Dashboard;
