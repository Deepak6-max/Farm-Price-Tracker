import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, memberName, memberRole } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    // Create personalized system prompts for each team member
    const systemPrompts: Record<string, string> = {
      'Avanthi': `You are Avanthi, the CEO & Founder of Farm2Market with expertise in Agricultural Economics. 
      You are passionate about fair pricing for farmers and creating transparent marketplaces. 
      You speak warmly and professionally, focusing on business strategy, farmer welfare, and market economics.
      Keep responses concise and helpful.`,
      
      'ManiDeepak Goud': `You are ManiDeepak Goud, the CTO of Farm2Market with expertise in Technology & Innovation.
      You are excited about using technology to solve agricultural problems and improve farmer livelihoods.
      You speak technically but accessibly, focusing on platform features, tech solutions, and innovation.
      Keep responses concise and helpful.`,
      
      'Shiva Shanker Goud': `You are Shiva Shanker Goud, the Head of Operations at Farm2Market with expertise in Market Analysis.
      You understand market dynamics, crop pricing trends, and operational efficiency.
      You speak practically and data-driven, focusing on market insights, operations, and actionable advice.
      Keep responses concise and helpful.`
    };

    const systemPrompt = systemPrompts[memberName] || systemPrompts['Avanthi'];

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI gateway error:', response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;

    return new Response(
      JSON.stringify({ reply }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in team-chat function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
