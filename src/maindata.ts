import {supabase} from '../supabase';

type storm={
    id:number;
    promo:string;
    heading:string;
    keywords:string[];
    secheading:string;
    secpara:string;
    text:string;
}

export const maindata:storm[]=[];

// Export a promise that resolves when data is loaded
export const dataLoaded1 = getData();

async function getData() {
  try {
    const { data, error } = await supabase.from('maindata').select('*')
    console.log('Raw data from Supabase:', data)

    if (error) {
      console.error('Supabase error:', error)
      return
    }

    if (data) {
      // Clear existing data first
      maindata.length = 0;
      
      data.forEach((item: any) => {
        maindata.push({
          id: item.id,
          promo: item.promo,
          heading: item.heading,
          keywords: Array.isArray(item.keywords) ? item.keywords : 
                   (typeof item.keywords === 'string' ? JSON.parse(item.keywords || '[]') : []),
          secheading: item.secheading,
          secpara: item.secpara,
          text: item.text
        });
      });
      
      console.log('Mapped data length:', maindata.length)
      console.log('First item keywords:', maindata[0]?.keywords)
    }
  } catch (err) {
    console.error('Error fetching data:', err)
  }
}
//               Data Enrichment is the process of enhancing raw data by adding missing information from external and verified sources. This results in higher accuracy, better segmentation, and more impactful campaigns.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Why Data Enrichment Matters:</h3>
//             <p>
//               Incomplete or outdated data can lead to poor decision-making, wasted marketing spend, and lost opportunities. Enriched data ensures you always have the most relevant and reliable insights at your fingertips.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">How We Help:</h3>
//             <p>
//               LaCleo uses a mix of AI-powered tools and manual validation to cleanse, verify, and enrich your data sets. Whether it's customer profiles, lead records, or product databases, we tailor our approach to fit your needs.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Benefits of Our Enrichment Services:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Improved targeting and segmentation</li>
//               <li>More accurate personalization</li>
//               <li>Higher email deliverability rates</li>
//               <li>Enhanced analytics and reporting</li>
//               <li>Stronger customer engagement</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Industries We Serve:</h3>
//             <p>
//               From e-commerce and finance to healthcare and education, we serve diverse industries that rely on clean, rich data to thrive in the digital space.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Why Choose LaCleo?</h3>
//             <p>
//               Our data specialists combine experience with cutting-edge technology to deliver results you can trust. We value transparency, speed, and measurable success.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Custom Solutions</h3>
//             <p>
//               No two businesses are the same. That’s why we offer custom data enrichment strategies to align with your goals, systems, and scale.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Scalable & Secure</h3>
//             <p>
//               Our infrastructure ensures data privacy and compliance while scaling effortlessly with your growing data needs.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Let’s Enrich Your Data Today</h3>
//             <p>
//               Don’t let poor data hold you back. Partner with LaCleo to turn your information into insights that drive results.
//             </p>
//           </section>
//         </section>`,
//     },
//     {
//   id: 2,
//   promo: "Digital Marketing",
//   heading: "“Boost Brand Visibility with Targeted Digital Marketing”",
//   keywords: ["Brand Awareness", "Lead Generation", "Omnichannel Strategies"],
//   secheading: "Transform Your Online Presence with Proven Digital Strategies",
//   secpara: "Digital marketing is the cornerstone of modern business growth. At LaCleo, we help brands establish a powerful online identity, connect with their target audience, and achieve measurable results through a mix of data-driven and creative approaches.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>At LaCleo Digital, we offer full-spectrum digital marketing services that are designed to help you stand out in an overcrowded digital world. From SEO and social media to paid ads and analytics, we cover it all under one strategic roof.</p>

