import axios from 'axios';

export const api  = axios.create({
    baseURL: "https://tgmryfwtdkidnvvnixcw.supabase.co/rest/v1",
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnbXJ5Znd0ZGtpZG52dm5peGN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzExODg4OTUsImV4cCI6MjA0Njc2NDg5NX0.tvakwKovNPEcyMSZ2sjnTWVdUaUp24EcKU47TRZILyU",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnbXJ5Znd0ZGtpZG52dm5peGN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzExODg4OTUsImV4cCI6MjA0Njc2NDg5NX0.tvakwKovNPEcyMSZ2sjnTWVdUaUp24EcKU47TRZILyU"
    }
})