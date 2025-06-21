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

      <main className="bg-white text-gray-800">
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
      </main>
    </>
  );
}
