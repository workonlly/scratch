import { supabase } from "../supabase"

type mdata={
    id:number;
    title:string;
    metakeywords:(string|number)[];
    description:string;
    
}
export const mdata:mdata[]=[]

export const datalLoaded3 = getData();

async function getData() {
  try {
    const { data, error } = await supabase.from('maindatakeywords').select('*')
    console.log('Raw data from Supabase:', data)

    if (error) {
      console.error('Supabase error:', error)
      return
    }

    if (data) {
      // Clear existing data first
      mdata.length = 0;
      
      data.forEach((item: any) => {
        mdata.push({
          id: item.id,
                title: item.title,
                metakeywords: Array.isArray(item.metakeywords) ? item.metakeywords : 
                                (typeof item.metakeywords === 'string' ? JSON.parse(item.metakeywords || '[]') : []),
                description: item.description,
        });
      });
      
      console.log('Mapped data length:', mdata.length)
    }
  } catch (err) {
    console.error('Error fetching data:', err)
  }
}
//     {
            
//             id:11,
//             title:"tring",
//             metakeywords:["tring","dsfs","sdfsdf",79,58],
//             description:"tring",
//     },
//     {
            
//             id:12,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
            
//             id:13,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
            
//             id:14,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
            
//             id:15,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
            
//             id:16,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
            
//             id:17,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
            
//             id:18,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
            
//             id:19,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
            
//             id:20,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
            
//             id:21,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
            
//             id:22,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
            
//             id:23,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
            
//             id:24,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
            
//             id:25,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
            
//             id:26,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
            
//             id:27,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
            
//             id:28,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
            
//             id:29,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
            
//             id:30,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
            
//             id:31,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },

//     {
            
//             id:32,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
            
//             id:33,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
            
//             id:34,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
            
//             id:35,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
            
//             id:36,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
            
//             id:37,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
            
//             id:38,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
            
//             id:39,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
            
//             id:40,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
//             id:1,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
//             id:2,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
//             id:3,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
//             id:4,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
//             id:5,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
//             id:6,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
//             id:7,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
//             id:111,
         
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
//             id:112,
          
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
//             id:113,
         
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
//             id:114,
       
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
//             id:115,
 
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
//     {
//             id:116,
//             title:"tring",
//              metakeywords:["tring"],
//             description:"tring",
//     },
// ]