"use client";
import PageBody from "@/app/components/pagebody/pagebody";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import styles from "./contact.module.css";
import { useRef, useState } from "react";
import SocialLinks from "../components/social-links/social-links";
import MetallicButton from "../components/metallic-button/metallic-button";
import emailjs from "@emailjs/browser";

type Form = {
  name: string;
  email: string;
  message: string;
};

const serviceID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID ?? "";
const templateID = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID ?? "";
const publicKey = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY ?? "";

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<Form>({
    name: "",
    email: "",
    message: "",
  });

  function resetMessage() {
    setMessage({
      name: "",
      email: "",
      message: "",
    });
  }

  function sendMessage() {
    if (!message.name || !message.email || !message.message) {
      alert("Please fill out all fields");
      return;
    }

    if (!form.current) {
      alert("Form reference is missing.");
      return;
    }

    emailjs.sendForm(serviceID, templateID, form.current, { publicKey }).then(
      () => {
        alert("Message sent successfully!");
        resetMessage();
      },
      (error) => {
        console.error("Email sending error:", error);
        alert("Unable to send message. Please try again later.");
      }
    );
  }

  return (
    <PageBody title="Contact">
      <p className="text-xl">
        Send me a message below or reach out on any of my socials.
      </p>
      <SocialLinks />
      <form ref={form} className={styles.textFields}>
        <Input
          name="name"
          value={message.name}
          placeholder="Name"
          onChange={(e) => {
            setMessage((prev) => ({
              ...prev,
              name: e.target.value,
            }));
          }}
        />
        <Input
          name="email"
          value={message.email}
          placeholder="Email"
          onChange={(e) => {
            setMessage((prev) => ({
              ...prev,
              email: e.target.value,
            }));
          }}
        />
        <Textarea
          name="message"
          value={message.message}
          placeholder="Type your message here "
          onChange={(e) => {
            setMessage((prev) => ({
              ...prev,
              message: e.target.value,
            }));
          }}
        />
      </form>
      <MetallicButton onClick={sendMessage}>Send</MetallicButton>
    </PageBody>
  );
}