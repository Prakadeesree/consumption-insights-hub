import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Forecasting = () => {
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
                Power Forecasting
              </h1>
              <p className="text-muted-foreground mt-2">
                ARIMA-based predictions for future consumption
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">7 Days</Button>
              <Button className="bg-gradient-primary">30 Days</Button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Forecast Chart */}
          <Card className="bg-card shadow-medium">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Consumption Forecast
                  </CardTitle>
                  <CardDescription>Predicted power usage for the next 30 days</CardDescription>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-medium text-primary">98% Accuracy</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-96 flex items-center justify-center bg-muted/20 rounded-lg border border-border/50">
                <div className="text-center space-y-2">
                  <TrendingUp className="h-16 w-16 mx-auto text-primary/30" />
                  <p className="text-muted-foreground">Forecast chart will be rendered here</p>
                  <p className="text-sm text-muted-foreground/70">ARIMA model predictions</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Forecast Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-card shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Predicted Average</CardTitle>
                <CardDescription>Next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  1.15 kW
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  <span className="text-accent">+5.2%</span> from current average
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Peak Forecast</CardTitle>
                <CardDescription>Maximum expected load</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  8.24 kW
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Expected on <span className="text-accent font-medium">Dec 25</span>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Model Accuracy</CardTitle>
                <CardDescription>ARIMA performance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  97.8%
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  MAE: <span className="text-accent font-medium">0.08 kW</span>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Confidence Intervals */}
          <Card className="bg-card shadow-soft">
            <CardHeader>
              <CardTitle>Forecast Confidence</CardTitle>
              <CardDescription>Prediction intervals for next 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg border border-border/50">
                <p className="text-muted-foreground text-sm">Confidence interval chart placeholder</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Forecasting;
