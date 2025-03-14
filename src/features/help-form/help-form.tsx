'use client';

import { reasons } from '@/features/help-form/data';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { useCountryCode } from '@/shared/lib/hooks';
import { Button } from '@/shared/ui/kit/button';
import { Input } from '@/shared/ui/kit/input';
import { Loader } from '@/shared/ui/kit/loader';
import { PhoneInput } from '@/shared/ui/kit/phone-input';
import { Select } from '@/shared/ui/kit/select';
import { Text } from '@/shared/ui/kit/text';
import { Textarea } from '@/shared/ui/kit/textarea/textarea';
import { Title } from '@/shared/ui/kit/title';

import st from './help-form.module.css';
import { HelpSchema, helpSchema } from './schema/help-form.schema';

export function HelpForm({
  reason = 'Cards',
}: {
  reason?: 'Cards' | 'My Account' | 'Security' | 'Assistance with Payment';
}) {
  const countryCode = useCountryCode();

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm<HelpSchema>({
    resolver: zodResolver(helpSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      phone: '',
      email: '',
      name: '',
      reason,
      message: '',
    },
  });

  const onSubmit = handleSubmit((data: HelpSchema) => {
    console.info(data);
    reset();
  });

  return (
    <section>
      <div className={st.textInfo}>
        <Title level={2}>Need help?</Title>
        <Text size="base" weight={600}>
          For any questions, please fill out this form. <br />
          Shortly we will contact you.
        </Text>
      </div>
      <form onSubmit={onSubmit}>
        <section className={st.formFields}>
          <div className={st.formInputs}>
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Input placeholder="Name*" error={error?.message} {...field} />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Input
                  placeholder="Email*"
                  type="email"
                  error={error?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="phone"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <PhoneInput
                  countryCode={countryCode}
                  placeholder="Number*"
                  error={error?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="reason"
              control={control}
              render={({ field }) => (
                <Select
                  triggerClassName={st.select}
                  options={reasons}
                  {...field}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <Textarea placeholder="Message" {...field} />
              )}
            />
          </div>
        </section>
        <Button size="md" variant="orange" type="submit">
          {isSubmitting ? <Loader /> : 'Sign Up'}
        </Button>
      </form>
    </section>
  );
}
