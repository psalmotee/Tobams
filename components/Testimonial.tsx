import Image from "next/image";
import Testimonial1 from "@/public/testimonial-1.png";
import Testimonial2 from "@/public/testimonial-2.png";
import Testimonial3 from "@/public/testimonial-3.png";

const testimonials = [
  {
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    image: Testimonial1,
    quote:
      "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
  },
  {
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    image: Testimonial2,
    quote:
      "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    image: Testimonial3,
    quote:
      "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
  },
];

export function Testimonial() {
  return (
    <>
      <section className="bg-[#C4C4C4]/30 py-5 sm:py-12">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-16">
          <h3 className="text-xl font-bold leading-normal tracking-[0.6px] sm:text-[30px] sm:tracking-[0.9px] md:text-[40px] md:tracking-[1.2px] text-center">
            Testimonials
          </h3>
          <div className="mt-6 grid gap-3 md:grid-cols-3 md:gap-8">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-2xl border-l-2 border-secondary  bg-white px-6 py-5"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name} portrait`}
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm md:text-[16px] font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-xs md:text-sm font-normal">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="mt-2 text-sm md:text-lg font-normal">
                  {testimonial.quote}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