//           <section>
//             <h3 class="text-xl font-bold">What is Digital Marketing?</h3>
//             <p>
//               Digital Marketing involves using online platforms, tools, and strategies to promote brands, products, or services. It includes everything from content creation and search engine optimization (SEO) to social media management and email campaigns.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Core Services We Provide:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li><strong>SEO:</strong> Boost organic visibility and search rankings</li>
//               <li><strong>PPC Campaigns:</strong> Drive quick traffic through paid advertising</li>
//               <li><strong>Social Media Management:</strong> Engage audiences on platforms like Instagram, LinkedIn, and Facebook</li>
//               <li><strong>Content Marketing:</strong> Build authority with high-value content</li>
//               <li><strong>Email Marketing:</strong> Nurture leads with personalized communication</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Why Digital Marketing Matters:</h3>
//             <p>
//               With most customer journeys beginning online, digital marketing ensures your brand is visible, credible, and engaging—across all channels where your audience spends time.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Customized Strategy for Your Brand:</h3>
//             <p>
//               No two businesses are alike. We tailor our digital strategies based on your industry, goals, and audience behavior to deliver maximum ROI and brand loyalty.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Data-Driven Decision Making:</h3>
//             <p>
//               Every move we make is backed by analytics. We constantly test, optimize, and refine campaigns based on performance metrics to ensure you’re always ahead.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Full Transparency:</h3>
//             <p>
//               From regular reporting to campaign reviews, we keep you informed at every step. Our client-first approach ensures clarity, collaboration, and trust.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Let’s Build Your Digital Empire</h3>
//             <p>
//               Whether you’re a startup or an enterprise, LaCleo is your strategic partner in digital growth. Let us help you make an impact that lasts.
//             </p>
//           </section>
//         </section>`
// }
// ,
//     {
//   id: 3,
//   promo: "Lead Generation",
//   heading: "“Fuel Your Sales Pipeline with High-Quality Leads”",
//   keywords: ["Sales Growth", "Targeted Outreach", "B2B/B2C Campaigns"],
//   secheading: "Accelerate Business Growth with Strategic Lead Generation",
//   secpara: "At LaCleo, we understand that generating the right leads is the lifeblood of business success. Our lead generation strategies focus on attracting, qualifying, and converting prospects that align with your ideal customer profile—ensuring higher ROI and sales efficiency.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>LaCleo Digital specializes in result-oriented lead generation campaigns designed to fill your sales funnel with valuable, conversion-ready prospects. Whether you operate in the B2B or B2C space, our customized approach guarantees measurable success.</p>

//           <section>
//             <h3 class="text-xl font-bold">What is Lead Generation?</h3>
//             <p>
//               Lead Generation is the process of attracting and converting strangers and prospects into individuals who have indicated interest in your company’s product or service. This includes collecting contact details and nurturing them through a sales journey.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Our Lead Gen Channels:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li><strong>Landing Pages & Funnels:</strong> Optimized pages designed to convert visitors into leads</li>
//               <li><strong>Paid Ads:</strong> Google Ads, LinkedIn, and Facebook Ads to reach the right audience</li>
//               <li><strong>Content Offers:</strong> Gated ebooks, whitepapers, and webinars for lead capture</li>
//               <li><strong>Email Outreach:</strong> Cold and warm email strategies with high open & reply rates</li>
//               <li><strong>LinkedIn Prospecting:</strong> Hyper-targeted lead sourcing for B2B clients</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Why It Works:</h3>
//             <p>
//               Our data-first methodology ensures that every lead is qualified based on your business objectives. This means less time chasing unfit prospects and more time closing deals.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">How We Qualify Leads:</h3>
//             <p>
//               Using detailed buyer personas, intent signals, and behavior-based scoring, we make sure the leads you receive are truly interested and likely to convert.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Industries We Support:</h3>
//             <p>
//               From SaaS and real estate to education, finance, and healthcare—our team has generated leads for over 25 industries with success-proven frameworks.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Why Choose LaCleo for Lead Gen?</h3>
//             <p>
//               Our specialists use a perfect mix of automation, personalization, and analytics to generate high-quality leads. Plus, we continuously test and optimize to ensure performance improves over time.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Scalable Systems:</h3>
//             <p>
//               Whether you need 100 leads a month or 10,000, our infrastructure and expertise scale with you as you grow.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Let’s Grow Your Pipeline</h3>
//             <p>
//               Partner with LaCleo to attract the right prospects, nurture meaningful connections, and convert leads into loyal customers.
//             </p>
//           </section>
//         </section>`
// }
// ,
//   {
//   id: 4,
//   promo: "Pre-Packed Lists",
//   heading: "“Jumpstart Outreach with Ready-to-Use Lead Lists”",
//   keywords: ["Instant Leads", "Verified Contacts", "Time-Saving Solutions"],
//   secheading: "Access Ready-Made, Industry-Specific Lead Lists Instantly",
//   secpara: "LaCleo’s Pre-Packed Lists offer a fast-track to quality outreach. Whether you're launching a campaign or scaling sales, our curated, segmented, and verified contact lists save time, reduce acquisition costs, and get you connected to the right audience immediately.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>Speed is everything in sales and marketing. Our Pre-Packed Lists give you the momentum you need to connect with potential clients, partners, or customers without the initial data collection hassle. These lists are built using verified sources, segmented by industry, geography, and buyer intent.</p>

