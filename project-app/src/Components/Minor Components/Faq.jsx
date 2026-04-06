import React, { useState } from 'react';
import './FAQ.css'; // Import your CSS styles for animations and dropdown icons
import playstoreIcon from '../../Assets/FoodCourt/playstorered.svg';
import profile from '../../Assets/FoodCourt/profile.svg';
import phone from '../../Assets/FoodCourt/phone.svg';
import card from '../../Assets/FoodCourt/card.svg';
<script src="https://kit.fontawesome.com/44e8bcb7e9.js" crossorigin="anonymous"></script>;

// Sample FAQ data with different sections and logos
const faqData = [
  {
    section: "App Download",
    logo: playstoreIcon, // Add your logo URL here
    questions: [
      { question: "Where can i download the FoodCourt app?", answer: "You can download the FoodCourt app from the App Store if you're using an iPhone or iPad, and from the Google Play Store if you're using an Android device." },
      { question: "How do i find the FoodCourt app in the store?", answer: "In the App Store or Google Play Store, type 'FoodCourt' in the search bar. Look for our app by identifying our logo and the developer, CoKitchen." },
      { question: "How do i install the FoodCourt app?", answer: "Once you’ve located the app, tap on it to open the details page. Press 'Download' or 'Install', and follow any prompts for password or biometric authentication. The app will download and install automatically." },
      { question: "What do i do after installing the app?", answer: "After installation, you’ll find the FoodCourt icon on your home screen or in your app drawer. Tap on it to open the app. You can either log in using your credentials if you already have an account or sign up as a new user." },
      { question: "I'm having trouble downloading the app. What should i do?", answer: "If you’re experiencing issues downloading or installing the app, ensure that your device is connected to a stable internet connection and that you have enough storage space available. If problems persist, please contact our support team for assistance." }
    ]
  },
  {
    section: "Account Creation",
    logo: profile, // Add your logo URL here
    questions: [
      { question: "How do I create an account on the FoodCourt app?", answer: "First, download the FoodCourt app from the App Store or Google Play Store. Open the app and follow the on-screen prompts to get started." },
      { question: "Where can I find the option to sign up?", answer: "Tap the 'Profile' icon in the top right corner of the app to access the 'Get Started with FoodCourt' page. Enter your mobile phone number and tap 'Sign In'." },
      { question: "How do I verify my account?", answer: "After entering your mobile number, you will receive a verification code via SMS. Input this code in the app to complete the registration process." },
      { question: "What should I do after creating an account?", answer: "Once your account is set up, explore the app’s features to get familiar with our services." },
      { question: "I’m having trouble creating an account. What should I do?", answer: "Ensure that your mobile number is entered correctly.Check your internet connection.Restart the app if needed. For further assistance, contact our support team." }
    ]
  },
  {
    section: "Placing Orders on the Foodcourt App",
    logo: phone, // Add your logo URL here
    questions: [
      { question: "How do I start placing an order", answer: "Open the app to access the Restaurant Landing page, where you’ll see restaurants currently open. Restaurants that are closed will be grayed out." },
      { question: "What restaurants can I order from?", answer: "You can explore a variety of restaurants, including The Cocktail Club, Wrap City, Frankie’s, Mama’s Kitchen, and more, each offering unique menus." },
      { question: "How do I access a restaurant’s menu?", answer: "After selecting a restaurant, scroll through its menu categories to view available dishes, accompanied by photos and detailed descriptions." },
      { question: "Can I customize my order?", answer: "Yes! Tap on a menu item to view customization options and add extras. You can also specify dietary preferences in the 'Add order note' tab." },
      { question: "How do I review my order before confirming?", answer: "Tap the “View Basket” button to see your order summary, including delivery method, timeline, address, and payment details." },
      { question: "What payment options are available?", answer: "You can pay using your FoodCourt Wallet, add a debit/credit card, or make a transfer to a virtual account for your order. Payment must be confirmed before meal preparation begins." },
      { question: "What should I do if I encounter issues during payment?", answer: "Ensure your card details are correct and check with your bank for any technical issues. If problems persist, please contact our support team for assistance." },
      { question: "Can I schedule a delivery or pickup time?", answer: "Yes, you can schedule delivery or pickup during restaurant operating hours. Note that deliveries cannot be scheduled for less than two hours from the current time or more than six days in advance." }
    ]
  },
  {
    section: "Payment & Checkout on the Foodcourt App",
    logo: card, // Add your logo URL here
    questions: [
      { question: "What payment methods are supported on the app?", answer: "We support the following payment methods: Bank Card, Bank Transfer, and FoodCourt Wallet." },
      { question: " How do I add a bank card to my profile?", answer: "You can add a bank card through the Profile Management page by selecting the Payment option and choosing 'Add Bank Card'. After entering your card details, a verification payment of N50 will be processed." },
      { question: "Can I add multiple bank cards to my profile?", answer: "Yes, there is no limit to the number of bank cards you can add. To remove a card, swipe left on it and tap the Bin Icon." },
      { question: "How do I pay using a bank transfer?", answer: "On the Checkout page, select 'Pay With Transfer', choose your preferred bank, and follow the displayed account details to complete your transfer." },
      { question: "How can I use my FoodCourt Wallet to pay?", answer: "If your FoodCourt Wallet has sufficient funds, you can select it as your payment method during checkout. If the balance is insufficient, you can add other payment methods." },
      { question: "How do I fund my FoodCourt Wallet?", answer: "Access your Profile Management page, select 'My Wallets', then choose 'Top Up' to add funds. You’ll be prompted to select a payment method for the top-up." },
      { question: "Can I apply promo codes or discounts?", answer: "Yes, on the Basket page, you can enter referral or discount codes. If validated, the discount will appear in the fee details, showing the amount saved and the new total." },
      { question: "How do I access my order receipts?", answer: "To access your receipts, tap 'Orders' at the bottom of the main landing page. Select a completed order and scroll down to find the 'Generate Receipt' button." },
      { question: "What information is included in the receipt?", answer: "Each receipt contains your order number, date and time of order, itemized billing details, fee breakup, and the amount paid (including the payment method)." }
    ]
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which question is open

  const toggleAnswer = (sectionIndex, questionIndex) => {
    const newIndex = `${sectionIndex}-${questionIndex}`;
    setOpenIndex(openIndex === newIndex ? null : newIndex); // Toggle visibility
  };

  return (
    <div className="faq-container">
      {faqData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="faq-section">
          <div className="section-header">
            <img src={section.logo} alt={`${section.section} logo`} className="section-logo" />
            <h2 className="section-title">{section.section}</h2>
          </div>
          <hr/>
          {section.questions.map((faq, questionIndex) => {
            const uniqueIndex = `${sectionIndex}-${questionIndex}`;
            return (
              <div key={uniqueIndex} className="faq-item">
                <div
                  className="faq-question"
                  onClick={() => toggleAnswer(sectionIndex, questionIndex)}
                > 
                  <span>{faq.question}</span>
                  <span className={`dropdown-icon ${openIndex === uniqueIndex ? 'open' : ''}`}>&#9660;</span>
                </div>
                <div
                  className={`faq-answer ${openIndex === uniqueIndex ? 'open' : ''}`}
                  style={{ transition: 'max-height 0.3s ease-out' }}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Faq;
