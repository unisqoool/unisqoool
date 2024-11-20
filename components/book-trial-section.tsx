import CalBooking from "@/components/cal-booking";

export default function BookTrialSection() {
  return (
    <section className="py-16 px-4 md:py-24 md:px-8 bg-usq-faded-peach">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-nunito text-usq-red">
            Book Your Free Trial
          </h2>
        </div>

        <CalBooking />
      </div>
    </section>
  );
}
