"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { useStore } from '../../hooks/zustandHooks'
import { useCartStore } from '../../store/useCartStore';

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  );

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Ім'я має містити хоча б 2 символи",
  }),
  lastname: z.string().min(2, {
    message: "Прізвище має містити хоча б 2 символи",
  }),
  phone: z.string()
        .regex(phoneRegex, 'Не вірно введений номер телефону')
        .min(10, 'Має містити мінімум 10 символів')   
        .max(19, 'Максимальне число символів 13'),
})

function onSubmit(values) {
    console.log(values)
  }

export default function ProfileForm() {
    const basket = useStore(useCartStore, (state) => state.cart)
    const sum = basket?.reduce((acc, item) => acc + (+item.price*item.quantity), 0);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            lastname: "",
            phone: "+380",
            middlename: ""
        },
    })

  return (
    <div className="xl:max-w-[1100px] lg:max-w-[1000px] mx-auto px-3">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex gap-6 flex-col items-center lg:flex-row lg:items-start">
                <div className="flex flex-col gap-8">
                    <p className="font-bold text-base uppercase py-4 border-b-2 border-black">Оплата та доставка</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Ім'я *</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Прізвище *</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex gap-4 flex-col sm:flex-row">
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Телефон *</FormLabel>
                                    <FormControl>
                                        <Input placeholder="380(XX) XXX XX XX" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="middlename"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>По-батькові</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex gap-4 flex-col sm:flex-row">
                        <div className="flex flex-col w-full gap-4">
                            <p className="font-bold text-base uppercase pb-[16px]">Вкажіть адресу доставки</p>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a fruit" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                    <SelectItem value="grapes">Grapes</SelectItem>
                                    <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a fruit" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                    <SelectItem value="grapes">Grapes</SelectItem>
                                    <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a fruit" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                    <SelectItem value="grapes">Grapes</SelectItem>
                                    <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <p className="font-bold text-base uppercase ">Додаткова інформація</p>
                            <p className="text-xs">Примітки до замовлень (необов'язково)</p>
                            <Textarea placeholder="Додаткова інформація про замовлення" />
                            <RadioGroup defaultValue="option-one">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option-one" id="option-one" />
                                    <Label htmlFor="option-one">Доставка службою Нова пошта</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option-two" id="option-two" />
                                    <Label htmlFor="option-two">Потрібна адресна доставка</Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                </div>
                <div className="w-[320px] lg:w-3/6">
                    <Card className='px-8 pb-4 gap-4'>
                        <CardHeader className='flex-col'>
                            {basket?.map((item) => (
                                <div key={item.product_id} className="w-full flex justify-between">
                                    <p>{item.product_name} x {item.quantity}</p>
                                    <p>{item.price} грн</p>
                                </div>
                            ))}
                        </CardHeader>
                        <hr className='w-full border-black border-solid border' />
                        <CardContent>
                            <CardDescription>Підсумок</CardDescription>
                            <CardTitle>{sum}грн</CardTitle>
                        </CardContent>
                        <div className="flex items-center space-x-2">
                            <Checkbox checked id="payInput" />
                            <label
                                htmlFor="payInput"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 italic"
                            >
                               Онлайн оплата VISA / MasterCard
                            </label>
                        </div>
                        <Button type="submit">Оформити замовлення</Button>
                    </Card>
                </div>
            </form>
        </Form>
    </div>
  )
}
