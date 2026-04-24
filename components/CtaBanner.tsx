import { ArrowUpRight } from "lucide-react";
import Button from "./ui/Button";

export function CtaBanner() {
  return (
    <>
      <section className="mx-auto w-full max-w-7xl mt-8 px-5 py-5 sm:px-8 md:px-12 lg:px-40 lg:py-12">
        <div className="rounded-sm bg-primary px-4 py-8 text-center text-white sm:px-8">
          <p className="text-md font-semibold sm:text-xl">
            Want to accelerate professional growth and development at your
            organisation? <br /> See how we can help.
          </p>
          <Button
            size="lg"
            className="mt-8 bg-white text-primary hover:bg-white/90"
            variant="secondary"
          >
            Book a Consultation
          </Button>
        </div>
      </section>
    </>
  );
}
