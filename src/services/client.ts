import { createClient } from "@supabase/supabase-js"
import { Database } from '../lib/database.types.ts'

const url = import.meta.env.VITE_APP_SUPABASE_URL as string
const key = import.meta.env.VITE_APP_SUPABASE_KEY as string

export const client = createClient<Database>(url, key)

