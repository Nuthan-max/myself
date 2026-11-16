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
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        <SectionHeading
          badge="09 // CONTACT &amp; DISPATCH"
          title="Let's connect &amp;"
          highlightWord="Collaborate."
          subtitle="Open to technical collaboration, hackathon invitations, and academic research discussions."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            alignItems: 'flex-start'
          }}
        >
          {/* Left Column: Direct Correspondence */}
          <div style={{ gridColumn: 'span 12' }} className="hero-left-col">
            <h3
              className="display-title"
              style={{
                color: '#F4F5F8',
                marginBottom: '1rem',
                fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)'
              }}
            >
              Have an engineering challenge or project in mind?
            </h3>

            <p
              className="body-lead"
              style={{
                fontSize: '1.05rem',
                color: '#8E94A0',
                marginBottom: '1.75rem',
                lineHeight: 1.65
              }}
            >
              Feel free to reach out directly via email or connect through LinkedIn. I respond promptly to project inquiries, research discussions, and hackathon team invites.
            </p>

            {/* Email Copy Card */}
            <div
              style={{
                padding: '1.25rem 1.5rem',
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.75rem'
              }}
            >
              <div>
                <span className="label-mono" style={{ fontSize: '0.68rem', color: '#8E94A0' }}>
                  DIRECT INBOX
                </span>
                <div
                  className="font-interface"
                  style={{ fontSize: '1.1rem', fontWeight: 700, color: '#D4FF00', marginTop: '0.2rem' }}
                >
                  {personalData.socials.email}
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn-secondary"
                style={{ padding: '0.55rem 1.15rem', fontSize: '0.82rem' }}
              >
                {copied ? <Check size={14} color="#D4FF00" /> : <Copy size={14} />}
                {copied ? 'Copied' : 'Copy Address'}
              </button>
            </div>

            {/* Social Channels */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="tag-tech"
                style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
              >
                <Github size={16} />
                GitHub Profile
                <ArrowUpRight size={13} />
              </a>

              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="tag-tech"
                style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
              >
                <Linkedin size={16} />
                LinkedIn Network
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Right Column: Dispatch Form */}
          <div style={{ gridColumn: 'span 12' }} className="hero-right-col">
            <div
              className="spotlight-card"
              style={{
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                backgroundColor: 'var(--bg-card)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-color)'
              }}
            >
              <h4 className="heading-card" style={{ fontSize: '1.25rem', marginBottom: '0.4rem', color: '#F4F5F8' }}>
                Dispatch a Message
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#8E94A0', marginBottom: '1.25rem' }}>
                Send a direct note regarding project collaboration, technical review, or research.
              </p>

              {formSubmitted ? (
                <div
                  style={{
                    padding: '2rem 1.25rem',
                    textAlign: 'center',
                    backgroundColor: 'rgba(212, 255, 0, 0.08)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid rgba(212, 255, 0, 0.3)'
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: '#D4FF00',
                      color: '#08090C',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 0.85rem'
                    }}
                  >
                    <Check size={22} />
                  </div>
                  <h5 className="heading-card" style={{ fontSize: '1.1rem', marginBottom: '0.35rem', color: '#F4F5F8' }}>
                    Message Dispatched Successfully
                  </h5>
                  <p style={{ fontSize: '0.85rem', color: '#8E94A0' }}>
                    Thank you, {formData.name}. Your note has been queued and I will respond shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="btn-secondary"
                    style={{ marginTop: '1rem', padding: '0.45rem 1.15rem', fontSize: '0.8rem' }}
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label className="label-mono" style={{ display: 'block', marginBottom: '0.35rem', fontSize: '0.68rem', color: '#8E94A0' }}>
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Alex Vance / Hackathon Organizer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.95rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        backgroundColor: '#090B0E',
                        fontFamily: 'inherit',
                        fontSize: '0.88rem',
                        outline: 'none',
                        color: '#F4F5F8'
                      }}
                    />
                  </div>

                  <div>
                    <label className="label-mono" style={{ display: 'block', marginBottom: '0.35rem', fontSize: '0.68rem', color: '#8E94A0' }}>
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@university.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.95rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        backgroundColor: '#090B0E',
                        fontFamily: 'inherit',
                        fontSize: '0.88rem',
                        outline: 'none',
                        color: '#F4F5F8'
                      }}
                    />
                  </div>

                  <div>
                    <label className="label-mono" style={{ display: 'block', marginBottom: '0.35rem', fontSize: '0.68rem', color: '#8E94A0' }}>
                      MESSAGE OR INQUIRY
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Regarding project collaboration, embedded systems review, or hackathon..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.95rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        backgroundColor: '#090B0E',
                        fontFamily: 'inherit',
                        fontSize: '0.88rem',
                        outline: 'none',
                        color: '#F4F5F8',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <MagneticButton
                    type="submit"
                    className="btn-primary"
                    style={{
                      width: '100%',
                      padding: '0.85rem',
                      fontSize: '0.9rem'
                    }}
                  >
                    <Send size={15} />
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
