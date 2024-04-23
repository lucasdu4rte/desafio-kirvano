'use client'
import { GhostButton, PrimaryButton } from "@/components/Button";
import { Label, Select, FormField, Input, FieldError } from "@/components/Form";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdCheckCircle } from "react-icons/md";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const shippingFormSchema = z.object({
  address: z.string().min(1, 'Required field'),
  street: z.string().min(1, 'Required field'),
  postcode: z.string().min(1, 'Required field'),
  shipping: z.string().min(1, 'Required field')
})
type shippingFormData = z.infer<typeof shippingFormSchema>

const addresses = [
  {
    address: 'Electric avenue',
    street: '123',
    postcode: 'ABC - 123',
    shipping: 'FREE'
  }
]

export function ShippingSection() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<shippingFormData>({
    resolver: zodResolver(shippingFormSchema)
  })

  const onSubmit: SubmitHandler<shippingFormData> = (data) => {
    router.push('/payment')
  }

  const onChangeSelectedAddress = (event: ChangeEvent<HTMLSelectElement>) => {
    const postcode = event.target.value
    const selectedAddress = addresses.find(address => address.postcode === postcode)

    if (selectedAddress) {
      setValue('address', selectedAddress.address)
      setValue('street', selectedAddress.street)
      setValue('postcode', selectedAddress.postcode)
      setValue('shipping', selectedAddress.shipping)
      trigger()
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="bg-[#F7FAFC] rounded-lg px-8 py-8 flex-1">
        <div className="flex justify-center items-center gap-2 mb-6">
          <div className="text-blue-500">Shipping</div>
          <div className="h-0.5 w-6 bg-blue-400"></div>
          <MdCheckCircle size={20} />
          <div className="h-0.5 w-6 bg-blue-400"></div>
          <div className="text-gray-500">Payment</div>
        </div>
        <div className="text-lg text-gray-600 mb-4">
          Shipping Details
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <Label>Use saved address</Label>
            <Select onChange={onChangeSelectedAddress}>
              <option>Select address</option>
              {addresses.map(address => (
                <option key={address.postcode} value={address.postcode}>
                  {address.street}, {address.address}
                </option>
              ))}
            </Select>
          </div>
          <FormField>
            <Label>First line of address</Label>
            <Input {...register('address')} />
            {errors.address && <FieldError>{errors.address.message}</FieldError>}
          </FormField>
          <FormField>
            <Label>Street name</Label>
            <Input {...register('street')} />
            {errors.street && <FieldError>{errors.street.message}</FieldError>}
          </FormField>
          <div className="flex gap-4">
            <FormField>
              <Label>Postcode</Label>
              <Input {...register('postcode')} />
              {errors.postcode && <FieldError>{errors.postcode.message}</FieldError>}
            </FormField>

            <FormField>
              <Label>Select shipping</Label>
              <Select {...register('shipping')}>
                <option value="">Select</option>
                <option value="FREE">Free delivery</option>
              </Select>
              {errors.shipping && <FieldError>{errors.shipping.message}</FieldError>}
            </FormField>
          </div>
          <div className="border-t border-gray-100 my-4"></div>
          <div className="flex gap-4 justify-end">
            <GhostButton type="button">Cancel order</GhostButton>
            <PrimaryButton type="submit">Payment</PrimaryButton>
          </div>
        </div>
      </section>
    </form>
  )
}
