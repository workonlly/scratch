import {supabase} from '../supabase';

type storm2={
    id:number;
    sid:number;
    promo:string;
    heading:string;
    keywords:string[];
    secheading:string;
    secpara:string;
    text:string;
}

export const maindata2:storm2[]=[]


export const datalLoaded2 = getData();

async function getData() {
  try {
    const { data, error } = await supabase.from('maindata2').select('*')
    console.log('Raw data from Supabase:', data)

    if (error) {
      console.error('Supabase error:', error)
      return
    }

    if (data) {
      // Clear existing data first
      maindata2.length = 0;
      
      data.forEach((item: any) => {
        maindata2.push({
          id: item.id,
          sid: item.sid,
          promo: item.promo,
          heading: item.heading,
          keywords: Array.isArray(item.keywords) ? item.keywords : 
                   (typeof item.keywords === 'string' ? JSON.parse(item.keywords || '[]') : []),
          secheading: item.secheading,
          secpara: item.secpara,
          text: item.text
        });
      });
      
      console.log('Mapped data length:', maindata2.length)
      console.log('First item keywords:', maindata2[0]?.keywords)
    }
  } catch (err) {
    console.error('Error fetching data:', err)
  }
}

//    {
//   id: 1,
//   sid: 11,
//   promo: "Email Append",
//   heading: "“Reach the Right Contacts with Verified Email Data”",
//   keywords: ["Data Cleansing", "Email Verification", "B2B Outreach"],
//   secheading: "Add Missing Emails to Supercharge Your Marketing Lists",
//   secpara: "LaCleo’s Email Append service helps businesses recover lost opportunities by accurately attaching verified email addresses to existing customer records—fueling better outreach, segmentation, and ROI.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>Email Append is a powerful way to turn outdated or incomplete databases into high-performing assets. At LaCleo, we use secure, GDPR-compliant methods to match and append accurate email addresses to your offline or partial records.</p>

//           <section>
//             <h3 class="text-xl font-bold">What is Email Appending?</h3>
//             <p>
//               Email Appending involves matching customer names, phone numbers, or physical addresses with third-party databases to accurately retrieve and attach missing email contact information.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Why It Matters:</h3>
//             <p>
//               Incomplete data limits your reach. Email appending fills in the blanks—unlocking channels for newsletters, promotions, nurture campaigns, and remarketing.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">How We Ensure Accuracy:</h3>
//             <p>
//               LaCleo uses advanced algorithms and multi-source verification to ensure all appended emails are up-to-date, valid, and high-deliverability. We also remove outdated or risky emails that hurt your sender reputation.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Benefits of Email Appending:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Expand your email database instantly</li>
//               <li>Improve email deliverability and engagement rates</li>
//               <li>Enable cross-channel campaigns and automation</li>
//               <li>Boost ROI with cleaner targeting</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Who Should Use It?</h3>
//             <p>
//               Ideal for businesses with legacy CRM systems, offline leads, or incomplete user records. Especially useful in B2B, retail, and event marketing.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Compliance & Security:</h3>
//             <p>
//               We prioritize data privacy and adhere strictly to GDPR, CAN-SPAM, and global compliance standards—ensuring your data stays protected.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Start Reconnecting Today</h3>
//             <p>
//               Don’t let lost emails cost you growth. Let LaCleo enrich your data and bring your campaigns back to life with precision and confidence.
//             </p>
//           </section>
//         </section>`
// }
// ,
//    {
//   id: 1,
//   sid: 12,
//   promo: "Data Append",
//   heading: "“Complete Your Customer Records with Accurate Data Append Services”",
//   keywords: ["Data Enhancement", "Customer Profiling", "CRM Accuracy"],
//   secheading: "Add the Missing Pieces to Your Customer Data Puzzle",
//   secpara: "LaCleo’s Data Append service enriches your existing customer or lead database by filling in missing fields such as phone numbers, job titles, locations, and more—turning fragmented data into complete, actionable profiles.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>Every marketing and sales strategy begins with one thing—data. But if your database is incomplete or outdated, it can seriously impact your performance. LaCleo’s Data Append service helps you enhance your customer records for better targeting, personalization, and engagement.</p>

//           <section>
//             <h3 class="text-xl font-bold">What is Data Append?</h3>
//             <p>
//               Data Append is the process of adding missing or outdated information to your customer database. We use authoritative third-party sources to accurately append data fields like emails, phone numbers, demographics, firmographics, and more.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Fields We Can Append:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Email Addresses</li>
//               <liPhone Numbers</li>
//               <li>Job Titles & Departments</li>
//               <li>Geolocation & Postal Data</li>
//               <li>Social Media Profiles</li>
//               <li>Company Details (Revenue, Size, Industry)</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Why Choose Data Append?</h3>
//             <p>
//               Incomplete data leads to wasted outreach and poor personalization. By appending verified data, you enhance the quality and performance of your CRM, increase deliverability, and enable better segmentation.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Our Approach:</h3>
//             <p>
//               We use a blend of AI-based enrichment tools and human verification to ensure accuracy and compliance. Each dataset is cleaned, de-duplicated, and validated before delivery.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Industries We Serve:</h3>
//             <p>
//               From SaaS and real estate to retail and education, our data append services are tailored to multiple industries and B2B/B2C applications.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Compliance First:</h3>
//             <p>
//               We adhere to GDPR, CCPA, and other global data privacy regulations to ensure your data remains safe and compliant at every step.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Upgrade Your Data, Upgrade Your Results</h3>
//             <p>
//               Don’t let incomplete data hold you back. Partner with LaCleo to unlock deeper customer insights, precision targeting, and smarter campaigns.
//             </p>
//           </section>
//         </section>`
// }
// ,
//    {
//   id: 1,
//   sid: 13,
//   promo: "Data Verification",
//   heading: "“Ensure Accuracy and Trustworthiness with Verified Data”",
//   keywords: ["Data Integrity", "Validation Services", "Error-Free CRM"],
//   secheading: "Eliminate Inaccuracies and Strengthen Your Data Foundation",
//   secpara: "LaCleo’s Data Verification service ensures your customer, lead, and business records are accurate, up-to-date, and ready for action—reducing bounce rates, compliance risks, and decision-making errors.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>Bad data costs businesses millions in lost revenue, poor targeting, and operational inefficiencies. At LaCleo, we provide comprehensive Data Verification services to cleanse your database, validate key fields, and restore full data accuracy.</p>

//           <section>
//             <h3 class="text-xl font-bold">What is Data Verification?</h3>
//             <p>
//               Data Verification is the process of confirming the correctness, consistency, and validity of data entries in your system. This includes checking email formats, phone numbers, addresses, business details, and more.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">What We Verify:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Email address syntax, domain, and deliverability</li>
//               <li>Phone number formatting and carrier validation</li>
//               <li>Postal address verification using geolocation APIs</li>
//               <li>Business and company name verification</li>
//               <li>Duplicate and inconsistent data detection</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Why It’s Critical:</h3>
//             <p>
//               Incorrect data leads to failed communications, poor segmentation, and decreased ROI. Verifying your data improves operational efficiency, compliance, and customer trust.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Our Verification Process:</h3>
//             <p>
//               We use a combination of automated tools and manual reviews. Our system cross-references your data with live databases, official records, and formatting rules to ensure precision.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Compliance Assurance:</h3>
//             <p>
//               Every verification process we run follows global data privacy laws including GDPR, CCPA, and CAN-SPAM, ensuring your data stays protected and legal.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Industries That Benefit:</h3>
//             <p>
//               Our service is vital for industries like fintech, healthcare, e-commerce, SaaS, and any business that relies on clean CRM or marketing databases.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Build Your Business on Verified Data</h3>
//             <p>
//               With LaCleo, you can be confident that your data isn’t just complete—it’s correct. Let’s clean up your database and pave the way for smarter, more profitable actions.
//             </p>
//           </section>
//         </section>`
// }
// ,
//   {
//   id: 1,
//   sid: 14,
//   promo: "Data Profiling",
//   heading: "“Understand Your Data to Unlock Its Full Potential”",
//   keywords: ["Data Quality Insights", "Pattern Recognition", "Intelligent Segmentation"],
//   secheading: "Reveal Structure, Trends, and Quality Through Data Profiling",
//   secpara: "LaCleo’s Data Profiling service helps you understand the makeup, structure, and quality of your datasets—empowering better decision-making, data governance, and strategy development across your business systems.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>Before you can improve or leverage your data, you must understand it. Our Data Profiling solutions provide a deep dive into your datasets to uncover hidden patterns, inconsistencies, duplication, null values, and statistical anomalies.</p>

