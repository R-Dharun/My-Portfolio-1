import { createClient } from '@supabase/supabase-js';
import type { SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl: string = 'https://ktqzudycrskjuqrqduzt.supabase.co'; // 🔁 Replace this
const supabaseAnonKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0cXp1ZHljcnNranVxcnFkdXp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1NzcyNDIsImV4cCI6MjA2MDE1MzI0Mn0.FXjSxHHUizB2xp1gL_MzkScEmeTTRhEtMTkRAl_0kRY';               // 🔁 Replace this

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);
