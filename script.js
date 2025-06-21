// AI Data (inlined directly)
const aiData = [
    {
        "category": "Generative AI Models",
        "name": "Scribe",
        "details": {
            "Best for": "Summarizing articles, writing reports, and academic content.",
            "Pros": "Streamlines writing, supports multiple formats, and is excellent for training and documentation.",
            "Cons": "It lacks deep creative storytelling and may require human editing for nuance.",
            "Key features": "Dedicated AI writing assistant, generates content in diverse styles and formats, summarizes articles, creates reports, and aids academic writing, assists in training and documentation, simplifies documenting complex tasks."
        }
    },
    {
        "category": "Generative AI Models",
        "name": "ChatGPT",
        "details": {
            "Best for": "Customer support, creative writing, and brainstorming.",
            "Pros": "Generates lifelike, contextually relevant text and assists with ideation.",
            "Cons": "Can sometimes produce generic responses, lacks domain-specific accuracy.",
            "Key features": "Generates lifelike, contextually relevant responses, supports creative writing and marketing content creation, assists with brainstorming and resolving creative blocks."
        }
    },
    {
        "category": "Generative AI Models",
        "name": "Copy.ai",
        "details": {
            "Best for": "Crafting marketing copy, slogans, and headlines.",
            "Pros": "High-converting copy, fast blog writing, supports multiple formats.",
            "Cons": "Limited for in-depth, long-form content, may need refinement.",
            "Key features": "Generates high-converting copy for emails, social media, and ads, offers faster blog writing with intuitive prompts, supports content creation in multiple formats."
        }
    },
    {
        "category": "Generative AI Models",
        "name": "Jasper",
        "details": {
            "Best for": "Marketing campaigns, blog posts, sales copy, and product descriptions.",
            "Pros": "Customizes content using Brand Voice and integrates with Zapier.",
            "Cons": "Heavily focused on marketing, not ideal for general writing.",
            "Key features": "Customizes content using its Brand Voice tool, integrates with Zapier for seamless workflows, analyzes user input to generate highly engaging material."
        }
    },
    {
        "category": "Generative AI Models",
        "name": "Claude",
        "details": {
            "Best for": "Conversational AI, document summarization, and knowledge retrieval.",
            "Pros": "Generates detailed, context-aware responses and provides accurate summarization.",
            "Cons": "Limited integration with third-party tools.",
            "Key features": "Advanced language understanding for in-depth discussions, summarizes and extracts key insights from documents, supports research-based writing and knowledge retrieval."
        }
    },
    {
        "category": "Generative AI Models",
        "name": "Cohere",
        "details": {
            "Best for": "AI-powered text generation and natural language understanding.",
            "Pros": "Provides API access for text generation, embeddings, and classification.",
            "Cons": "Requires technical knowledge for integration.",
            "Key features": "Generates text for chatbots, marketing, and search optimization, supports natural language processing (NLP) applications, customizable AI models for various industries."
        }
    },
    {
        "category": "Generative AI Models",
        "name": "Gemini",
        "details": {
            "Best for": "AI-powered search, reasoning, and text generation.",
            "Pros": "Integrates with Google\u2019s AI ecosystem and provides structured responses.",
            "Cons": "Limited availability for commercial applications.",
            "Key features": "AI-powered search assistant for research and insights, generates structured responses and explanations, supports multilingual content creation."
        }
    },
    {
        "category": "Generative AI Models",
        "name": "Bard",
        "details": {
            "Best for": "Google\u2019s AI chatbot for research, writing, and ideation.",
            "Pros": "Provides real-time web-based responses and fact-checking.",
            "Cons": "It is still evolving and may produce inconsistent responses.",
            "Key features": "AI-generated content with integrated Google search, summarizes articles and assists in writing projects, supports multiple industries and content styles."
        }
    },
    {
        "category": "Generative AI Models",
        "name": "Research Rabbit",
        "details": {
            "Best for": "AI research assistant for academic content and literature review.",
            "Pros": "Helps with citation management, research synthesis, and literature mapping.",
            "Cons": "Limited beyond academic research fields.",
            "Key features": "Assists in academic research and literature review, provides automated citation management, helps with summarizing and connecting research papers."
        }
    },
    {
        "category": "Generative AI Models",
        "name": "DALL-E 2",
        "details": {
            "Best for": "Generating images from text descriptions.",
            "Pros": "Produces detailed, high-quality visuals support multiple styles.",
            "Cons": "May struggle with complex prompts and requires fine-tuning for accuracy.",
            "Key features": "Produces intricate visuals based on textual descriptions, offers versatility in styles and genres for diverse projects, enables high-level concept visualization."
        }
    },
    {
        "category": "Generative AI Models",
        "name": "Midjourney",
        "details": {
            "Best for": "Creating artistic, high-quality visuals.",
            "Pros": "Strong artistic styling, supports collaborative refinement.",
            "Cons": "Limited control over specific elements, sometimes overly stylized.",
            "Key features": "Generates visuals in photorealistic and abstract styles, supports collaboration within an active community, adapts prompts to refine artistic outputs."
        }
    },
    {
        "category": "Generative AI Models",
        "name": "Adobe Firefly",
        "details": {
            "Best for": "Professional design, seamless integration with Adobe tools.",
            "Pros": "AI-driven templates, generates and edits visuals efficiently.",
            "Cons": "It requires an Adobe ecosystem, and beginners have a steep learning curve.",
            "Key features": "Generates and edits visuals effortlessly, includes AI-driven templates for faster workflows, supports various design formats, from social media to marketing assets."
        }
    },
    {
        "category": "Generative AI Models",
        "name": "Canva AI",
        "details": {
            "Best for": "Quick, professional-grade graphic design.",
            "Pros": "Drag-and-drop interface, extensive templates, AI-assisted suggestions.",
            "Cons": "Limited customization compared to professional design tools.",
            "Key features": "Includes a drag-and-drop interface for easy customization, suggests designs and templates based on user inputs, offers a comprehensive brand kit for consistent visual identity."
        }
    },
    {
        "category": "Generative AI Models",
        "name": "GitHub Copilot",
        "details": {
            "Best for": "Enhancing developer productivity with real-time coding suggestions.",
            "Pros": "Seamlessly integrates with editors and supports multiple languages.",
            "Cons": "It may generate incorrect or insecure code and requires developer oversight.",
            "Key features": "Seamlessly integrates with popular code editors such as Visual Studio Code, generates code snippets and explanations, supports multiple programming languages, adapts to individual coding styles for personalized recommendations.",
            "Generative Adversarial Networks (GANs)": "Best for image duplication and synthetic data generation.",
            "Transformer-Based Models": "Best for text generation and content/code completion\u2014subsets include generative pre-trained transformer (GPT) and Bidirectional Encoder Representations from Transformers (BERT) models.",
            "Diffusion Models": "Best for image generation and video/image synthesis.",
            "Variational Autoencoders (VAEs)": "Best for image, audio, and video content creation, especially when synthetic data needs to be photorealistic.",
            "Unimodal Models": "Models that are set up to accept only one data input format; most generative AI models today are unimodal models.",
            "Multimodal Models": "Designed to accept multiple types of inputs and prompts when generating outputs\u2014for example, GPT-4 can accept both text and images as inputs.",
            "Large Language Models": "Designed to generate and complete written content at scale, these are the most popular and well-known type of generative AI model right now.",
            "Neural Radiance Fields (NeRFs)": "Emerging neural network technology that can be used to generate 3D imagery based on 2D image inputs."
        }
    },
    {
        "category": "Comparing Generative AI Tools",
        "name": "Non-Grounded Tools",
        "details": {
            "Best for": "Brainstorming, drafting, simplifying complex ideas.",
            "Examples": "ChatGPT (Free), Claude (Free & Paid), NotebookLM (Free), Deepseek (Free)"
        }
    },
    {
        "category": "Comparing Generative AI Tools",
        "name": "Grounded Tools",
        "details": {
            "Best for": "Research, fact-checking, analyzing current events.",
            "Examples": "ChatGPT Plus (GPT-4) (Paid), Perplexity AI (Free & Paid), Microsoft Copilot (Free & Paid), Gemini (Free & Paid)"
        }
    },
    {
        "category": "AI Agent Platforms",
        "name": "Gumloop",
        "details": {
            "Best for": "Marketing teams (SEO, ads, web scraping).",
            "Pricing": "Free plan, then starts at $97 per month.",
            "Key features": "No-code tool to automate workflows in a visual interface, uses nodes, flows, and subflows, offers templates."
        }
    },
    {
        "category": "AI Agent Platforms",
        "name": "Relay.app",
        "details": {
            "Best for": "Agencies, service providers, or customer success teams.",
            "Pricing": "Includes free plan, then starts at $11.25 per month.",
            "Key features": "Automates repetitive tasks, integrates with various tools, focuses on streamlining operations."
        }
    },
    {
        "category": "AI Agents",
        "name": "Lindy",
        "details": {
            "Best for": "No-code multi-agent workflows.",
            "What it does": "Lets you build AI agents called Lindies that automate emails, meeting notes, custom workflows, and more.",
            "Who is it for": "Sales, marketing, support teams, founders, or anyone tired of repetitive work.",
            "Pros": "Build no-code AI agents for any task, over 2,500 integrations via Pipedream, connects more than 4,000 data sources via Apify, 24/7 support with step-by-step Lindy Academy lessons.",
            "Cons": "Some templates still need customization.",
            "Pricing": "Free plan (400 tasks/month), Pro ($49.99/month for 5,000 tasks/month), Business ($299.99/month for 30,000 tasks/month)."
        }
    },
    {
        "category": "AI Agents",
        "name": "IBM watsonx",
        "details": {
            "Best for": "Enterprise GenAI automations.",
            "What it does": "Builds AI agents to automate workflows, generate responses, and perform tasks using GenAI, ML, and APIs.",
            "Who is it for": "Enterprises automating HR, IT, sales, or sustainability workflows.",
            "Pros": "99% Uptime SLA, phone and SMS integration included, pipeline comparisons and leaderboards, GenAI model used: IBM granite-13b-chat, voice customization with multi-language support.",
            "Cons": "Learning Curve, tailored enterprise use can be costly for small teams.",
            "Pricing": "Lite (Free: up to 1,000 monthly active users), Plus (From $140/month: 1,000+ monthly users)."
        }
    },
    {
        "category": "AI Agents",
        "name": "CrewAI",
        "details": {
            "Best for": "Devs building AI agent teams.",
            "What it does": "Lets you build autonomous AI agents using Python to collaborate on complex tasks.",
            "Who is it for": "Developers and tech-savvy teams building AI-powered task automation.",
            "Pros": "Handles complex, multi-step tasks, agents can delegate tasks, form feedback loops, and remember past steps using short- and long-term memory.",
            "Cons": "Python-based (tricky for non-technical users), open-source (not ideal for handling confidential IP).",
            "Pricing": "Not specified (open-source).",
            "ChatGPT (GPT-4o)": "Best for overall AI image generation.",
            "Midjourney": "Best for artistic results.",
            "Reve": "Best for overall prompt adherence.",
            "Ideogram": "Best for accurate text.",
            "Stable Diffusion": "Best for customization and control of your AI images.",
            "FLUX.1": "A Stable Diffusion alternative.",
            "Adobe Firefly": "Best for integrating AI-generated images into photos.",
            "Recraft": "Best for graphic design."
        }
    },
    {
        "category": "Video Generation AIs",
        "name": "Kling AI",
        "details": {
            "Max Resolution": "1080p",
            "Free Trial": "Yes",
            "Cheapest Price (USD)": "$10/month",
            "Text to Video": "Yes",
            "Image to Video": "Yes",
            "Edit/Update Output": "Yes",
            "Max Shot Length (sec)": "10",
            "Camera Controls": "Yes",
            "Lip Sync": "Yes",
            "Sound Generation": "No"
        }
    },
    {
        "category": "Video Generation AIs",
        "name": "Runway Gen 4",
        "details": {
            "Max Resolution": "1080p",
            "Free Trial": "Yes",
            "Cheapest Price (USD)": "$12/month",
            "Text to Video": "Yes",
            "Image to Video": "Yes",
            "Edit/Update Output": "Yes",
            "Max Shot Length (sec)": "16",
            "Camera Controls": "Yes",
            "Lip Sync": "Yes",
            "Sound Generation": "No"
        }
    },
    {
        "category": "Video Generation AIs",
        "name": "Google Veo 2",
        "details": {
            "Max Resolution": "4K",
            "Free Trial": "Yes",
            "Cheapest Price (USD)": "$30/min ($0.50/sec)",
            "Text to Video": "Yes",
            "Image to Video": "No",
            "Edit/Update Output": "Yes",
            "Max Shot Length (sec)": "120",
            "Camera Controls": "Yes",
            "Lip Sync": "No",
            "Sound Generation": "No"
        }
    },
    {
        "category": "Video Generation AIs",
        "name": "OpenAI Sora",
        "details": {
            "Max Resolution": "1080p",
            "Free Trial": "No",
            "Cheapest Price (USD)": "$20/month (Plus) $200/month (Pro)",
            "Text to Video": "Yes",
            "Image to Video": "Yes",
            "Edit/Update Output": "Yes",
            "Max Shot Length (sec)": "20 (Pro); 5 (Plus)",
            "Camera Controls": "Yes",
            "Lip Sync": "Yes",
            "Sound Generation": "Yes"
        }
    },
    {
        "category": "Video Generation AIs",
        "name": "Pika Labs",
        "details": {
            "Max Resolution": "1080p",
            "Free Trial": "Yes",
            "Cheapest Price (USD)": "$8/month",
            "Text to Video": "Yes",
            "Image to Video": "Yes",
            "Edit/Update Output": "Yes",
            "Max Shot Length (sec)": "3",
            "Camera Controls": "Yes",
            "Lip Sync": "Yes",
            "Sound Generation": "No"
        }
    },
    {
        "category": "Video Generation AIs",
        "name": "HeyGen",
        "details": {
            "Max Resolution": "1080p",
            "Free Trial": "Yes",
            "Cheapest Price (USD)": "$29/month",
            "Text to Video": "Yes",
            "Image to Video": "Yes",
            "Edit/Update Output": "Yes",
            "Max Shot Length (sec)": "5",
            "Camera Controls": "No",
            "Lip Sync": "Yes",
            "Sound Generation": "Yes"
        }
    },
    {
        "category": "Video Generation AIs",
        "name": "Synthesys",
        "details": {
            "Max Resolution": "1080p",
            "Free Trial": "Yes",
            "Cheapest Price (USD)": "$29/month",
            "Text to Video": "Yes",
            "Image to Video": "Yes",
            "Edit/Update Output": "Yes",
            "Max Shot Length (sec)": "5",
            "Camera Controls": "No",
            "Lip Sync": "Yes",
            "Sound Generation": "Yes"
        }
    },
    {
        "category": "Video Generation AIs",
        "name": "Pictory",
        "details": {
            "Max Resolution": "1080p",
            "Free Trial": "Yes",
            "Cheapest Price (USD)": "$19/month",
            "Text to Video": "Yes",
            "Image to Video": "Yes",
            "Edit/Update Output": "Yes",
            "Max Shot Length (sec)": "10",
            "Camera Controls": "No",
            "Lip Sync": "No",
            "Sound Generation": "Yes"
        }
    },
    {
        "category": "Video Generation AIs",
        "name": "DeepMotion",
        "details": {
            "Max Resolution": "1080p",
            "Free Trial": "Yes",
            "Cheapest Price (USD)": "$9/month",
            "Text to Video": "No",
            "Image to Video": "Yes",
            "Edit/Update Output": "Yes",
            "Max Shot Length (sec)": "30",
            "Camera Controls": "Yes",
            "Lip Sync": "No",
            "Sound Generation": "No"
        }
    },
    {
        "category": "Video Generation AIs",
        "name": "Fliki",
        "details": {
            "Max Resolution": "1080p",
            "Free Trial": "Yes",
            "Cheapest Price (USD)": "$21/month",
            "Text to Video": "Yes",
            "Image to Video": "Yes",
            "Edit/Update Output": "Yes",
            "Max Shot Length (sec)": "5",
            "Camera Controls": "No",
            "Lip Sync": "Yes",
            "Sound Generation": "Yes"
        }
    },
    {
        "category": "Video Generation AIs",
        "name": "InVideo AI",
        "details": {
            "Max Resolution": "1080p",
            "Free Trial": "Yes",
            "Cheapest Price (USD)": "$20/month",
            "Text to Video": "Yes",
            "Image to Video": "Yes",
            "Edit/Update Output": "Yes",
            "Max Shot Length (sec)": "15",
            "Camera Controls": "No",
            "Lip Sync": "No",
            "Sound Generation": "Yes"
        }
    },
    {
        "category": "Video Generation AIs",
        "name": "Simplified",
        "details": {
            "Max Resolution": "1080p",
            "Free Trial": "Yes",
            "Cheapest Price (USD)": "$24/month",
            "Text to Video": "Yes",
            "Image to Video": "Yes",
            "Edit/Update Output": "Yes",
            "Max Shot Length (sec)": "10",
            "Camera Controls": "No",
            "Lip Sync": "Yes",
            "Sound Generation": "Yes"
        }
    },
    {
        "category": "Video Generation AIs",
        "name": "Viide.io",
        "details": {
            "Max Resolution": "1080p",
            "Free Trial": "Yes",
            "Cheapest Price (USD)": "$19/month",
            "Text to Video": "Yes",
            "Image to Video": "Yes",
            "Edit/Update Output": "Yes",
            "Max Shot Length (sec)": "5",
            "Camera Controls": "No",
            "Lip Sync": "Yes",
            "Sound Generation": "Yes"
        }
    },
    {
        "category": "Video Generation AIs",
        "name": "FlexClip",
        "details": {
            "Max Resolution": "1080p",
            "Free Trial": "Yes",
            "Cheapest Price (USD)": "$9.99/month",
            "Text to Video": "Yes",
            "Image to Video": "Yes",
            "Edit/Update Output": "Yes",
            "Max Shot Length (sec)": "10",
            "Camera Controls": "No",
            "Lip Sync": "No",
            "Sound Generation": "Yes"
        }
    },
    {
        "category": "Video Generation AIs",
        "name": "Veed.io",
        "details": {
            "Max Resolution": "1080p",
            "Free Trial": "Yes",
            "Cheapest Price (USD)": "$12/month",
            "Text to Video": "Yes",
            "Image to Video": "Yes",
            "Edit/Update Output": "Yes",
            "Max Shot Length (sec)": "5",
            "Camera Controls": "No",
            "Lip Sync": "Yes",
            "Sound Generation": "Yes"
        }
    },
    {
        "category": "Video Generation AIs",
        "name": "CapCut",
        "details": {
            "Max Resolution": "1080p",
            "Free Trial": "Yes",
            "Cheapest Price (USD)": "Free",
            "Text to Video": "Yes",
            "Image to Video": "Yes",
            "Edit/Update Output": "Yes",
            "Max Shot Length (sec)": "5",
            "Camera Controls": "No",
            "Lip Sync": "Yes",
            "Sound Generation": "Yes"
        }
    },
    {
        "category": "Video Generation AIs",
        "name": "Deepbrain AI",
        "details": {
            "Max Resolution": "1080p",
            "Free Trial": "Yes",
            "Cheapest Price (USD)": "$30/month",
            "Text to Video": "Yes",
            "Image to Video": "Yes",
            "Edit/Update Output": "Yes",
            "Max Shot Length (sec)": "5",
            "Camera Controls": "No",
            "Lip Sync": "Yes",
            "Sound Generation": "Yes"
        }
    },
    {
        "category": "Video Generation AIs",
        "name": "Viide.io",
        "details": {
            "Max Resolution": "1080p",
            "Free Trial": "Yes",
            "Cheapest Price (USD)": "$19/month",
            "Text to Video": "Yes",
            "Image to Video": "Yes",
            "Edit/Update Output": "Yes",
            "Max Shot Length (sec)": "5",
            "Camera Controls": "No",
            "Lip Sync": "Yes",
            "Sound Generation": "Yes"
        }
    },
    {
        "category": "Text Generation AIs",
        "name": "Rytr",
        "details": {
            "Best for": "Generating content for blogs, emails, and social media.",
            "Pros": "Supports over 30 languages and offers various tones.",
            "Cons": "Limited for long-form content, may require manual editing.",
            "Key features": "Supports over 30 languages and various tones, generates content for blogs, emails, and social media, offers a plagiarism checker."
        }
    },
    {
        "category": "Text Generation AIs",
        "name": "Writesonic",
        "details": {
            "Best for": "Creating high-quality articles, blog posts, and marketing copy.",
            "Pros": "Integrates with WordPress and offers a wide range of templates.",
            "Cons": "Can be expensive for high-volume content generation.",
            "Key features": "Generates high-quality articles, blog posts, and marketing copy, integrates with WordPress for seamless publishing, offers a wide range of templates for various content types."
        }
    },
    {
        "category": "Text Generation AIs",
        "name": "Anyword",
        "details": {
            "Best for": "Optimizing marketing copy for conversions.",
            "Pros": "Predictive performance scoring and integrates with various platforms.",
            "Cons": "Primarily focused on marketing, not suitable for general writing.",
            "Key features": "Optimizes marketing copy for conversions, provides predictive performance scoring, integrates with various platforms like Google Ads and Facebook Ads."
        }
    },
    {
        "category": "Text Generation AIs",
        "name": "Surfer SEO",
        "details": {
            "Best for": "Optimizing content for search engines.",
            "Pros": "Provides content outlines, keyword suggestions, and plagiarism checks.",
            "Cons": "Requires a learning curve for SEO beginners.",
            "Key features": "Optimizes content for search engines, provides content outlines and keyword suggestions, offers a plagiarism checker."
        }
    },
    {
        "category": "Text Generation AIs",
        "name": "Peppertype.ai",
        "details": {
            "Best for": "Generating creative content for marketing and sales.",
            "Pros": "Supports over 20 content types and offers various tones.",
            "Cons": "Limited for long-form content, may require manual editing.",
            "Key features": "Generates creative content for marketing and sales, supports over 20 content types and offers various tones, provides a plagiarism checker."
        }
    },
    {
        "category": "Audio Generation AIs",
        "name": "Murf.ai",
        "details": {
            "Best for": "Creating realistic voiceovers for videos, podcasts, and presentations.",
            "Pros": "Offers a wide range of voices and languages, supports custom voice cloning.",
            "Cons": "Can be expensive for high-volume usage.",
            "Key features": "Offers a wide range of realistic voices and languages, supports custom voice cloning, integrates with various platforms for seamless publishing."
        }
    },
    {
        "category": "Audio Generation AIs",
        "name": "WellSaid Labs",
        "details": {
            "Best for": "Generating high-quality voiceovers for corporate training, e-learning, and marketing.",
            "Pros": "Offers a wide range of voices and languages, supports custom voice cloning.",
            "Cons": "Can be expensive for high-volume usage.",
            "Key features": "Offers a wide range of realistic voices and languages, supports custom voice cloning, integrates with various platforms for seamless publishing."
        }
    },
    {
        "category": "Audio Generation AIs",
        "name": "Resemble.ai",
        "details": {
            "Best for": "Creating realistic voiceovers for videos, podcasts, and presentations.",
            "Pros": "Offers a wide range of voices and languages, supports custom voice cloning.",
            "Cons": "Can be expensive for high-volume usage.",
            "Key features": "Offers a wide range of realistic voices and languages, supports custom voice cloning, integrates with various platforms for seamless publishing."
        }
    },
    {
        "category": "Audio Generation AIs",
        "name": "Play.ht",
        "details": {
            "Best for": "Generating realistic voiceovers for videos, podcasts, and presentations.",
            "Pros": "Offers a wide range of voices and languages, supports custom voice cloning.",
            "Cons": "Can be expensive for high-volume usage.",
            "Key features": "Offers a wide range of realistic voices and languages, supports custom voice cloning, integrates with various platforms for seamless publishing."
        }
    },
    {
        "category": "Audio Generation AIs",
        "name": "LoVO",
        "details": {
            "Best for": "Generating realistic voiceovers for videos, podcasts, and presentations.",
            "Pros": "Offers a wide range of voices and languages, supports custom voice cloning.",
            "Cons": "Can be expensive for high-volume usage.",
            "Key features": "Offers a wide range of realistic voices and languages, supports custom voice cloning, integrates with various platforms for seamless publishing."
        }
    },
    {
        "category": "AI Agents",
        "name": "Genspark",
        "details": {
            "Best for": "Automating complex workflows and tasks.",
            "What it does": "Genspark is an AI agent designed to automate various business processes, from data analysis to customer support.",
            "Who is it for": "Businesses looking to streamline operations and improve efficiency.",
            "Pros": "Highly customizable, integrates with existing systems, reduces manual effort.",
            "Cons": "Requires initial setup and configuration, may need technical expertise.",
            "Pricing": "Contact for pricing.",
            "website": "https://www.genspark.ai/"
        }
    },
    {
        "category": "AI Agents",
        "name": "Manus",
        "details": {
            "Best for": "Autonomous task execution and problem-solving.",
            "What it does": "Manus is an autonomous AI agent capable of understanding complex instructions, performing deep research, and executing tasks across various digital environments.",
            "Who is it for": "Users and businesses requiring advanced automation and intelligent assistance.",
            "Pros": "Highly versatile, deep research capabilities, adaptable to open-ended objectives.",
            "Cons": "Requires detailed instructions for optimal performance, still under active development.",
            "Pricing": "Contact for pricing.",
            "website": "https://www.manusai.io/"
        }
    },
    {
        "category": "Latest Generative AI Models 2025",
        "name": "GPT-4.5",
        "details": {
            "Description": "OpenAI\u2019s latest experimental research model with an expanded context window and improved reasoning capabilities.",
            "Key features": "Enhanced context understanding, multi-modal reasoning, advanced problem-solving.",
            "Pricing": "Paid",
            "website": "https://openai.com/"
        }
    },
    {
        "category": "Latest Generative AI Models 2025",
        "name": "Grok 3",
        "details": {
            "Description": "Beta version of xAI\u2019s reasoning model by Elon Musk, focusing on real-time information and humor.",
            "Key features": "Real-time data access, unique humor integration, strong reasoning.",
            "Pricing": "Paid",
            "website": "https://x.ai/"
        }
    },
    {
        "category": "Latest Generative AI Models 2025",
        "name": "Gemini 2.0",
        "details": {
            "Description": "Google\u2019s next-generation multimodal AI, offering significant improvements in understanding and generation across text, image, audio, and video.",
            "Key features": "Advanced multimodal capabilities, improved efficiency, broader application.",
            "Pricing": "Freemium",
            "website": "https://gemini.google.com/"
        }
    },
    {
        "category": "Latest Generative AI Models 2025",
        "name": "Llama 4 Maverick",
        "details": {
            "Description": "Meta\u2019s latest open-source model, enhanced with improved reasoning and coding abilities.",
            "Key features": "Open-source, enhanced reasoning, improved coding.",
            "Pricing": "Free",
            "website": "https://ai.meta.com/llama/"
        }
    },
    {
        "category": "Latest Generative AI Models 2025",
        "name": "DeepSeek V3 0324",
        "details": {
            "Description": "A highly cost-effective, fast, and affordable conversational model from DeepSeek.",
            "Key features": "Cost-effective, fast, conversational.",
            "Pricing": "Free",
            "website": "https://www.deepseek.com/"
        }
    },
    {
        "category": "Latest Generative AI Models 2025",
        "name": "Ideogram",
        "details": {
            "Description": "A text-to-image model with strong instruction following and typography capabilities.",
            "Key features": "Accurate text rendering in images, high-quality image generation.",
            "Pricing": "Freemium",
            "website": "https://ideogram.ai/"
        }
    }
];