//           <section>
//             <h3 class="text-xl font-bold">What is Data Profiling?</h3>
//             <p>
//               Data Profiling is the process of examining data sets to collect statistics and information about their structure, content, and quality. It helps organizations understand what data they have, how accurate it is, and how it can be improved.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Key Capabilities:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Null value and duplication analysis</li>
//               <li>Data type and formatting validation</li>
//               <li>Outlier and anomaly detection</li>
//               <li>Field completeness and consistency checks</li>
//               <li>Frequency distribution and pattern recognition</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Why It Matters:</h3>
//             <p>
//               Inaccurate or poorly structured data can mislead strategies and analytics. Data Profiling brings clarity, allowing better segmentation, predictive modeling, and compliance readiness.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Our Approach:</h3>
//             <p>
//               We leverage advanced profiling tools, AI-powered insights, and domain expertise to deliver clear reports and dashboards that summarize your data health and potential improvement areas.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Ideal Use Cases:</h3>
//             <p>
//               Perfect for data migration readiness, CRM audits, analytics pipeline optimization, and improving master data management (MDM) initiatives.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Industries Served:</h3>
//             <p>
//               LaCleo supports retail, BFSI, logistics, healthcare, and government sectors—anywhere high-volume data drives daily decisions.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">From Uncertainty to Confidence</h3>
//             <p>
//               With LaCleo’s Data Profiling, you gain clarity into the heart of your data—enabling stronger decisions, cleaner systems, and smarter business outcomes.
//             </p>
//           </section>
//         </section>`
// }
// ,
//     {
//   id: 1,
//   sid: 15,
//   promo: "Data Cleansing",
//   heading: "“Eliminate Errors and Inconsistencies with Clean, Reliable Data”",
//   keywords: ["Data Hygiene", "Error Removal", "Database Optimization"],
//   secheading: "Boost Accuracy, Efficiency, and ROI with Clean Data",
//   secpara: "LaCleo’s Data Cleansing service ensures that your customer and business databases are free of duplicates, typos, outdated records, and structural inconsistencies—setting the foundation for effective marketing, analytics, and operations.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>Dirty data can corrupt your marketing, mislead your insights, and waste your budget. LaCleo’s Data Cleansing service corrects, updates, and purifies your data—ensuring your systems only operate on clean, accurate information.</p>

//           <section>
//             <h3 class="text-xl font-bold">What is Data Cleansing?</h3>
//             <p>
//               Data Cleansing is the process of detecting and correcting (or removing) corrupt or inaccurate records from a dataset. This includes fixing errors in formatting, spelling, structure, and duplication.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">What We Clean:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Duplicate entries and record merging</li>
//               <li>Invalid or outdated contact details</li>
//               <li>Spelling and syntax corrections</li>
//               <li>Inconsistent formats and casing</li>
//               <li>Empty or null field resolution</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Why Data Cleansing Matters:</h3>
//             <p>
//               Inaccurate data leads to poor targeting, failed campaigns, and damaged customer relationships. Clean data drives higher conversion, better reporting, and greater efficiency across systems.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Our Methodology:</h3>
//             <p>
//               We combine automated cleansing tools with expert human review. Each record is assessed against trusted data sources and corrected while maintaining structural integrity and compliance.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Industries That Benefit:</h3>
//             <p>
//               From marketing and finance to logistics and healthcare, any data-reliant business will see dramatic improvements in performance through a well-maintained database.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Compliance & Best Practices:</h3>
//             <p>
//               We follow global data handling standards including GDPR, HIPAA, and ISO practices—ensuring security and compliance at every step.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Make Data Your Strength</h3>
//             <p>
//               Let LaCleo cleanse your data and remove the friction from your workflows, campaigns, and reports. Get clean data, get better outcomes.
//             </p>
//           </section>
//         </section>`
// }
// ,
//    {
//   id: 2,
//   sid: 16,
//   promo: "Email Campaigns",
//   heading: "“Engage, Nurture, and Convert with High-Impact Email Campaigns”",
//   keywords: ["Email Marketing", "Automation", "Customer Retention"],
//   secheading: "Deliver Personalized Experiences That Drive Real Results",
//   secpara: "LaCleo’s Email Campaign services empower you to communicate directly with your audience through tailored messaging, automated flows, and performance-driven designs that increase open rates, clicks, and conversions.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>Email is one of the most cost-effective and ROI-rich marketing channels available. With LaCleo, you get expertly crafted email campaigns designed to reach the right people with the right message at the right time.</p>

//           <section>
//             <h3 class="text-xl font-bold">What Are Email Campaigns?</h3>
//             <p>
//               Email campaigns are sequences of marketing emails sent to leads or customers to inform, engage, nurture, or convert them. Whether it's a single announcement or an automated drip series, every email is tailored for performance.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">What We Offer:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Welcome Series & Drip Campaigns</li>
//               <li>Promotional & Seasonal Blasts</li>
//               <li>Newsletter Strategy & Design</li>
//               <li>Cart Abandonment & Re-engagement Emails</li>
//               <li>Lead Nurturing & Follow-ups</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Performance Optimization:</h3>
//             <p>
//               Every campaign is A/B tested, mobile-optimized, and built with clear CTAs and dynamic personalization. We track key KPIs like open rate, click-through rate, and conversions.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Tools We Use:</h3>
//             <p>
//               We work with platforms like Mailchimp, Klaviyo, Sendinblue, ActiveCampaign, and HubSpot to manage, automate, and analyze your campaigns at scale.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Why Email Campaigns Still Work:</h3>
//             <p>
//               Email allows for direct, personalized communication with your audience—building trust, driving action, and keeping your brand top-of-mind.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Who It’s For:</h3>
//             <p>
//               Perfect for startups, e-commerce brands, SaaS platforms, and agencies looking to improve customer lifecycle engagement through structured email journeys.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Drive Revenue from Every Inbox</h3>
//             <p>
//               Let LaCleo turn your email list into a powerful revenue engine with expertly planned and beautifully executed email campaigns.
//             </p>
//           </section>
//         </section>`
// }
// ,
//    {
//   id: 2,
//   sid: 17,
//   promo: "LinkedIn Campaigns",
//   heading: "“Tap into the World’s Largest B2B Network with Targeted LinkedIn Campaigns”",
//   keywords: ["B2B Outreach", "Professional Targeting", "Social Selling"],
//   secheading: "Drive Qualified Leads and Build Thought Leadership on LinkedIn",
//   secpara: "LaCleo’s LinkedIn Campaigns are tailored to position your brand in front of key decision-makers, enabling lead generation, engagement, and authority building through precise targeting and personalized outreach.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>LinkedIn is the go-to platform for professionals, executives, and decision-makers. At LaCleo, we help you tap into this powerful network with strategic campaigns that generate quality leads and meaningful conversations.</p>

//           <section>
//             <h3 class="text-xl font-bold">What Are LinkedIn Campaigns?</h3>
//             <p>
//               LinkedIn Campaigns involve paid or organic outreach to your ideal audience on LinkedIn—through connection requests, messaging, posts, and sponsored content that highlights your brand and offer.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">What We Offer:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Sponsored Content & InMail Ads</li>
//               <li>Organic Campaign Strategy & Post Design</li>
//               <li>Connection & Message Automation</li>
//               <li>Audience Building & CRM Integration</li>
//               <li>Lead Capture and Retargeting</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Precise Targeting:</h3>
//             <p>
//               We use LinkedIn's advanced filters to target users based on job title, company size, industry, seniority, location, and behavior—ensuring you reach only the most relevant professionals.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Use Cases:</h3>
//             <p>
//               Ideal for B2B SaaS, enterprise services, consultancies, and recruitment firms looking to generate inbound interest or schedule qualified meetings.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Tools & Automation:</h3>
//             <p>
//               We use tools like LinkedIn Campaign Manager, Expandi, Waalaxy, and HubSpot to automate tasks, track metrics, and nurture leads across multiple touchpoints.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Compliance & Best Practices:</h3>
//             <p>
//               We ensure all messaging and connection strategies follow LinkedIn’s usage policies and privacy guidelines—keeping your brand professional and respected.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Turn Connections into Conversions</h3>
//             <p>
//               Partner with LaCleo to build campaigns that elevate your LinkedIn presence, spark conversations, and drive measurable B2B growth.
//             </p>
//           </section>
//         </section>`
// }
// ,
//   {
//   id: 2,
//   sid: 18,
//   promo: "LinkedIn Account Management",
//   heading: "“Build a Professional Presence that Commands Authority”",
//   keywords: ["Personal Branding", "Content Strategy", "Profile Optimization"],
//   secheading: "Position Yourself as a Thought Leader on LinkedIn",
//   secpara: "LaCleo’s LinkedIn Account Management service transforms your profile into a lead-generating, authority-building asset by handling everything from content creation and profile optimization to audience growth and engagement.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>Your LinkedIn profile is more than a digital resume—it's your personal brand, your credibility, and your first impression to potential clients, partners, and employers. LaCleo helps you turn it into a powerful business development tool.</p>

