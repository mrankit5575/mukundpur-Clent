 // ✅ SEO Metadata for Homepage
export const metadata = {
  title: 'CrackIQ | Learn Smarter, Rank Higher',
  description: 'CrackIQ helps students prepare smarter with free study material, mock tests, and expert guidance for competitive exams.',
  keywords: ['CrackIQ', 'exam preparation', 'study material', 'mock tests', 'CBSE books', 'online tutor', 'competitive exams', 'NEET', 'JEE'],
  openGraph: {
    title: 'CrackIQ | Smart Exam Prep',
    description: 'CrackIQ offers free notes, previous year papers, and smart learning tools to help students crack competitive exams.',
    url: 'https://www.crackiq.in/',
    siteName: 'CrackIQ',
    images: [
      {
        url: 'https://www.crackiq.in/logo.png',
        width: 1200,
        height: 630,
        alt: 'CrackIQ Learning Banner',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.crackiq.in/',
  },
};

import React from 'react';
import HeroSection from '@/components/hero';
import Navbar from '@/components/navbar';
import StatsSection from '@/components/satsSection';
import StudyMaterialSection from '@/components/studymaterial';
import TeacherList from '@/Teacher/TeacherList';
import BookList from '@/bookdata.js/BookList';
import Chatbot from '@/components/Chatbot';
// import ChatPage from '@/components/FloatingAssistant';
  
export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StudyMaterialSection />
      <BookList />
      <TeacherList />

      {/* 👇 This section acts as the trigger */}
      {/* <ChatPage/> */}
<Chatbot/>
      <StatsSection />


     </>
  );
}
