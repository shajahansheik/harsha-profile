import Head from "next/head";
import Image from "next/image";

export default function Profile() {
  return (
    <>
      <Head>
        <title>Dr. Kaluvala Harsha Theja | Gastroenterologist</title>
        <meta name="description" content="Profile of Dr. Harsha Theja, Medical Gastroenterologist – Liver, IBD, Endoscopy expert." />
        <meta name="keywords" content="Gastroenterologist, Liver, Endoscopy, IBD, Harsha Theja, Hyderabad" />
      </Head>

      {/* <main className="bg-white text-gray-800">
        <section
          className="relative bg-gradient-to-r from-blue-50 via-white to-blue-100 px-4 py-10 sm:py-16"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-blue-900 bg-opacity-30"></div>
          <div className="relative max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Dr. Kaluvala Harsha Theja
              </h1>
              <p className="text-lg text-gray-200 font-medium">
                MBBS, MD, DrNB (Medical Gastroenterologist) – Reg: TSMC/FMR/04438
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Experienced and board-certified Gastroenterologist &
                Hepatologist, specializing in liver disease, inflammatory bowel
                disease (IBD), pancreatic disorders, and advanced endoscopic
                procedures.
              </p>
              <p className="text-sm text-yellow-300 font-medium">
                Online consultations available: 5 PM – 9 PM
              </p>
              <p className="text-sm text-gray-200">
                Currently practicing at{" "}
                <strong>Aster Prime Hospital, Ameerpet</strong>
              </p>
              <a
                href="tel:+916301231131"
                className="inline-block mt-4 px-6 py-2 bg-yellow-400 text-blue-900 font-semibold rounded-full shadow hover:bg-yellow-500 hover:text-white transition"
              >
                Book Appointment
              </a>
            </div>

            <div className="flex-1">
              <Image
                src="/harsha.jpeg"
                alt="Dr. Harsha Theja"
                width={500}
                height={600}
                className="rounded-3xl shadow-lg mx-auto"
              />
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-8 space-y-6">
          <h2 className="text-2xl font-semibold text-primary border-b-2 border-blue-300 pb-2">
            Areas of Expertise
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li className="hover:text-blue-600 transition">
              Management of Liver Diseases
            </li>
            <li className="hover:text-blue-600 transition">
              IBD (Ulcerative Colitis, Crohn's Disease)
            </li>
            <li className="hover:text-blue-600 transition">
              Pancreatic Disorders
            </li>
            <li className="hover:text-blue-600 transition">
              GI Motility & Functional Bowel Disorders
            </li>
            <li className="hover:text-blue-600 transition">
              Endoscopy & Colonoscopy
            </li>
            <li className="hover:text-blue-600 transition">
              Advanced Endoscopy: EUS, ERCP
            </li>
            <li className="hover:text-blue-600 transition">
              Biliary Procedures & Metal Stents
            </li>
            <li className="hover:text-blue-600 transition">
              Bariatric treatments: Intra Gastric Balloons
            </li>
          </ul>
        </section>

        <section className="bg-gray-50 py-8 px-4">
          <div className="max-w-5xl mx-auto space-y-6">
            <h2 className="text-2xl font-semibold text-primary">Education</h2>
            <ul className="space-y-2 text-gray-700">
              <li><strong>DrNB Gastroenterology</strong> (Apr 2022 - Apr 2025)</li>
              <li><strong>MD General Medicine</strong> (Apr 2018 - Jul 2021)</li>
              <li><strong>MBBS</strong> (Jul 2011 - Apr 2016)</li>
            </ul>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-8 space-y-6">
          <h2 className="text-2xl font-semibold text-primary">Academic Work</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-bold text-lg">NBI Research</h3>
              <p>Analyzed Narrow Band Imaging effectiveness in Helicobacter pylori detection and suspected GI malignancies.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">Motility & Manometry</h3>
              <p>Comprehensive study of motility disorders correlated with manometry outcomes and biofeedback optimization.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">Inflammatory Bowel Disease (IBD)</h3>
              <p>Managed complex IBD cases using emerging therapies, tracked patient trends, and optimized treatment protocols.</p>
            </div>
          </div>
        </section>

        <footer className="bg-primary text-white px-4 py-6 text-center text-sm">
          <p className="hover:underline">
            &copy; {new Date().getFullYear()} Dr. Harsha Theja | All rights
            reserved.
          </p>
        </footer>
      </main> */}
      <main className="bg-white text-gray-800">
        <div className="bg-orange-500 px-2 py-3 text-white grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex sm:flex sm:flex-col sm:items-center sm:justify-center items-center justify-start flex-col">
            <span className="font-bold text-xl">Visit Our Location</span>
            <span>Ameerpet, Hyderabad</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-bold text-xl">Give us a call</span>
            <span>
              <a href="tel:+916301231131" className="">
                +91 63012 31131
              </a>
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-bold text-xl">Send ud a mail</span>
            <span>
              <a href="mailto:Kalwalaharsha@gmail.com" className=""> Kalwalaharsha@gmail.com </a>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-6 py-10  sticky top-0 bg-white z-10">
          <div>
            <h1 className="text-3xl font-bold ">
              Dr. Kaluvala Harsha Theja
            </h1>
            <p className="text-lg ">
              MBBS, MD, DrNB (Medical Gastroenterologist) – Reg: TSMC/FMR/04438
            </p>
          </div>
          <div className="flex flex-col items-end justify-center space-y-4">
            <a
              href="tel:+916301231131"
              className="inline-block  px-6 py-2 bg-orange-300  text-orange-900 font-semibold rounded-full shadow hover:bg-orange-500  hover:text-white transition"
            >
              Book Appointment
            </a>
            <p className="text-sm">
              Online consultations available: 5 PM – 9 PM
            </p>


          </div>
          {/* <div>
            <Image
              src="/harsha.jpeg"
              alt="Dr. Harsha Theja"
              width={300}
              height={400}
              className="opacity-5 shadow-lg mx-auto"
            />
          </div> */}
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1  gap-4 px-6 py-10">
          <div className="space-y-4">
            <span className="text-xl font-bold">Expert Gastroenterologist & Hepatologist Specializing in Digestive and Liver Health</span>
            <br/>
            <p>
              A highly experienced and board-certified Gastroenterologist & Hepatologist with expertise in diagnosing and treating liver diseases, inflammatory bowel disease (IBD), pancreatic conditions, and performing advanced endoscopic procedures. Dedicated to providing personalized, evidence-based care for complex gastrointestinal and liver disorders.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src={"/experienced.png"} alt="Doctor Profile" width={400} height={200} className="hidden sm:block" />
          </div>
        </div>
        <div className="w-full py-10 space-y-10">
          <span className="text-4xl font-bold px-6  w-full block">Areas of Expertise</span>
          <section className="grid sm:grid-cols-4 grid-cols-1 gap-4 px-6">
            <div className="grid grid-rows-2 rounded-lg shadow w-auto">
              <div className=" rounded-t-lg">
                <Image
                  src="/img1.png"
                  alt="Liver Diseases"
                  width={140}
                  height={100}
                  className="mx-auto pt-2"
                />
              </div>
              <span className="text-center  px-2 py-2 text-lg font-bold ">
                Management of Liver Diseases
              </span>
            </div>
            <div className="grid grid-rows-2 rounded-lg shadow">
              <div className=" rounded-t-lg"><Image
                src="/img2.png"
                alt="Liver Diseases"
                width={140}
                height={100}
                className="mx-auto pt-2"
              /></div>
              <div className="text-center px-2 py-2 text-lg font-bold">
                IBD (Ulcerative Colitis, Crohn's Disease)
              </div>
            </div>
            <div className="grid grid-rows-2 rounded-lg shadow">
              <div className=" rounded-t-lg"><Image
                src="/img3.png"
                alt="Liver Diseases"
                width={140}
                height={100}
                className="mx-auto pt-2"
              /></div>
              <div className="text-center px-2 py-2 text-lg font-bold">
                Pancreatic Disorders
              </div>
            </div>
            <div className="grid grid-rows-2 rounded-lg shadow">
              <div className=" rounded-t-lg"><Image
                src="/img4.png"
                alt="Liver Diseases"
                width={140}
                height={100}
                className="mx-auto pt-2"
              /></div>
              <div className="text-center px-2 py-2 text-lg font-bold">
                GI Motility & Functional Bowel Disorders
              </div>
            </div>
            <div className="grid grid-rows-2 rounded-lg shadow">
              <div className=" rounded-t-lg"><Image
                src="/img5.png"
                alt="Liver Diseases"
                width={140}
                height={100}
                className="mx-auto pt-2"
              /></div>
              <div className="text-center px-2 py-2 text-lg font-bold">
                Endoscopy & Colonoscopy
              </div>
            </div>
            <div className="grid grid-rows-2 rounded-lg shadow">
              <div className=" rounded-t-lg">
                <Image
                  src="/img1.png"
                  alt="Liver Diseases"
                  width={140}
                  height={100}
                  className="mx-auto pt-2"
                />
              </div>
              <div className="text-center px-2 py-2 text-lg font-bold">
                Advanced Endoscopy: EUS, ERCP
              </div>
            </div>
            <div className="grid grid-rows-2 rounded-lg shadow">
              <div className=" rounded-t-lg">
                <Image
                  src="/img2.png"
                  alt="Liver Diseases"
                  width={140}
                  height={100}
                  className="mx-auto pt-2"
                />
              </div>
              <div className="text-center px-2 py-2 text-lg font-bold">
                Biliary Procedures & Metal Stents
              </div>
            </div>
            <div className="grid grid-rows-2 rounded-lg shadow">
              <div className=" rounded-t-lg">
                <Image
                  src="/img5.png"
                  alt="Liver Diseases"
                  width={140}
                  height={100}
                  className="mx-auto pt-2"
                />
              </div>
              <div className="text-center px-2 py-2 text-lg font-bold">
                Bariatric treatments: Intra Gastric Balloons
              </div>
            </div>
          </section>
        </div>

<div>
  
</div>


        <div className="px-4 py-10 space-y-5">
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 ">
            <div className="space-y-5">
              <span className="text-4xl font-bold w-full block">Let’s get
                in touch</span>
              <p className="text-xl px-3">Don’t be afraid to say hello with us!</p>
              <div className="space-y-10 px-4">
                <div>
                  <span className="text-lg font-bold">Location</span>
                  <p className="text-gray-600">Plot No: 2 & 4, Opp. Passport Seva Kendra, Ameerpet, Hyderabad - 500 038, Telangana, India</p>
                </div>
                <div>
                  <span className="text-lg font-bold">Call</span>
                  <p className="text-gray-600">
                    <a href="tel:+916301231131" className="text-blue-600 hover:underline">
                      +91 63012 31131
                    </a>
                  </p>
                </div>
                <div>
                  <span className="text-lg font-bold">Mail</span>
                  <p className="text-gray-600">
                    <a href="mailto:Kalwalaharsha@gmail.com" className="text-blue-600 hover:underline">Kalwalaharsha@gmail.com </a>
                  </p>
                </div>
              </div>

            </div>
            <div className=" rounded-lg p-4 sm:col-span-2 flex flex-col items-end justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.123456789!2d78.123456789!3d17.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb123456789abcdef%3A0x123456789abcdef!2sAmeerpet%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1234567890123"
                width="90%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
