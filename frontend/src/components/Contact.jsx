import { useState } from 'react';
import { portfolioAPI } from '../services/api';
import '../App.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await portfolioAPI.submitContact(formData);
            if (response.success) {
                setSubmitStatus({ type: 'success', message: response.message });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSubmitStatus({ type: 'error', message: response.message || 'Something went wrong' });
            }
        } catch (error) {
            setSubmitStatus({ 
                type: 'error', 
                message: error.response?.data?.message || 'Error sending message. Please try again later.' 
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Contact Me</h2>
                <div className="contact-content">
                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            {submitStatus && (
                                <div className={`submit-message ${submitStatus.type}`}>
                                    {submitStatus.message}
                                </div>
                            )}
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    placeholder="Your Name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="Your Email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows="5" 
                                    placeholder="Your Message" 
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="btn btn-primary btn-large"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                    <div className="contact-info">
                        <div className="contact-card">
                            <i className="fas fa-envelope"></i>
                            <h3>Email</h3>
                            <p>your.email@example.com</p>
                        </div>
                        <div className="contact-card">
                            <i className="fas fa-phone"></i>
                            <h3>Phone</h3>
                            <p>+1 (234) 567-8900</p>
                        </div>
                        <div className="contact-card">
                            <i className="fas fa-map-marker-alt"></i>
                            <h3>Location</h3>
                            <p>Your City, Country</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;


