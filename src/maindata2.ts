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

// Fallback data in case Supabase fails
const fallbackData2: storm2[] = [
  {
    id: 1,
    sid: 11,
    promo: "Email Append",
    heading: "Reach the Right Contacts with Verified Email Data",
    keywords: ["Data Cleansing", "Email Verification", "B2B Outreach"],
    secheading: "Add Missing Emails to Supercharge Your Marketing Lists",
    secpara: "LaCleo's Email Append service helps businesses recover lost opportunities by accurately attaching verified email addresses to existing customer records—fueling better outreach, segmentation, and ROI.",
    text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
      <p>Email Append is a powerful way to turn outdated or incomplete databases into high-performing assets. At LaCleo, we use secure, GDPR-compliant methods to match and append accurate email addresses to your offline or partial records.</p>
      <section>
        <h3 class="text-xl font-bold">What is Email Appending?</h3>
        <p>Email Appending involves matching customer names, phone numbers, or physical addresses with third-party databases to accurately retrieve and attach missing email contact information.</p>
      </section>
    </section>`
  },
  {
    id: 1,
    sid: 12,
    promo: "Data Append",
    heading: "Complete Your Customer Records with Accurate Data Append Services",
    keywords: ["Data Enhancement", "Customer Profiling", "CRM Accuracy"],
    secheading: "Add the Missing Pieces to Your Customer Data Puzzle",
    secpara: "LaCleo's Data Append service enriches your existing customer or lead database by filling in missing fields such as phone numbers, job titles, locations, and more—turning fragmented data into complete, actionable profiles.",
    text: `<section class="px-6 py-12 max-w-5xl mx-auto space-y-10 leading-relaxed text-justify">
      <p>Every marketing and sales strategy begins with one thing—data. But if your database is incomplete or outdated, it can seriously impact your performance. LaCleo's Data Append service helps you enhance your customer records for better targeting, personalization, and engagement.</p>
      <section>
        <h3 class="text-xl font-bold">What is Data Append?</h3>
        <p>Data Append is the process of adding missing or outdated information to your customer database. We use authoritative third-party sources to accurately append data fields like emails, phone numbers, demographics, firmographics, and more.</p>
      </section>
    </section>`
  }
];

export const datalLoaded2 = getData();

async function getData() {
  try {
    console.log('🔄 Fetching maindata2 from Supabase...');
    const { data, error } = await supabase.from('maindata2').select('*')
    console.log('Raw data from Supabase:', data)

    if (error) {
      console.error('Supabase error:', error)
      console.log('⚠️ Using fallback data due to Supabase error');
      // Use fallback data
      maindata2.length = 0;
      maindata2.push(...fallbackData2);
      return;
    }

    if (data && data.length > 0) {
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
      
      console.log('✅ Mapped data length:', maindata2.length)
      console.log('First item keywords:', maindata2[0]?.keywords)
    } else {
      console.log('⚠️ No data from Supabase, using fallback data');
      // Use fallback data
      maindata2.length = 0;
      maindata2.push(...fallbackData2);
    }
  } catch (err) {
    console.error('Error fetching data:', err)
    console.log('⚠️ Using fallback data due to fetch error');
    // Use fallback data
    maindata2.length = 0;
    maindata2.push(...fallbackData2);
  }
}