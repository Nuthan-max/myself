import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { personalData } from '../data/personal';
import { Mail, Github, Linkedin, Send, Copy, Check, ArrowUpRight, Sparkles } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        <SectionHeading
          badge="09 // GET IN TOUCH"
          title="Let's connect &amp;"
          italicWord="Collaborate."
          subtitle="Open to learning, collaboration and meaningful technical projects. Whether inquiring about circuit design, hackathon teamwork, or academic research, let's start a dialogue."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'flex-start'
          }}
        >
          {/* Left Column: Big Editorial Typography & Direct Email Box */}
          <div style={{ gridColumn: 'span 12' }} className="hero-left-col">
            <h3
              className="display-title"
              style={{
                color: 'var(--text-primary)',
                marginBottom: '1.25rem'
              }}
            >
              Have an idea or engineering challenge in mind?
            </h3>

            <p
              className="body-lead"
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-secondary)',
                marginBottom: '2rem'
              }}
            >
              Feel free to reach out directly via email or connect through LinkedIn. I respond promptly to project inquiries, research discussions, and hackathon invites.
            </p>

            {/* Email Copy Card */}
            <div
              style={{
                padding: '1.5rem',
                backgroundColor: 'var(--bg-primary)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2rem'
              }}
            >
              <div>
                <span className="label-mono" style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                  DIRECT INBOX
                </span>
                <div
                  className="font-interface"
                  style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.2rem' }}
                >
                  {personalData.socials.email}
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn-secondary"
                style={{ padding: '0.65rem 1.25rem', fontSize: '0.84rem' }}
              >
                {copied ? <Check size={16} color="#25825d" /> : <Copy size={16} />}
                {copied ? 'Copied to Clipboard' : 'Copy Address'}
              </button>
            </div>

            {/* Social Channels */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="tag-tech"
                style={{ padding: '0.75rem 1.35rem', fontSize: '0.9rem' }}
              >
                <Github size={18} />
                GitHub Profile
                <ArrowUpRight size={14} />
              </a>

              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="tag-tech"
                style={{ padding: '0.75rem 1.35rem', fontSize: '0.9rem' }}
              >
                <Linkedin size={18} />
                LinkedIn Network
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Dispatch Form */}
          <div style={{ gridColumn: 'span 12' }} className="hero-right-col">
            <div
              className="spotlight-card"
              style={{
                padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-color)'
              }}
            >
              <h4 className="heading-card" style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>
                Send a Direct Message
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Dispatch a message directly to my academic and project correspondence.
              </p>

              {formSubmitted ? (
                <div
                  style={{
                    padding: '2.5rem 1.5rem',
                    textAlign: 'center',
                    backgroundColor: 'rgba(215, 241, 113, 0.15)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--accent-lime)'
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--text-primary)',
                      color: 'var(--accent-lime)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1rem'
                    }}
                  >
                    <Check size={24} />
                  </div>
                  <h5 className="heading-card" style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>
                    Message Dispatched Successfully
                  </h5>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    Thank you, {formData.name}. I have received your message and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="btn-secondary"
                    style={{ marginTop: '1.25rem', padding: '0.5rem 1.25rem', fontSize: '0.82rem' }}
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label className="label-mono" style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.72rem' }}>
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Jane Doe / Recruiter Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-color)',
                        backgroundColor: 'var(--bg-primary)',
                        fontFamily: 'inherit',
                        fontSize: '0.92rem',
                        outline: 'none',
                        color: 'var(--text-primary)'
                      }}
                    />
                  </div>

                  <div>
                    <label className="label-mono" style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.72rem' }}>
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane.doe@university.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-color)',
                        backgroundColor: 'var(--bg-primary)',
                        fontFamily: 'inherit',
                        fontSize: '0.92rem',
                        outline: 'none',
                        color: 'var(--text-primary)'
                      }}
                    />
                  </div>

                  <div>
                    <label className="label-mono" style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.72rem' }}>
                      MESSAGE OR INQUIRY
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Regarding project collaboration, technical review, or research inquiries..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-color)',
                        backgroundColor: 'var(--bg-primary)',
                        fontFamily: 'inherit',
                        fontSize: '0.92rem',
                        outline: 'none',
                        color: 'var(--text-primary)',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <MagneticButton
                    type="submit"
                    className="btn-primary"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      fontSize: '0.94rem'
                    }}
                  >
                    <Send size={16} />
                    Dispatch Message
                  </MagneticButton>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
