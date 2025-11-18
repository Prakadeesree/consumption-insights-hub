import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const Clustering = () => {
  const clusters = [
    { 
      id: 1, 
      name: "Low Usage", 
      count: 342, 
      avgPower: "0.45 kW", 
      color: "from-chart-4 to-chart-5",
      description: "Nighttime and inactive periods"
    },
    { 
      id: 2, 
      name: "Moderate Usage", 
      count: 578, 
      avgPower: "1.2 kW", 
      color: "from-primary to-chart-3",
      description: "Regular daily activities"
    },
    { 
      id: 3, 
      name: "High Usage", 
      count: 189, 
      avgPower: "3.8 kW", 
      color: "from-accent to-chart-2",
      description: "Peak consumption hours"
    },
    { 
      id: 4, 
      name: "Extreme Usage", 
      count: 45, 
      avgPower: "7.2 kW", 
      color: "from-destructive to-orange-500",
      description: "Heavy appliance usage"
    },
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
              Clustering Analysis
            </h1>
            <p className="text-muted-foreground mt-2">
              K-Means clustering of consumption patterns
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Cluster Visualization */}
          <Card className="bg-card shadow-medium">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-primary" />
                    Cluster Distribution
                  </CardTitle>
                  <CardDescription>K-Means clustering with k=4 optimal clusters</CardDescription>
                </div>
                <Badge className="bg-gradient-primary">
                  Silhouette Score: 0.87
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-96 flex items-center justify-center bg-muted/20 rounded-lg border border-border/50">
                <div className="text-center space-y-2">
                  <Layers className="h-16 w-16 mx-auto text-primary/30" />
                  <p className="text-muted-foreground">Cluster scatter plot will be rendered here</p>
                  <p className="text-sm text-muted-foreground/70">3D visualization of consumption clusters</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cluster Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clusters.map((cluster) => (
              <Card 
                key={cluster.id}
                className="bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${cluster.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <span className="text-white font-bold text-lg">{cluster.id}</span>
                    </div>
                    <Badge variant="secondary" className="text-sm">
                      {cluster.count} readings
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{cluster.name}</CardTitle>
                  <CardDescription>{cluster.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Average Power</span>
                      <span className="text-lg font-semibold bg-gradient-primary bg-clip-text text-transparent">
                        {cluster.avgPower}
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${cluster.color} transition-all duration-500`}
                        style={{ width: `${(cluster.count / 578) * 100}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Cluster Insights */}
          <Card className="bg-card shadow-soft">
            <CardHeader>
              <CardTitle>Cluster Insights</CardTitle>
              <CardDescription>Key findings from clustering analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Optimal Clusters</h4>
                    <p className="text-sm text-muted-foreground">
                      Using the elbow method and silhouette analysis, k=4 was determined to be the optimal number of clusters for this dataset.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Usage Patterns</h4>
                    <p className="text-sm text-muted-foreground">
                      Most readings (50.4%) fall into the moderate usage cluster, indicating stable daily consumption patterns.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Anomalies</h4>
                    <p className="text-sm text-muted-foreground">
                      The extreme usage cluster represents only 3.9% of readings but accounts for 28% of total consumption.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Optimization</h4>
                    <p className="text-sm text-muted-foreground">
                      Reducing high usage events by 20% could lead to significant energy savings and cost reduction.
                    </p>
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

export default Clustering;
