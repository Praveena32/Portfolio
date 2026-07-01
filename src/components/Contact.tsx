import React from 'react';
import { Mail, Linkedin, Github, Facebook, Send, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom icons for Behance & Docker
const BehanceIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 13h-5c0 1.103.897 2 2 2 1.103 0 2-.897 2-2zm-2-4h-1c-1.103 0-2 .897-2 2h5c0-1.103-.897-2-2-2zM9 13H5v2h4c1.103 0 2-.897 2-2s-.897-2-2-2zm0-6H5v2h4c1.103 0 2-.897 2-2s-.897-2-2-2zM12 3H2v18h20V3H12zm2 14h-2.5l-2.5-3.5L6.5 17H4v-2h2.5L9 11.5 6.5 8H4V6h2.5l2.5 3.5L11.5 6H14v2h-2.5L9 11.5l2.5 3.5H14v2zm6-4h-5c0-2.206 1.794-4 4-4s4 1.794 4 4c0 1.053-.408 2.01-.1.1z" />
    </svg>
);

const DockerIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.983 11.078h2.119v-2.13h-2.119v2.13zm-2.937 0h2.119v-2.13h-2.119v2.13zm-2.937 0h2.12v-2.13h-2.12v2.13zm-2.937 0h2.119v-2.13H5.172v2.13zm-2.936 0h2.119v-2.13H2.236v2.13zm2.936-2.936h2.119v-2.13h-2.119v2.13zm2.937 0h2.12v-2.13h-2.12v2.13zm2.937 0h2.119v-2.13h-2.119v2.13zm2.937 0h2.119v-2.13h-2.119v2.13zm-5.874-2.936h2.12v-2.13h-2.12v2.13zM21.847 8.5c-.244-.092-.767-.323-1.636-.264-.079-.224-.224-.46-.427-.665-.589-.597-1.579-.537-1.956-.518-.099-.517-.458-1.503-1.439-2.029-.982-.526-2.146-.224-2.585-.099-.189-.593-.654-1.408-1.666-1.854-1.246-.55-2.593-.079-3.056.12v11.161c.007.039.022.079.039.118a7.868 7.868 0 0 0 5.437 4.134c4.086 1.054 6.756-1.536 7.426-2.316.59-.686.993-1.603.993-2.671 0-1.677-.732-3.83-1.129-4.524-.037-.066-.098-.109-.17-.118-.073-.008-.145.02-.191.077-.428.531-1.02.946-1.743.946-.867 0-1.391-.659-1.391-1.5 0-1.139.731-1.782 1.341-2.176.082-.053.111-.157.07-.245-.252-.533-.769-.877-1.353-.877-.925 0-1.558.74-1.558 1.637 0 1.01.621 1.706 1.328 2.039.079.037.118.128.093.21-.299 1.002-1.057 1.541-1.897 1.541-.853 0-1.458-.592-1.458-1.528 0-.962.628-1.657 1.329-1.996.082-.039.123-.131.096-.217-.184-.6-1.218-.616-1.32-.616-.838 0-1.428.618-1.428 1.48 0 .866.574 1.517 1.256 1.838.077.036.115.121.095.203-.263 1.085-1.066 1.673-1.928 1.673-.812 0-1.439-.582-1.439-1.503 0-.918.599-1.597 1.265-1.936.082-.041.12-.132.096-.217-.187-.665-1.229-.686-1.332-.686-.816 0-1.402.613-1.402 1.453 0 .838.563 1.47 1.229 1.791.077.037.115.121.094.204-.271 1.078-1.07 1.666-1.92 1.666-.849 0-1.442-.617-1.442-1.529 0-.927.607-1.611 1.278-1.95.081-.041.12-.132.095-.218-.184-.666-1.229-.686-1.332-.686-.816 0-1.402.613-1.402 1.453 0 .838.563 1.47 1.229 1.791.077.037.115.121.094.204-.271 1.078-1.07 1.666-1.92 1.666-.849 0-1.442-.617-1.442-1.529 0-.927.607-1.611 1.278-1.95.081-.041.12-.132.095-.218-.2-.724-1.32-.656-1.378-.656h-.146c-.63 0-1.238.455-1.238 1.157 0 .809.585 1.42 1.246 1.74.077.037.116.122.095.205-.289 1.124-1.124 1.733-1.996 1.733-.809 0-1.427-.577-1.427-1.488 0-.922.618-1.606 1.298-1.944.081-.04.12-.132.095-.217z"/>
    </svg>
);

const Contact: React.FC = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-split-container">
                {/* Left side: Video Background */}
                <div className="contact-visual">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="contact-video"
                    >
                        <source src="/Video Project.mp4" type="video/mp4" />
                    </video>
                    <div className="video-overlay"></div>
                    <div className="cv-download-wrapper">
                        <motion.a
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href="/Praveena_Buddhini_Master_CV.pdf"
                            download="Praveena Buddhini Master CV.pdf"
                            className="btn-cv-download"
                        >
                            <FileText size={20} />
                            Download CV
                        </motion.a>
                    </div>
                </div>

                {/* Right side: Content Block (Compact) */}
                <div className="contact-content-block">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                        viewport={{ once: true }}
                        className="contact-glass-card"
                    >
                        <h2 className="outfit contact-title">Let's Build Something Great</h2>
                        <p className="contact-subtitle">
                            Open to industry internships, research opportunities, collaborations
                            and projects in AI/ML, full-stack development, and UI/UX design.
                        </p>
                        <a href="mailto:mpbkalpana22@gmail.com" className="contact-email">
                            mpbkalpana22@gmail.com
                        </a>

                        <div className="social-grid">
                            <motion.a whileHover={{ y: -5 }} href="https://www.linkedin.com/in/praveenabuddhini/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="social-link"><Linkedin size={24} /></motion.a>
                            <motion.a whileHover={{ y: -5 }} href="https://github.com/Praveena32" target="_blank" rel="noopener noreferrer" title="GitHub" className="social-link"><Github size={24} /></motion.a>
                            <motion.a whileHover={{ y: -5 }} href="mailto:mpbkalpana22@gmail.com" title="Email" className="social-link"><Mail size={24} /></motion.a>
                            <motion.a whileHover={{ y: -5 }} href="https://www.facebook.com/share/14fWjHoobdV/" title="Facebook" className="social-link" target="_blank" rel="noopener noreferrer"><Facebook size={24} /></motion.a>
                            <motion.a whileHover={{ y: -5 }} href="https://www.behance.net/praveenbk2002" title="Behance" className="social-link" target="_blank" rel="noopener noreferrer"><BehanceIcon /></motion.a>
                            <motion.a whileHover={{ y: -5 }} href="https://hub.docker.com/u/praveenabk" title="Docker Hub" className="social-link" target="_blank" rel="noopener noreferrer"><DockerIcon /></motion.a>
                        </div>

                        <div className="contact-actions">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="mailto:mpbkalpana22@gmail.com"
                                className="btn-email-me"
                            >
                                <Send size={20} />
                                Email Me
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://www.linkedin.com/in/praveenabuddhini/"
                                className="btn-linkedin-connect"
                            >
                                <Linkedin size={20} />
                                Connect on LinkedIn
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
