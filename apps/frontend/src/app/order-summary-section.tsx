import { Counter } from "@/components/Counter";
import { FormField, Input, Label } from "@/components/Form";
import Image from "next/image";

export function OrderSummary() {
  return(
    <section className="bg-[#F7FAFC] rounded-lg px-8 py-8">
      <div className="flex flex-col gap-4">
        <div className="flex">
          <div className="text-lg text-gray-500">Order Summary</div>
        </div>
        <div>
          <Image alt="" src="/headphone.png" height={162} width={420} />
        </div>
        <div className="flex gap-2">
          <div className="flex flex-1 flex-col">
            <div className="text-lg text-gray-600">Sony wireless headphones</div>
            <div className="text-lg font-semibold text-gray-700">£320.45</div>
          </div>
          <div>
            <Counter />
          </div>
        </div>
        <FormField>
          <Label>Gift Card / Discount code</Label>
          <div className="flex gap-4">
            <Input className="flex-1" />
            <button
              className="text-blue-400 border-2 border-blue-400 rounded-lg px-6 py-3"
            >
              Apply
            </button>
          </div>
        </FormField>

        <table className="w-full">
          <tbody>
            <tr>
              <td className="py-3 text-gray-700">Sub total</td>
              <td className="py-3 text-right text-gray-800 font-medium tabular-nums">£316.55</td>
            </tr>
            <tr>
              <td className="py-3 text-gray-700">Tax</td>
              <td className="py-3 text-right text-gray-800 font-medium tabular-nums">£3.45</td>
            </tr>
            <tr>
              <td className="py-3 text-gray-700">Shipping</td>
              <td className="py-3 text-right">
                <span className="text-green-500 text-lg font-medium">
                  Free
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-4 font-semibold text-gray-800">Total</td>
              <td className="py-4 text-right text-gray-800 font-medium tabular-nums">£320.45</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
