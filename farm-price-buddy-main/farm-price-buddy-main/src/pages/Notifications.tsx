import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Bell, TrendingUp, TrendingDown, AlertCircle, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface Alert {
  id: number;
  type: "rise" | "fall" | "stable";
  crop: string;
  message: string;
  time: string;
  read: boolean;
}

const Notifications = () => {
  const [notifications, setNotifications] = useState({
    priceAlerts: true,
    marketUpdates: true,
    weeklyReport: false,
    newsAlerts: true,
  });

  const [alerts] = useState<Alert[]>([
    {
      id: 1,
      type: "rise",
      crop: "Rice",
      message: "Basmati rice price increased by 5.2% in Delhi Mandi",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      type: "fall",
      crop: "Wheat",
      message: "Wheat price decreased by 2.1% in Indore Mandi",
      time: "3 hours ago",
      read: false,
    },
    {
      id: 3,
      type: "rise",
      crop: "Cotton",
      message: "Cotton price surged by 3.8% in Gujarat markets",
      time: "5 hours ago",
      read: true,
    },
    {
      id: 4,
      type: "stable",
      crop: "Sugarcane",
      message: "Sugarcane prices remain stable at ₹310/quintal",
      time: "1 day ago",
      read: true,
    },
  ]);

  const handleToggle = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
    toast.success(`${key.replace(/([A-Z])/g, " $1").trim()} ${!notifications[key] ? "enabled" : "disabled"}`);
  };

  const getAlertIcon = (type: Alert["type"]) => {
    switch (type) {
      case "rise":
        return <TrendingUp className="w-5 h-5 text-success" />;
      case "fall":
        return <TrendingDown className="w-5 h-5 text-destructive" />;
      default:
        return <AlertCircle className="w-5 h-5 text-info" />;
    }
  };

  const getAlertColor = (type: Alert["type"]) => {
    switch (type) {
      case "rise":
        return "bg-success/10 border-success/20";
      case "fall":
        return "bg-destructive/10 border-destructive/20";
      default:
        return "bg-info/10 border-info/20";
    }
  };

  return (
    <Layout>
      <div className="md:ml-64">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-3">
              <Bell className="w-10 h-10" />
              <h1 className="text-4xl md:text-5xl font-bold">Notifications</h1>
            </div>
            <p className="text-lg opacity-90">
              Stay updated with real-time price alerts and market changes
            </p>
          </div>
        </section>

        <div className="container mx-auto max-w-4xl px-4 py-8 space-y-8">
          {/* Notification Settings */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Alert Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div className="space-y-1">
                  <Label htmlFor="price-alerts" className="text-base font-semibold">
                    Price Change Alerts
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified when crop prices rise or fall significantly
                  </p>
                </div>
                <Switch
                  id="price-alerts"
                  checked={notifications.priceAlerts}
                  onCheckedChange={() => handleToggle("priceAlerts")}
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div className="space-y-1">
                  <Label htmlFor="market-updates" className="text-base font-semibold">
                    Market Updates
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Daily summary of major market movements
                  </p>
                </div>
                <Switch
                  id="market-updates"
                  checked={notifications.marketUpdates}
                  onCheckedChange={() => handleToggle("marketUpdates")}
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div className="space-y-1">
                  <Label htmlFor="weekly-report" className="text-base font-semibold">
                    Weekly Reports
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive weekly market analysis
                  </p>
                </div>
                <Switch
                  id="weekly-report"
                  checked={notifications.weeklyReport}
                  onCheckedChange={() => handleToggle("weeklyReport")}
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div className="space-y-1">
                  <Label htmlFor="news-alerts" className="text-base font-semibold">
                    Agricultural News
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Important news affecting crop prices
                  </p>
                </div>
                <Switch
                  id="news-alerts"
                  checked={notifications.newsAlerts}
                  onCheckedChange={() => handleToggle("newsAlerts")}
                />
              </div>
            </CardContent>
          </Card>

          {/* Recent Alerts */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Recent Alerts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-4 rounded-lg border-2 ${getAlertColor(alert.type)} ${
                    alert.read ? "opacity-60" : ""
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">{getAlertIcon(alert.type)}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">{alert.crop}</h4>
                        {alert.read && <CheckCircle className="w-4 h-4 text-muted-foreground" />}
                      </div>
                      <p className="text-sm text-foreground/80 mb-2">{alert.message}</p>
                      <p className="text-xs text-muted-foreground">{alert.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card className="bg-accent/5 border-accent/20">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <Bell className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2 text-accent">Stay Informed</h3>
                  <p className="text-sm text-foreground/80">
                    Enable notifications to get instant updates when prices change for your tracked crops. 
                    You can customize which alerts you receive at any time.
                  </p>
                  <Button className="mt-4" variant="default">
                    Manage Crop Preferences
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Notifications;
