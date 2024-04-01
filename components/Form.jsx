"use client";

import {
  ArrowRightIcon,
  Loader2,
  MailIcon,
  MessageSquare,
  User,
} from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  console.log(userName, "USERNAME");
  console.log(email, "MAIL");
  console.log(message, "MESSAGE");

  const sendEmail = async (e) => {
      e.preventDefault();
      console.log('CLICKADO')
      
      try {
        setLoading(true);
        const response = await fetch("/api/sendEmail", {
            method: 'POST',
            body: JSON.stringify({
                userName,
                email,
                message
            })
        });
        console.log('TRY')
        console.log(await response.json());

        setUserName("")
        setEmail("")
        setMessage("")

        toast.success("E-mail enviado com sucesso!");
    } catch (error) {
        console.log(error)
        toast.error("Houve uma falha no envio do e-mail!")
    } finally {
        setLoading(false)
        console.log('FINALLY')
    }
  };

    

  return (
    <form className="flex flex-col gap-y-4" onSubmit={sendEmail}>
      {/* input */}
      <div className="relative flex items-center">
        <Input
          type="name"
          id="name"
          placeholder="Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <User className="absolute right-6" size={20} />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* textarea */}
      <div className="relative flex items-center">
        <Textarea
          placeholder="Type Your Message Here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button className="flex items-center gap-x-1 max-w-[166px]" type="submit" disabled={loading}>
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>

      
    </form>
  );
};

export default Form;
