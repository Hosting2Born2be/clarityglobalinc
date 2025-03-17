'use client';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { Input } from '@/shared/ui/kit/input';
import { Select } from '@/shared/ui/kit/select';
import { TimePicker } from '@/shared/ui/kit/time-picker';
import { Title } from '@/shared/ui/kit/title';

import { ComplaintSchema, complaintSchema } from '../../lib/complaint.schema';
import st from './complaint-form.module.css';

export function ComplaintForm() {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = useForm<ComplaintSchema>({
    resolver: zodResolver(complaintSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      complaint: '',
      additionalInfo: '',
      dayPart: 'PM',
      subject: '',
      isContact: false,
      time: '',
      date: '',
    },
  });

  return (
    <form className={st.layout}>
      <Title level={3} weight={600}>
        Submit your complaint confidentially
      </Title>
      <section>
        <Title level={5} weight={600}>
          Date and time of issue:
        </Title>
        <section>
          <Controller
            name="date"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Input {...field} type="date" error={error?.message} />
            )}
          />
          <Controller
            name="time"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TimePicker {...field} error={error?.message} />
            )}
          />
          <Controller
            name="dayPart"
            control={control}
            render={({ field }) => (
              <Select
                options={[
                  { label: 'AM', value: 'am' },
                  { label: 'PM', value: 'pm' },
                ]}
                {...field}
              />
            )}
          />
        </section>
      </section>
    </form>
  );
}
