import { createClient } from '@supabase/supabase-js'
const URL = 'https://qkmszqxeumrofgwylfwl.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFrbXN6cXhldW1yb2Znd3lsZndsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE4NjY3MDQsImV4cCI6MTk5NzQ0MjcwNH0.rRxhWyCM3C4GUkFUizBgaxhKEyV5XhCBhMFxh0jmAq8';

export const supabase = createClient(URL, API_KEY);