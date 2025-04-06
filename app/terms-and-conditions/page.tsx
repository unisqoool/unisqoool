// app/terms-and-conditions/page.tsx
// This is a Next.js page component that renders the Terms and Conditions of Unisqoool.
import { Breadcrumbs } from "@/components/breadcrumbs";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs
        items={[
          { label: "Terms and Conditions", href: "/terms-and-conditions" },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 font-nunito text-usq-red">
          Terms and Conditions
        </h1>

        <div className="prose prose-sm sm:prose-base text-justify md:text-start lg:prose-lg max-w-4xl mx-auto">
          <p className="mb-4">
            Effective Date: <span className="font-bold">April 1st, 2025</span>
          </p>
          <p className="mb-4">
            Welcome to <strong>Unisqoool</strong> (&quot;Platform&quot;,
            &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These Terms and
            Conditions (&quot;Terms&quot;) govern your access to and use of the
            Unisqoool website, services, and platform, whether as a student,
            tutor, or visitor.
          </p>

          <h2 className="text-2xl text-start font-bold mt-8 mb-4 font-nunito text-usq-red">
            1. Acceptance of Terms
          </h2>
          <p className="mb-4">
            By accessing or using our platform, you agree to be bound by these
            Terms and our Privacy Policy. If you do not agree with any part of
            the Terms, you must not use our services.
          </p>

          <h2 className="text-2xl text-start font-bold mt-8 mb-4 font-nunito text-usq-red">
            2. Eligibility
          </h2>
          <p className="mb-4">To use Unisqoool, you must:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              Be at least 18 years old or have parental consent.
            </li>
            <li className="mb-2">
              Provide accurate information during registration.
            </li>
            <li className="mb-2">
              Agree to comply with all applicable laws and regulations.
            </li>
          </ul>

          <h2 className="text-2xl text-start font-bold mt-8 mb-4 font-nunito text-usq-red">
            3. User Accounts
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              You are responsible for maintaining the confidentiality of your
              account and password.
            </li>
            <li className="mb-2">
              You agree to notify us immediately of any unauthorized use of your
              account.
            </li>
          </ul>

          <h2 className="text-2xl text-start font-bold mt-8 mb-4 font-nunito text-usq-red">
            4. Services Offered
          </h2>
          <p className="mb-4">
            Unisqoool provides online educational services that include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Virtual classrooms</li>
            <li className="mb-2">One-on-one tutoring</li>
            <li className="mb-2">Group courses</li>
            <li className="mb-2">Educational content and resources</li>
          </ul>

          <h2 className="text-2xl text-start font-bold mt-8 mb-4 font-nunito text-usq-red">
            5. Tutor and Student Conduct
          </h2>
          <h3 className="text-xl font-bold mb-2">Tutors must:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              Be qualified to teach the subjects they offer.
            </li>
            <li className="mb-2">
              Conduct sessions professionally and respectfully.
            </li>
            <li className="mb-2">Not share or sell student information.</li>
          </ul>
          <h3 className="text-xl font-bold mb-2">Students must:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              Attend classes respectfully and punctually.
            </li>
            <li className="mb-2">Not record sessions without tutor consent.</li>
            <li className="mb-2">Pay all applicable fees on time.</li>
          </ul>

          <h2 className="text-2xl text-start font-bold mt-8 mb-4 font-nunito text-usq-red">
            6. Payments and Refunds
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              Payments must be made through approved methods on the platform.
            </li>
            <li className="mb-2">
              Refund policies are subject to course-specific terms.
            </li>
            <li className="mb-2">
              Unisqoool reserves the right to withhold payments if policy
              violations are detected.
            </li>
          </ul>

          <h2 className="text-2xl text-start font-bold mt-8 mb-4 font-nunito text-usq-red">
            7. Intellectual Property
          </h2>
          <p className="mb-4">
            All content on the platform, including logos, course materials,
            videos, and software, is the property of Unisqoool or its licensors.
            Users may not copy, distribute, or create derivative works without
            permission.
          </p>

          <h2 className="text-2xl text-start font-bold mt-8 mb-4 font-nunito text-usq-red">
            8. Prohibited Activities
          </h2>
          <p className="mb-4">You may not:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              Use the platform for any illegal or unauthorized purpose.
            </li>
            <li className="mb-2">
              Upload harmful content (e.g., viruses, malware).
            </li>
            <li className="mb-2">
              Harass, impersonate, or abuse others on the platform.
            </li>
          </ul>

          <h2 className="text-2xl text-start font-bold mt-8 mb-4 font-nunito text-usq-red">
            9. Termination
          </h2>
          <p className="mb-4">
            We reserve the right to suspend or terminate your account if you
            violate these Terms or misuse the platform.
          </p>

          <h2 className="text-2xl text-start font-bold mt-8 mb-4 font-nunito text-usq-red">
            10. Limitation of Liability
          </h2>
          <p className="mb-4">
            Unisqoool is not liable for any indirect, incidental, or
            consequential damages arising from your use of the platform. We do
            not guarantee learning outcomes or specific results.
          </p>

          <h2 className="text-2xl text-start font-bold mt-8 mb-4 font-nunito text-usq-red">
            11. Modification of Terms
          </h2>
          <p className="mb-4">
            We may revise these Terms at any time. Continued use of the platform
            constitutes acceptance of the updated Terms.
          </p>

          <h2 className="text-2xl text-start font-bold mt-8 mb-4 font-nunito text-usq-red">
            12. Contact
          </h2>
          <p className="mb-4">
            For any questions or concerns regarding these Terms, please contact
            us at:{" "}
            <a
              href="mailto:info@unisqoool.com"
              className="text-usq-blue-black hover:text-usq-cerulean font-bold"
            >
              info@unisqoool.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
