import { OrderSummary } from "../order-summary-section";
import { PaymentSection } from "./payment-section";

export default function PaymentPage() {
  return (
    <main className="flex flex-col-reverse w-full gap-6 md:flex-row">
      <PaymentSection />
      <OrderSummary />
    </main>
  );
}
