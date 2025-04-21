import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PaymentSuccessPageProps {
  searchParams: {
    order_id?: string;
    payment_id?: string;
  };
}

export default function PaymentSuccessPage({
  searchParams,
}: PaymentSuccessPageProps) {
  const { order_id, payment_id } = searchParams;

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs
        items={[{ label: "Payment Success", href: "/payment-success" }]}
      />

      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-usq-red mb-4">
          🎉 Payment Successful!
        </h1>
        <p className="text-lg text-usq-blue-black mb-6">
          Thank you for enrolling. Your payment has been received.
        </p>

        {order_id && (
          <p className="text-sm text-gray-700 mb-2">
            <strong>Order ID:</strong> {order_id}
          </p>
        )}
        {payment_id && (
          <p className="text-sm text-gray-700 mb-6">
            <strong>Payment ID:</strong> {payment_id}
          </p>
        )}

        <p className="text-sm text-gray-700 mb-4">
          Please save these details for your records. You’ll receive an email
          from the UNisqoool team within 24–48 hours with information on next
          steps.
        </p>
        <p className="text-sm text-gray-700">
          If you have any questions, feel free to reach out at{" "}
          <a
            href="mailto:info@unisqoool.com"
            className="text-usq-cerulean underline"
          >
            info@unisqoool.com
          </a>
          .
        </p>

        <Button asChild variant="primary" className="mt-8">
          <Link href="/#our-subjects">Explore Other Courses</Link>
        </Button>
      </div>
    </div>
  );
}
