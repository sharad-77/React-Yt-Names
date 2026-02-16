import ContactForm from "../others/SendMessageForm";
import ContactInfo from "../others/ContactInfo";

export function ContactSection() {
  return (
      <div className="w-full max-w-7xl sm:px-6 ">
          <div className="flex flex-col gap-10 p-2 lg:flex-row h-full w-auto max-w-363">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
  );
}