//           <section>
//             <h3 class="text-xl font-bold">What is LinkedIn Account Management?</h3>
//             <p>
//               It’s a fully managed service where we handle the growth, positioning, and engagement strategy of your personal or business LinkedIn account—tailored to your goals and industry.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Services Included:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Profile Optimization (Headline, Bio, Banner, Experience)</li>
//               <li>Weekly Content Planning & Ghostwriting</li>
//               <li>Connection Growth & Network Expansion</li>
//               <li>Engagement with Target Audience & Communities</li>
//               <li>Performance Reporting & Analytics</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Tailored for You:</h3>
//             <p>
//               Whether you're a founder, consultant, executive, or business account, we adapt your voice, tone, and industry insights into content that drives visibility and builds authority.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Our Process:</h3>
//             <p>
//               We start with a detailed brand and goal discovery call, then craft a 4-week content calendar, profile enhancements, and engagement roadmap—executing it consistently while you focus on your core business.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Ideal Clients:</h3>
//             <p>
//               Professionals looking to grow their influence, B2B founders aiming to drive inbound leads, and businesses that want to elevate their brand presence on the world’s top professional network.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Why It Works:</h3>
//             <p>
//               People connect with people. A well-managed LinkedIn account humanizes your brand, builds trust, and becomes a magnet for opportunities.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Let LaCleo Be Your LinkedIn Team</h3>
//             <p>
//               We don’t just post—we position. Elevate your LinkedIn presence with LaCleo’s end-to-end account management service, and start growing where your prospects already are.
//             </p>
//           </section>
//         </section>`
// }
// ,
//     {
//   id: 3,
//   sid: 19,
//   promo: "B2B Lead Generation",
//   heading: "“Fuel Your Sales Pipeline with Qualified B2B Leads”",
//   keywords: ["B2B Sales", "Targeted Outreach", "Lead Qualification"],
//   secheading: "Connect with Decision-Makers That Matter",
//   secpara: "LaCleo’s B2B Lead Generation service delivers verified and intent-driven leads directly to your sales team—tailored by industry, job role, geography, and buying stage—to accelerate conversions and maximize ROI.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>In the competitive B2B world, sales success depends on the quality of your leads. At LaCleo, we specialize in identifying, profiling, and connecting you with high-intent business prospects that match your ideal customer profile (ICP).</p>

//           <section>
//             <h3 class="text-xl font-bold">What is B2B Lead Generation?</h3>
//             <p>
//               B2B Lead Generation is the process of attracting and converting businesses into potential customers for your product or service—through a combination of outbound outreach, inbound strategies, and data-driven targeting.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">What We Deliver:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Company and Contact-Level Leads (Name, Title, Email, Phone, LinkedIn)</li>
//               <li>Industry-Specific Prospect Lists</li>
//               <li>Leads Based on Technology Stack or Buyer Intent</li>
//               <li>Enriched Data with Verified Contact Details</li>
//               <li>Warm Leads from Campaign Engagements</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Our Lead Gen Channels:</h3>
//             <p>
//               We use a mix of cold email, LinkedIn outreach, PPC retargeting, and content-driven landing pages to drive high-quality traffic and lead capture.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Ideal Use Cases:</h3>
//             <p>
//               Perfect for B2B SaaS companies, agencies, consultancies, and enterprise vendors targeting decision-makers in mid to large organizations.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Quality Over Quantity:</h3>
//             <p>
//               We don’t deliver leads for the sake of volume. Every lead is verified, relevant, and matched to your ICP—ready for meaningful conversations.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">CRM & Integration Ready:</h3>
//             <p>
//               All leads can be delivered in your preferred format (CSV, Excel, API) or directly integrated into your CRM or marketing automation platforms like HubSpot, Zoho, or Salesforce.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Let’s Fill Your Funnel with Buyers</h3>
//             <p>
//               Partner with LaCleo to access a consistent stream of qualified B2B leads that convert—backed by smart targeting, verified data, and multichannel engagement strategies.
//             </p>
//           </section>
//         </section>`
// }
// ,
//    {
//   id: 3,
//   sid: 41,
//   promo: "B2C Lead Generation", 
//   heading: "“Attract and Convert the Right Consumers with Smart B2C Lead Generation”",
//   keywords: ["Consumer Leads", "Audience Targeting", "High-Intent Prospects"],
//   secheading: "Drive Consumer Engagement with Precision Targeting",
//   secpara: "LaCleo’s B2C Lead Generation services help brands connect with high-intent individuals through optimized campaigns, real-time targeting, and data-enriched profiles—leading to increased conversions and lower acquisition costs.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>In today’s crowded consumer market, success depends on finding the right people at the right time. LaCleo helps you identify, engage, and convert your ideal customers through precision-driven B2C lead generation strategies.</p>

//           <section>
//             <h3 class="text-xl font-bold">What is B2C Lead Generation?</h3>
//             <p>
//               B2C Lead Generation is the process of collecting personal contact information from individuals likely to be interested in your products or services, typically through paid ads, landing pages, contests, and opt-in funnels.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">What We Deliver:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Verified Consumer Contact Lists (Name, Email, Phone)</li>
//               <li>Demographic and Behavioral Targeting</li>
//               <li>Custom Landing Pages & Lead Forms</li>
//               <li>Lead Nurturing Funnels & Retargeting</li>
//               <li>Real-Time Lead Delivery</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Campaign Channels:</h3>
//             <p>
//               We use Meta (Facebook/Instagram) ads, Google Ads, influencer partnerships, quizzes, and native ads to attract and convert high-intent consumers.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Industries Served:</h3>
//             <p>
//               Our B2C lead gen services are ideal for D2C brands, e-commerce stores, insurance companies, educational institutions, and real estate businesses.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Data Enrichment & Segmentation:</h3>
//             <p>
//               We enrich collected leads with additional demographic, geographic, and behavioral data—allowing smarter segmentation and campaign optimization.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Conversion-Driven Approach:</h3>
//             <p>
//               Every lead is captured through persuasive copy, optimized CTAs, and compelling offers designed to boost response and purchase rates.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Launch Scalable B2C Campaigns Today</h3>
//             <p>
//               Whether you're looking to grow your email list, acquire new buyers, or promote a time-sensitive offer, LaCleo delivers high-quality B2C leads tailored to your goals.
//             </p>
//           </section>
//         </section>`
// }
// ,
//    {
//   id: 4,
//   sid: 20,
//   promo: "CEO Email List",
//   heading: "“Reach Top-Level Decision Makers with Verified CEO Email Lists”",
//   keywords: ["C-Level Outreach", "Executive Contacts", "B2B Email Marketing"],
//   secheading: "Connect Directly with CEOs Across Industries",
//   secpara: "LaCleo’s CEO Email List gives you instant access to accurate and permission-based contact information of Chief Executive Officers—empowering your sales, partnerships, or investor outreach efforts with direct communication channels.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>Targeting C-level executives can be difficult, but not when you have the right data. LaCleo’s CEO Email Lists are meticulously verified and segmented by industry, location, and company size—making high-level outreach efficient and effective.</p>

//           <section>
//             <h3 class="text-xl font-bold">What is a CEO Email List?</h3>
//             <p>
//               A CEO Email List is a curated database of verified email addresses and contact information of company CEOs from various sectors. It allows businesses to engage directly with key decision-makers.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">What’s Included:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Full Name & Job Title (CEO/President/MD)</li>
//               <li>Business Email Address (Verified)</li>
//               <li>Company Name & Website</li>
//               <li>Industry Classification & Revenue Range</li>
//               <li>Phone Number & LinkedIn Profile (if available)</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Use Cases:</h3>
//             <p>
//               Perfect for B2B marketers, consultants, SaaS companies, investment firms, and event organizers looking to reach top-level executives for demos, partnerships, or invites.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Data Accuracy & Compliance:</h3>
//             <p>
//               Our lists are GDPR-compliant, manually verified, and regularly updated to maintain high deliverability rates and minimize bounce backs.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Custom List Building:</h3>
//             <p>
//               Need CEOs from specific regions or industries? We offer tailored list-building services based on your unique targeting criteria.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Delivery & Format:</h3>
//             <p>
//               Receive your CEO email list in Excel, CSV, or directly integrated with your CRM platform—ready for immediate outreach.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Open Doors to High-Level Conversations</h3>
//             <p>
//               Partner with LaCleo and gain a competitive edge by accessing decision-makers who matter most—through accurate, actionable, and permission-based CEO email contacts.
//             </p>
//           </section>
//         </section>`
// }
// ,
//    {
//   id: 4,
//   sid: 21,
//   promo: "CTO Email List",
//   heading: "“Directly Reach Chief Technology Officers with Verified Contact Data”",
//   keywords: ["Tech Decision-Makers", "C-Level Data", "B2B Tech Outreach"],
//   secheading: "Engage with the Tech Leaders Behind Key Buying Decisions",
//   secpara: "LaCleo’s CTO Email List equips you with accurate, up-to-date contact information of Chief Technology Officers across industries—enabling you to pitch products, schedule demos, or discuss tech partnerships with the right people.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>Chief Technology Officers (CTOs) are critical influencers in a company’s technology stack decisions. LaCleo helps you connect directly with these decision-makers by providing clean, verified contact data that powers smarter outreach and better results.</p>

