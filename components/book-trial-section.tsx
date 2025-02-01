import CalBooking from "@/components/cal-booking";

interface IProps {
  subject?: string;
  course?: string
}

export default function BookTrialSection({ subject, course }: IProps) {
  return (
    <section className="py-32 px-4 md:px-8 bg-usq-faded-peach">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 font-nunito text-usq-red">
            Book Your Free Trial
          </h2>
        </div>

        <CalBooking subject={subject} course={course} />
      </div>
    </section>
  );
}
