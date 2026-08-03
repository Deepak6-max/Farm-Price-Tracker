import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Sprout, TrendingUp, Users, Shield } from "lucide-react";

const Home = () => {
  return (
    <Layout>
      <div className="md:ml-64">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground py-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
              <Sprout className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Farm2Market
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-4 opacity-95">
              Empowering Farmers with Fair Prices
            </p>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Real-time market prices, instant alerts, and transparent trading for a better tomorrow
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
            <p className="text-xl text-foreground/80 leading-relaxed">
              To ensure <span className="font-semibold text-primary">fair and transparent prices</span> for farmers 
              across India by providing real-time market data, enabling informed decisions, 
              and building a sustainable agricultural ecosystem.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">Why Choose Farm2Market?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Live Market Prices</h3>
                  <p className="text-muted-foreground">
                    Get real-time mandi prices for all major crops updated daily
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Farmer Community</h3>
                  <p className="text-muted-foreground">
                    Connect with thousands of farmers across the nation
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Trusted Platform</h3>
                  <p className="text-muted-foreground">
                    Verified data from official agricultural market committees
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Start Tracking Prices Today</h2>
            <p className="text-lg opacity-90 mb-8">
              Join thousands of farmers making informed decisions with Farm2Market
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors inline-block"
              >
                View Market Prices
              </a>
              <a
                href="/contact"
                className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors inline-block"
              >
                Contact Support
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
