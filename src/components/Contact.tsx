import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="outfit gradient-text"
                    >Get In Touch</motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 60 }}
                        className="section-line"
                    ></motion.div>
                </div>

                <div className="contact-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="contact-info"
                    >
                        <h3>Let's build something <span className="gradient-text">amazing</span>.</h3>
                        <p className="contact-desc">
                            I am currently looking for industrial training opportunities and
                            collaborations in tech projects.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <MapPin className="contact-icon" />
                                <span>University of Vavuniya, Sri Lanka</span>
                            </div>
                            <div className="contact-item">
                                <Mail className="contact-icon" />
                                <span>student@vau.ac.lk</span>
                            </div>
                            <div className="contact-item">
                                <Phone className="contact-icon" />
                                <span>+94 7X XXX XXXX</span>
                            </div>
                        </div>

                        <div className="social-links">
                            <motion.a whileHover={{ y: -5, scale: 1.1 }} href="#" className="social-icon glass"><Linkedin /></motion.a>
                            <motion.a whileHover={{ y: -5, scale: 1.1 }} href="#" className="social-icon glass"><Github /></motion.a>
                            <motion.a whileHover={{ y: -5, scale: 1.1 }} href="#" className="social-icon glass"><Twitter /></motion.a>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="contact-form glass"
                    >
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Your Email" />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows={4} placeholder="Your Message"></textarea>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="btn-primary w-full"
                        >Send Message</motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
