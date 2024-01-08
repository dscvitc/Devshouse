"use client";

import React from "react";
import { Button } from "./ui/button";
import { Form, FormControl, FormItem, FormField, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Space_Grotesk } from "next/font/google";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";

const space_grotesk = Space_Grotesk({
  weight: ["400", "700"],
  subsets: ["latin-ext"],
});

const formSchema = z.object({
  Name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  Email: z.string().email(),
  Subject: z.string(),
  Message: z.string(),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name: "",
      Email: "",
      Subject: "",
      Message: "",
    },
  });

  const { toast } = useToast();

  const URL_ENDPOINT = process.env.SCRIPT_ENDPOINT;

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    const formElement: HTMLElement | null =
      document.getElementById("contact-form");
    console.log(formElement);
    if (formElement instanceof HTMLFormElement && URL_ENDPOINT) {
      const formDatab = new FormData(formElement);
      fetch(URL_ENDPOINT, {
        method: "POST",
        body: formDatab,
      })
        .then((res) => {
          console.log(res);
          toast({
            title: "Success",
            description: "Your message has been sent.",
          });
        })
        .then((data) => {})
        .catch((error) => {
          console.error(error);
          toast({
            title: "Failed",
            description: "Could not send the message! Retry...",
          });
        });
    } else {
      console.error("Form element not found or is not of type HTMLFormElement");
    }
  };

  return (
    <section
      id="contact"
      className="flex h-screen w-auto snap-center flex-col items-center justify-center text-white">
      <h1 className={`${space_grotesk.className} font-extrabold text-5xl mb-5`}>
        Contact Us
      </h1>
      <div
        className={`flex flex-col md:flex-row ${space_grotesk.className} min-h-[500px] max-w-[1000px]`}>
        <div className="bg-black rounded-t-3xl md:rounded-tr-none md:rounded-s-3xl text-white flex flex-col gap-5 items-start p-6 md:p-10 w-full md:w-1/2">
          <div>
            <h2 className="text-3xl font-bold">Have A Question?</h2>
            <h2 className="text-3xl font-bold">Get In Touch!</h2>
          </div>
          <p className="text-lg font-light">
            Thank you for visiting our website! If you have any questions or
            queries, drop us a message, and we{`'`}ll get back to you promptly.
            Your time is valuable to us!
          </p>
          <div>
            <ul className="list-none flex flex-col gap-3">
              <li className="flex gap-5 items-center justify-start">
                <Phone size={32}></Phone>
                <div>
                  <p>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="tel:+91 9341405360">
                      +91 9341405360
                    </a>
                  </p>
                  <p>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="tel:+91 9003065894">
                      +91 9003065894
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex gap-5 items-center justify-start">
                <Mail size={32}></Mail>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:devshouse.tech@gmail.com">
                  devshouse.tech@gmail.com
                </a>
              </li>
              <li className="flex gap-5 items-center justify-start">
                <MapPin size={32}></MapPin>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps/place/Vellore+Institute+of+Technology+Chennai+Campus+(VIT+Chennai)/@12.840641,80.1508534,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5259af8e491f67:0x944b42131b757d2d!8m2!3d12.840641!4d80.1534283!16s%2Fg%2F11gdxsbhgz?entry=tts">
                  VIT, Chennai
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col bg-white rounded-b-3xl md:rounded-bl-none md:rounded-e-3xl p-6 md:p-10 w-full md:w-3/4 md:mt-0">
          <Form {...form}>
            <form
              id="contact-form"
              onSubmit={form.handleSubmit(handleSubmit)}
              className="flex flex-col gap-5">
              <FormField
                control={form.control}
                name="Name"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="text-black"
                          placeholder="Your Name"
                          type="name"
                          {...field}></Input>
                      </FormControl>
                      <FormMessage></FormMessage>
                    </FormItem>
                  );
                }}></FormField>
              <FormField
                control={form.control}
                name="Email"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="text-black"
                          placeholder="Your Email"
                          type="email"
                          {...field}></Input>
                      </FormControl>
                      <FormMessage></FormMessage>
                    </FormItem>
                  );
                }}></FormField>
              <FormField
                control={form.control}
                name="Subject"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="text-black"
                          placeholder="Subject"
                          type="subject"
                          {...field}></Input>
                      </FormControl>
                      <FormMessage></FormMessage>
                    </FormItem>
                  );
                }}></FormField>
              <FormField
                control={form.control}
                name="Message"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          className="text-black resize"
                          placeholder="Message"
                          {...field}></Textarea>
                      </FormControl>
                      <FormMessage></FormMessage>
                    </FormItem>
                  );
                }}></FormField>
              <Button type="submit" variant="default">
                <span className={`${space_grotesk.className}`}>Send</span>
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
