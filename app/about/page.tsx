import { Breadcrumbs } from "@/components/breadcrumbs";
import { Target, Eye } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs items={[{ label: "About Us", href: "/about-us" }]} />

      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 font-nunito text-usq-red">
            Empowering Minds, Shaping Futures.
          </h1>
          <p className="text-lg text-usq-blue-black/70 text-center lg:text-justify mx-auto">
            <p>
              Unisqoool is a dynamic and innovative online teaching platform
              designed to revolutionize the way education is delivered. Our
              mission is to provide high-quality, accessible learning
              experiences that cater to the diverse needs of students across the
              globe. With a focus on personalized learning, cutting-edge
              technology, and expert educators, we aim to foster an environment
              where students can thrive academically and reach their full
              potential.
            </p>
            <br />
            <p>
              At Unisqoool, we offer a wide range of courses and programs
              tailored to various subjects and skill levels, ensuring that
              learners from all backgrounds can find the support they need.
              Whether you&apos;re preparing for exams, looking to upskill in a
              particular field, or exploring new areas of interest, our platform
              provides a seamless and engaging learning experience.
            </p>
            <br />
            <p>
              At Unisqoool, we believe that education should be empowering,
              affordable, and accessible to all. By leveraging technology and
              focusing on student-centered learning, we strive to create a
              platform that not only meets but exceeds the expectations of
              modern learners. Whether you&apos;re pursuing your academic goals
              or advancing your career, Unisqoool is here to help you succeed.
              Join us today and unlock the future of education!
            </p>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mb-16 max-w-4xl mx-auto">
          {/* Mission Section */}
          <div className="flex flex-col items-center text-center gap-4 w-full">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-usq-faded-peach flex items-center justify-center">
                <Target className="w-8 h-8 text-usq-red" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-usq-red font-nunito mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-usq-blue-black/70 text-center">
                Unisqoool leverages innovative technology to provide engaging,
                interactive learning experiences that inspire curiosity and
                drive lifelong achievement.
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="flex flex-col items-center text-center gap-4 w-full">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-usq-faded-peach flex items-center justify-center">
                <Eye className="w-8 h-8 text-usq-red" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-usq-red font-nunito mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-usq-blue-black/70 text-center">
                To empower learners worldwide with accessible, personalized
                education that fosters growth and success.
              </p>
            </div>
          </div>

          {/* Story Section */}
          {/* <div className="flex flex-col items-center text-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-usq-faded-peach flex items-center justify-center">
                <History className="w-8 h-8 text-usq-red" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-usq-blue-black mb-4">
                Our Story
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 w-full">
                <Card className="overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src="/placeholder.svg"
                      alt="Our Beginning"
                      fill
                      className="object-cover"
                    />
                  </div>
                </Card>
                <Card className="overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src="/placeholder.svg"
                      alt="Our Growth"
                      fill
                      className="object-cover"
                    />
                  </div>
                </Card>
                <Card className="overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src="/placeholder.svg"
                      alt="Our Future"
                      fill
                      className="object-cover"
                    />
                  </div>
                </Card>
              </div>
              <p className="text-gray-600">
                Founded with a vision to revolutionize online education,
                UNisqoool has grown from a small tutoring service to a
                comprehensive educational platform. Our journey is marked by
                continuous innovation, dedication to student success, and the
                unwavering commitment to making quality education accessible to
                all.
              </p>
            </div>
          </div> */}
        </div>

        {/* Team Section */}
        <section className="max-w-4xl mx-auto py-16 px-4 lg:px-0 md:py-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-nunito text-usq-red">
            Meet Our Founders
          </h2>

          <div className="space-y-16">
            {/* First Team Member */}
            <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-12">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-usq-cerulean text-center lg:text-start  mb-4">
                  Upasna Chatterjee
                </h3>
                <p className="text-usq-blue-black/70 text-justify">
                  <p>
                    Meet Upasna Chatterjee, a Delhi native with a golden pen
                    (her parents are the true masterminds behind that, not some
                    fancy silver spoon)! Armed with double masters in Political
                    Science and Social Work, plus a shiny certification from the
                    British Council in English, she&rsquo;s here to prove that
                    education can be as fun as a dance party and not as scary as
                    a pop quiz. English? Pfft, it&rsquo;s just a language, not
                    rocket science (unless you&apos;re reading Shakespeare, then
                    maybe it&apos;s rocket science). With 10 years of teaching
                    experience, a SAT trainer gig, and a second job as a
                    part-time counselor (because, you know, kids need
                    guidance... and sometimes chocolate), Upasna also claims to
                    be an animal lover, state-level badminton and volleyball
                    player, and a total foodie. Her motto? Learning isn&rsquo;t
                    just about books&mdash;it&rsquo;s about growing, giggling,
                    and maybe grabbing a snack along the way. As a co-founder of{" "}
                    <strong>Unisqoool</strong>, she&rsquo;s on a mission to make
                    learning so fun, even your pet might want to join in (and
                    yes, your dog can totally ace the English test)!
                  </p>
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-48 h-48 rounded-full border-2 border-usq-cerulean overflow-hidden">
                  <Image
                    src="/assets/avatars/upasana.png"
                    alt="Upasna Chatterjee"
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Second Team Member - Reversed Layout */}
            <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-8 mb-12">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-usq-cerulean text-center lg:text-start mb-4">
                  Shanku Vashisht
                </h3>
                <p className="text-usq-blue-black/70 text-justify">
                  <strong>Unisqool</strong> is on a mission to make learning not
                  just effective, but a full-on celebration! Co-founder Shanku
                  Vashisht, a supermom of two, has over 10 years of math
                  magic—from simple addition to complex calculus—and a
                  superpower that turns even the toughest problems into a walk
                  in the park (okay, maybe a sprint, but hey, still fun). Her
                  secret? Clearing confusion, smashing homework like it&apos;s a
                  piñata, and banishing exam stress faster than you can say
                  &quot;A+!&quot; With a degree in Electronics (Honors) from
                  Delhi University and a post-grad in Finance, Shanku Vashisht
                  combines brains with tech wizardry to make learning feel like
                  a fun game of Monopoly—minus the jail time. At Unisqool, her
                  goal is simple: make education so fun, students will be
                  excited for their next math class (yes, you read that right).
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-48 h-48 rounded-full border-2 border-usq-cerulean overflow-hidden">
                  <Image
                    src="/assets/avatars/shanku.png"
                    alt="Shanku Vashisht"
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Third Team Member */}
            {/* <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-12">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-usq-cerulean text-center lg:text-start mb-4">
                  Dhurvi Patel
                </h3>
                <p className="text-usq-blue-black/70 text-justify">
                  Dhruvi Patel Dutt, a History and Sanskrit graduate from Delhi
                  University, is a multi-talented force of nature – a Karate
                  black belt, basketball champ, and thrill-seeker who believes
                  in embracing life’s challenges with a grin (and a well-timed
                  roundhouse kick). Her love for teaching started early, helping
                  classmates conquer the mysteries of Math and Sanskrit –
                  clearly, even numbers and ancient languages couldn’t escape
                  her grasp. During the pandemic, Dhruvi dived into the world of
                  teaching with Coding for Kids, mastering Block Programming,
                  JavaScript, AI, ML, and Robotics – all while keeping her
                  Sanskrit roots firmly intact. With over 5 years of global
                  teaching experience, Dhruvi co-founded&nbsp;
                  <strong>Unisqool</strong>, a place where technology and
                  culture meet, creating a space for students and educators to
                  grow, laugh, and maybe even break a few mental blocks along
                  the way.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-48 h-48 rounded-full border-2 border-usq-cerulean overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    alt="Dhurvi Patel"
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
}
