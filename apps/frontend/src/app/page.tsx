import { OrderSummary } from "./order-summary-section";
import { ShippingSection } from "./shipping-section";

export default function Home() {
  return (
    <main className="flex flex-col-reverse w-full gap-6 md:flex-row">
      <ShippingSection />
      <OrderSummary />
    </main>
  );
}