// Global state variables
let searchTerm = "";
let selectedCategories = [];
let selectedPricing = [];
let currentPage = 1;
const itemsPerPage = 9;

// SVG Icons (Lucide-react equivalents)
const SearchIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`;
const FilterIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`;
const ExternalLinkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>`;
const XIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;

// Helper function to get unique categories and pricing types
function getFilterOptions() {
    const categories = {};
    const pricingTypes = { "Free": 0, "Freemium": 0, "Paid": 0 };

    aiData.forEach(ai => {
        if (ai.category) {
            categories[ai.category] = (categories[ai.category] || 0) + 1;
        }
        // Check for pricing in details object first, then directly on AI object
        let pricing = null;
        if (ai.details && ai.details.Pricing) {
            pricing = ai.details.Pricing;
        } else if (ai.pricing) { // Fallback to direct pricing property if it exists
            pricing = ai.pricing;
        }

        if (pricing) {
            const formattedPricing = pricing.charAt(0).toUpperCase() + pricing.slice(1).toLowerCase();
            if (pricingTypes.hasOwnProperty(formattedPricing)) {
                pricingTypes[formattedPricing]++;
            }
        }
    });
    return { categories, pricingTypes };
}

let { categories, pricingTypes } = getFilterOptions();

// Function to filter AIs
function filterAIs() {
    let filtered = aiData.filter(ai => {
        const matchesSearch = (ai.name && ai.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
                              (ai.description && ai.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
                              (ai.details && Object.values(ai.details).some(detail => String(detail).toLowerCase().includes(searchTerm.toLowerCase())));
        
        const matchesCategory = selectedCategories.length === 0 || 
                                (ai.category && selectedCategories.includes(ai.category));
        
        let aiPricing = null;
        if (ai.details && ai.details.Pricing) {
            aiPricing = ai.details.Pricing;
        } else if (ai.pricing) {
            aiPricing = ai.pricing;
        }

        const matchesPricing = selectedPricing.length === 0 || 
                               (aiPricing && selectedPricing.some(price => 
                                  aiPricing.toLowerCase() === price.toLowerCase()
                                ));
        
        return matchesSearch && matchesCategory && matchesPricing;
    });
    return filtered;
}

// Function to render AI cards
function renderAICards() {
    const filtered = filterAIs();
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentAIs = filtered.slice(startIndex, endIndex);

    const aiCardsGrid = document.getElementById("ai-cards-grid");
    aiCardsGrid.innerHTML = ""; // Clear previous cards

    if (currentAIs.length === 0) {
        aiCardsGrid.innerHTML = `<p class="text-gray-300 text-center col-span-full">No AI models found matching your criteria.</p>`;
    }

    currentAIs.forEach((ai, index) => {
        const card = document.createElement("div");
        card.className = "ai-card glass-effect fade-in-up";
        card.style.animationDelay = `${index * 100}ms`;

        const aiName = ai.name || "Unknown AI";
        const aiDescription = ai.description || (ai.details && ai.details["Best for"]) || "No description available.";
        const aiPricing = (ai.details && ai.details.Pricing) || ai.pricing || "Unknown";
        const aiFeatures = (ai.details && ai.details["Key features"]) ? (Array.isArray(ai.details["Key features"]) ? ai.details["Key features"] : [ai.details["Key features"]]) : [];
        const aiWebsite = ai.website || "#";

        card.innerHTML = `
            <div class="ai-card-header">
                <div class="ai-logo-placeholder">
                    <span>${aiName.substring(0, 2).toUpperCase()}</span>
                </div>
                <div class="ai-info">
                    <h3 class="ai-name">${aiName}</h3>
                    <span class="ai-pricing">${aiPricing}</span>
                </div>
            </div>
            <p class="ai-description">${aiDescription}</p>
            <div class="ai-features">
                ${aiFeatures.slice(0, 3).map(feature => `<span class="ai-feature-tag">${feature}</span>`).join("")}
            </div>
            <a
                href="${aiWebsite}?utm_source=aidirectory&utm_medium=referral&utm_campaign=ai_discovery"
                target="_blank"
                rel="noopener noreferrer"
                class="visit-button"
            >
                ${ExternalLinkIcon}
                <span>Visit Platform</span>
            </a>
        `;
        aiCardsGrid.appendChild(card);
    });

    renderPagination(totalPages);
    updateToolCount(filtered.length);
}

// Function to update tool count
function updateToolCount(count) {
    document.getElementById("tool-count").textContent = count;
}

// Function to render pagination controls
function renderPagination(totalPages) {
    const paginationContainer = document.getElementById("pagination-container");
    paginationContainer.innerHTML = "";

    if (totalPages <= 1) return;

    const createButton = (text, page, isDisabled, isActive) => {
        const button = document.createElement("button");
        button.className = `pagination-button ${isActive ? "active" : ""}`;
        button.disabled = isDisabled;
        button.textContent = text;
        if (typeof page === "number") {
            button.onclick = () => {
                currentPage = page;
                renderAICards();
                window.scrollTo({ top: 0, behavior: "smooth" });
            };
        }
        return button;
    };

    paginationContainer.appendChild(createButton("Previous", currentPage - 1, currentPage === 1));

    const maxVisiblePages = 5;
    const pages = [];

    if (totalPages <= maxVisiblePages) {
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
    } else {
        if (currentPage <= 3) {
            for (let i = 1; i <= 4; i++) {
                pages.push(i);
            }
            pages.push("...");
            pages.push(totalPages);
        } else if (currentPage >= totalPages - 2) {
            pages.push(1);
            pages.push("...");
            for (let i = totalPages - 3; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1);
            pages.push("...");
            for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                pages.push(i);
            }
            pages.push("...");
            pages.push(totalPages);
        }
    }

    pages.forEach(page => {
        if (page === "...") {
            const ellipsis = document.createElement("span");
            ellipsis.className = "pagination-ellipsis";
            ellipsis.textContent = "...";
            paginationContainer.appendChild(ellipsis);
        } else {
            paginationContainer.appendChild(createButton(page, page, false, page === currentPage));
        }
    });

    paginationContainer.appendChild(createButton("Next", currentPage + 1, currentPage === totalPages));
}

// Function to render filter options
function renderFilterOptions() {
    const categoriesContainer = document.getElementById("categories-container");
    categoriesContainer.innerHTML = "";
    Object.entries(categories).forEach(([category, count]) => {
        const label = document.createElement("label");
        label.className = "filter-option-label";
        label.innerHTML = `
            <input type="checkbox" class="filter-checkbox" value="${category}" ${selectedCategories.includes(category) ? "checked" : ""}>
            <span class="filter-option-text">${category}</span>
            <span class="filter-option-count">${count}</span>
        `;
        label.querySelector("input").onchange = (e) => {
            if (e.target.checked) {
                selectedCategories.push(category);
            } else {
                selectedCategories = selectedCategories.filter(c => c !== category);
            }
            currentPage = 1;
            renderAICards();
            updateClearAllButton();
        };
        categoriesContainer.appendChild(label);
    });

    const pricingContainer = document.getElementById("pricing-container");
    pricingContainer.innerHTML = "";
    Object.entries(pricingTypes).forEach(([pricing, count]) => {
        const label = document.createElement("label");
        label.className = "filter-option-label";
        label.innerHTML = `
            <input type="checkbox" class="filter-checkbox" value="${pricing}" ${selectedPricing.includes(pricing) ? "checked" : ""}>
            <span class="filter-option-text">${pricing}</span>
            <span class="filter-option-count">${count}</span>
        `;
        label.querySelector("input").onchange = (e) => {
            if (e.target.checked) {
                selectedPricing.push(pricing);
            } else {
                selectedPricing = selectedPricing.filter(p => p !== pricing);
            }
            currentPage = 1;
            renderAICards();
            updateClearAllButton();
        };
        pricingContainer.appendChild(label);
    });
}

// Function to update Clear All button visibility
function updateClearAllButton() {
    const clearAllBtn = document.getElementById("clear-all-filters-btn");
    if (selectedCategories.length > 0 || selectedPricing.length > 0 || searchTerm !== "") {
        clearAllBtn.style.display = "flex";
    } else {
        clearAllBtn.style.display = "none";
    }
}

// Initial render on page load
document.addEventListener("DOMContentLoaded", () => {
    // Inject SVG icons
    document.querySelector(".search-icon").innerHTML = SearchIcon;
    document.querySelector(".filters-title-group").insertAdjacentHTML("afterbegin", FilterIcon);
    document.querySelector("#clear-all-filters-btn").insertAdjacentHTML("afterbegin", XIcon);

    // Event Listeners
    document.getElementById("search-input").addEventListener("input", (e) => {
        searchTerm = e.target.value;
        currentPage = 1;
        renderAICards();
        updateClearAllButton();
    });

    document.getElementById("search-button").addEventListener("click", () => {
        // Search is already handled by input event, this is for explicit click
        // Could add analytics or other functionality here
    });

    document.getElementById("clear-all-filters-btn").addEventListener("click", () => {
        searchTerm = "";
        selectedCategories = [];
        selectedPricing = [];
        currentPage = 1;
        document.getElementById("search-input").value = "";
        renderFilterOptions(); // Re-render filters to uncheck checkboxes
        renderAICards();
        updateClearAllButton();
    });

    // Initial renders
    renderFilterOptions();
    renderAICards();
    updateClearAllButton();
});

