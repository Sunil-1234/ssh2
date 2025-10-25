import React from 'react';
import { CONTACT_INFO } from './constants';

// Fix: Moved ContactInfoItem outside of the Contact component to prevent re-declaration on each render.
const ContactInfoItem: React.FC<{icon: React.ReactNode; title: string; children: React.ReactNode}> = ({icon, title, children}) => (
    <div className="flex items-start mb-6">
        <div className="flex-shrink-0 bg-primary/10 text-primary p-4 rounded-full">{icon}</div>
        <div className="ml-4">
            <h3 className="text-xl font-semibold text-dark">{title}</h3>
            <div className="text-secondary mt-1">{children}</div>
        </div>
    </div>
  );

const Contact: React.FC = () => {
  
  return (
    <section id="contact" className="py-20 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">Contact Us</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-secondary max-w-3xl mx-auto">
            We would love to hear from you. Please feel free to contact us with any questions or comments.
          </p>
        </div>
        
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl">
            <div className="w-full max-w-lg mx-auto animate-fade-in-up">
                <h3 className="text-2xl font-bold text-dark mb-8 text-center">Get in Touch</h3>
                <ContactInfoItem icon={<MapPinIcon />} title="Our Address">
                    <p>{CONTACT_INFO.address}</p>
                </ContactInfoItem>
                <ContactInfoItem icon={<MailIcon />} title="Email Us">
                    <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary transition-colors duration-300">{CONTACT_INFO.email}</a>
                </ContactInfoItem>
                <ContactInfoItem icon={<PhoneIcon />} title="Call Us">
                    <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors duration-300">{CONTACT_INFO.phone}</a>
                </ContactInfoItem>
            </div>
        </div>
      </div>
    </section>
  );
};

const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;


export default Contact;
