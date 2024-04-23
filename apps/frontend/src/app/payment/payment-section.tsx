'use client'
import { GhostButton, PrimaryButton } from "@/components/Button";
import { FieldError, FormField, Input, Label, Select } from "@/components/Form";
import { Payment } from "@/domain/entities/payment";
import { PaymentHttpGateway } from "@/infra/gateways/payment-http.gateway";
import { http } from "@/infra/http";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { MdCheckCircle } from "react-icons/md";
import { z } from "zod";

const paymentFormSchema = z.object({
  nameOnCard: z.string().min(1, 'Required field'),
  cardNumber: z.string().min(1, 'Required field'),
  cardExpirationMonth: z.string().min(1, 'Required field'),
  cardExpirationYear: z.string().min(1, 'Required field'),
  cardCvv: z.string().min(1, 'Required field'),
})
type paymentFormData = z.infer<typeof paymentFormSchema>

const paymentHttpGateway = new PaymentHttpGateway(http)

const cards = [
  {
    nameOnCard: 'ELVIS CHARIZARD',
    cardNumber: '5331 2495 7950 0291',
    cardExpirationMonth: '05',
    cardExpirationYear: '25',
    cardCvv: '708',
  },
  {
    nameOnCard: 'INVALID CARD',
    cardNumber: '1111 1111 1111 1111',
    cardExpirationMonth: '05',
    cardExpirationYear: '25',
    cardCvv: '999',
  },
  {
    nameOnCard: 'INVALID CARD',
    cardNumber: '1234 1234 1234 1234',
    cardExpirationMonth: '05',
    cardExpirationYear: '25',
    cardCvv: '999',
  },
  {
    nameOnCard: 'EXPIRED CARD',
    cardNumber: '5374 1369 6649 7983',
    cardExpirationMonth: '05',
    cardExpirationYear: '20',
    cardCvv: '999',
  },
]

export function PaymentSection() {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<paymentFormData>({
    resolver: zodResolver(paymentFormSchema)
  })

  const onSubmit: SubmitHandler<paymentFormData> = async (data) => {
    try {
      const cardExpirationDate = `20${data.cardExpirationYear}-${data.cardExpirationMonth}-01`
      const payment = new Payment({
        cardCvv: data.cardCvv,
        cardExpiration: cardExpirationDate,
        cardNumber: data.cardNumber,
      })
      await paymentHttpGateway.save(payment)
      toast.success('Your payment was accept!');
    } catch (error) {
      toast.error('Something wrong with your payment!');
    }
  }

  const onChangeSelectedCard = (event: ChangeEvent<HTMLSelectElement>) => {
    const cardNumber = event.target.value
    const selectedCard = cards.find(card => card.cardNumber === cardNumber)

    if (selectedCard) {
      setValue('cardCvv', selectedCard.cardCvv)
      setValue('cardExpirationMonth', selectedCard.cardExpirationMonth)
      setValue('cardExpirationYear', selectedCard.cardExpirationYear)
      setValue('cardNumber', selectedCard.cardNumber)
      setValue('nameOnCard', selectedCard.nameOnCard)
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
          <div className="text-blue-500">Payment</div>
        </div>
        <div className="text-lg text-gray-600 mb-4">
          Payment Details
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <Label>Use saved card</Label>
            <Select onChange={onChangeSelectedCard}>
              <option>Select card</option>
              {cards.map(card => (
                <option key={card.cardNumber} value={card.cardNumber}>
                  Mastercard ending {card.cardNumber.slice(-3)}
                </option>
              ))}
            </Select>
          </div>
          <FormField>
            <Label>Name on card</Label>
            <Input {...register('nameOnCard')} />
            {errors.nameOnCard && <FieldError>{errors.nameOnCard.message}</FieldError>}
          </FormField>
          <FormField>
            <Label>Card number</Label>
            <Input
              inputMode="tel"
              type="text"
              {...register('cardNumber')}
            />
            {errors.cardNumber && <FieldError>{errors.cardNumber.message}</FieldError>}
          </FormField>
          <div className="flex gap-4">
            <FormField>
              <Label>Expiration</Label>
              <div className="flex items-center gap-2">
                <Input
                  className="w-14"
                  inputMode="tel"
                  pattern="[0-9]*"
                  maxLength={2}
                  type="text"
                  {...register('cardExpirationMonth')}
                />
                <div className="text-3xl font-extralight">{` / `}</div>
                <Input
                  className="w-14"
                  inputMode="tel"
                  pattern="[0-9]*"
                  maxLength={2}
                  type="text"
                  {...register('cardExpirationYear')}
                />
              </div>
              {(errors.cardExpirationMonth || errors.cardExpirationYear) && (
                <FieldError>{errors.cardExpirationMonth?.message || errors.cardExpirationYear?.message}</FieldError>
              )}
            </FormField>

            <FormField>
              <div className="flex gap-3">
                <Label>CVC</Label>
                <HiOutlineQuestionMarkCircle />
              </div>
              <Input
                inputMode="tel"
                pattern="[0-9]*"
                type="text"
                maxLength={4}
                {...register('cardCvv')}
              />
              {errors.cardCvv && <FieldError>{errors.cardCvv.message}</FieldError>}
            </FormField>
          </div>
          <div className="border-t border-gray-100 my-4"></div>
          <div className="flex gap-4 justify-end">
            <GhostButton type="button">Cancel order</GhostButton>
            <PrimaryButton type="submit">Complete order</PrimaryButton>
          </div>
        </div>
      </section>
    </form>
  )
}
