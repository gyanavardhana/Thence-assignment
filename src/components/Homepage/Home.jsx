import React from "react";
import Header from "./Header/Header";
import Quote from "./Body1/Quote";
import Question from "./Body2/Questions";
import Footer from "./Footer/Footer";
import Hero from "./Body2/Hero";
const Home = () => {
    return (
    <>
    <Header />
    <Quote />
    <Hero />    
    <Question />
    <Footer />
    </>
   )
}

export default Home;