"use client"


import Input from '@/features/shared/components/Input';
import Textarea from '@/features/shared/components/Textarea';
import Button from '@/features/shared/components/Button';
import { Select, SelectItem } from '@/features/shared';

export const ContactForm = () => {
    return (
        <form className="bg-neutral-50 p-3 w-full rounded-xl grid gap-4 md:w-[620px] md:p-10">
          <Input label='Your name' name='name' placeholder='John Doe'/>
          <Input label='Your email' name='email' placeholder='johndoe@leadoc.com' type='email'/>
          <Select label='What do you want to talk about?' name='Topic'>
            <SelectItem>Product Feedback</SelectItem>
            <SelectItem>Report a Bug</SelectItem>
            <SelectItem>Feature Request</SelectItem>
            <SelectItem>Partnership or Collaboration</SelectItem>
            <SelectItem>General Question</SelectItem>
            <SelectItem>Other</SelectItem>
          </Select>
          <Textarea label='Give us a bit more info' name='more info' placeholder='Type your message here'/>

          <Button type='submit' isDisable={false} isDark={true} className='h-[44px] mt-3'>
            Send Message
          </Button>
        </form>
    );
};
