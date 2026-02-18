import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { PlayButtonIcon, PhoneIcon } from '../../assets/svgs';
import Button from '../ui/Button';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name is too long'),
  email: z.string().email('Invalid email address'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/, 'Invalid phone number'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message is too long'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };

  const inputClasses =
    'focus:border-primary focus:ring-primary w-full rounded-2xl md:rounded-4xl border border-gray-200 px-3 sm:px-4 py-2.5 sm:py-3 pr-10 sm:pr-12 text-sm sm:text-base text-semibold text-black placeholder:text-black font-normal focus:ring-1 focus:outline-none transition-all duration-200 shadow-sm';

  const errorInputClasses =
    'focus:border-red-500 focus:ring-red-500 w-full rounded-2xl md:rounded-4xl border border-red-500 bg-gray-50 px-3 sm:px-4 py-2.5 sm:py-3 pr-10 sm:pr-12 text-sm sm:text-base text-semibold text-black placeholder:text-black font-normal focus:ring-1 focus:outline-none transition-all duration-200';

  const iconWrapperClasses =
    'absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 flex h-4 w-4 sm:w-5 sm:h-5 items-center justify-center pointer-events-none ';
  return (
    <div className="mx-auto flex h-full w-full max-w-xl flex-col items-center justify-center gap-4 rounded-2xl border border-gray-200 p-3 shadow-sm sm:gap-6 sm:rounded-3xl sm:p-4 sm:shadow-md md:gap-8 md:p-6 lg:p-8">
      <h2 className="px-2 text-center text-2xl font-bold text-(--font-primary-color) sm:text-3xl md:text-4xl">
        Send A Message
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:max-w-[680px flex w-full max-w-full flex-col gap-4 sm:max-w-md sm:gap-5 md:max-w-lg md:gap-6"
      >
        <div className="flex flex-col gap-1.5 sm:gap-2">
          <label className="px-1 text-xs font-medium text-(--font-secondary-color) sm:text-sm">
            Name
          </label>
          <div className="relative flex items-center">
            <input
              type="text"
              {...register('name')}
              placeholder="Mark"
              className={errors.name ? errorInputClasses : inputClasses}
            />
            <div className={iconWrapperClasses}>
              <img src={PlayButtonIcon} alt="user" className="h-full w-full" />
            </div>
          </div>
          {errors.name && <p className="px-1 text-xs text-red-500">{errors.name.message}</p>}
        </div>

        <div className="flex flex-col gap-1.5 sm:gap-2">
          <label className="px-1 text-xs font-medium text-(--font-secondary-color) sm:text-sm">
            Email
          </label>
          <div className="relative flex items-center">
            <input
              type="email"
              {...register('email')}
              placeholder="mark.lee@gmail.com"
              className={errors.email ? errorInputClasses : inputClasses}
            />
            <div className={iconWrapperClasses}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-full w-full text-black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
          </div>
          {errors.email && <p className="px-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>

        <div className="flex flex-col gap-1.5 sm:gap-2">
          <label className="px-1 text-xs font-medium text-(--font-secondary-color) sm:text-sm">
            Phone
          </label>
          <div className="relative flex items-center">
            <input
              type="tel"
              {...register('phone')}
              placeholder="+01 123 456 7890"
              className={errors.phone ? errorInputClasses : inputClasses}
            />
            <div className={iconWrapperClasses}>
              <img src={PhoneIcon} alt="phone" className="h-full w-full" />
            </div>
          </div>
          {errors.phone && <p className="px-1 text-xs text-red-500">{errors.phone.message}</p>}
        </div>

        <div className="flex flex-col gap-1.5 sm:gap-2">
          <label className="px-1 text-xs font-medium text-(--font-secondary-color) sm:text-sm">
            Message
          </label>
          <textarea
            {...register('message')}
            placeholder="Write a message"
            rows={4}
            className={
              errors.message
                ? 'w-full resize-none rounded-xl border border-red-500 bg-gray-50 px-3 py-2.5 text-sm text-black transition-all duration-200 placeholder:text-black focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none sm:rounded-2xl sm:px-4 sm:py-3 sm:text-base'
                : 'focus:border-primary focus:ring-primary w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-black transition-all duration-200 placeholder:text-black focus:ring-1 focus:outline-none sm:rounded-2xl sm:px-4 sm:py-3 sm:text-base'
            }
          />
          {errors.message && <p className="px-1 text-xs text-red-500">{errors.message.message}</p>}
        </div>

        <Button
          variant={'secondry'}
          disabled={isSubmitting}
          className="mt-2 w-full sm:w-auto sm:min-w-50 lg:w-30"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
