"use client";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";

function useAnimateOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-bottom-to-top");
          } else {
            entry.target.classList.remove("animate-bottom-to-top");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}

export default function Profile() {
  useAnimateOnScroll();

  return (
    <>
      <Head>
        <title>Dr. Kaluvala Harsha Theja | Gastroenterologist</title>
        <meta
          name="description"
          content="Profile of Dr. Harsha Theja, Medical Gastroenterologist – Liver, IBD, Endoscopy expert."
        />
        <meta
          name="keywords"
          content="Gastroenterologist, Liver, Endoscopy, IBD, Harsha Theja, Hyderabad"
        />
      </Head>

      <main className="bg-white text-gray-800">
        <section className="bg-orange-500 px-2 py-3 text-white grid grid-cols-3 sm:grid-cols-3 gap-4 animate-on-scroll">
          <div className="flex sm:flex-col items-center justify-center flex-col transition-transform hover:scale-105">
            <span className="font-bold text-sm sm:text-xl">Visit Our Location</span>
            <span className="text-xs sm:text-base">Ameerpet, Hyderabad</span>
          </div>
          <div className="flex flex-col items-center justify-center transition-transform hover:scale-105">
            <span className="font-bold text-sm sm:text-xl">Give us a call</span>
            <span className="text-xs sm:text-base">
              <a href="tel:+916301231131" className="hover:underline">
                +91 63012 31131
              </a>
            </span>
          </div>
          <div className="flex flex-col items-center justify-center transition-transform hover:scale-105 ">
            <span className="font-bold text-sm sm:text-xl">Send us a mail</span>
            <span className="text-xs sm:text-base">
              <a href="mailto:Kalwalaharsha@gmail.com" className="hover:underline">
                Kalwalaharsha@gmail.com
              </a>
            </span>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-6 sm:py-10 py-4 sticky top-0 bg-white z-10 sm:border-none border-b-4 border-orange-500 animate-on-scroll">
          <div>
            <h1 className="text-xl sm:text-3xl font-bold">Dr. Kaluvala Harsha Theja</h1>
            <p className="sm:text-lg text-xs">MBBS, MD, DrNB (Medical Gastroenterologist) – Reg: TSMC/FMR/04438</p>
          </div>
          <div className="flex flex-col sm:items-end items-start justify-center space-y-4">
            <a
              href="tel:+916301231131"
              className="inline-block sm:px-6 px-4 py-2 sm:text-base text-sm bg-orange-300 text-orange-900 font-semibold rounded-full shadow hover:bg-orange-500 hover:text-white transition-transform hover:scale-105"
            >
              Book Appointment
            </a>
            <p className="sm:text-base text-sm">Online consultations available: 5 PM – 9 PM</p>
          </div>
        </section>

        <section className="grid sm:grid-cols-2 grid-cols-1 gap-4 px-6 py-10 animate-on-scroll">
          <div className="space-y-4">
            <span className="text-xl font-bold">Expert Gastroenterologist & Hepatologist Specializing in Digestive and Liver Health</span>
            <p>
              A highly experienced and board-certified Gastroenterologist & Hepatologist with expertise in diagnosing and treating liver diseases, inflammatory bowel disease (IBD), pancreatic conditions, and performing advanced endoscopic procedures. Dedicated to providing personalized, evidence-based care for complex gastrointestinal and liver disorders.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/experienced.png"
              alt="Doctor Profile"
              width={400}
              height={200}
              className="hidden sm:block transition-opacity hover:opacity-90"
            />
          </div>
        </section>

        <section className="w-full py-10 space-y-10 animate-on-scroll">
          <span className="text-4xl font-bold px-6 w-full block">Areas of Expertise</span>
          <div className="grid sm:grid-cols-4 grid-cols-1 gap-4 px-6">
            {["Management of Liver Diseases", "IBD (Ulcerative Colitis, Crohn's Disease)", "Pancreatic Disorders", "GI Motility & Functional Bowel Disorders", "Endoscopy & Colonoscopy", "Advanced Endoscopy: EUS, ERCP", "Biliary Procedures & Metal Stents", "Bariatric treatments: Intra Gastric Balloons"].map((expertise, index) => (
              <div key={index} className="grid grid-rows-2 rounded-lg shadow transition-transform hover:scale-105">
                <div className="rounded-t-lg">
                  <Image
                    src={`/img${index + 1}.png`}
                    alt={expertise}
                    width={140}
                    height={100}
                    className="mx-auto pt-2"
                  />
                </div>
                <div className="text-center px-2 py-2 text-lg font-bold">{expertise}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 py-10 space-y-5 animate-on-scroll">
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
            <div className="space-y-5">
              <span className="text-4xl font-bold w-full block">Let’s get in touch</span>
              <p className="text-xl px-3">Don’t be afraid to say hello with us!</p>
              <div className="space-y-10 px-4">
                <div>
                  <span className="text-lg font-bold">Location</span>
                  <p className="text-gray-600">Plot No: 2 & 4, Opp. Passport Seva Kendra, Ameerpet, Hyderabad - 500 038, Telangana, India</p>
                </div>
                <div>
                  <span className="text-lg font-bold">Call</span>
                  <p className="text-gray-600">
                    <a href="tel:+916301231131" className="text-blue-600 hover:underline">+91 63012 31131</a>
                  </p>
                </div>
                <div>
                  <span className="text-lg font-bold">Mail</span>
                  <p className="text-gray-600">
                    <a href="mailto:Kalwalaharsha@gmail.com" className="text-blue-600 hover:underline">Kalwalaharsha@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg p-4 sm:col-span-2 flex flex-col items-end justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.123456789!2d78.123456789!3d17.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb123456789abcdef%3A0x123456789abcdef!2sAmeerpet%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1234567890123"
                width="90%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }

        .animate-bottom-to-top {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}
