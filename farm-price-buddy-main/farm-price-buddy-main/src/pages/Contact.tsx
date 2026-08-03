import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <div className="md:ml-64">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Contact Us</h1>
            <p className="text-lg opacity-90">
              We're here to help farmers 24/7
            </p>
          </div>
        </section>

        <div className="container mx-auto max-w-6xl px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Helpline */}
                  <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">24/7 Helpline</h3>
                      <p className="text-2xl font-bold text-primary mb-1">1800-180-1551</p>
                      <p className="text-sm text-muted-foreground">
                        Toll-free support for all farmers
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 p-4 bg-accent/5 rounded-lg border border-accent/10">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email Support</h3>
                      <p className="text-lg font-semibold text-accent mb-1">support@farm2market.in</p>
                      <p className="text-sm text-muted-foreground">
                        We reply within 24 hours
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                    <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Head Office</h3>
                      <p className="text-foreground/80">
                        Farm2Market Technologies Pvt. Ltd.<br />
                        Sector 44, Gurugram<br />
                        Haryana - 122003, India
                      </p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                    <div className="w-12 h-12 bg-info/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-info" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Office Hours</h3>
                      <p className="text-foreground/80">
                        Monday - Saturday: 9:00 AM - 6:00 PM<br />
                        Sunday: Closed<br />
                        <span className="text-primary font-medium">Helpline: 24/7 Available</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <MessageSquare className="w-6 h-6 text-primary" />
                    <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
                  </div>
                  <p className="text-muted-foreground">
                    Have a question? Fill out the form below and we'll respond promptly
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-11"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email Address <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-11"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-11"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Message <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                      />
                    </div>

                    <Button type="submit" className="w-full h-11 text-base font-semibold">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="mt-6 bg-destructive/5 border-destructive/20">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-destructive mb-2">Emergency Support</h3>
                  <p className="text-sm text-foreground/80 mb-3">
                    For urgent market-related queries or technical issues, call our emergency helpline:
                  </p>
                  <p className="text-xl font-bold text-destructive">1800-180-1551</p>
                  <p className="text-xs text-muted-foreground mt-1">Available 24/7</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
