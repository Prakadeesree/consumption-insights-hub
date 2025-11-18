import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Anomaly = () => {
  const anomalies = [
    { date: "2024-11-15", time: "14:30", power: "9.2 kW", severity: "high", status: "unresolved" },
    { date: "2024-11-14", time: "22:15", power: "0.1 kW", severity: "medium", status: "resolved" },
    { date: "2024-11-12", time: "03:45", power: "11.5 kW", severity: "high", status: "unresolved" },
    { date: "2024-11-10", time: "18:20", power: "8.9 kW", severity: "low", status: "resolved" },
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
              Anomaly Detection
            </h1>
            <p className="text-muted-foreground mt-2">
              Identify unusual consumption patterns using Isolation Forest
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Alert Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-gradient-card shadow-soft border-l-4 border-l-destructive">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Critical Anomalies</p>
                    <p className="text-3xl font-bold text-destructive mt-1">2</p>
                  </div>
                  <XCircle className="h-12 w-12 text-destructive/30" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-soft border-l-4 border-l-accent">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Resolved Issues</p>
                    <p className="text-3xl font-bold text-accent mt-1">12</p>
                  </div>
                  <CheckCircle className="h-12 w-12 text-accent/30" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-soft border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Detection Rate</p>
                    <p className="text-3xl font-bold text-primary mt-1">99.2%</p>
                  </div>
                  <AlertTriangle className="h-12 w-12 text-primary/30" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Anomaly Visualization */}
          <Card className="bg-card shadow-medium">
            <CardHeader>
              <CardTitle>Anomaly Detection Timeline</CardTitle>
              <CardDescription>Isolation Forest algorithm results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96 flex items-center justify-center bg-muted/20 rounded-lg border border-border/50">
                <div className="text-center space-y-2">
                  <AlertTriangle className="h-16 w-16 mx-auto text-destructive/30" />
                  <p className="text-muted-foreground">Anomaly timeline chart will be rendered here</p>
                  <p className="text-sm text-muted-foreground/70">Showing detected outliers and normal patterns</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Anomaly List */}
          <Card className="bg-card shadow-soft">
            <CardHeader>
              <CardTitle>Recent Anomalies</CardTitle>
              <CardDescription>Detected unusual consumption events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {anomalies.map((anomaly, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                        anomaly.severity === 'high' ? 'bg-destructive/20' : 
                        anomaly.severity === 'medium' ? 'bg-orange-500/20' : 'bg-yellow-500/20'
                      }`}>
                        <AlertTriangle className={`h-5 w-5 ${
                          anomaly.severity === 'high' ? 'text-destructive' : 
                          anomaly.severity === 'medium' ? 'text-orange-500' : 'text-yellow-500'
                        }`} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          {anomaly.date} at {anomaly.time}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Unusual power reading: <span className="font-semibold">{anomaly.power}</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge 
                        variant={anomaly.severity === 'high' ? 'destructive' : 'secondary'}
                        className="capitalize"
                      >
                        {anomaly.severity}
                      </Badge>
                      <Badge 
                        variant={anomaly.status === 'resolved' ? 'secondary' : 'outline'}
                        className="capitalize"
                      >
                        {anomaly.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Anomaly;
