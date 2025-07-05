import { supabase } from "../supabase"
type image={
    id:number;
    imageurl:string;
}

export const image:image[]=[]

// Fallback image data in case Supabase fails
const fallbackImages: image[] = [
  { id: 11, imageurl: "/public/img/dataenrichment/emailappend.jpg" },
  { id: 12, imageurl: "/public/img/dataenrichment/dataappend.jpg" },
  { id: 13, imageurl: "/public/img/dataenrichment/dataverification.jpg" },
  { id: 14, imageurl: "/public/img/dataenrichment/dataprofiling.jpg" },
  { id: 15, imageurl: "/public/img/dataenrichment/datacleansing.jpg" },
  { id: 16, imageurl: "/public/img/digitalmarketing/emailcampaign.jpg" },
  { id: 17, imageurl: "/public/img/digitalmarketing/linkedincampain.jpg" },
  { id: 18, imageurl: "/public/img/digitalmarketing/linkedinaccountmanage.jpg" },
  { id: 19, imageurl: "/public/img/leadgeneration/b2b.jpg" },
  { id: 20, imageurl: "/public/img/prepackedlist/ceo.jpg" }
];

export const datalLoaded4 = getData();

async function getData() {
  try {
    console.log('🔄 Fetching images from Supabase...');
    const { data, error } = await supabase.from('mainimages').select('*')
    console.log('Raw data from Supabase:', data)

    if (error) {
      console.error('Supabase error:', error)
      console.log('⚠️ Using fallback image data due to Supabase error');
      // Use fallback data
      image.length = 0;
      image.push(...fallbackImages);
      return;
    }

    if (data && data.length > 0) {
      // Clear existing data first
      image.length = 0;
      
      data.forEach((item: any) => {
        image.push({
          id: item.id,
         imageurl: item.imageurl , 
        });
      });
      
      console.log('✅ Mapped imagesdata length:', image.length)
    } else {
      console.log('⚠️ No image data from Supabase, using fallback data');
      // Use fallback data
      image.length = 0;
      image.push(...fallbackImages);
    }
  } catch (err) {
    console.error('Error fetching data:', err)
    console.log('⚠️ Using fallback image data due to fetch error');
    // Use fallback data
    image.length = 0;
    image.push(...fallbackImages);
  }
}

//     {
//         id:1,
//         imageurl:"public/img/dataenrichment/dataenrichment.jpg",
//     },
//     {
//         id:2,
//         imageurl:"public/img/digitalmarketing/digital.jpg",
//     },
//     {
//         id:3,
//         imageurl:"public/img/leadgeneration/leadgeneration.jpg",
//     },
//     {
//         id:4,
//         imageurl:"public/img/prepackedlist/ceo.jpg",
//     },
//     {
//         id:5,
//         imageurl:"public/img/e-commerce/ecommerce.jpg",
//     },
//     {
//         id:6,
//         imageurl:"public/img/digitaltesting/fuctional.jpg",
//     },
//     {
//         id:7,
//         imageurl:"public/img/customer/cutomersupport.jpg",
//     },
//     {
//         id:11,
//         imageurl:"public/img/dataenrichment/emailappend.jpg",
//     },
//     {
//         id:12,
//         imageurl:"public/img/dataenrichment/dataappend.jpg",
//     },
//     {
//         id:13,
//         imageurl:"public/img/dataenrichment/dataverification.jpg",
//     },
//     {
//         id:14,
//         imageurl:"public/img/dataenrichment/dataprofiling.jpg",
//     },
//     {
//         id:15,
//         imageurl:"public/img/dataenrichment/datacleansing.jpg",
//     },
//     {
//         id:16,
//         imageurl:"public/img/digitalmarketing/emailcampaign.jpg",
//     },
//     {
//         id:17,
//         imageurl:"public/img/digitalmarketing/linkedincampain.jpg",
//     },
//     {
//         id:18,
//         imageurl:"public/img/digitalmarketing/linkedinaccountmanage.jpg",
//     },
//     {
//         id:19,
//         imageurl:"public/img/leadgeneration/b2b.jpg",
//     },
//     {
//         id:20,
//         imageurl:"public/img/prepackedlist/ceo.jpg",
//     },
//     {
//         id:21,
//         imageurl:"public/img/prepackedlist/cto.jpg",
//     },
//     {
//         id:22,
//         imageurl:"public/img/prepackedlist/hr1.jpg",
//     },
//     {
//         id:23,
//         imageurl:"public/img/prepackedlist/cmo.jpg",
//     },
//     {
//         id:24,
//         imageurl:"public/img/prepackedlist/chro.jpg",
//     },
//     {
//         id:25,
//         imageurl:"public/img/e-commerce/store.jpg",
//     },
//     {
//         id:26,
//         imageurl:"public/img/e-commerce/listingandcatalouge.jpg",
//     },
//     {
//         id:27,
//         imageurl:"public/img/e-commerce/marketing.jpg",
//     },
//     {
//         id:28,
//         imageurl:"public/img/e-commerce/processandtrack.jpg",
//     },
//     {
//         id:29,
//         imageurl:"public/img/e-commerce/customerticketand mangement.jpg",
//     },
//     {
//         id:30,
//         imageurl:"public/img/digitaltesting/crossbrowser.jpg",
//     },
//     {
//         id:31,
//         imageurl:"public/img/digitaltesting/endtoend.jpg",
//     },
//     {
//         id:32,
//         imageurl:"public/img/digitaltesting/fuctional.jpg",
//     },
//     {
//         id:33,
//         imageurl:"public/img/customer/livechatsupport.jpg",
//     },
//     {
//         id:34,
//         imageurl:"public/img/customer/emailsupport.jpg",
//     },
//     {
//         id:35,
//         imageurl:"public/img/customer/selfservicesupport.jpg",
//     },
//     {
//         id:36,
//         imageurl:"public/img/customer/interactivevoicesupport.jpg",
//     },
//     {
//         id:37,
//         imageurl:"public/img/customer/socialmedia.jpg",
//     },
//     {
//         id:38,
//         imageurl:"public/img/customer/webcommerce.jpg",
//     },
//     {
//         id:39,
//         imageurl:"public/img/customer/onsitesupport.jpg",
//     },
//     {
//         id:40,
//         imageurl:"public/img/customer/telephone.jpg",
//     },
//     {
//         id:41,
//         imageurl:"public/img/leadgeneration/b2c.jpg",
//     },
// ]