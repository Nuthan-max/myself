import React, { useState, useEffect, useRef } from 'react';
import { Activity, Cpu, Sliders, Zap, Play, Pause, Radio, RefreshCw } from 'lucide-react';

export default function InteractiveLabDeck() {
  const [waveType, setWaveType] = useState('sine'); // 'sine', 'square', 'fft', 'pulse'
  const [frequency, setFrequency] = useState(3.5);
  const [amplitude, setAmplitude] = useState(38);
  const [isRunning, setIsRunning] = useState(true);
  const [activePin, setActivePin] = useState(null);
  const [telemetry, setTelemetry] = useState({ vcc: '3.31V', freq: '240 MHz', temp: '38.4°C', i2c: '0x68 (MPU6050)' });

  const canvasRef = useRef(null);

  // Live Canvas Oscilloscope Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let phase = 0;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      const midY = height / 2;

      ctx.fillStyle = '#090B0E';
      ctx.fillRect(0, 0, width, height);

      // Oscilloscope Grid Lines
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      const step = 20;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Center crosshairs
      ctx.strokeStyle = 'rgba(212, 255, 0, 0.15)';
      ctx.beginPath();
      ctx.moveTo(0, midY);
      ctx.lineTo(width, midY);
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width / 2, height);
      ctx.stroke();

      if (isRunning) {
        phase += 0.05 * frequency;
      }

      // Channel 1: Primary Waveform (Electric Lime)
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = '#D4FF00';
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#D4FF00';
      ctx.beginPath();

      for (let x = 0; x < width; x++) {
        const normX = x / width;
        let y = midY;

        if (waveType === 'sine') {
          y = midY - Math.sin(normX * frequency * Math.PI * 4 + phase) * amplitude;
        } else if (waveType === 'square') {
          const raw = Math.sin(normX * frequency * Math.PI * 4 + phase);
          y = midY - (raw >= 0 ? 1 : -1) * amplitude;
        } else if (waveType === 'fft') {
          // Spectral harmonics simulation
          const h1 = Math.sin(normX * 8 + phase * 0.5) * (amplitude * 0.5);
          const h2 = Math.sin(normX * 16 + phase) * (amplitude * 0.3);
          const h3 = Math.sin(normX * 32 + phase * 1.5) * (amplitude * 0.2);
          y = midY - Math.abs(h1 + h2 + h3);
        } else if (waveType === 'pulse') {
          // Piezo vibration impulse simulation
          const damp = Math.exp(-((normX * 10) % 3));
          y = midY - Math.sin(normX * frequency * Math.PI * 6 + phase) * amplitude * damp;
        }

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Channel 2: Secondary Harmonic Reference (Quantum Cyan)
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.6)';
      ctx.shadowBlur = 4;
      ctx.shadowColor = '#00F0FF';
      ctx.beginPath();

      for (let x = 0; x < width; x++) {
        const normX = x / width;
        const y2 = midY - Math.cos(normX * (frequency * 0.5) * Math.PI * 4 + phase * 0.8) * (amplitude * 0.45);
        if (x === 0) ctx.moveTo(x, y2);
        else ctx.lineTo(x, y2);
      }
      ctx.stroke();

      // Reset shadow blur
      ctx.shadowBlur = 0;

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationId);
  }, [waveType, frequency, amplitude, isRunning]);

  const pins = [
    { id: 'gpio21', name: 'GPIO 21', bus: 'I2C SDA', color: '#D4FF00', note: 'Data Line • 400kHz' },
    { id: 'gpio22', name: 'GPIO 22', bus: 'I2C SCL', color: '#00F0FF', note: 'Clock Line • MPU6050' },
    { id: 'adc34', name: 'ADC 34', bus: 'ANALOG IN', color: '#FFB800', note: 'Piezo Sensor • 12-Bit' },
    { id: 'pwm18', name: 'GPIO 18', bus: 'PWM ACTUATOR', color: '#A78BFA', note: 'Frequency Mod • 5kHz' },
    { id: 'vcc', name: '3V3', bus: 'REGULATED PWR', color: '#10B981', note: 'Linear LDO • Low Ripple' },
  ];

  return (
    <div
      style={{
        backgroundColor: '#0D0F14',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-xl)',
        padding: '1.25rem',
        boxShadow: 'var(--shadow-medium), 0 0 30px rgba(0,0,0,0.8)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Top Deck Header: Status & Mode */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem',
          paddingBottom: '0.75rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#D4FF00',
              boxShadow: '0 0 8px #D4FF00'
            }}
          />
          <span className="label-mono" style={{ color: '#D4FF00', letterSpacing: '0.08em' }}>
            DUAL-CH DSO &amp; MCU TELEMETRY
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            type="button"
            onClick={() => setIsRunning(!isRunning)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.25rem 0.65rem',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: isRunning ? 'rgba(212, 255, 0, 0.15)' : 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${isRunning ? '#D4FF00' : 'rgba(255, 255, 255, 0.1)'}`,
              color: isRunning ? '#D4FF00' : '#888',
              fontSize: '0.68rem',
              fontFamily: 'var(--font-mono)',
              cursor: 'pointer'
            }}
          >
            {isRunning ? <Pause size={10} /> : <Play size={10} />}
            {isRunning ? 'RUN' : 'HOLD'}
          </button>
        </div>
      </div>

      {/* Screen: Real-Time Oscilloscope Screen */}
      <div
        style={{
          position: 'relative',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          marginBottom: '1rem',
          backgroundColor: '#090B0E'
        }}
      >
        <canvas
          ref={canvasRef}
          width={460}
          height={180}
          style={{ width: '100%', height: '170px', display: 'block' }}
        />

        {/* Live HUD telemetry overlays */}
        <div
          style={{
            position: 'absolute',
            top: '8px',
            left: '10px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: '#D4FF00',
            display: 'flex',
            gap: '0.85rem',
            backgroundColor: 'rgba(9, 11, 14, 0.75)',
            padding: '0.2rem 0.5rem',
            borderRadius: '4px'
          }}
        >
          <span>CH1: {(frequency * 12.5).toFixed(1)} kHz</span>
          <span style={{ color: '#00F0FF' }}>CH2: 3.3 Vpp</span>
          <span style={{ color: '#888' }}>TIME: 50µs/DIV</span>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '8px',
            right: '10px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: '#AAA',
            backgroundColor: 'rgba(9, 11, 14, 0.75)',
            padding: '0.2rem 0.5rem',
            borderRadius: '4px'
          }}
        >
          MODE: {waveType.toUpperCase()}
        </div>
      </div>

      {/* Waveform Selector & Knobs */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0.4rem',
          marginBottom: '1rem'
        }}
      >
        {[
          { key: 'sine', label: 'SINE' },
          { key: 'square', label: 'SQUARE' },
          { key: 'fft', label: 'FFT SPECT' },
          { key: 'pulse', label: 'PIEZO PULSE' }
        ].map((btn) => (
          <button
            key={btn.key}
            type="button"
            onClick={() => setWaveType(btn.key)}
            style={{
              padding: '0.45rem 0.2rem',
              borderRadius: 'var(--radius-sm)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              fontWeight: 600,
              backgroundColor: waveType === btn.key ? '#D4FF00' : 'rgba(255, 255, 255, 0.04)',
              color: waveType === btn.key ? '#090B0E' : '#A0A5B0',
              border: `1px solid ${waveType === btn.key ? '#D4FF00' : 'rgba(255, 255, 255, 0.06)'}`,
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Frequency & Amplitude Sliders */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1rem',
          padding: '0.75rem',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          marginBottom: '1rem'
        }}
      >
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#8E94A0', marginBottom: '0.3rem' }}>
            <span>FREQ TUNER</span>
            <span style={{ color: '#D4FF00' }}>{frequency}x</span>
          </div>
          <input
            type="range"
            min="1"
            max="8"
            step="0.5"
            value={frequency}
            onChange={(e) => setFrequency(parseFloat(e.target.value))}
            style={{ width: '100%', accentColor: '#D4FF00', cursor: 'pointer' }}
          />
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#8E94A0', marginBottom: '0.3rem' }}>
            <span>GAIN AMPL</span>
            <span style={{ color: '#00F0FF' }}>{amplitude}mV</span>
          </div>
          <input
            type="range"
            min="15"
            max="60"
            step="1"
            value={amplitude}
            onChange={(e) => setAmplitude(parseFloat(e.target.value))}
            style={{ width: '100%', accentColor: '#00F0FF', cursor: 'pointer' }}
          />
        </div>
      </div>

      {/* Interactive Microcontroller Pinout Explorer */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <span className="label-mono" style={{ fontSize: '0.65rem', color: '#888' }}>
            ESP-32 WROOM // INTERACTIVE BUS PINS
          </span>
          <span style={{ fontSize: '0.65rem', color: '#D4FF00', fontFamily: 'var(--font-mono)' }}>
            {activePin ? activePin.note : 'HOVER PINS TO INSPECT'}
          </span>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {pins.map((pin) => {
            const isHovered = activePin?.id === pin.id;
            return (
              <div
                key={pin.id}
                onMouseEnter={() => setActivePin(pin)}
                onMouseLeave={() => setActivePin(null)}
                style={{
                  flex: 1,
                  minWidth: '70px',
                  padding: '0.45rem 0.5rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: isHovered ? 'rgba(212, 255, 0, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${isHovered ? pin.color : 'rgba(255, 255, 255, 0.08)'}`,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: pin.color, fontFamily: 'var(--font-mono)' }}>
                  {pin.name}
                </div>
                <div style={{ fontSize: '0.6rem', color: '#777', marginTop: '0.1rem' }}>
                  {pin.bus}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
