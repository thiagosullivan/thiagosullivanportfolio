import Form from "@/components/Form";
// import { sendMail } from "@/lib/mail";
import { HomeIcon, MailIcon, PhoneCall } from "lucide-react";

const Contact = () => {

    const send = async () => {
        "use server"
        await sendMail({to: "thiago.sullivan.dev@gmail.com", name: "Thiago", subject: "Test Mail", body:`<h1>Hello World</h1>`})
    }
    
    return (
        <section>
            <div className="container mx-auto">
                {/* text & illustration */}
                <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
                    {/* text */}
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-x-4">
                            <span className="w-[30px] h-[2px] bg-primary text-lg mb-4"></span>
                            Say Hello 👋
                        </div>
                        <h1 className="h1 max-w-md mb-8">Let's Work Together.</h1>
                        <p className="subtitle max-w-[400px]">You can contact me however you prefer. I'll answer as soon as possible!</p>
                    </div>
                    {/* illustration */}
                    <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat">
                    </div>
                </div>                
                {/* info text & form */}
                <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
                    {/* info text */}
                    <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
                        {/* mail */}
                        <div className="flex items-center gap-x-8">
                            <MailIcon size={18} className="text-primary" />
                            <div>thiago.sullivan.dev@gmail.com</div>
                        </div>
                        {/* address */}
                        <div className="flex items-center gap-x-8">
                            <HomeIcon size={18} className="text-primary" />
                            <div>Londrina, Paraná - Brazil</div>
                        </div>
                        {/* phone */}
                        <div className="flex items-center gap-x-8">
                            <PhoneCall size={18} className="text-primary" />
                            <div>+55 (43) 99848-1727</div>
                        </div>
                        <Form send={send} />
                    </div>
                </div>

                {/* <form>
                    <button formAction={send}>Enviar</button>
                </form> */}
            </div>
        </section>
    );
}
 
export default Contact;