//           <section>
//             <h3 class="text-xl font-bold">What Are Pre-Packed Lists?</h3>
//             <p>
//               Pre-Packed Lists are collections of leads or business contacts that are already curated, verified, and segmented based on your target industry, location, company size, or role. They’re designed to be plug-and-play for immediate use in outreach campaigns.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">How They Save Time:</h3>
//             <p>
//               Instead of spending days or weeks sourcing contacts, our lists give your team instant access to thousands of pre-qualified leads. This allows you to jump directly into your sales and marketing workflow.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Key Features:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Up-to-date and verified contact information</li>
//               <li>Filtered by region, role, industry, and intent</li>
//               <li>GDPR-compliant and responsibly sourced</li>
//               <li>Available in various formats (CSV, Excel, CRM-ready)</li>
//               <li>Custom-built lists also available on request</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Use Cases:</h3>
//             <p>
//               Perfect for cold email campaigns, telemarketing, direct sales, account-based marketing (ABM), event promotions, and partner prospecting.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Industries We Cover:</h3>
//             <p>
//               Technology, Real Estate, E-commerce, Finance, Healthcare, Education, Hospitality, and more—each list is tailored to suit sector-specific needs.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Quality Assurance:</h3>
//             <p>
//               Every list goes through a rigorous validation process using AI-driven scrapers, manual checks, and bounce-rate testing to ensure maximum accuracy and deliverability.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Let’s Skip the Guesswork</h3>
//             <p>
//               With LaCleo’s Pre-Packed Lists, you can get ahead of the curve and start meaningful conversations today. It’s time to stop searching and start connecting.
//             </p>
//           </section>
//         </section>`
// }
// ,
//    {
//   id: 5,
//   promo: "E-Commerce Consultancy",
//   heading: "“Optimize, Scale, and Succeed in E-Commerce”",
//   keywords: ["Conversion Optimization", "Platform Strategy", "Store Scaling"],
//   secheading: "Expert Guidance to Build, Grow, and Optimize Your Online Store",
//   secpara: "Navigating the e-commerce world can be overwhelming, but with LaCleo’s E-Commerce Consultancy, you get the strategic insight, technical expertise, and growth roadmap needed to thrive. Whether you're launching a new store or optimizing an existing one, we’ve got you covered.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>LaCleo empowers online brands with custom-tailored e-commerce consulting services that drive real results. From choosing the right platform to boosting sales and enhancing user experience, our specialists provide end-to-end support that aligns with your goals.</p>

//           <section>
//             <h3 class="text-xl font-bold">What is E-Commerce Consultancy?</h3>
//             <p>
//               E-Commerce Consultancy involves strategic guidance and execution support for businesses running or launching online stores. This includes platform selection, UX/UI optimization, sales funnel design, analytics, digital marketing integration, and conversion enhancement.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Our Areas of Expertise:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Shopify, WooCommerce, Magento, and custom builds</li>
//               <li>Sales funnel strategy and CRO (Conversion Rate Optimization)</li>
//               <li>Mobile-first design and speed optimization</li>
//               <li>Inventory and product catalog structuring</li>
//               <li>Third-party integrations (payment, shipping, CRM)</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Why It Matters:</h3>
//             <p>
//               In the competitive world of online commerce, small mistakes can mean big losses. Our consultants ensure every detail—from UI/UX to backend architecture—is optimized for conversions and scalability.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Tailored Roadmaps:</h3>
//             <p>
//               We don’t do cookie-cutter. Our experts analyze your current setup, business model, and goals to craft a unique action plan with measurable milestones.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Growth-Focused Strategy:</h3>
//             <p>
//               Beyond setup, we focus on scaling: increasing AOV (Average Order Value), reducing cart abandonment, improving lifetime value (LTV), and unlocking new markets.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Trusted by Brands Worldwide:</h3>
//             <p>
//               We’ve helped startups and large-scale retailers alike—from fashion and electronics to health and food—achieve remarkable growth with sustainable strategies.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Your Store, Our Mission</h3>
//             <p>
//               Whether you need a one-time strategy session or ongoing consultancy, LaCleo is your partner in every stage of digital commerce success.
//             </p>
//           </section>
//         </section>`
// }
// ,
//    {
//   id: 6,
//   promo: "Digital Experience Testing",
//   heading: "“Deliver Seamless, Friction-Free Digital Experiences”",
//   keywords: ["UX Testing", "Performance Monitoring", "Cross-Platform Consistency"],
//   secheading: "Ensure Your Digital Products Work Perfectly for Every User, Every Time",
//   secpara: "LaCleo’s Digital Experience Testing service ensures your website or app delivers consistent, high-quality experiences across all devices, browsers, and user journeys—enhancing satisfaction, retention, and brand trust.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>Your digital presence is only as strong as the user experience it delivers. LaCleo provides comprehensive Digital Experience Testing to identify performance issues, design flaws, and usability roadblocks before they impact your customers.</p>

