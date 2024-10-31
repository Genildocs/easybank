import React from 'react';
import Mockups from '/assets/images/image-mockups.png';
import { motion } from 'framer-motion';
import Btn from './Btn';
export default function SectionOne() {
  return (
    <section className="bg-[url('/assets/images/bg-intro-mobile.svg')] bg-no-repeat bg-section-one">
      <div className="px-5">
        <div className="-translate-y-[30%] ">
          <img src={Mockups} alt="mockups" />
        </div>
        <div className="section-text flex flex-col gap-3  items-center justify-center text-center">
          <h1 className="text-4xl">Next generation digital banking</h1>
          <p>
            Take control of your financial data. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <motion.div className="mt-5 mb-10" whileInView={{ opacity: 1 }}>
            <Btn />
          </motion.div>
          <div>
            <h3 className="text-3xl mb-2">Why choose Easybank?</h3>
            <p>
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
