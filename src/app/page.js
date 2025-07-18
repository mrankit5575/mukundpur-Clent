 import HeroSection from '@/components/hero'
 import Navbar from '@/components/navbar'
import StatsSection from '@/components/satsSection'
import StudyMaterialSection from '@/components/studymaterial'
import TutorsSection from '@/components/TutorSection'
import BooksPage from '@/hooks/books'
 
 import React from 'react'
 
 function page() {
   return (
    <>
    <Navbar/>
    <HeroSection/>
    <StudyMaterialSection/>
     <BooksPage/>
     <TutorsSection/>
    <StatsSection/> 
     
    
     </>
   )
 }
 
 export default page
 