//           <section>
//             <h3 class="text-xl font-bold">What is a CTO Email List?</h3>
//             <p>
//               A CTO Email List is a targeted database containing the verified email addresses and contact details of Chief Technology Officers across different companies, industries, and geographies.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">What’s Included:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Full Name & Designation (CTO/VP Engineering)</li>
//               <li>Verified Business Email Address</li>
//               <li>Company Name & Size</li>
//               <li>Industry Category & Tech Focus</li>
//               <li>LinkedIn Profile, Phone Number (if available)</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Ideal For:</h3>
//             <p>
//               SaaS vendors, cybersecurity firms, cloud service providers, dev tool creators, and consultancies targeting technical stakeholders for product demos or collaborations.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Targeting & Segmentation:</h3>
//             <p>
//               Choose from filters like industry, geography, employee size, revenue, and tech stack to build a hyper-targeted outreach list customized to your campaign goals.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Compliance & Quality Assurance:</h3>
//             <p>
//               Every contact in our CTO list goes through multi-step verification including email validation and GDPR-compliant sourcing practices to ensure high deliverability.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Delivery Format:</h3>
//             <p>
//               Get your data in easy-to-use formats like CSV, Excel, or integrated directly into platforms like HubSpot, Salesforce, or Zoho.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Get in Touch with the Tech Gatekeepers</h3>
//             <p>
//               With LaCleo’s CTO Email List, you gain access to the people shaping tech decisions—so your message reaches the right inbox at the right time.
//             </p>
//           </section>
//         </section>`
// }
// ,
//    {
//   id: 4,
//   sid: 22,
//   promo: "HR Email List",
//   heading: "“Connect with HR Decision-Makers Across Organizations”",
//   keywords: ["Human Resources Contacts", "Recruitment Leads", "HR Email Database"],
//   secheading: "Reach the Right People for Hiring, Training, and Employee Engagement Solutions",
//   secpara: "LaCleo’s HR Email List provides verified contact details of HR professionals, managers, and directors—allowing you to promote your recruitment platforms, training services, SaaS tools, or HR tech directly to decision-makers.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>Human Resources professionals are at the core of every organization’s talent strategy. With LaCleo’s HR Email List, you can directly engage with those responsible for recruitment, employee experience, compliance, and HR tech adoption.</p>

//           <section>
//             <h3 class="text-xl font-bold">What is the HR Email List?</h3>
//             <p>
//               A curated database of HR contacts including Heads of HR, Talent Acquisition Managers, Training Coordinators, and HR Directors, across industries and company sizes—complete with verified contact information.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">What’s Included:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Full Name & Job Title</li>
//               <li>Business Email Address (Verified)</li>
//               <li>Company Name & Website</li>
//               <li>Industry, Company Size, and Location</li>
//               <li>LinkedIn Profile (if available)</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Perfect For:</h3>
//             <p>
//               HR tech vendors, LMS providers, recruitment platforms, training companies, and SaaS solutions targeting HR departments and workforce managers.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Targeting Options:</h3>
//             <p>
//               Segment your outreach by industry (IT, finance, healthcare, etc.), region, seniority level, or hiring activity to maximize engagement and conversions.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Data Compliance:</h3>
//             <p>
//               All contacts are permission-based, opt-in where applicable, and sourced using GDPR-compliant practices to ensure safe, legal communication.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Delivery & Formats:</h3>
//             <p>
//               Get the list in Excel, CSV, or direct integration with your CRM or email automation tools—so you can start campaigns without delays.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Start Building HR Relationships That Matter</h3>
//             <p>
//               Whether you're offering solutions for recruitment, training, retention, or HR automation, LaCleo’s HR Email List puts your brand in front of the right decision-makers from day one.
//             </p>
//           </section>
//         </section>`
// }
// ,
//    {
//   id: 4,
//   sid: 23,
//   promo: "CMO Email List",
//   heading: "“Connect with Top Marketing Executives Through Verified CMO Contacts”",
//   keywords: ["Marketing Leaders", "C-Level Database", "Growth Campaign Outreach"],
//   secheading: "Target the Strategists Behind Brand Growth and Digital Spend",
//   secpara: "LaCleo’s CMO Email List gives you access to Chief Marketing Officers and senior marketing decision-makers—perfect for promoting martech solutions, media buys, content partnerships, and growth tools.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>Chief Marketing Officers (CMOs) drive brand strategy, customer acquisition, and digital innovation. LaCleo helps you engage these high-level executives with precision by providing verified, role-specific contact data that boosts campaign effectiveness.</p>

//           <section>
//             <h3 class="text-xl font-bold">What is a CMO Email List?</h3>
//             <p>
//               A CMO Email List is a curated collection of contact information belonging to Chief Marketing Officers and senior marketing leaders from diverse industries, enabling you to directly pitch marketing tools, platforms, and strategic partnerships.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">What’s Included:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Full Name & Designation (CMO, VP Marketing, Head of Growth)</li>
//               <li>Verified Business Email Address</li>
//               <li>Company Name, Website, and Size</li>
//               <li>Industry Category & Region</li>
//               <li>LinkedIn Profile & Phone Number (if available)</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Perfect For:</h3>
//             <p>
//               Martech providers, digital agencies, ad-tech companies, media platforms, content creators, SaaS solutions, and event marketers targeting decision-makers in marketing.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Benefits of Our List:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Improved campaign ROI through accurate targeting</li>
//               <li>Faster sales cycles by engaging the right stakeholders</li>
//               <li>Better segmentation based on company size and industry</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Data Integrity & Compliance:</h3>
//             <p>
//               Our email lists are GDPR-compliant, permission-based, and go through regular validation checks to ensure high deliverability.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Delivery Options:</h3>
//             <p>
//               Delivered in formats like CSV, Excel, or integrated directly into your CRM—ready for LinkedIn ads, email campaigns, or outreach workflows.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Access High-Level Marketing Decision Makers Now</h3>
//             <p>
//               LaCleo’s CMO Email List helps you reach the people who control budgets, influence tools, and drive campaigns—so your offering gets seen, not skipped.
//             </p>
//           </section>
//         </section>`
// }
// ,
//    {
//   id: 4,
//   sid: 24,
//   promo: "CHRO Email List",
//   heading: "“Directly Connect with Chief Human Resources Officers Across Industries”",
//   keywords: ["C-Level HR Contacts", "Executive HR Leads", "HR Tech Outreach"],
//   secheading: "Reach the Leaders Shaping Workforce Strategy and Talent Acquisition",
//   secpara: "LaCleo’s CHRO Email List empowers your outreach by providing verified contact details of Chief Human Resources Officers—ideal for pitching HR technology, recruitment platforms, compliance solutions, and leadership training programs.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>CHROs are responsible for workforce planning, employee experience, and organizational culture. LaCleo enables you to connect with these senior HR executives through a compliant, accurate, and highly targeted email list.</p>

//           <section>
//             <h3 class="text-xl font-bold">What is a CHRO Email List?</h3>
//             <p>
//               The CHRO Email List is a curated database of Chief Human Resources Officers and senior HR leaders, including their verified contact information, job titles, and company data—helping you run focused and effective outreach campaigns.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">What’s Included:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Full Name & Title (CHRO, VP of HR, Head of People)</li>
//               <li>Verified Business Email Address</li>
//               <li>Company Name, Industry, and Size</li>
//               <li>Geographic Location</li>
//               <li>LinkedIn Profile (if available)</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Best Suited For:</h3>
//             <p>
//               HR software vendors, employee engagement platforms, DEI consultants, compliance solution providers, and enterprise wellness platforms looking to pitch to HR leadership.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Why Use LaCleo’s CHRO List:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Clean and validated data for high delivery rates</li>
//               <li>Custom segmentation based on company size or vertical</li>
//               <li>Integration-ready formats for your CRM or email tool</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Data Accuracy & Compliance:</h3>
//             <p>
//               All CHRO contacts are sourced through ethical channels, GDPR-compliant, and run through regular email validation checks to reduce bounce rates.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Formats & Integration:</h3>
//             <p>
//               Receive your list in Excel, CSV, or through API/CRM integration with platforms like HubSpot, Mailchimp, or Salesforce.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Drive Strategic Conversations with HR Leaders</h3>
//             <p>
//               With LaCleo’s CHRO Email List, your product, service, or solution gets in front of the executives making long-term workforce and culture decisions.
//             </p>
//           </section>
//         </section>`
// }
// ,
//     {
//   id: 5,
//   sid: 25,
//   promo: "E-Commerce Store Setup",
//   heading: "“Launch a Professional Online Store That Converts from Day One”",
//   keywords: ["E-Commerce Development", "Shopify/WooCommerce Experts", "Online Business Setup"],
//   secheading: "From Concept to Conversion—We Build Stores That Sell",
//   secpara: "LaCleo’s E-Commerce Store Setup service helps entrepreneurs, retailers, and brands create fully functional, visually stunning, and user-friendly online stores optimized for performance, conversion, and scalability.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>Whether you're starting fresh or moving your brick-and-mortar business online, LaCleo offers end-to-end e-commerce store setup solutions tailored to your brand, industry, and audience. We build with a conversion-first approach so you start selling quickly and confidently.</p>

