import { useForm, ValidationError } from "@formspree/react";
import linkedin from "../assets/linkedin.svg";
import git from "../assets/git.svg";
import twitter from "../assets/twitter.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Loading from "./Loading";

const Contact = () => {
    const refHeading = useRef(null);
    const inViewHeading = useInView(refHeading);
    const refContent = useRef(null);
    const inViewContent = useInView(refContent);

    const [show, setShow] = useState(false);
    // const formId = import.meta.env.VITE_FORM_ID;
    const [state, handleSubmit] = useForm("xpzgodpa");
    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        message: "",
    });

    const variants1 = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (state.succeeded) {
            setShow(true);
            setFormData({
                email: "",
                subject: "",
                message: "",
            });
        }
    }, [state.succeeded]);

    return (
        <section className=" sm:px-8 pt-[80px]" id="contact">
            <footer className="flex items-center p-6 text-center">
                <span className="w-full text-textPara">
                    All Rights Reserved © {new Date().getFullYear()} - Vinay Gangadhara
                </span>
            </footer>
        </section>
    );
};

export default Contact;