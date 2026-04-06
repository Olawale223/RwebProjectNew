import React from 'react'
import  '../App.css';
import Faq from '../Components/Minor Components/Faq';
import SearchBar from '../Components/SearchBar';
import FaqInfo from '../Components/FaqInfo';

 function FAQs() {
  return (
    <>
      
      <div className="faqs-container">

      <h1>How can we help?</h1>
      <SearchBar/>
      <h4>Explore topics</h4>
      

      <Faq/>
      <h4>Got more questions?
        Let us know
      </h4>
      <FaqInfo/>
      </div>

    </>
  )
}
export default FAQs;