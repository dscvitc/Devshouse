"use client";

import React from "react";
import { Button } from "./ui/button";
import { Form, FormControl, FormItem, FormField, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

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
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });
  const handleSubmit = () => {};
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
                  <p>+91 9341405360</p>
                  <p>+91 9003065894</p>
                </div>
              </li>
              <li className="flex gap-5 items-center justify-start">
                <Mail size={32}></Mail>
                <p>devshouse.tech@gmail.com</p>
              </li>
              <li className="flex gap-5 items-center justify-start">
                <MapPin size={32}></MapPin>
                <p>VIT, Chennai</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col bg-white rounded-b-3xl md:rounded-bl-none md:rounded-e-3xl p-6 md:p-10 w-full md:w-3/4 md:mt-0">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="flex flex-col gap-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <Input
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
                name="email"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <Input
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
                name="subject"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <Input
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
                name="message"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          className="resize"
                          placeholder="Message"
                          {...field}></Textarea>
                      </FormControl>
                      <FormMessage></FormMessage>
                    </FormItem>
                  );
                }}></FormField>
              <Button variant="default">
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
