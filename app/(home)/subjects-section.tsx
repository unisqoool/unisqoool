import SubjectTabs from "./subject-tabs";

export default function SubjectsSection() {
  return (
    <section className="py-16 px-4 md:py-24 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-nunito text-usq-red">
            Our Subjects
          </h2>
        </div>

        <SubjectTabs />
      </div>
    </section>
  );
}