//           <section>
//             <h3 class="text-xl font-bold">What’s Included in Our Store Setup:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Platform setup (Shopify, WooCommerce, Wix, or custom)</li>
//               <li>Theme design and customization</li>
//               <li>Product uploads with images and descriptions</li>
//               <li>Payment gateway and shipping integration</li>
//               <li>Mobile-responsive and SEO-ready design</li>
//               <li>Basic analytics & conversion tracking</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Who It’s For:</h3>
//             <p>
//               Ideal for D2C brands, small businesses, product creators, fashion retailers, and startups aiming to establish a strong online presence and start generating revenue fast.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Customization Options:</h3>
//             <p>
//               From single-product stores to large catalogs, we tailor the design, layout, and features to your niche, goals, and target audience—ensuring a seamless user experience.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Integrated Tools:</h3>
//             <p>
//               We integrate essential tools like live chat, email capture, retargeting pixels, reviews/testimonials, and abandoned cart recovery systems to boost sales and trust.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">SEO & Speed Optimization:</h3>
//             <p>
//               Every store is built to be fast-loading, search engine optimized, and mobile-friendly—giving your business the visibility and performance edge it needs.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Training & Support:</h3>
//             <p>
//               We don’t just build and leave. We provide tutorials, admin panel walkthroughs, and 30-day support post-launch to help you manage and grow your store confidently.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Ready to Launch?</h3>
//             <p>
//               Partner with LaCleo to bring your e-commerce vision to life—faster, smarter, and with better ROI. We make it easy to start selling online with zero guesswork.
//             </p>
//           </section>
//         </section>`
// }
// ,
//    {
//   id: 5,
//   sid: 26,
//   promo: "Product Listing & Catalogue Management",
//   heading: "“Organize, Optimize, and Scale Your Product Listings with Ease”",
//   keywords: ["E-Commerce Product Management", "Catalogue Optimization", "Marketplace Listings"],
//   secheading: "Ensure Every Product You Sell is Easily Discoverable and High-Converting",
//   secpara: "LaCleo’s Product Listing & Catalogue Management services are designed to help online sellers maintain clean, consistent, and conversion-focused product catalogs across platforms like Shopify, Amazon, Flipkart, and more.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>Managing thousands of SKUs across multiple sales channels can be overwhelming. That’s where LaCleo comes in—our experts take care of product data accuracy, formatting, SEO optimization, and platform compliance so your listings stand out and sell faster.</p>

//           <section>
//             <h3 class="text-xl font-bold">What We Offer:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Bulk product uploads & updates</li>
//               <li>SEO-optimized product titles and descriptions</li>
//               <li>Image resizing, renaming, and alt text setup</li>
//               <li>Category mapping and tagging</li>
//               <li>Inventory sync across platforms</li>
//               <li>Variant management (size, color, bundles)</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Who Needs This:</h3>
//             <p>
//               E-commerce brands, Amazon sellers, Shopify store owners, D2C startups, and vendors managing large product catalogs across multiple marketplaces.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Why It Matters:</h3>
//             <p>
//               Poorly structured product listings confuse customers and hurt conversion rates. Clean, enriched, and platform-compliant listings lead to higher search visibility and better customer experience.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Marketplace Expertise:</h3>
//             <p>
//               We handle listings for Amazon, Flipkart, Meesho, JioMart, Nykaa, and your own e-commerce store—following each platform’s exact guidelines for maximum exposure.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Tools & Technology:</h3>
//             <p>
//               We use catalog management tools like PIM systems, Excel macros, and product APIs for bulk editing, error removal, and faster execution.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Ongoing Support:</h3>
//             <p>
//               Get monthly catalog audits, product upload assistance, and change tracking to ensure your listings always stay updated and optimized.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Let Your Products Speak for Themselves</h3>
//             <p>
//               With LaCleo’s product listing and catalogue management, every product is optimized to convert—so you spend less time fixing errors and more time making sales.
//             </p>
//           </section>
//         </section>`
// }
// ,
//    {
//   id: 5,
//   sid: 27,
//   promo: "E-Commerce Marketing",
//   heading: "“Drive Traffic, Convert Leads, and Grow Your Online Store”",
//   keywords: ["Digital Marketing for E-Commerce", "Sales Funnel Optimization", "Performance Marketing"],
//   secheading: "Boost Your Online Sales with Data-Driven E-Commerce Campaigns",
//   secpara: "LaCleo’s E-Commerce Marketing service combines performance marketing, SEO, social media, and automation strategies to help your store attract high-intent traffic, increase conversion rates, and retain loyal customers.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>Marketing an online store takes more than just running ads. At LaCleo, we create tailored strategies that meet customers at every stage of their journey—from discovery and engagement to conversion and re-purchase.</p>

//           <section>
//             <h3 class="text-xl font-bold">Our E-Commerce Marketing Stack:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Google & Meta Ads (Search, Display, Shopping, Retargeting)</li>
//               <li>SEO for product/category pages & blogs</li>
//               <li>Email automation & cart recovery flows</li>
//               <li>Influencer & affiliate marketing campaigns</li>
//               <li>Social media management & content creation</li>
//               <li>Analytics & conversion rate optimization</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Tailored for Every Store Type:</h3>
//             <p>
//               Whether you sell fashion, electronics, personal care, or digital goods—our team customizes messaging, visuals, and ad placements to resonate with your audience and industry.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Sales Funnel Optimization:</h3>
//             <p>
//               We design and implement full-funnel marketing—from TOFU brand awareness to BOFU remarketing and loyalty campaigns—ensuring a consistent growth pipeline.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Omni-Channel Strategy:</h3>
//             <p>
//               Connect with your customers across multiple platforms like Instagram, Facebook, Google, YouTube, and WhatsApp—creating a seamless, high-converting journey.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Analytics-Driven Decisions:</h3>
//             <p>
//               We use tools like GA4, Hotjar, Meta Pixel, and custom dashboards to continuously optimize your ad spend, creative strategy, and website performance.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Why LaCleo:</h3>
//             <p>
//               With years of experience in e-commerce growth, LaCleo blends creativity and analytics to deliver campaigns that actually convert—not just impressions.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Start Scaling Your Store Today</h3>
//             <p>
//               Don’t just launch—grow. With LaCleo’s E-Commerce Marketing services, your online store becomes a profit engine backed by strategic digital execution.
//             </p>
//           </section>
//         </section>`
// }
// ,
//   {
//   id: 5,
//   sid: 28,
//   promo: "Order Process Tracking",
//   heading: "“Ensure Real-Time Visibility and Control Over Every Customer Order”",
//   keywords: ["E-Commerce Fulfillment", "Logistics Integration", "Order Status Automation"],
//   secheading: "Seamless Order Monitoring to Improve Customer Satisfaction and Reduce Errors",
//   secpara: "LaCleo’s Order Process Tracking solution empowers businesses to monitor, manage, and optimize every step of the post-purchase experience—from order confirmation to final delivery—boosting transparency and trust.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>In the competitive world of e-commerce, fast and transparent order fulfillment isn’t optional—it’s expected. LaCleo helps you implement reliable, automated tracking systems that keep your customers informed and your operations running smoothly.</p>

