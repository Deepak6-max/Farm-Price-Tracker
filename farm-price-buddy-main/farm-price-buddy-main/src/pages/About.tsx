import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Heart, MessageCircle } from "lucide-react";
import TeamChatDialog from "@/components/TeamChatDialog";
import avanthiImg from "@/assets/avanthi.jpg";
import manideepakImg from "@/assets/manideepak.jpg";
import shivashankerImg from "@/assets/shivashanker.jpg";

const About = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<{
    name: string;
    role: string;
    image: string;
  } | null>(null);
  
  const teamMembers = [
    { name: "Avanthi", role: "CEO & Founder", expertise: "Agricultural Economics", image: avanthiImg },
    { name: "ManiDeepak Goud", role: "CTO", expertise: "Technology & Innovation", image: manideepakImg },
    { name: "Shiva Shanker Goud", role: "Head of Operations", expertise: "Market Analysis", image: shivashankerImg },
  ];

  const handleChatClick = (member: typeof teamMembers[0]) => {
    setSelectedMember(member);
    setChatOpen(true);
  };

  return (
    <Layout>
      <div className="md:ml-64">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Farm2Market</h1>
            <p className="text-xl opacity-90">
              Building bridges between farmers and fair market prices
            </p>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-2">
              <CardContent className="pt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3 text-primary">Our Story</h2>
                    <p className="text-foreground/80 leading-relaxed">
                      Founded in 2024, Farm2Market emerged from a simple observation: farmers needed 
                      better access to real-time market information. We started with a small team 
                      passionate about agricultural technology and a vision to empower farmers across India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3 text-primary">Our Vision</h2>
                    <p className="text-foreground/80 leading-relaxed">
                      To create a transparent, efficient, and fair agricultural marketplace where every 
                      farmer has access to real-time price information, enabling them to make informed 
                      decisions and get fair compensation for their hard work.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3 text-primary">Our Values</h2>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Transparency in all market dealings
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Empowerment through information
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Technology for social good
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Farmer-first approach
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-3">Meet Our Team</h2>
              <p className="text-foreground/70 text-lg">
                Dedicated professionals working to serve farmers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8">
                    <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary/10">
                      <img 
                        src={member.image} 
                        alt={`${member.name} - ${member.role}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">{member.expertise}</p>
                    <Button 
                      onClick={() => handleChatClick(member)}
                      className="w-full"
                      variant="outline"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat with {member.name.split(' ')[0]}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Active Farmers", value: "50K+" },
                { label: "Markets Covered", value: "500+" },
                { label: "Daily Updates", value: "1000+" },
                { label: "Crops Tracked", value: "100+" },
              ].map((stat, index) => (
                <Card key={index} className="text-center border-2">
                  <CardContent className="pt-6">
                    <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      {selectedMember && (
        <TeamChatDialog
          open={chatOpen}
          onOpenChange={setChatOpen}
          memberName={selectedMember.name}
          memberRole={selectedMember.role}
          memberImage={selectedMember.image}
        />
      )}
    </Layout>
  );
};

export default About;
