import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Intro />
      </section>
      <section>@soumyajit4419</section>
      <section>3</section>
      <section>4</section>
    </div>
  );
};
export default App;
