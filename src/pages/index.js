import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import AdminLogin from "./admin/login";
import NavBar from "@/components/NavigationBar";
import styled from "styled-components";
import HeroSection from "@/components/HeroSection";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";
import Footer from "@/components/Footer";
import SectionFour from "@/components/SectionFour";

export default function Home() {
  return (
    <HomePageStyled>
      <NavBar />
      <HeroSection />
      <div className="section2">
        <SectionTwo />
      </div>
      <div className="section3">
        <SectionThree />
      </div>
      <SectionFour />
      <Footer />
    </HomePageStyled>
  );
}

const HomePageStyled = styled.div`
  background-color: #f5f8fa;
  /* height: 100vh; */
  .section2 {
    /* height: 100vh; */
  }
`;
