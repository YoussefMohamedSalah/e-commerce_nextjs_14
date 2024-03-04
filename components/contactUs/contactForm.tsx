"use client";
import { useForm } from "react-hook-form";
import cn from "classnames";

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  className?: string;
  tContact: any;
}

const ContactForm: React.FC<ContactFormProps> = ({ className, tContact }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<
    ContactFormValues
  >();

  async function onSubmit(data: ContactFormValues) {
    try {
      const signUpResponse = await fetch(
        `${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/contact-us`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(data)
        }
      );

      if (signUpResponse.ok) {
      } else {
        console.error("Error:", signUpResponse.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className={cn(className)}>
      <form
        className="contact-us-form text-black"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="row">
          <div className="col-12">
            <div className="input-wrapper">
              <label className="fz16 fw-500  d-block mb-2">
                {tContact.name}
              </label>
              <input
                type="text"
                className="form-control mb24"
                placeholder={`${tContact.your_name}`}
                {...register("name")}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="input-wrapper">
              <label className="fz16 fw-500  d-block mb-2">
                {tContact.email}
              </label>
              <input
                type="email"
                className="form-control mb24"
                placeholder={`${tContact.your_email}`}
                {...register("email")}
              />
            </div>
          </div>

          <div className="col-12">
            <div className="input-wrapper">
              <label className="fz16 fw-500  d-block mb-2">
                {tContact.subject}
              </label>
              <input
                type="text"
                className="form-control mb24"
                placeholder={`${tContact.message_title}`}
                {...register("subject")}
              />
            </div>
          </div>

          <div className="col-12">
            <div className="input-wrapper">
              <label className="fz16 fw-500  d-block mb-2">
                {tContact.message}
              </label>

              <textarea
                className="form-control mb24 w-100"
                placeholder={`${tContact.what_to_say}`}
                {...register("message")}
              />
            </div>
          </div>
          <div className="col-12">
            <input
              type="submit"
              value={`${tContact.submit}`}
              className="btn btn-primary px-5 py-3"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
