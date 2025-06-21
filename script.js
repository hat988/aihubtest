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
            "Key features": "Lite (Free: up to 1,000 monthly active users), Plus (From $140/month: 1,000+ monthly users)."
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
            "Pricing": "Not specified (open-source)."
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
            "Cheapest Price (USD)": "Free",
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
            "Cheapest Price (USD)": "$24/month",
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
        "name": "Synthesys",
        "details": {
            "Max Resolution": "1080p",
            "Free Trial": "Yes",
            "Cheapest Price (USD)": "$29/month",
            "Text to Video": "Yes",
            "Image to Video": "No",
            "Edit/Update Output": "Yes",
            "Max Shot Length (sec)": "Unlimited",
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
            "Max Shot Length (sec)": "Unlimited",
            "Camera Controls": "No",
            "Lip Sync": "No",
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
            "Max Shot Length (sec)": "Unlimited",
            "Camera Controls": "No",
            "Lip Sync": "No",
            "Sound Generation": "Yes"
        }
    },
    {
        "category": "Video Generation AIs",
        "name": "InVideo",
        "details": {
            "Max Resolution": "1080p",
            "Free Trial": "Yes",
            "Cheapest Price (USD)": "$15/month",
            "Text to Video": "Yes",
            "Image to Video": "Yes",
            "Edit/Update Output": "Yes",
            "Max Shot Length (sec)": "Unlimited",
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
            "Max Shot Length (sec)": "Unlimited",
            "Camera Controls": "No",
            "Lip Sync": "No",
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
            "Max Shot Length (sec)": "Unlimited",
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
            "Cheapest Price (USD)": "$18/month",
            "Text to Video": "Yes",
            "Image to Video": "Yes",
            "Edit/Update Output": "Yes",
            "Max Shot Length (sec)": "Unlimited",
            "Camera Controls": "No",
            "Lip Sync": "No",
            "Sound Generation": "Yes"
        }
    },
    {
        "category": "Video Generation AIs",
        "name": "Kapwing",
        "details": {
            "Max Resolution": "1080p",
            "Free Trial": "Yes",
            "Cheapest Price (USD)": "$16/month",
            "Text to Video": "Yes",
            "Image to Video": "Yes",
            "Edit/Update Output": "Yes",
            "Max Shot Length (sec)": "Unlimited",
            "Camera Controls": "No",
            "Lip Sync": "No",
            "Sound Generation": "Yes"
        }
    },
    {
        "category": "Video Generation AIs",
        "name": "Descript",
        "details": {
            "Max Resolution": "1080p",
            "Free Trial": "Yes",
            "Cheapest Price (USD)": "$12/month",
            "Text to Video": "Yes",
            "Image to Video": "Yes",
            "Edit/Update Output": "Yes",
            "Max Shot Length (sec)": "Unlimited",
            "Camera Controls": "No",
            "Lip Sync": "Yes",
            "Sound Generation": "Yes"
        }
    },
    {
        "category": "Text Generation AIs",
        "name": "Writesonic",
        "details": {
            "Best for": "Generating high-quality articles, blog posts, and marketing copy.",
            "Pros": "Offers a wide range of templates, integrates with Surfer SEO, and supports multiple languages.",
            "Cons": "Can be expensive for high-volume content generation.",
            "Key features": "AI article writer, paraphrasing tool, content rephraser, and grammar checker."
        }
    },
    {
        "category": "Text Generation AIs",
        "name": "Rytr",
        "details": {
            "Best for": "Quick content generation for various use cases, including social media and emails.",
            "Pros": "Affordable, user-friendly interface, and supports over 30 languages.",
            "Cons": "Limited long-form content capabilities.",
            "Key features": "AI writing assistant, content generator, and copywriting tool."
        }
    },
    {
        "category": "Text Generation AIs",
        "name": "Peppertype.ai",
        "details": {
            "Best for": "Creating engaging content for marketing, sales, and product descriptions.",
            "Pros": "Provides unique content ideas, supports multiple content formats, and offers a plagiarism checker.",
            "Cons": "May require some manual editing for complex topics.",
            "Key features": "AI content generator, content rewriter, and blog idea generator."
        }
    },
    {
        "category": "Text Generation AIs",
        "name": "Anyword",
        "details": {
            "Best for": "Optimizing marketing copy for better conversion rates.",
            "Pros": "Predictive performance scoring, integrates with various marketing platforms, and offers custom keywords.",
            "Cons": "Can be complex for beginners due to advanced features.",
            "Key features": "AI copywriting tool, content optimization, and predictive performance scoring."
        }
    },
    {
        "category": "Text Generation AIs",
        "name": "ContentBot.ai",
        "details": {
            "Best for": "Automating content creation for websites, blogs, and social media.",
            "Pros": "Offers a wide range of content types, supports long-form content, and provides a WordPress plugin.",
            "Cons": "Output quality can vary, requiring human review.",
            "Key features": "AI content generator, blog post writer, and social media content creator."
        }
    },
    {
        "category": "Audio Generation AIs",
        "name": "Murf.ai",
        "details": {
            "Best for": "Generating realistic voiceovers for videos, podcasts, and presentations.",
            "Pros": "Offers a wide range of natural-sounding voices, supports multiple languages, and provides custom pronunciation.",
            "Cons": "Can be expensive for high-volume usage.",
            "Key features": "AI voice generator, text-to-speech, and voice cloning."
        }
    },
    {
        "category": "Audio Generation AIs",
        "name": "Play.ht",
        "details": {
            "Best for": "Converting text to speech for audio articles, e-learning, and audiobooks.",
            "Pros": "Offers realistic voices, supports multiple languages, and provides an API for integration.",
            "Cons": "Some voices may sound robotic.",
            "Key features": "AI voice generator, text-to-speech, and audio articles."
        }
    },
    {
        "category": "Audio Generation AIs",
        "name": "Resemble.ai",
        "details": {
            "Best for": "Creating custom AI voices for branding, entertainment, and virtual assistants.",
            "Pros": "Offers high-quality voice cloning, supports real-time voice generation, and provides emotion control.",
            "Cons": "Requires a significant amount of training data for custom voices.",
            "Key features": "AI voice cloning, text-to-speech, and emotion control."
        }
    },
    {
        "category": "Audio Generation AIs",
        "name": "WellSaid Labs",
        "details": {
            "Best for": "Generating professional voiceovers for corporate videos, training modules, and marketing content.",
            "Pros": "Offers a diverse library of natural-sounding voices, supports custom pronunciation, and provides a user-friendly interface.",
            "Cons": "Limited customization options for voice characteristics.",
            "Key features": "AI voice generator, text-to-speech, and custom voice avatars."
        }
    },
    {
        "category": "Audio Generation AIs",
        "name": "Voicely",
        "details": {
            "Best for": "Quickly generating voiceovers for videos, podcasts, and social media content.",
            "Pros": "Easy to use, offers a variety of voices, and supports background music.",
            "Cons": "Voice quality may not be as high as other premium tools.",
            "Key features": "AI voice generator, text-to-speech, and background music integration."
        }
    },
    {
        "category": "Latest Generative AI Models 2025",
        "name": "GPT-4.5",
        "details": {
            "Description": "OpenAI\u2019s latest experimental research model with an expanded context window and improved reasoning capabilities.",
            "Key Features": "Enhanced long-context understanding, superior logical reasoning, advanced code generation, multimodal capabilities.",
            "Use Cases": "Complex research, advanced programming, creative writing, multi-modal content creation.",
            "Availability": "Limited access, primarily for researchers and enterprise partners."
        }
    },
    {
        "category": "Latest Generative AI Models 2025",
        "name": "Grok 3",
        "details": {
            "Description": "xAI\u2019s latest model, focusing on real-time information processing and controversial topic handling.",
            "Key Features": "Real-time data integration, uncensored responses, strong reasoning in niche areas, direct access to X (formerly Twitter) data.",
            "Use Cases": "Breaking news analysis, real-time market insights, social media trend prediction, controversial debate simulation.",
            "Availability": "Early access for select users on X platform."
        }
    },
    {
        "category": "Latest Generative AI Models 2025",
        "name": "Gemini 2.0",
        "details": {
            "Description": "Google\u2019s next-generation multimodal AI, with significant improvements in understanding and generating diverse data formats.",
            "Key Features": "Seamless integration of text, image, audio, and video inputs/outputs, enhanced reasoning across modalities, improved efficiency and speed.",
            "Use Cases": "Advanced content creation (video scripts from images, music from text), complex problem-solving, interactive AI experiences.",
            "Availability": "Phased rollout to Google Cloud customers and select developers."
        }
    },
    {
        "category": "Latest Generative AI Models 2025",
        "name": "Llama 4",
        "details": {
            "Description": "Meta\u2019s latest open-source large language model, designed for broader accessibility and fine-tuning.",
            "Key Features": "Improved performance on benchmarks, more efficient fine-tuning, enhanced multilingual support, stronger ethical AI guardrails.",
            "Use Cases": "Custom chatbot development, research in academic settings, enterprise-specific language models, open-source AI innovation.",
            "Availability": "Publicly available for research and commercial use under a permissive license."
        }
    },
    {
        "category": "Latest Generative AI Models 2025",
        "name": "DeepMind AlphaCode 2",
        "details": {
            "Description": "DeepMind\u2019s advanced AI for competitive programming, capable of solving complex coding challenges.",
            "Key Features": "Superior problem-solving in competitive programming, generates optimized and efficient code, understands complex algorithmic requirements.",
            "Use Cases": "Automated competitive programming, code optimization, software development assistance, algorithmic research.",
            "Availability": "Research preview, limited access for academic and industry partners."
        }
    },
    {
        "category": "Latest Generative AI Models 2025",
        "name": "Mistral 8x22B",
        "details": {
            "Description": "Mistral AI\u2019s new Mixture-of-Experts (MoE) model, offering a balance of performance and efficiency.",
            "Key Features": "High performance with reduced computational cost, efficient inference, strong multilingual capabilities, versatile for various NLP tasks.",
            "Use Cases": "Cost-effective large-scale deployments, real-time applications, multilingual content generation, research and development.",
            "Availability": "Available via API and for self-hosting."
        }
    },
    {
        "category": "AI Agents",
        "name": "Genspark",
        "details": {
            "Best for": "Automated research and content generation.",
            "What it does": "Genspark is an AI search engine that generates a 'Sparkpage' \u2014 a dynamic, customizable webpage summarizing search results, answering questions, and providing relevant links. It aims to provide comprehensive answers and resources directly, reducing the need to click through multiple links.",
            "Who is it for": "Researchers, content creators, students, and anyone needing quick, summarized information from the web.",
            "Pros": "Generates comprehensive summaries, customizable output, saves time by consolidating information, provides sources for verification.",
            "Cons": "May sometimes lack the depth of manual research, customization requires user input.",
            "Pricing": "Not specified (likely freemium or subscription-based)."
        }
    },
    {
        "category": "AI Agents",
        "name": "Manus",
        "details": {
            "Best for": "Autonomous task execution and complex problem-solving.",
            "What it does": "Manus is an autonomous general AI agent capable of understanding complex instructions, performing deep research, analyzing data, generating content (text, image, video), building applications, and automating workflows. It operates in a sandboxed environment with access to various tools (shell, browser, file system, media generation, etc.) to achieve open-ended objectives.",
            "Who is it for": "Users with complex, multi-step tasks that require intelligent automation, researchers, developers, and businesses looking to automate advanced digital workflows.",
            "Pros": "Highly autonomous, versatile across many domains, can perform deep research and analysis, capable of creative generation, automates complex workflows.",
            "Cons": "Requires clear and detailed instructions for optimal performance, may take time for complex tasks, not suitable for simple, quick queries.",
            "Pricing": "Subscription-based, tiered pricing depending on usage and features."
        }
    }
];

