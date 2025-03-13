'use client';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { useCountryCode } from '@/shared/lib/hooks';
import { notifyError, notifySuccess } from '@/shared/lib/notify';
import { Button } from '@/shared/ui/kit/button';
import { Input } from '@/shared/ui/kit/input';
import { Loader } from '@/shared/ui/kit/loader';
import { PhoneInput } from '@/shared/ui/kit/phone-input';
import { Text } from '@/shared/ui/kit/text';
import { Textarea } from '@/shared/ui/kit/textarea/textarea';
import { Title } from '@/shared/ui/kit/title';

import st from './contact-form.module.css';
import { ContactSchema, contactSchema } from './schema/contact.schema';
import { sendEmail } from './services/send-email.action';

export function ContactForm() {
  const countryCode = useCountryCode();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      phone: '',
      email: '',
      name: '',
    },
  });

  const onSubmit = handleSubmit(async (data: ContactSchema) => {
    const res = await sendEmail({
      name: data.name,
      message: data.message,
      email: data.email,
      phone: data.phone,
    });

    if (res?.status === 'OK') {
      notifySuccess('Your message was sent successfully.');
      reset();
    } else {
      console.error('@error res', res);
      notifyError('Failed to send the message. Try again a little later.');
    }
  });

  return (
    <section className={st.layout}>
      <Title level={3} weight={700}>
        Did not find the answer?
      </Title>
      <Text weight={500} size="base">
        Ask the Clarity Global team!
      </Text>
      <form onSubmit={onSubmit}>
        <section className={st.inputInfo}>
          <div className={st.inputs}>
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Input {...field} placeholder="Name*" error={error?.message} />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Input {...field} placeholder="Email*" error={error?.message} />
              )}
            />
            <Controller
              name="phone"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <PhoneInput
                  countryCode={countryCode}
                  placeholder="Number*"
                  onChange={field.onChange}
                  error={error?.message}
                />
              )}
            />
          </div>
          <Controller
            name="message"
            control={control}
            render={({ field }) => <Textarea {...field} />}
          />
        </section>
        <Button
          variant="orange"
          type="submit"
          size="md"
          disabled={isSubmitting}
        >
          {isSubmitting ? <Loader /> : 'Sign Up'}
        </Button>
      </form>
    </section>
  );
}
