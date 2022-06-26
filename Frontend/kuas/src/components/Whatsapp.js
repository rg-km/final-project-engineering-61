import React from 'react'
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'


export default function Whatsapp() {
    return <WhatsAppWidget phoneNumber='+6285103111858' companyName='Admin' message='Hai! 👋🏼 Ada yang bisa kami bantu?' sendButton='kirim' textReplyTime='Hanya dibalas ketika online' />
}