//           <section>
//             <h3 class="text-xl font-bold">What is Digital Experience Testing?</h3>
//             <p>
//               It’s the process of evaluating how real users interact with your digital assets—such as websites, mobile apps, and web applications—across devices, environments, and conditions. The goal is to detect friction points that affect conversions, satisfaction, or accessibility.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">What We Test:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Functional Testing – Ensuring all features work as expected</li>
//               <li>Cross-Browser & Device Testing – From mobile to desktop, Safari to Chrome</li>
//               <li>Performance Testing – Load time, responsiveness, and uptime</li>
//               <li>Accessibility Audits – WCAG compliance for inclusive experiences</li>
//               <li>User Journey Testing – Real-world scenarios across funnels</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Tools & Techniques:</h3>
//             <p>
//               We use industry-leading tools like BrowserStack, Lighthouse, Google PageSpeed, and automated testing frameworks to simulate user behavior and monitor digital health in real time.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Why Digital Testing Matters:</h3>
//             <p>
//               A broken button, slow page load, or poor mobile layout can cost you users. Rigorous testing ensures flawless delivery and maximizes conversions and customer satisfaction.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Who Needs It?</h3>
//             <p>
//               Ideal for e-commerce brands, SaaS companies, product teams, and startups looking to deliver enterprise-grade digital reliability and performance.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Continuous Optimization:</h3>
//             <p>
//               Beyond one-time testing, we offer retesting, regression analysis, and monitoring dashboards to track ongoing performance and catch issues proactively.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Partner with LaCleo</h3>
//             <p>
//               Build trust with your users by ensuring your digital platforms deliver seamless, delightful, and reliable experiences. LaCleo helps you test like your users live.
//             </p>
//           </section>
//         </section>`
// }
// ,
//    {
//   id: 7,
//   promo: "Customer Services",
//   heading: "“Deliver Exceptional Support that Builds Lasting Loyalty”",
//   keywords: ["Client Retention", "24/7 Assistance", "Omnichannel Support"],
//   secheading: "Turn Every Customer Interaction into a Brand-Building Opportunity",
//   secpara: "At LaCleo, we believe that great customer service isn’t just support—it’s a growth engine. Our customer service solutions are tailored to ensure every touchpoint strengthens trust, satisfaction, and loyalty across every channel your customers use.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>Exceptional customer service is no longer optional—it's essential for long-term business success. LaCleo provides scalable and personalized customer support solutions that cater to your brand tone, audience expectations, and business model.</p>

//           <section>
//             <h3 class="text-xl font-bold">What is Modern Customer Service?</h3>
//             <p>
//               Today’s customer service goes beyond resolving complaints. It’s about delivering fast, empathetic, and meaningful responses across live chat, email, phone, and social channels—before, during, and after the sale.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Our Service Capabilities:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Live Chat and Helpdesk Integration</li>
//               <li>Email & Ticket-Based Support</li>
//               <li>AI-Powered Chatbots for 24/7 Coverage</li>
//               <li>Social Media & Community Management</li>
//               <li>Phone Support with Trained Representatives</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Benefits of Great Customer Service:</h3>
//             <p>
//               Faster response times, increased customer satisfaction, higher retention rates, and more upsell opportunities. Brands with superior service outperform competitors in loyalty and lifetime value.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Custom-Tailored Solutions:</h3>
//             <p>
//               Whether you're a startup needing part-time coverage or an enterprise looking for a full-fledged support center, we build solutions that fit your scale, budget, and workflow.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Customer-Centric Culture:</h3>
//             <p>
//               Our agents are trained not just to answer, but to engage—ensuring customers feel heard, respected, and cared for. Every conversation becomes a reflection of your brand values.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Analytics and Feedback Loops:</h3>
//             <p>
//               We monitor KPIs like CSAT, FRT, and NPS to continuously improve performance. Feedback loops ensure your product, UX, and service evolve based on real customer input.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Partner with LaCleo</h3>
//             <p>
//               Elevate your support strategy with LaCleo and turn your customer service into a strategic advantage. Let’s deliver memorable experiences—one conversation at a time.
//             </p>
//           </section>
//         </section>`
// }
// ,
    
// ]


