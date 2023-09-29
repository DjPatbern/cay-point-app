"use client";
import React from "react";
import { Header } from "../commons/Header";
import { Hero } from "./fragments/Hero";
import HowItWork from "./fragments/How";
import TestiWelcome from "./fragments/TestiWelcome";
import Testimonials from "./fragments/Testimonials";
import NewsLetter from "../commons/NewsLetter";
import Footer from "../commons/Footer";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <HowItWork />
      <TestiWelcome />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default LandingPage;
