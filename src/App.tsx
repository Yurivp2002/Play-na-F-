/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import HowItWorks from "./components/HowItWorks";
import ProductGrid from "./components/ProductGrid";
import Bonuses from "./components/Bonuses";
import Testimonials from "./components/Testimonials";
import PricingCTA from "./components/PricingCTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-yellow selection:text-white">
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <ProductGrid />
      <Bonuses />
      <Testimonials />
      <PricingCTA />
      <FAQ />
      <Footer />
    </div>
  );
}
