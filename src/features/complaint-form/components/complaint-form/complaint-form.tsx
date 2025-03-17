'use client';

import { useState } from 'react';

import { AlertBanner } from '@/features/complaint-form/components/alert-banner';
import { SuccessBanner } from '@/features/complaint-form/components/sucess-banner';
import { sendComplaintForm } from '@/features/complaint-form/services/send-complaint-form';

import { Controller, useForm, zodResolver } from '@/shared/lib/forms';
import { notifyError } from '@/shared/lib/notify';
import { cn } from '@/shared/lib/styles';
import { Button } from '@/shared/ui/kit/button';
import { Divider } from '@/shared/ui/kit/divider';
import { Input } from '@/shared/ui/kit/input';
import { RadioGroup } from '@/shared/ui/kit/radio-group';
import { Select } from '@/shared/ui/kit/select';
import { Textarea } from '@/shared/ui/kit/textarea/textarea';
import { TimePicker } from '@/shared/ui/kit/time-picker';
import { Title } from '@/shared/ui/kit/title';

import { ComplaintSchema, complaintSchema } from '../../lib/complaint.schema';
import st from './complaint-form.module.css';

export function ComplaintForm() {
  const [isSubmit, setIsSubmit] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
    watch,
    reset,
  } = useForm<ComplaintSchema>({
    resolver: zodResolver(complaintSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      complaint: '',
      additionalInfo: '',
      dayPart: 'pm',
      subject: '',
      isContact: 'false',
      time: '',
      date: '',
      email: '',
    },
  });

  console.log(errors);

  const onSubmit = handleSubmit(async (data: ComplaintSchema) => {
    const res = await sendComplaintForm(data);

    if (res?.status === 'OK') {
      setIsSubmit(true);
      reset();
    } else {
      console.error('@error res', res);
      notifyError('Failed to send the message. Try again a little later.');
    }
  });

  const isContact = watch('isContact');

  return (
    <section className={st.sectionLayout}>
      <form className={st.layout} onSubmit={onSubmit}>
        <Title level={3} weight={600}>
          Submit your complaint confidentially
        </Title>
        <section className={st.formLayout}>
          <Title level={5} weight={600} className={st.dateTitle}>
            Date and time of issue:
          </Title>
          <section>
            <section className={st.row}>
              <Controller
                name="date"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    {...field}
                    type="date"
                    size="sm"
                    error={error?.message}
                    hideErrorText
                  />
                )}
              />
              <Controller
                name="time"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TimePicker {...field} size="sm" error={error?.message} />
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
                    textSize="sm"
                    {...field}
                  />
                )}
              />
            </section>
            <span className={cn(st.annotation, st.inputAnnotation)}>
              Estimated dates are acceptable.
            </span>
            <Divider className={st.divider} />
          </section>
          <section>
            <Title level={5} weight={600} className={st.dateTitle}>
              Subject of complaint
            </Title>
            <Controller
              name="subject"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Input
                  {...field}
                  placeholder="Subject of complaint"
                  error={error?.message}
                  size="sm"
                  hideErrorText
                />
              )}
            />
            <Divider className={st.divider} />
          </section>
          <section className={st.fullWidthRow}>
            <Title level={5} weight={600} className={st.dateTitle}>
              Your complaint
            </Title>
            <Controller
              name="complaint"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Textarea
                  {...field}
                  placeholder="Provide as many details as possible"
                  error={error?.message}
                  size="sm"
                  fullWidth
                  resizable
                />
              )}
            />
            <span className={cn(st.annotation, st.inputAnnotation)}>
              Provide as many details as possible.
            </span>
            <Divider className={st.divider} />
          </section>
          <section className={st.fullWidthRow}>
            <Title level={5} weight={600} className={st.dateTitle}>
              Your complaint
            </Title>
            <Controller
              name="additionalInfo"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Textarea
                  {...field}
                  placeholder="Please give us as much information as you can"
                  error={error?.message}
                  size="sm"
                  fullWidth
                  resizable
                />
              )}
            />
            <Divider className={st.divider} />
          </section>
          <section>
            <section style={{ marginBottom: isContact ? '20px' : '0' }}>
              <Controller
                name="isContact"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    align="right"
                    className={st.radioLayout}
                    itemClassName={st.item}
                    indicatorSize="md"
                    options={[
                      { label: 'Yes, I want your feedback.', value: 'true' },
                      { label: 'No feedback is needed', value: 'false' },
                    ]}
                    reverseOrder
                    defaultValue="false"
                    onChange={field.onChange}
                  />
                )}
              />
            </section>
            {isContact === 'true' ? (
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    {...field}
                    placeholder="youremail@example.com"
                    error={error?.message}
                    size="sm"
                  />
                )}
              />
            ) : null}
            <Divider className={st.divider} />
          </section>
          <Button
            variant="orange"
            type="submit"
            className={st.btnPadding}
            disabled={isSubmitting}
            fullWidth
          >
            {isSubmitting ? 'Submitting...' : 'Submit complaint'}
          </Button>
        </section>
        <span className={st.annotation}>
          *All information you provide is confidential. The company will not
          collect, store, or use your data in any way. Note that if you provide
          a contact email address to get a response, we will use it for feedback
          on the complaint handling.
        </span>
      </form>
      {Object.entries(errors).length ? <AlertBanner /> : null}
      {isSubmit ? <SuccessBanner /> : null}
    </section>
  );
}