// SVG Icons (Lucide Icons - simplified for direct embedding)
const searchIconSVG = 
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`;

const filterIconSVG = 
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`;

const xIconSVG = 
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;

const externalLinkIconSVG = 
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>`;

// DOM Elements
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchIconContainer = document.querySelector(".search-icon");
const filterIconContainer = document.querySelector(".filters-title-group");
const clearAllFiltersBtn = document.getElementById("clear-all-filters-btn");
const categoriesContainer = document.getElementById("categories-container");
const pricingContainer = document.getElementById("pricing-container");
const aiCardsGrid = document.getElementById("ai-cards-grid");
const toolCountSpan = document.getElementById("tool-count");
const paginationContainer = document.getElementById("pagination-container");
const hamburgerMenu = document.getElementById("hamburger-menu");
const sidebar = document.getElementById("sidebar");

// Inject SVGs
searchIconContainer.innerHTML = searchIconSVG;
filterIconContainer.insertAdjacentHTML("afterbegin", filterIconSVG);
clearAllFiltersBtn.insertAdjacentHTML("afterbegin", xIconSVG);

// State variables
let currentPage = 1;
const itemsPerPage = 9;
let selectedCategories = new Set();
let selectedPricing = new Set();
let searchTerm = "";

// Helper to get pricing from details
function getPricing(details) {
    if (details.Pricing) {
        const pricingText = details.Pricing.toLowerCase();
        if (pricingText.includes("free")) {
            if (pricingText.includes("then")) return "Freemium";
            return "Free";
        }
        if (pricingText.includes("month") || pricingText.includes("paid")) return "Paid";
    }
    if (details["Free Trial"] && details["Free Trial"].toLowerCase() === "yes") {
        return "Freemium"; // Assume free trial implies freemium
    }
    return "Unknown";
}

// Render AI Cards
function renderAICards(ais) {
    aiCardsGrid.innerHTML = "";
    if (ais.length === 0) {
        aiCardsGrid.innerHTML = 
            `<div class="text-center text-gray-400 col-span-full py-12">
                No AI models found matching your criteria.
            </div>`;
        toolCountSpan.textContent = 0;
        paginationContainer.innerHTML = "";
        return;
    }

    toolCountSpan.textContent = ais.length;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedAIs = ais.slice(startIndex, endIndex);

    paginatedAIs.forEach(ai => {
        const pricing = getPricing(ai.details);
        const card = document.createElement("div");
        card.className = "ai-card fade-in-up";
        card.innerHTML = `
            <div class="ai-card-header">
                <div class="ai-logo-placeholder">
                    <span>${ai.name.substring(0, 2).toUpperCase()}</span>
                </div>
                <div class="ai-info">
                    <h3 class="ai-name">${ai.name}</h3>
                    <span class="ai-pricing">${pricing}</span>
                </div>
            </div>
            <p class="ai-description">${ai.details.Description || ai.details["Best for"] || ai.details["What it does"] || "No description available."}</p>
            <a href="#" class="visit-button" data-url="${ai.details.URL || '#'}">
                Visit Platform ${externalLinkIconSVG}
            </a>
        `;
        aiCardsGrid.appendChild(card);
    });

    // Add click listener for visit buttons
    aiCardsGrid.querySelectorAll(".visit-button").forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const originalUrl = button.dataset.url;
            if (originalUrl && originalUrl !== '#') {
                const utmUrl = new URL(originalUrl);
                utmUrl.searchParams.set("utm_source", "aidirectory");
                utmUrl.searchParams.set("utm_medium", "referral");
                utmUrl.searchParams.set("utm_campaign", "ai_discovery");
                window.open(utmUrl.toString(), "_blank");
            }
        });
    });

    renderPagination(ais.length);
}

// Render Filters
function renderFilters() {
    // Categories
    const allCategories = [...new Set(aiData.map(ai => ai.category))];
    categoriesContainer.innerHTML = "";
    allCategories.forEach(category => {
        const count = aiData.filter(ai => ai.category === category).length;
        const isChecked = selectedCategories.has(category);
        categoriesContainer.innerHTML += `
            <label class="filter-option-label">
                <input type="checkbox" class="filter-checkbox category-filter" value="${category}" ${isChecked ? "checked" : ""}>
                <span class="filter-option-text">${category}</span>
                <span class="filter-option-count">${count}</span>
            </label>
        `;
    });

    // Pricing
    const allPricingOptions = ["Free", "Freemium", "Paid"];
    pricingContainer.innerHTML = "";
    allPricingOptions.forEach(pricing => {
        const count = aiData.filter(ai => getPricing(ai.details) === pricing).length;
        const isChecked = selectedPricing.has(pricing);
        pricingContainer.innerHTML += `
            <label class="filter-option-label">
                <input type="checkbox" class="filter-checkbox pricing-filter" value="${pricing}" ${isChecked ? "checked" : ""}>
                <span class="filter-option-text">${pricing}</span>
                <span class="filter-option-count">${count}</span>
            </label>
        `;
    });

    // Event Listeners for Filters
    document.querySelectorAll(".category-filter").forEach(checkbox => {
        checkbox.addEventListener("change", (event) => {
            if (event.target.checked) {
                selectedCategories.add(event.target.value);
            } else {
                selectedCategories.delete(event.target.value);
            }
            currentPage = 1; // Reset to first page on filter change
            filterAndRender();
        });
    });

    document.querySelectorAll(".pricing-filter").forEach(checkbox => {
        checkbox.addEventListener("change", (event) => {
            if (event.target.checked) {
                selectedPricing.add(event.target.value);
            } else {
                selectedPricing.delete(event.target.value);
            }
            currentPage = 1; // Reset to first page on filter change
            filterAndRender();
        });
    });

    // Show/hide Clear All button
    if (selectedCategories.size > 0 || selectedPricing.size > 0 || searchTerm !== "") {
        clearAllFiltersBtn.style.display = "flex";
    } else {
        clearAllFiltersBtn.style.display = "none";
    }
}

// Filter and Render
function filterAndRender() {
    let filteredAIs = aiData.filter(ai => {
        const matchesCategory = selectedCategories.size === 0 || selectedCategories.has(ai.category);
        const matchesPricing = selectedPricing.size === 0 || selectedPricing.has(getPricing(ai.details));
        const matchesSearch = searchTerm === "" || 
                              ai.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              (ai.details.Description && ai.details.Description.toLowerCase().includes(searchTerm.toLowerCase())) ||
                              (ai.details["Best for"] && ai.details["Best for"].toLowerCase().includes(searchTerm.toLowerCase())) ||
                              (ai.details["What it does"] && ai.details["What it does"].toLowerCase().includes(searchTerm.toLowerCase()));
        
        return matchesCategory && matchesPricing && matchesSearch;
    });

    renderAICards(filteredAIs);
}

// Render Pagination
function renderPagination(totalItems) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    paginationContainer.innerHTML = "";

    if (totalPages <= 1) return;

    const createButton = (text, page, isActive = false, isDisabled = false) => {
        const button = document.createElement("button");
        button.className = `pagination-button ${isActive ? "active" : ""}`;
        button.textContent = text;
        button.disabled = isDisabled;
        button.addEventListener("click", () => {
            currentPage = page;
            filterAndRender();
            window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top on page change
        });
        return button;
    };

    // Previous button
    paginationContainer.appendChild(createButton("Previous", currentPage - 1, false, currentPage === 1));

    // Page numbers
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (startPage > 1) {
        paginationContainer.appendChild(createButton("1", 1));
        if (startPage > 2) {
            const ellipsis = document.createElement("span");
            ellipsis.className = "pagination-ellipsis";
            ellipsis.textContent = "...";
            paginationContainer.appendChild(ellipsis);
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        paginationContainer.appendChild(createButton(i.toString(), i, i === currentPage));
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement("span");
            ellipsis.className = "pagination-ellipsis";
            ellipsis.textContent = "...";
            paginationContainer.appendChild(ellipsis);
        }
        paginationContainer.appendChild(createButton(totalPages.toString(), totalPages));
    }

    // Next button
    paginationContainer.appendChild(createButton("Next", currentPage + 1, false, currentPage === totalPages));
}

// Event Listeners
searchButton.addEventListener("click", () => {
    searchTerm = searchInput.value;
    currentPage = 1;
    filterAndRender();
});

searchInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        searchTerm = searchInput.value;
        currentPage = 1;
        filterAndRender();
    }
});

clearAllFiltersBtn.addEventListener("click", () => {
    selectedCategories.clear();
    selectedPricing.clear();
    searchTerm = "";
    searchInput.value = "";
    currentPage = 1;
    renderFilters(); // Re-render filters to uncheck checkboxes
    filterAndRender();
});

// Hamburger menu for mobile
hamburgerMenu.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});

// Initial render
renderFilters();
filterAndRender();


