
// supabase.ts
import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl: string = import.meta.env.VITE_SUPABASE_URL
const supabaseKey: string = import.meta.env.VITE_SUPABASE_KEY

if (!supabaseKey) {
  throw new Error('Supabase Key is missing. Check your .env setup.')
}

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey)