//           <section>
//             <h3 class="text-xl font-bold">What is Order Process Tracking?</h3>
//             <p>
//               Order process tracking refers to the systemized monitoring of every stage in the customer order lifecycle—from checkout and payment to dispatch, shipping, and final delivery.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Key Features:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Real-time order status updates via email/SMS</li>
//               <li>Integration with logistics providers (Delhivery, Shiprocket, etc.)</li>
//               <li>Order dashboard for both customers and admin</li>
//               <li>COD vs Prepaid order differentiation</li>
//               <li>Expected delivery time estimates</li>
//               <li>Return & refund status tracking</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Why It Matters:</h3>
//             <p>
//               A transparent order tracking system reduces customer queries, enhances post-purchase experience, and minimizes cart abandonment due to delivery concerns.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Platform Compatibility:</h3>
//             <p>
//               Fully compatible with Shopify, WooCommerce, Magento, and custom-built e-commerce platforms with flexible API-based integrations.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Improved Customer Experience:</h3>
//             <p>
//               Customers get peace of mind with proactive updates and self-service order tracking, helping you build trust and reduce support tickets.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Admin Insights & Analytics:</h3>
//             <p>
//               Track order delays, returns, and fulfillment rates with backend reporting tools to identify bottlenecks and improve logistics performance.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Deliver a Smoother Post-Purchase Journey</h3>
//             <p>
//               With LaCleo’s Order Process Tracking, you not only enhance operational control but also win customer loyalty by offering a seamless and predictable fulfillment experience.
//             </p>
//           </section>
//         </section>`
// }
// ,
//    {
//   id: 5,
//   sid: 29,
//   promo: "Customer Ticket Management",
//   heading: "“Streamline Support with a Smarter Ticketing System”",
//   keywords: ["Helpdesk Automation", "Customer Support", "Ticket Resolution Workflow"],
//   secheading: "Deliver Faster, Smarter, and More Organized Customer Support",
//   secpara: "LaCleo’s Customer Ticket Management service helps businesses implement a robust, centralized helpdesk system that ensures no customer query goes unanswered—enhancing satisfaction and reducing resolution time.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>Managing customer queries manually across email, chat, and social media can become chaotic and inefficient. LaCleo enables you to centralize, categorize, and track every customer issue from one dashboard using smart ticketing workflows.</p>

//           <section>
//             <h3 class="text-xl font-bold">What is Customer Ticket Management?</h3>
//             <p>
//               It’s a structured support system that assigns a unique ticket ID to each query, allowing teams to track, prioritize, and resolve issues efficiently across channels like email, WhatsApp, and website chat.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Key Features:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Multi-channel ticket creation (Email, Chat, Social Media)</li>
//               <li>Auto-response and escalation rules</li>
//               <li>Agent assignment and SLA timers</li>
//               <li>Status tracking (Open, In Progress, Resolved)</li>
//               <li>Tagging, notes, and internal comments</li>
//               <li>Customer history & conversation logs</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Why It’s Essential:</h3>
//             <p>
//               Disorganized support leads to delays, missed follow-ups, and frustrated customers. A ticket system ensures accountability, transparency, and faster resolution for every issue.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Platform Integration:</h3>
//             <p>
//               Seamlessly integrates with tools like Freshdesk, Zendesk, HubSpot Service Hub, or can be built as a custom ticket module in your admin dashboard.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Smart Reporting & Insights:</h3>
//             <p>
//               Get real-time insights into resolution time, agent performance, ticket volume trends, and customer satisfaction to improve support KPIs.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Automate and Scale Support Effortlessly</h3>
//             <p>
//               With LaCleo’s Customer Ticket Management system, even a small team can handle large volumes of queries effectively—ensuring every customer gets timely and professional assistance.
//             </p>
//           </section>
//         </section>`
// }
// ,
//    {
//   id: 6,
//   sid: 30,
//   promo: "Cross Browser Testing",
//   heading: "“Ensure Seamless Web Experiences Across All Browsers”",
//   keywords: ["UI/UX Consistency", "Browser Compatibility", "Digital Experience Testing"],
//   secheading: "Deliver a Uniform and Error-Free Experience, No Matter the User’s Browser",
//   secpara: "LaCleo’s Cross Browser Testing service ensures your website or web app works flawlessly across Chrome, Firefox, Safari, Edge, and other modern browsers—eliminating UI glitches and functional issues that impact user experience and conversions.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>Your users come from diverse platforms and devices. A minor rendering issue on one browser can lead to lost trust, abandoned sessions, or missed conversions. LaCleo helps you test, identify, and fix cross-browser issues before your users find them.</p>

//           <section>
//             <h3 class="text-xl font-bold">What is Cross Browser Testing?</h3>
//             <p>
//               Cross browser testing is the process of validating that your website looks and functions correctly across multiple browsers and their respective versions. It’s critical to delivering a consistent experience for all users.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Key Testing Parameters:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>UI layout rendering and CSS styles</li>
//               <li>Form inputs, dropdowns, and buttons</li>
//               <li>Page responsiveness and mobile viewport behavior</li>
//               <li>Animations, modals, and JavaScript functionality</li>
//               <li>Third-party widget compatibility</li>
//               <li>Loading speed and performance variations</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Browsers & Devices We Cover:</h3>
//             <p>
//               Chrome, Firefox, Safari, Microsoft Edge, Opera (latest + legacy versions), and mobile browsers like iOS Safari and Android Chrome using real devices and emulators.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Tools & Platforms:</h3>
//             <p>
//               We leverage tools like BrowserStack, LambdaTest, and custom Selenium scripts to automate and visually review cross-browser behavior.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Reporting & Fixes:</h3>
//             <p>
//               Our detailed test reports include screenshots, bug logs, browser-specific recommendations, and optional CSS/JS fixes to streamline your dev process.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Deliver Consistency Across Every Pixel</h3>
//             <p>
//               LaCleo ensures your digital experience doesn’t break across platforms. Win user trust with consistent design, functionality, and performance—on any browser.
//             </p>
//           </section>
//         </section>`
// }
// ,
//    {
//   id: 6,
//   sid: 31,
//   promo: "End to End Functional Testing",
//   heading: "“Test Every Workflow, So Your Users Never Hit a Dead End”",
//   keywords: ["Functional QA", "E2E Testing", "Workflow Validation"],
//   secheading: "Ensure All Critical User Journeys Work Flawlessly Across Your Web or App Platform",
//   secpara: "LaCleo’s End to End Functional Testing validates complete user flows—from login to checkout—to catch errors, bugs, and blockers before they impact real customers, ensuring your platform performs as intended under real-world conditions.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>It’s not enough for parts of your website or application to work in isolation. Our E2E testing ensures the entire experience—from homepage to final confirmation—is smooth, error-free, and user-friendly.</p>

//           <section>
//             <h3 class="text-xl font-bold">What is End to End Functional Testing?</h3>
//             <p>
//               It’s a quality assurance method where we simulate real user behaviors to verify that all interconnected systems, APIs, and UI components function correctly through complete workflows.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">What We Test:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Login/Signup flows with validation and auth</li>
//               <li>Product search, filtering, and cart behavior</li>
//               <li>Checkout and payment gateway integration</li>
//               <li>Account settings, profile updates, and logout</li>
//               <li>Email triggers, confirmations, and notifications</li>
//               <li>Third-party API or CRM system handshakes</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Tools & Frameworks We Use:</h3>
//             <p>
//               Selenium, Cypress, Playwright, Postman, TestRail, and custom automation scripts with real-time CI/CD integration.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Benefits:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Catch critical bugs early before deployment</li>
//               <li>Reduce post-launch complaints and churn</li>
//               <li>Improve release confidence and stability</li>
//               <li>Enhance cross-platform functionality assurance</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Custom Test Cases & Reporting:</h3>
//             <p>
//               We design test cases tailored to your app logic, business rules, and KPIs. Reports include severity grading, screenshots, logs, and regression tracking.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Deliver Smooth, Error-Free Experiences</h3>
//             <p>
//               With LaCleo’s End to End Functional Testing, your users will never hit dead ends, broken buttons, or failed checkouts—only seamless journeys that build trust.
//             </p>
//           </section>
//         </section>`
// }
// ,{
//   id: 6,
//   sid: 32,
//   promo: "Non Functional Testing",
//   heading: "“Validate Performance, Reliability, and Scalability—Beyond Just Functionality”",
//   keywords: ["Performance Testing", "Scalability", "Load & Stress Testing", "Security Compliance"],
//   secheading: "Ensure Your Application Performs Exceptionally Under All Conditions",
//   secpara: "LaCleo’s Non Functional Testing services evaluate your application’s performance, security, usability, and scalability—so it not only works, but works well across different environments, user loads, and threat vectors.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>While functional testing ensures your app behaves as expected, non functional testing ensures it performs under stress, scales efficiently, loads quickly, and stays secure. At LaCleo, we test how your product behaves—not just what it does.</p>

