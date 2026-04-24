import Image from "next/image";
import ManagermenetImage from "@/public/management-program.jpg";
import JiteNewtonImage from "@/public/jite-newton.jpg";
import Button from "./ui/Button";
import { ArrowUpRight, Zap } from "lucide-react";

const managementItems = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organizational Culture",
  "Sustainable Growth",
];

const transformationItems = [
  "Strategic Career Guidance",
  "Leadership Development",
  "CV Development",
  "Sustainability Leadership",
  "Communication Skills",
  "Business Model",
];

const consultantItems = [
  {
    title: "Expert-Led Learning",
    text: "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
  },
  {
    title: "Interactive Workshops",
    text: "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
  },
  {
    title: "Comprehensive Curriculum",
    text: "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
  },
  {
    title: "Global Recognition",
    text: "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
  },
];

export function ProgramShowcase() {
  return (
    <>
      {/* Management Development Program */}
      <section className="mx-auto w-full max-w-7xl mt-6 px-5 py-5 sm:px-8 md:px-12 lg:px-16 lg:py-12">
        <article className="grid gap-5 rounded-[20px] bg-[#2a0227] p-4 text-white sm:p-10 md:grid-cols-2 md:gap-6">
          <Image
            src={ManagermenetImage}
            alt="Managers collaborating during leadership training"
            width={920}
            height={620}
            className="h-full w-full rounded-lg object-cover"
          />

          <div className="">
            <h3 className="text-xl font-semibold leading-normal tracking-[0.6px] sm:text-[30px] sm:tracking-[0.9px] md:text-[40px] md:tracking-[1.2px]">
              Management Development Program
            </h3>
            <p className="mt-4 text-sm leading-relaxed sm:text-lg font-normal">
              Tobams Group offers a comprehensive Management Development Program
              designed to equip corporate organisations with the high-performing
              leaders they need to thrive.
            </p>
            <p className="mt-3 text-sm leading-relaxed sm:text-lg font-normal">
              Our program includes workshops, seminars coaching sessions, online
              courses, and experiential learning opportunities designed to
              improve leadership, strategic thinking, communication, and other
              essential managerial competencies for corporate organisations.
            </p>
            <ul className="mt-5 space-y-4 px-4 py-2">
              {managementItems.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 bg-[#8F6182] px-2 py-1 rounded-lg"
                >
                  <span className="shrink-0">
                    <Zap size={16} fill="var(--background)" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      {/* Transformation Hub */}
      <section>
        <div className="mx-auto w-full max-w-7xl mt-6 px-5 py-5 sm:px-8 md:px-12 lg:px-16 lg:py-12">
          <article className="bg-[#EF435333] px-4 py-6 sm:p-10 rounded-xl sm:rounded-2xl">
            <p className="text-sm md:text-xl font-semibold text-[#1671D9] italic">
              Learning With Our CEO
            </p>
            <h3 className="mt-1 text-xl font-semibold text-primary italic leading-normal tracking-[0.6px] sm:text-[30px] sm:tracking-[0.9px] md:text-[32px] md:tracking-[1.2px]">
              Transformation Hub With Jite Newton
            </h3>
            <p className="mt-3 text-sm leading-relaxed sm:text-lg font-normal">
              Transformation Hub with Jite Newton is a flagship webinar series
              curated by the CEO, Dr. Jite Newton. Designed to elevate career
              trajectories and leadership capabilities, this exclusive event
              offers invaluable insights and strategies for personal and
              professional growth. Whether you&apos;re seeking to advance your
              career or enhance your leadership skills, the Transformation Hub
              provides a transformative learning experience to unlock your full
              potential and drive success in your endeavours.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2 md:gap-10">
              <Image
                src={JiteNewtonImage}
                alt="Professional standing in a city at night during a transformation program"
                width={920}
                height={520}
                className="h-full w-full rounded-sm object-cover"
              />

              <div className="self-center bg-white/30 rounded-lg p-5 md:px-5 md:py-8">
                <div className="grid gap-2 sm:grid-cols-2 md:gap-4">
                  {transformationItems.map((item) => (
                    <p
                      key={item}
                      className="flex gap-2 rounded-xl bg-white p-4 text-[13px] font-semibold text-primary"
                    >
                      <span className="shrink-0">
                        <Zap size={16} />
                      </span>
                      <span>{item}</span>
                    </p>
                  ))}
                </div>
                <Button
                  rightIcon={<ArrowUpRight size={16} className="text-white" />}
                  variant="primary"
                  size="md"
                  className="mt-4"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Training The Consultant */}
      <section className="bg-[#ece8ed] py-5 sm:py-12">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-16">
          <h3 className="text-2xl font-semibold leading-normal tracking-[0.6px] text-primary sm:text-[30px] sm:tracking-[0.9px] md:text-[40px] md:tracking-[1.2px]">
            Training The Consultant
          </h3>
          <p className="mt-1 text-md leading-relaxed sm:text-lg font-semibold text-primary">
            Maximize Your Potential as a Certified Trainer
          </p>
          <p className="mt-3 max-w-[88ch] text-sm leading-relaxed sm:text-lg font-normal">
            With the help of our Training Consultants program, take a
            revolutionary step toward becoming a distinguished certified
            training consultant. Learn from professionals in the field, immerse
            yourself in a thorough curriculum, and hone your training methods
            through interactive workshops. Participating in our program will
            enable you to gain expertise in diverse courses while also
            developing the abilities to mentor and encourage others in their
            career advancement.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2  bg-primary rounded-lg p-6 text-white">
            {consultantItems.map((item) => (
              <article key={item.title} className="">
                <h4 className="text-md md:text-lg font-bold">{item.title}</h4>
                <p className="mt-2 text-sm md:text-lg font-normal leading-">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <Button
            size="md"
            rightIcon={<ArrowUpRight size={16} className="text-white" />}
            className="mt-8"
          >
            Learn More
          </Button>
        </div>
      </section>
    </>
  );
}
