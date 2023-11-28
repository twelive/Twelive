
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  `https://${process.env.REACT_APP_SUPABASE_PROJECT_ID || ''}.supabase.co`,
  process.env.REACT_APP_SUPABASE_PROJECT_SUPABASE_API_KEY || ''
);

export const TABLE_NAME = 'video_comment';