//           <section>
//             <h3 class="text-xl font-bold">What is Non Functional Testing?</h3>
//             <p>
//               Non functional testing focuses on validating the non-behavioral aspects of your software—like speed, responsiveness, security, and resource usage—ensuring an optimal experience under any condition.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Key Testing Categories:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li><strong>Performance Testing:</strong> Load, stress, spike, and endurance testing</li>
//               <li><strong>Security Testing:</strong> Vulnerability scans, data encryption, and access control checks</li>
//               <li><strong>Usability Testing:</strong> User-centric design audits and navigation flows</li>
//               <li><strong>Compatibility Testing:</strong> Across devices, browsers, and operating systems</li>
//               <li><strong>Scalability Testing:</strong> Handling of increasing user loads and data growth</li>
//               <li><strong>Compliance Testing:</strong> GDPR, HIPAA, ISO standards if applicable</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Tools We Use:</h3>
//             <p>
//               JMeter, LoadRunner, OWASP ZAP, Burp Suite, Google Lighthouse, BrowserStack, and custom automation scripts for simulation and reporting.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Why It Matters:</h3>
//             <p>
//               Users expect apps to load in under 3 seconds, stay secure, and work smoothly under traffic surges. Non functional issues lead to churn, downtime, or reputational damage if ignored.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Actionable Reports:</h3>
//             <p>
//               We deliver in-depth reports with response time metrics, load graphs, error breakdowns, security threats, and recommended improvements.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Deliver Confidence Beyond Code</h3>
//             <p>
//               With LaCleo’s Non Functional Testing, you’re not just launching a working app—you’re launching a resilient, fast, and user-approved experience that scales with growth.
//             </p>
//           </section>
//         </section>`
// }
// ,
//   {
//   id: 7,
//   sid: 33,
//   promo: "Live Chat Support",
//   heading: "“Connect with Your Customers in Real Time—Instantly and Effectively”",
//   keywords: ["Customer Engagement", "Live Chat Integration", "24/7 Support"],
//   secheading: "Deliver Fast, Personalized Support That Converts Visitors into Customers",
//   secpara: "LaCleo’s Live Chat Support solution helps businesses increase customer satisfaction, reduce bounce rates, and boost conversions by enabling real-time conversations through website or app-integrated chat modules.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>Today’s digital customers expect instant answers. Live Chat Support bridges the gap between browsing and buying—helping you resolve queries, offer product guidance, and reduce drop-offs with a human touch.</p>

//           <section>
//             <h3 class="text-xl font-bold">What is Live Chat Support?</h3>
//             <p>
//               Live Chat is a real-time communication tool embedded into your website or app that enables visitors to instantly connect with your support or sales team, offering timely assistance during critical decision moments.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Core Features:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Instant messaging via web or mobile widget</li>
//               <li>Automated welcome messages and pre-chat forms</li>
//               <li>Visitor tracking and behavior insights</li>
//               <li>Agent availability routing and priority queues</li>
//               <li>Chat transcripts and CRM integration</li>
//               <li>Multi-language and time-zone support</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Benefits of Live Chat:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Boost conversions by assisting at the point of hesitation</li>
//               <li>Resolve questions without making users leave the page</li>
//               <li>Reduce support costs compared to call centers</li>
//               <li>Collect feedback and nurture leads in real-time</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Platform Integration:</h3>
//             <p>
//               Works seamlessly with tools like Intercom, Drift, Zendesk Chat, Tawk.to, or your custom backend—adapted to your tech stack and business flow.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Live Chat + Chatbots = 24/7 Support</h3>
//             <p>
//               Combine manual support with AI chatbots to answer FAQs and qualify leads even outside working hours—ensuring your users are never left waiting.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Deliver Instant Support, Build Lasting Trust</h3>
//             <p>
//               With LaCleo’s Live Chat Support, turn customer queries into conversations—and conversations into conversions—with speed, empathy, and precision.
//             </p>
//           </section>
//         </section>`
// }
// ,
//   {
//   id: 7,
//   sid: 34,
//   promo: "Email Support",
//   heading: "“Deliver Professional, Timely, and Trackable Customer Assistance via Email”",
//   keywords: ["Customer Support", "Ticket-Based Email Management", "Service Response Automation"],
//   secheading: "Offer Reliable and Scalable Support Through Your Most Trusted Channel",
//   secpara: "LaCleo’s Email Support service helps businesses manage large volumes of customer queries with structure, speed, and quality—ensuring every message is acknowledged, resolved, and recorded in a seamless and professional workflow.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>Email remains one of the most preferred and versatile channels for customer service. Our managed email support service gives your team the ability to respond faster, track issue history, and ensure no request is ever missed.</p>

//           <section>
//             <h3 class="text-xl font-bold">What is Email Support?</h3>
//             <p>
//               Email support involves resolving customer queries, complaints, and information requests via structured and monitored email threads—often using helpdesk platforms for tracking, tagging, and prioritizing communication.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Key Features:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Dedicated support inboxes with SLA tracking</li>
//               <li>Automated ticket generation for every email</li>
//               <li>Pre-written templates for faster replies</li>
//               <li>Thread-based conversation tracking</li>
//               <li>Agent performance metrics and audit trails</li>
//               <li>Multi-agent access and escalation workflows</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Why Email Support Works:</h3>
//             <p>
//               It’s cost-effective, asynchronous, and easily documented—making it ideal for detailed or sensitive queries that may require attachments, instructions, or confirmations.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Tools We Work With:</h3>
//             <p>
//               Freshdesk, Zoho Desk, Zendesk, HubSpot, Help Scout, or even custom Gmail/Gsuite automation setups.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Performance Insights:</h3>
//             <p>
//               We deliver detailed reports on average response time, resolution time, ticket categories, and unresolved rates to help you continuously improve.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Build Trust Through Every Response</h3>
//             <p>
//               With LaCleo’s Email Support, your business shows customers it listens, responds with clarity, and cares about resolution—turning service into a retention asset.
//             </p>
//           </section>
//         </section>`
// }
// ,
//    {
//   id: 7,
//   sid: 35,
//   promo: "Self-Service Support",
//   heading: "“Empower Customers to Find Answers—Without Waiting”",
//   keywords: ["Knowledge Base", "Customer Portals", "24/7 Support Access", "Help Center Automation"],
//   secheading: "Reduce Support Load and Boost Satisfaction with Smart Self-Service Options",
//   secpara: "LaCleo’s Self-Service Support solutions let your customers resolve issues, learn about features, and find quick answers through an intuitive help center—available 24/7 and tailored to your products or services.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>Not every customer wants to wait for a response. Many prefer to help themselves—if the information is readily available. Our self-service systems empower users while freeing up your live agents to handle more complex cases.</p>

//           <section>
//             <h3 class="text-xl font-bold">What is Self-Service Support?</h3>
//             <p>
//               It includes digital tools and resources—like FAQs, knowledge bases, help articles, video tutorials, and community forums—that enable users to solve common problems without agent intervention.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Key Components We Build:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Structured knowledge bases with search filters</li>
//               <li>Step-by-step guides and how-to articles</li>
//               <li>Interactive tutorials and video walkthroughs</li>
//               <li>Community Q&A or forums</li>
//               <li>Automated chatbots for instant suggestions</li>
//               <li>Multi-language content and accessibility features</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Why Self-Service Matters:</h3>
//             <p>
//               It reduces support volume, lowers costs, and improves customer satisfaction by giving users instant solutions—especially during off-hours or global operations.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Integration & Analytics:</h3>
//             <p>
//               Our solutions integrate with your CRM, helpdesk (like Zendesk, Freshdesk, Intercom), and analytics tools to track what users search for, click on, and where they drop off.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Keep Support Open 24/7 Without Extra Agents</h3>
//             <p>
//               LaCleo helps you build scalable self-service experiences so customers can resolve their issues independently, while your team stays focused on what truly needs attention.
//             </p>
//           </section>
//         </section>`
// }
// ,
//    {
//   id: 7,
//   sid: 36,
//   promo: "Interactive Voice Support",
//   heading: "“Connect with Customers via Voice—Efficiently and Personably”",
//   keywords: ["IVR Systems", "Inbound/Outbound Calls", "Voice-Based Customer Support", "Call Center Solutions"],
//   secheading: "Deliver Real-Time, Humanized Support Through Intelligent Voice Systems",
//   secpara: "LaCleo’s Interactive Voice Support enables brands to engage customers through automated IVR menus and live voice assistance—improving response speed, personal interaction, and call resolution without overwhelming your team.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>When a customer needs quick answers or human assurance, voice remains one of the most effective and trusted support channels. Our Interactive Voice Support systems help you scale voice support while keeping it personalized and efficient.</p>

//           <section>
//             <h3 class="text-xl font-bold">What is Interactive Voice Support?</h3>
//             <p>
//               It includes both live agent voice assistance and automated IVR (Interactive Voice Response) systems that guide users through options and direct them to the right support based on input via keypad or voice commands.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Core Features:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Multi-level IVR call flows with custom prompts</li>
//               <li>Real-time call routing based on input and priority</li>
//               <li>Voice message logging and transcription</li>
//               <li>Inbound & outbound call handling with agent assignment</li>
//               <li>Call recording, tagging, and reporting</li>
//               <li>Multilingual support and region-based routing</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Benefits of Voice Support:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Reduce wait times and improve first-contact resolution</li>
//               <li>Humanize your brand with voice-based conversations</li>
//               <li>Build trust through live, empathetic assistance</li>
//               <li>Automate repetitive queries with smart IVR logic</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Tools & Integrations:</h3>
//             <p>
//               Compatible with systems like Twilio, Aircall, Freshcaller, Five9, or custom PBX setups—integrated with CRMs and ticketing tools for context-driven support.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Voice That Supports, Not Replaces</h3>
//             <p>
//               At LaCleo, we blend human empathy with automation to create voice support systems that offer answers, assurance, and connection—exactly when your customer needs it most.
//             </p>
//           </section>
//         </section>`
// }
// ,
//    {
//   id: 7,
//   sid: 37,
//   promo: "Social Media Support",
//   heading: "“Be Where Your Customers Are—Support Them in Real Time on Social Channels”",
//   keywords: ["Social Media Customer Service", "Multi-Channel Support", "Brand Monitoring", "Real-Time Engagement"],
//   secheading: "Transform Social Platforms into Powerful Customer Support Channels",
//   secpara: "LaCleo’s Social Media Support solutions help brands manage customer conversations across platforms like Instagram, Twitter, Facebook, and LinkedIn—resolving issues quickly, publicly, and with the personality your audience expects.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>Today’s consumers expect support not just through websites or emails—but on the social platforms where they already spend their time. We help you meet them there with responsive, empathetic service that builds trust and visibility.</p>

