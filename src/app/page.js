 import HeroSection from '@/components/hero'
 import Navbar from '@/components/navbar'
import StatsSection from '@/components/satsSection'
import StudyMaterialSection from '@/components/studymaterial'
//  import BooksPage from '@/hooks/books'
 
 import React from 'react'
 import TeacherList from '@/Teacher/TeacherList'  
import BookList from '@/bookdata.js/BookList'
 
 function page() {
   return (
    <>
    <Navbar/>
    <HeroSection/>
    <StudyMaterialSection/>
    <BookList/>
     {/* <BooksPage/> */}
     <TeacherList/> 
     <StatsSection/> 
     
    
     </>
   )
 }
 
 export default page
 