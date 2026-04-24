import Image from "next/image";
import LMS from "@/public/lms.jpg";
import Corporate from "@/public/corporate.jpg";
import Personalise from "@/public/personalise.jpg";
import Capacity from "@/public/capacity.jpg";
import Button from "./ui/Button";
import { ArrowUpRight, Zap } from "lucide-react";

const programs = [
  {
    title: "Corporate Trainings",
    text: "Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values.",
    points: [
      "Leadership Training",
      "Strategic Planning and Implementation",
      "Project Management",
      "Sustainability Training",
      "Customised Training",
    ],
    image: Corporate,
    imageAlt: "Corporate team discussing strategy in a training room",
    reverse: false,
  },
  {
    title: "Personalised Individual Training",
    text: "Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals.",
    points: [
      "Leadership Development",
      "Soft Skills Development",
      "Industry Specific Knowledge",
      "Technical Skills Enhancement",
      "Time Management and Productivity",
      "Career Development",
    ],
    image: Personalise,
    imageAlt: "Individual coaching and training session",
    reverse: true,
  },
  {
    title: "Capacity Development",
    text: "At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:",
    points: [
      "Tailored Training Programs",
      "Expert-Led Workshops",
      "Personalized Mentorship",
      "Technical Skills Enhancement",
      "Collaborative Learning Environment",
      "Ongoing Support and Resources",
    ],
    image: Capacity,
    imageAlt: "Facilitator presenting charts during capacity workshop",
    reverse: false,
  },
];

export function Features() {
  return (
    <>
      <section className="bg-primary/10 mt-8 px-5 py-5 sm:px-8 md:px-12 lg:px-16 lg:py-12">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-2">
          <h2 className="text-xl font-semibold leading-normal tracking-[0.6px] text-primary sm:text-[30px] sm:tracking-[0.9px] md:text-[40px] md:tracking-[1.2px] md:hidden ">
            Learning Management System
          </h2>
          <div className="mx-auto h-56.75 w-56.75 md:h-106.75 md:w-106.75 lg:h-139.25 lg:w-142">
            <Image
              src={LMS}
              alt="Learners collaborating during a learning management session"
              width={600}
              height={600}
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          <article>
            <h2 className="text-xl font-semibold leading-normal tracking-[0.6px] text-primary sm:text-[30px] sm:tracking-[0.9px] md:text-[40px] md:tracking-[1.2px] hidden md:block">
              Learning Management System
            </h2>

            <div className="mt-4 rounded-xl bg-primary/10 p-6 ">
              <p className="text-sm leading-relaxed sm:text-lg">
                TG Academy is a hub of knowledge and skill-building resources
                designed to empower tech talents on their learning journey. From
                technical courses covering the latest programming languages and
                development frameworks to soft skills training in leadership,
                effective communication and project management, TG Academy
                offers a wide range of courses to cater to diverse learning
                needs. With accessible and interactive learning materials,
                individuals can enhance their skills and stay ahead in
                today&apos;s competitive tech landscape.
              </p>

              <p className="mt-4 text-md font-bold text-primary sm:text-lg">
                Some of our courses include:
              </p>

              <ul className="mt-4 flex flex-col gap-y-4 gap-x-2 text-sm font-normal sm:flex-row flex-wrap sm:text-[16px]">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-text-color" />
                  <span className="truncate">Business Analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-text-color" />
                  <span className="truncate">Design Thinking</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-text-color" />
                  <span className="truncate">Effective Communication</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-text-color" />
                  <span className="truncate">Entrepreneurship</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-text-color" />
                  <span className="truncate">Career Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-text-color" />
                  <span className="truncate">Business Model</span>
                </li>
              </ul>
            </div>

            <Button
              size="md"
              className="mt-8 flex items-center gap-2"
              rightIcon={<ArrowUpRight size={16} className="text-white" />}
            >
              Learn More
            </Button>
          </article>
        </div>
      </section>

      <section
        id="courses"
        className="mx-auto w-full max-w-7xl space-y-10 mt-8 px-5 py-5 sm:px-8 md:px-12 lg:px-16 lg:py-12"
      >
        {programs.map((program) => (
          <article
            key={program.title}
            className="grid items-center gap-7 md:grid-cols-2 md:gap-10"
          >
            <div className={program.reverse ? "md:order-2" : ""}>
              <h3 className="text-xl font-semibold leading-normal tracking-[0.6px] sm:text-[30px] sm:tracking-[0.9px] md:text-[40px] md:tracking-[1.2px]">
                {program.title}
              </h3>
              <p className="mt-3 max-w-[58ch] text-sm leading-relaxed sm:text-lg">
                {program.text}
              </p>
              <ul className="mt-4 space-y-1 text-sm leading-relaxed sm:text-lg">
                {program.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="shrink-0">
                      <Zap size={16} fill="var(--color-primary)" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={program.reverse ? "md:order-1" : ""}>
              <Image
                src={program.image}
                alt={program.imageAlt}
                width={920}
                height={540}
                className="h-auto w-full rounded-tl-[56px] rounded-tr-3xl rounded-br-[23px] rounded-bl-xl object-cover"
              />
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
