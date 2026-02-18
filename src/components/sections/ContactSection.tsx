import ContactInfo from '../others/ContactInfo';
import ContactForm from '../others/SendMessageForm';

export function ContactSection() {
  return (
    <div className="w-full max-w-7xl px-4 sm:px-6">
      <div className="mx-auto flex h-full w-full flex-col gap-8 lg:flex-row lg:gap-10">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}
