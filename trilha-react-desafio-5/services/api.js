import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://olheokhvjyohdremzfce.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9saGVva2h2anlvaGRyZW16ZmNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUxODMxNzcsImV4cCI6MjAyMDc1OTE3N30.5JgULPBpJZDt8TGfKfXnQ59Kp_W6LmjDsbLduCnohrk",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9saGVva2h2anlvaGRyZW16ZmNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUxODMxNzcsImV4cCI6MjAyMDc1OTE3N30.5JgULPBpJZDt8TGfKfXnQ59Kp_W6LmjDsbLduCnohrk"
    }
})