//           <section>
//             <h3 class="text-xl font-bold">What is Social Media Support?</h3>
//             <p>
//               Social Media Support refers to responding to customer inquiries, complaints, feedback, and mentions directly on platforms like Facebook, Instagram, Twitter, and LinkedIn—offering help where the customer initiates it.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">What We Offer:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>24/7 response to DMs, comments, and mentions</li>
//               <li>Brand sentiment analysis and social listening</li>
//               <li>Pre-approved templates for FAQs and escalation</li>
//               <li>Tag-based workflow routing (sales, support, billing, etc.)</li>
//               <li>Real-time alerts for negative feedback</li>
//               <li>Integration with CRM and ticketing tools</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Benefits of Social Support:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Provide instant assistance where customers expect it</li>
//               <li>Boost brand reputation through visible resolutions</li>
//               <li>Lower support cost via conversational threads</li>
//               <li>Convert followers into loyal customers with great service</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Platforms We Support:</h3>
//             <p>
//               Facebook, Instagram, Twitter (X), LinkedIn, YouTube, WhatsApp, and other platforms using tools like Sprout Social, Zoho Social, Hootsuite, Freshdesk Messaging, or Meta Business Suite.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Customer Support Meets Community Building</h3>
//             <p>
//               LaCleo’s Social Media Support goes beyond issue resolution—it’s about engaging authentically, protecting your brand, and showing the world you care in real time.
//             </p>
//           </section>
//         </section>`
// }
// ,
//   {
//   id: 7,
//   sid: 38,
//   promo: "Web Commerce Support",
//   heading: "“Deliver Seamless Shopping Experiences with Expert E-Commerce Assistance”",
//   keywords: ["E-Commerce Support", "Order Management", "Customer Assistance", "Webstore Troubleshooting"],
//   secheading: "Ensure Smooth Operations and Happy Customers Across Your Online Storefront",
//   secpara: "LaCleo’s Web Commerce Support helps you manage the critical backend and customer-facing tasks that power your online store—from resolving order issues and returns to guiding users through checkout or product navigation.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>Running an online store means ensuring every touchpoint—product views, payments, fulfillment, and service—works flawlessly. Our Web Commerce Support ensures your customers never face friction during their buying journey.</p>

//           <section>
//             <h3 class="text-xl font-bold">What is Web Commerce Support?</h3>
//             <p>
//               It includes customer service, technical troubleshooting, and operational support provided for e-commerce websites and marketplaces—helping both shoppers and store managers resolve issues in real-time.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">What We Cover:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Order placement issues and payment failures</li>
//               <li>Shipping status and returns coordination</li>
//               <li>Product navigation and search assistance</li>
//               <li>Cart abandonment follow-ups</li>
//               <li>Website error handling and bug reporting</li>
//               <li>Integration with inventory and CRM systems</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Supported Platforms:</h3>
//             <p>
//               Shopify, WooCommerce, Magento, BigCommerce, Wix Stores, and custom platforms—fully integrated with your CMS, payment gateway, and logistics partners.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Benefits for Your Business:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Fewer abandoned carts and lost orders</li>
//               <li>Improved buyer satisfaction and retention</li>
//               <li>Fast resolution of technical or operational issues</li>
//               <li>Better coordination between support, sales, and fulfillment</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Boost Conversions with Expert-Led Support</h3>
//             <p>
//               LaCleo helps you turn e-commerce complexity into simplicity—with a proactive support team ready to assist customers, solve problems, and optimize every transaction.
//             </p>
//           </section>
//         </section>`
// }
// ,
//    {
//   id: 7,
//   sid: 39,
//   promo: "On-Site Support",
//   heading: "“Deliver Personalized, In-Person Support for Complex or Critical Business Needs”",
//   keywords: ["Field Support", "IT On-Site Services", "Hardware Assistance", "Enterprise Technical Support"],
//   secheading: "Bridge the Gap Between Remote Limitations and Real-Time Physical Assistance",
//   secpara: "LaCleo’s On-Site Support services provide expert technicians and support staff at your location—helping with installations, system diagnostics, hardware troubleshooting, staff training, and more for enterprises that demand in-person solutions.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>Some challenges can’t be solved remotely. Whether it's setting up infrastructure, resolving hardware issues, or managing on-location customer experiences—our On-Site Support ensures you're never alone when it matters most.</p>

//           <section>
//             <h3 class="text-xl font-bold">What is On-Site Support?</h3>
//             <p>
//               On-Site Support involves dispatching trained professionals directly to your business premises to perform technical tasks, offer consultations, conduct repairs, or manage customer operations hands-on.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Services We Provide:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Hardware setup and troubleshooting</li>
//               <li>Network and server maintenance</li>
//               <li>Point-of-sale (POS) support</li>
//               <li>Onboarding and software training</li>
//               <li>Inventory system setup</li>
//               <li>Customer kiosk or in-store support</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Industries We Serve:</h3>
//             <p>
//               Retail chains, logistics hubs, healthcare providers, event venues, educational institutions, and more—anywhere physical presence improves performance and trust.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Advantages of On-Site Support:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Instant physical resolution of technical issues</li>
//               <li>Improved uptime and operational continuity</li>
//               <li>Hands-on product training and staff support</li>
//               <li>Stronger relationship building through face-to-face service</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Scalable & Scheduled Visits</h3>
//             <p>
//               Whether you need one-time setup assistance or recurring weekly technician visits, LaCleo provides flexible deployment plans based on your operational scale and support needs.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">In-Person Expertise That Delivers Confidence</h3>
//             <p>
//               With LaCleo’s On-Site Support, you gain the reliability of physical presence backed by the efficiency of our digital infrastructure—ensuring both hardware and people perform at their best.
//             </p>
//           </section>
//         </section>`
// }
// ,
//   {
//   id: 7,
//   sid: 40,
//   promo: "Telephone Support",
//   heading: "“Offer Fast, Personable Assistance with Direct Voice-Based Support”",
//   keywords: ["Customer Helpline", "Voice Assistance", "Real-Time Support", "Phone-Based Issue Resolution"],
//   secheading: "Build Customer Trust and Resolve Issues Faster with Direct Phone Communication",
//   secpara: "LaCleo’s Telephone Support services empower your business to handle customer queries and technical concerns through live, human interaction—creating empathy, clarity, and faster resolutions across all customer types.",
//   text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
//           <p>In an age of chatbots and emails, phone calls still remain one of the fastest ways to resolve customer concerns, build rapport, and handle urgent situations. Our trained telephone support agents bring professionalism and warmth to every call.</p>

//           <section>
//             <h3 class="text-xl font-bold">What is Telephone Support?</h3>
//             <p>
//               Telephone Support provides real-time voice interaction between a customer and support representative, addressing issues, answering questions, and offering guidance over a live call connection.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">What We Provide:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Dedicated helpline numbers for your business</li>
//               <li>24/7 or business hours live support</li>
//               <li>Call routing, forwarding, and escalation systems</li>
//               <li>Call scripting for brand-consistent responses</li>
//               <li>Multilingual support agents available</li>
//               <li>Integration with CRMs for caller history</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Benefits of Telephone Support:</h3>
//             <ul class="list-disc pl-5 space-y-2">
//               <li>Quicker resolution for complex or urgent issues</li>
//               <li>Stronger personal connection with your customers</li>
//               <li>Higher satisfaction rates due to empathetic interaction</li>
//               <li>Clear communication and immediate feedback</li>
//             </ul>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Industries That Rely on It:</h3>
//             <p>
//               E-commerce, healthcare, logistics, finance, and tech support industries—where real-time guidance can be the difference between a loyal customer and a lost one.
//             </p>
//           </section>

//           <section>
//             <h3 class="text-xl font-bold">Hear What Matters, Solve What Counts</h3>
//             <p>
//               With LaCleo’s Telephone Support, you offer a human voice when it matters most—turning confusion into clarity and problems into long-term loyalty.
//             </p>
//           </section>
//         </section>`
// }
// ,

// ]