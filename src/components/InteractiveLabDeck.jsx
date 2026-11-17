import React, { useState, useEffect, useRef } from 'react';
import { Activity, Cpu, Sliders, Zap, Play, Pause, Radio, RefreshCw } from 'lucide-react';
import WindowFrame from './WindowFrame';

export default function InteractiveLabDeck() {
  const [waveType, setWaveType] = useState('sine'); // 'sine', 'square', 'fft', 'pulse'
  const [frequency, setFrequency] = useState(3.5);
  const [amplitude, setAmplitude] = useState(38);
  const [isRunning, setIsRunning] = useState(true);
  const [activePin, setActivePin] = useState(null);

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

      ctx.fillStyle = '#080A0E';
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
      ctx.strokeStyle = 'rgba(139, 154, 110, 0.35)';
      ctx.beginPath();
      ctx.moveTo(0, midY);
      ctx.lineTo(width, midY);
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width / 2, height);
      ctx.stroke();

      if (isRunning) {
        phase += 0.05 * frequency;
      }

      // Channel 1: Primary Waveform
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = '#8B9A6E';
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#8B9A6E';
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
          const h1 = Math.sin(normX * 8 + phase * 0.5) * (amplitude * 0.5);
          const h2 = Math.sin(normX * 16 + phase) * (amplitude * 0.3);
          const h3 = Math.sin(normX * 32 + phase * 1.5) * (amplitude * 0.2);
          y = midY - Math.abs(h1 + h2 + h3);
        } else if (waveType === 'pulse') {
          const damp = Math.exp(-((normX * 10) % 3));
          y = midY - Math.sin(normX * frequency * Math.PI * 6 + phase) * amplitude * damp;
        }

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Channel 2: Reference
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'rgba(234, 226, 214, 0.85)';
      ctx.shadowBlur = 4;
      ctx.shadowColor = '#EAE2D6';
      ctx.beginPath();

      for (let x = 0; x < width; x++) {
        const normX = x / width;
        const y2 = midY - Math.cos(normX * (frequency * 0.5) * Math.PI * 4 + phase * 0.8) * (amplitude * 0.45);
        if (x === 0) ctx.moveTo(x, y2);
        else ctx.lineTo(x, y2);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationId);
  }, [waveType, frequency, amplitude, isRunning]);

  const pins = [
    { id: 'gpio21', name: 'GPIO 21', bus: 'I2C SDA', color: '#8B9A6E', note: 'Data Line • 400kHz' },
    { id: 'gpio22', name: 'GPIO 22', bus: 'I2C SCL', color: '#EAE2D6', note: 'Clock Line • MPU6050' },
    { id: 'adc34', name: 'ADC 34', bus: 'ANALOG IN', color: '#8B9A6E', note: 'Piezo Sensor • 12-Bit' },
    { id: 'pwm18', name: 'GPIO 18', bus: 'PWM ACTUATOR', color: '#EAE2D6', note: 'Frequency Mod • 5kHz' },
    { id: 'vcc', name: '3V3', bus: 'REGULATED PWR', color: '#8B9A6E', note: 'Linear LDO • Low Ripple' },
  ];

  return (
    <WindowFrame
      title="HardwareLab.app"
      subtitle="Dual-Channel DSO &amp; MCU Bus Explorer"
      badge="ONLINE // 240MHz"
    >
      <div style={{ padding: '1.25rem' }}>
        {/* Top Controls Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0.85rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-lime)',
                boxShadow: '0 0 6px var(--accent-lime)'
              }}
            />
            <span className="label-mono" style={{ color: 'var(--accent-lime)', fontSize: '0.68rem' }}>
              LIVE TELEMETRY FEED
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsRunning(!isRunning)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.25rem 0.65rem',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: isRunning ? 'rgba(139, 154, 110, 0.15)' : 'rgba(139, 154, 110, 0.06)',
              border: `1px solid ${isRunning ? '#8B9A6E' : 'rgba(85, 91, 77, 0.16)'}`,
              color: isRunning ? 'var(--accent-lime)' : 'var(--text-secondary)',
              fontSize: '0.68rem',
              fontFamily: 'var(--font-annotation)',
              cursor: 'pointer'
            }}
          >
            {isRunning ? <Pause size={10} /> : <Play size={10} />}
            {isRunning ? 'HOLD' : 'RESUME'}
          </button>
        </div>

        {/* Oscilloscope Screen */}
        <div
          style={{
            position: 'relative',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            marginBottom: '0.85rem',
            backgroundColor: '#080A0E'
          }}
        >
          <canvas
            ref={canvasRef}
            width={480}
            height={175}
            style={{ width: '100%', height: '165px', display: 'block' }}
          />

          {/* HUD overlays */}
          <div
            style={{
              position: 'absolute',
              top: '8px',
              left: '10px',
              fontFamily: 'var(--font-annotation)',
              fontSize: '0.64rem',
              color: '#8B9A6E',
              display: 'flex',
              gap: '0.75rem',
              backgroundColor: 'rgba(8, 10, 14, 0.85)',
              padding: '0.2rem 0.5rem',
              borderRadius: '4px'
            }}
          >
            <span>CH1: {(frequency * 12.5).toFixed(1)} kHz</span>
            <span style={{ color: '#EAE2D6' }}>CH2: 3.3 Vpp</span>
            <span style={{ color: '#888' }}>50µs/DIV</span>
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '8px',
              right: '10px',
              fontFamily: 'var(--font-annotation)',
              fontSize: '0.64rem',
              color: '#AAA',
              backgroundColor: 'rgba(8, 10, 14, 0.85)',
              padding: '0.2rem 0.5rem',
              borderRadius: '4px'
            }}
          >
            MODE: {waveType.toUpperCase()}
          </div>
        </div>

        {/* Waveform Selector */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0.35rem',
            marginBottom: '0.85rem'
          }}
        >
          {[
            { key: 'sine', label: 'SINE' },
            { key: 'square', label: 'SQUARE' },
            { key: 'fft', label: 'FFT SPECT' },
            { key: 'pulse', label: 'PIEZO' }
          ].map((btn) => (
            <button
              key={btn.key}
              type="button"
              onClick={() => setWaveType(btn.key)}
              style={{
                padding: '0.4rem 0.2rem',
                borderRadius: 'var(--radius-sm)',
                fontFamily: 'var(--font-annotation)',
                fontSize: '0.66rem',
                fontWeight: 600,
                backgroundColor: waveType === btn.key ? '#8B9A6E' : 'rgba(139, 154, 110, 0.06)',
                color: waveType === btn.key ? '#292D24' : 'var(--text-secondary)',
                border: `1px solid ${waveType === btn.key ? '#8B9A6E' : 'rgba(85, 91, 77, 0.16)'}`,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Sliders */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.85rem',
            padding: '0.65rem 0.85rem',
            backgroundColor: 'rgba(139, 154, 110, 0.04)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-color)',
            marginBottom: '0.85rem'
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', fontFamily: 'var(--font-annotation)', color: '#8E94A0', marginBottom: '0.25rem' }}>
              <span>FREQ TUNER</span>
              <span style={{ color: 'var(--accent-lime)' }}>{frequency}x</span>
            </div>
            <input
              type="range"
              min="1"
              max="8"
              step="0.5"
              value={frequency}
              onChange={(e) => setFrequency(parseFloat(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--accent-lime)', cursor: 'pointer' }}
            />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', fontFamily: 'var(--font-annotation)', color: '#8E94A0', marginBottom: '0.25rem' }}>
              <span>GAIN AMPL</span>
              <span style={{ color: 'var(--color-olive)' }}>{amplitude}mV</span>
            </div>
            <input
              type="range"
              min="15"
              max="60"
              step="1"
              value={amplitude}
              onChange={(e) => setAmplitude(parseFloat(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--color-beige)', cursor: 'pointer' }}
            />
          </div>
        </div>

        {/* Pins */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
            <span className="label-mono" style={{ fontSize: '0.63rem', color: '#888' }}>
              ESP-32 WROOM // PINOUT PROBE
            </span>
            <span style={{ fontSize: '0.63rem', color: 'var(--accent-lime)', fontFamily: 'var(--font-annotation)' }}>
              {activePin ? activePin.note : 'HOVER PINS TO TEST'}
            </span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
            {pins.map((pin) => {
              const isHovered = activePin?.id === pin.id;
              return (
                <div
                  key={pin.id}
                  onMouseEnter={() => setActivePin(pin)}
                  onMouseLeave={() => setActivePin(null)}
                  style={{
                    flex: 1,
                    minWidth: '65px',
                    padding: '0.4rem 0.45rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: isHovered ? 'rgba(139, 154, 110, 0.15)' : 'rgba(139, 154, 110, 0.04)',
                    border: `1px solid ${isHovered ? pin.color : 'rgba(85, 91, 77, 0.16)'}`,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: pin.color, fontFamily: 'var(--font-annotation)' }}>
                    {pin.name}
                  </div>
                  <div style={{ fontSize: '0.58rem', color: '#777', marginTop: '0.1rem' }}>
                    {pin.bus}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}
