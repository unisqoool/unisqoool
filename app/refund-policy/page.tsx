import { Breadcrumbs } from "@/components/breadcrumbs";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs
        items={[{ label: "Refund Policy", href: "/refund-policy" }]}
      />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 font-nunito text-usq-red">
          Refund Policy
        </h1>

        <div className="prose prose-sm sm:prose-base text-justify md:text-start lg:prose-lg max-w-4xl mx-auto">
          <p className="mb-4">
            This refund policy (&quot;Refund Policy&quot;/&quot;Policy&quot;) is
            effective as of 01st January, 2025 (&quot;Effective Date&quot;) and
            shall continue to remain valid until it is specifically
            replaced/revoked by us. This Policy applies to New Students (as
            defined below) registered with the Company for the paid classes.
          </p>
          <p className="mb-4">
            DUS EDVENTURE TECH offers a transparent Refund Policy towards its
            customers (&quot;Customer&quot;/&quot;you&quot;/ &quot;your&quot;).
            This Policy applies to students who enrol, for the first time, in
            any of the Company&apos;s classes on or after the Effective Date
            (&quot;New Student&quot;). This Refund Policy also applies to
            existing Customers who renew or upgrade their existing class package
            or otherwise purchase a new cross-product class package (e.g.,
            existing coding customer purchasing a new math package), on or after
            the Effective Date.
          </p>
          <p className="mb-4">
            In order for you to make an informed purchasing decision, we work
            hard to provide our customers with information about our programs,
            access to our social media accounts, and statistics regarding the
            benefits of learning.
          </p>
          <p className="mb-4">
            Valid Refund- Requests: The course fee paid at the time of
            registration with us shall be eligible for refund
            (&quot;Refund&quot;) as per terms of this Refund Policy. A Refunds
            request will be deemed valid only if it is made through an email to
            info@unsiqoool.com. Make sure that you use the same email address
            you used to register for an account when emailing your Refunds
            request. Refunds will be issued to the original form of payment used
            during the initial purchase. Refunds will be based on the valid
            credits remaining in your account as of the date the Refund is
            requested, as explained further below.
          </p>
          <p className="mb-4">
            <strong>New Customers:&nbsp;</strong>
            From the date the first-class session of the enrolled course is
            considered completed (&quot;First Class Date&quot;), you will have
            45 (forty-five) calendar days to request a refund. Any renewals or
            upgrades of a class package will be eligible for a Refund of the
            renewal or upgrade, provided a Refund request is made within 45
            (forty-five) calendar days of the date payment was first received
            for the renewal or upgrade order (&quot;Payment Date&quot;). No
            Refunds will be given for any requests received outside of this
            45-calendar day period.
          </p>
          <p className="mb-4">
            <strong>Existing Customers:&nbsp;</strong>
            Existing Customers who purchased an initial class package prior to
            the Effective Date are subject to the Refund Policy made available
            to them during their enrolment, except that:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              Existing Customers who purchase a new cross-product class package
              on or after the Effective Date will be eligible for a Refund of
              the new package, provided a Refund request is made within 45
              (forty-five) calendar days of the First-Class Date.
            </li>
            <li className="mb-2">
              Existing Customers who renew or upgrade their existing class
              package on or after the Effective Date will be eligible for a
              Refund of the renewal or upgrade, provided a Refund request is
              made within 45 (forty-five) calendar days of the Payment Date.
            </li>
            <li className="mb-2">
              No Refunds will be given for any requests received outside of this
              45-calendar day period.
            </li>
          </ul>
          <p className="mb-4">
            We attempt to process and complete customer Refund- request within
            30 business days from the time we receive a Refund request. Our
            Refund process may include a phone call to you, where we request
            course feedback and/or validation of key information needed to
            process your Refund.
          </p>
          <p className="mb-4">
            <strong>Please note:</strong> Refunds shall be subject to a)
            deductions based on the minimum attendance policy (&quot;MAP&quot;),
            If the minimum attendance requirement is not fulfilled, all
            remaining credits for the applicable month or week will expire at
            the end of the respective month or week i.e. they will be considered
            &quot;used&quot; by the student and will not be refunded; b)
            deduction of the value of any cashback, processing fee, transaction
            fee, any applicable tax charged on the transaction, discounts or
            rewards, including vouchers, product received by you at time of
            purchase from the amount of the Refund.
          </p>
          <h2 className="text-2xl text-start font-bold mt-8 mb-4 font-nunito text-usq-red">
            Refund Calculation Process for Eligible Customers
          </h2>
          <p className="mb-4">
            For Refunds under this Policy, the calculations will be on a
            pro-rata basis depending on the number of credits consumed and the
            per class unit price of the initial package purchased. For
            Illustration Purposes Only: A customer purchases a new 48-class
            package for a total package price of 1,500.00. The student learner
            consumes 12 classes prior to the customer requesting a refund within
            the 45-day period. The refund amount for the remaining 36 classes
            will be based on the per unit pricing of 31.25 (total package price
            at time of purchase (1,500.00) divided by the number of classes in
            the package (48 classes)).
          </p>
          <p className="mb-4">
            Illustration for Effective Refund and related deductions:
          </p>
          <h2 className="text-2xl text-start font-bold mt-8 mb-4 font-nunito text-usq-red">
            TABLE A
          </h2>
          <p className="mb-4">Course Enrolment</p>
          <p className="mb-4">
            Refund shall be processed on remaining credits subject to deduction
            of the value of any cashback, processing fee, transaction fee, any
            applicable tax charged on the transaction, discounts or rewards,
            including vouchers (if applicable).
          </p>
          <h2 className="text-2xl text-start font-bold mt-8 mb-4 font-nunito text-usq-red">
            TABLE B - New Enrolment
          </h2>
          <p className="mb-4">FOR ILLUSTRATION PURPOSES ONLY</p>
          <p className="mb-4">First Class Date- 1st June, 2024</p>
          <p className="mb-4">Number of classes enrolled- 48</p>
          <p className="mb-4">
            Number of classes consumed by student after renewal/upgrade on or
            before 45 days from the Payment Date i.e. on or before 16th July- 12
          </p>
          <p className="mb-4">
            For Renewal &amp; Upgrades occurring on or after the Effective Date,
            the Refund shall be calculated on the remaining unused credits from
            the Payment Date, subject to the deductions noted above. - 36
          </p>
          <h2 className="text-2xl text-start font-bold mt-8 mb-4 font-nunito text-usq-red">
            Our Liability:
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              We are not liable for any loss or damage arising from the
              unauthorized or fraudulent use of your account, including for any
              unauthorized payment transactions.
            </li>
            <li className="mb-2">
              We will not be held liable for any unexecuted or delayed payment
              transactions when such issues were caused by circumstances beyond
              our control.
            </li>
            <li className="mb-2">
              We will not be liable for any loss suffered by you as a result of
              incorrect payment information provided by you.
            </li>
          </ul>
          <hr className="my-8" />
          <p className="mb-4">
            Use of our classes and platforms are subject to our Terms and
            Conditions, Code of Conduct, as well as our class policies,
            including our Class Scheduling Policy and User Policy provided to
            you upon account activation. The Company has no obligation to
            provide a Refund to Customers who violate Company&apos;s Terms or
            policies. The terms of this Refund Policy may be updated from time
            to time at Company&apos;s sole discretion. Any such updates shall be
            communicated via our website and/or through a notice
            (email/SMS/WhatsApp) to our Customers. Such updates supersede any
            prior versions of our Refund Policy.
          </p>
          <h2 className="text-2xl text-start font-bold mt-8 mb-4 font-nunito text-usq-red">
            MINIMUM ATTENDANCE POLICY(MAP)
          </h2>
          <p className="mb-4">
            This Minimum Attendance Policy (&quot;Policy&quot;) is effective as
            of January 1st, 2025 (&quot;Effective Date&quot;) and applies to New
            Students (as defined below).
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li className="mb-2">
              Applicability - This Policy applies to students who enrol, for the
              first time, in any of the DUS EDVENTURE TECH&apos;s classes on or
              after the Effective Date (&quot;New Student&quot;).
            </li>
            <li className="mb-2">
              Policy - As of the Effective Date New Students are required to
              attend a minimum number of classes per month (&quot;Attendance
              Threshold&quot;). The Attendance Threshold begins from the date of
              the first completed paid class or 15 days from date of payment,
              whichever is earlier. The Attendance Threshold is calculated on a
              prorated basis for the first month, after which, Credits are
              automatically deducted from the student&apos;s account at the end
              of each month, even if the student is unable to attend the
              required classes; these Credits do not roll over to the next
              month. Credits counting toward the Attendance Threshold include
              (i) a completed class; (ii) a booked class where the student is
              absent; (iii) a booked class that is cancelled within 24 hours of
              the scheduled start time; or (iv) any additional unused classes
              not booked or consumed up to the minimum number of credits per
              month.
            </li>
            <li className="mb-2">
              Attendance Thresholds - The monthly Attendance Thresholds for the
              courses as follows:
            </li>
          </ol>
          <p className="mb-4 pl-6">
            Coding- Four (4) classes per month
            <br />
            Math- Four (4) classes per month
            <br />
            Music- Four (4) classes per month
          </p>
          <ol start={4} className="list-decimal pl-6 mb-4">
            <li className="mb-2">
              Refunds - Any refunds provided will be subject to the Refund
              Policy made available to you during your enrolment and a refund
              request will be deemed valid only if it is made through an email
              to{" "}
              <a
                href="mailto:info@unisqoool.com"
                className="text-usq-cerulean hover:text-usq-red"
              >
                info@unisqoool.com
              </a>
            </li>
            <li className="mb-2">
              Other Company Policies - This Policy is incorporated into DUS
              EVENTURE TECH online terms and conditions (_) and subject to the
              privacy policy (_). Students are subject to all other company
              policies, including specific program/class policies and
              guidelines.
            </li>
          </ol>
          <hr className="my-8" />
          <h2 className="text-2xl text-start font-bold mt-8 mb-4 font-nunito text-usq-red">
            One-time Payment:
          </h2>
          <h3 className="text-xl font-bold mt-6 mb-2">Fulfilment:</h3>
          <p className="mb-4">
            As soon as the customer purchases the plan, fulfilment happens
            online and #classes/credits are allotted immediately.
          </p>
          <h3 className="text-xl font-bold mt-6 mb-2 text-usq-blue-black">Refund Policy:</h3>
          <p className="mb-4">
            The amount of refund payable shall only be limited to the amount
            paid by the customer for services which were not rendered to the
            customer by DUS EDVENTURE TECH. Further the deduction shall be made
            towards the value of any cashback, discounts or rewards, including
            vouchers (if applicable).
          </p>
          <p className="mb-4">
            Any refund claimed shall be subject to the Refund Policy made
            available to you during your enrolment and the amount of refund
            payable shall only be limited to the amount paid by the customer for
            services which were not rendered to the customer by DUS EDVENTURE
            TECH. For a copy of our current Refund Policy, please click on this{" "}
            <a href="#" className="text-usq-cerulean hover:text-usq-red">
              link
            </a>
          </p>
          <p className="mb-4">
            A refund request will be deemed valid only if it is made through an
            email to{" "}
            <a
              href="mailto:info@unisqoool.com"
              className="text-usq-cerulean hover:text-usq-red"
            >
              info@unisqoool.com
            </a>
          </p>
          <h3 className="text-xl font-bold mt-6 mb-2 text-usq-blue-black">Refund Process:</h3>
          <p className="mb-4">
            We aim to process and refund requests within 30 business days of
            receiving the request. If request is made as per our refund policy
            However, if there is a delay, please notify us at{" "}
            <a
              href="mailto:info@unisqoool.com"
              className="text-usq-cerulean hover:text-usq-red"
            >
              info@unisqoool.com
            </a>
            . During the refund process, we may request that you validate key
            information required to process your refund.
          </p>

          <h2 className="text-2xl text-start font-bold mt-8 mb-4 font-nunito text-usq-red">
            Subscription
          </h2>
          <h3 className="text-xl font-bold mt-6 mb-2 text-usq-cerulean">Fulfilment:</h3>
          <p className="mb-4">
            As soon as the customer purchases the plan, fulfilment happens
            online and #classes/credits are allotted immediately. For example,
            if customer purchases a subscription plan of 8 classes per month for
            6 months, every month 8 credits get added for the next 6 months
          </p>
          <h3 className="text-xl font-bold mt-6 mb-2 text-usq-cerulean">Refund Policy:</h3>
          <p className="mb-4">
            Any refund claimed shall be subject to the Refund Policy made
            available to you during your enrolment and the amount of refund
            payable shall only be limited to the amount paid by the customer for
            services which were not rendered to the customer by DUS EDVENTURE
            TECH. For a copy of our current Refund Policy, please click on this{" "}
            <a href="#" className="text-usq-cerulean hover:text-usq-red">
              link
            </a>
          </p>
          <p className="mb-4">
            A refund request will be deemed valid only if it is made through an
            email to{" "}
            <a
              href="mailto:info@unisqoool.com"
              className="text-usq-cerulean hover:text-usq-red"
            >
              info@unisqoool.com
            </a>
          </p>
          <h3 className="text-xl font-bold mt-6 mb-2 text-usq-cerulean">Refund Process:</h3>
          <p className="mb-4">
            We aim to process and refund requests within 30 business days of
            receiving the request. If request is made as per our refund policy
            However, if there is a delay, please notify us at{" "}
            <a
              href="mailto:info@unisqoool.com"
              className="text-usq-cerulean hover:text-usq-red"
            >
              info@unisqoool.com
            </a>
            . During the refund process, we may request that you validate key
            information required to process your refund.
          </p>
        </div>
      </div>
    </div>
  );
}
