import React from 'react'
import './Contact.css'
import { useRef, useState } from 'react'
import emailjs from "@emailjs/browser";

const Contact = () => {

    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_56hs1q3","template_n74k7n5",form.current,"_csRy6vHqh6at3Bbs")
                    .then(
                (result) => {
                    console.log(result.text);
                    setDone(true);
                    form.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div className='contact'>
            <div className='c-left'>
                <div className='awesome'>
                    <span>Get in Touch</span>
                    <span>Contact me</span>
                    <div
                        className="blur s-blur1"
                        style={{ background: "#ABF1FF94" }}
                    ></div>
                </div>
            </div>
            <div className='c-right'>
                <form  ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Message" />
                    <input type="submit" value="Send" className="button" />
                    <span>{done && "Thanks for Contacting me!"}</span>
                    <div
                        className="blur c-blur1"
                        style={{ background: "var(--purple)" }}
                    ></div>
                </form>
            </div>
        </div>
    )
}

export default Contact
