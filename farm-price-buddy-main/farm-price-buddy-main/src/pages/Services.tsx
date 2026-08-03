import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface CropPrice {
  name: string;
  variety: string;
  price: number;
  unit: string;
  change: number;
  market: string;
  lastUpdated: string;
}

const Services = () => {
  const cropPrices: CropPrice[] = [
    {
      name: "Rice",
      variety: "Basmati",
      price: 3500,
      unit: "per quintal",
      change: 5.2,
      market: "Delhi Mandi",
      lastUpdated: "Today, 9:00 AM"
    },
    {
      name: "Wheat",
      variety: "Sharbati",
      price: 2100,
      unit: "per quintal",
      change: -2.1,
      market: "Indore Mandi",
      lastUpdated: "Today, 8:30 AM"
    },
    {
      name: "Cotton",
      variety: "Medium Staple",
      price: 6800,
      unit: "per quintal",
      change: 3.8,
      market: "Gujarat Mandi",
      lastUpdated: "Today, 10:00 AM"
    },
    {
      name: "Sugarcane",
      variety: "CO 86032",
      price: 310,
      unit: "per quintal",
      change: 0,
      market: "UP Mandi",
      lastUpdated: "Today, 7:45 AM"
    },
    {
      name: "Soybean",
      variety: "Yellow",
      price: 4200,
      unit: "per quintal",
      change: 4.5,
      market: "Madhya Pradesh",
      lastUpdated: "Today, 9:30 AM"
    },
    {
      name: "Maize",
      variety: "Hybrid",
      price: 1850,
      unit: "per quintal",
      change: -1.5,
      market: "Karnataka Mandi",
      lastUpdated: "Today, 8:00 AM"
    },
    {
      name: "Groundnut",
      variety: "Bold",
      price: 5500,
      unit: "per quintal",
      change: 2.8,
      market: "Rajasthan Mandi",
      lastUpdated: "Today, 10:30 AM"
    },
    {
      name: "Mustard",
      variety: "Black",
      price: 5200,
      unit: "per quintal",
      change: 1.2,
      market: "Haryana Mandi",
      lastUpdated: "Today, 9:15 AM"
    },
  ];

  const getTrendIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="w-5 h-5 text-success" />;
    if (change < 0) return <TrendingDown className="w-5 h-5 text-destructive" />;
    return <Minus className="w-5 h-5 text-muted-foreground" />;
  };

  const getTrendColor = (change: number) => {
    if (change > 0) return "text-success";
    if (change < 0) return "text-destructive";
    return "text-muted-foreground";
  };

  return (
    <Layout>
      <div className="md:ml-64">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Market Prices</h1>
            <p className="text-lg opacity-90">
              Daily updated mandi prices for major crops across India
            </p>
          </div>
        </section>

        {/* Price Cards */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-6 p-4 bg-accent/10 border-l-4 border-accent rounded-lg">
              <p className="text-sm font-medium">
                <span className="text-accent">●</span> All prices are updated in real-time from verified mandi sources
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {cropPrices.map((crop, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-all hover:border-primary/50">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl text-primary mb-1">{crop.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{crop.variety}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {getTrendIcon(crop.change)}
                        <span className={`font-semibold ${getTrendColor(crop.change)}`}>
                          {crop.change > 0 ? "+" : ""}{crop.change}%
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center py-3 px-4 bg-muted/50 rounded-lg">
                      <span className="text-sm text-muted-foreground">Current Price</span>
                      <span className="text-2xl font-bold text-primary">
                        ₹{crop.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">Per: </span>{crop.unit}
                    </div>
                    <div className="flex justify-between text-sm border-t pt-3">
                      <span className="text-muted-foreground">
                        <span className="font-medium text-foreground">Market:</span> {crop.market}
                      </span>
                      <span className="text-muted-foreground">{crop.lastUpdated}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Info Box */}
            <Card className="mt-8 bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">Important Information</h3>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Prices are indicative and may vary based on quality and market conditions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Data is sourced from Agricultural Produce Market Committee (APMC) mandis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>For bulk transactions, please contact your local mandi office</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Set up price alerts in the Notifications section for your preferred crops</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;
