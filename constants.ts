
import type { BraamSettings, Preset } from './types';

export const NUM_LAYERS = 3;

export const INITIAL_LAYER_SETTINGS = {
  id: 0,
  enabled: true,
  name: "Layer",
  sourceType: 'noise' as const,
  noiseType: 'white' as const,
  envelope: { attack: 0.1, hold: 0.2, decay: 0.7 },
  pitch: { start: 440, end: 880 },
  pan: { start: -0.8, end: 0.8 },
  volume: 0.7,
};

export const INITIAL_SETTINGS: BraamSettings = {
  layers: [
    { id: 1, enabled: true, name: 'Bass', sourceType: 'sine', noiseType: 'white', envelope: { attack: 0.4, hold: 0.3, decay: 0.8 }, pitch: { start: 50, end: 35 }, pan: { start: 0, end: 0 }, volume: 0.9 },
    { id: 2, enabled: true, name: 'Sub', sourceType: 'sawtooth', noiseType: 'white', envelope: { attack: 0.5, hold: 0.3, decay: 0.7 }, pitch: { start: 75, end: 52 }, pan: { start: -0.2, end: 0.2 }, volume: 0.7 },
    { id: 3, enabled: true, name: 'Texture', sourceType: 'noise', noiseType: 'brown', envelope: { attack: 0.3, hold: 0.4, decay: 0.6 }, pitch: { start: 150, end: 80 }, pan: { start: -0.5, end: 0.5 }, volume: 0.5 },
  ],
  global: {
    masterDuration: 2.0,
    masterVolume: 0.85,
    hpfFreq: 20,
    lpfFreq: 400,
    reverbMix: 0.6,
    reverbTime: 3.0,
    reverbDecay: 3.5,
  },
};

export const PRESETS: Preset[] = [
  {
    name: 'Classic Braam',
    settings: {
      ...INITIAL_SETTINGS,
      layers: [
        { id: 1, enabled: true, name: 'Bass', sourceType: 'sine', noiseType: 'white', envelope: { attack: 0.4, hold: 0.3, decay: 0.8 }, pitch: { start: 50, end: 35 }, pan: { start: 0, end: 0 }, volume: 0.9 },
        { id: 2, enabled: true, name: 'Sub', sourceType: 'sawtooth', noiseType: 'white', envelope: { attack: 0.5, hold: 0.3, decay: 0.7 }, pitch: { start: 75, end: 52 }, pan: { start: -0.2, end: 0.2 }, volume: 0.7 },
        { id: 3, enabled: true, name: 'Texture', sourceType: 'noise', noiseType: 'brown', envelope: { attack: 0.3, hold: 0.4, decay: 0.6 }, pitch: { start: 150, end: 80 }, pan: { start: -0.5, end: 0.5 }, volume: 0.5 },
      ],
      global: { masterDuration: 2.0, masterVolume: 0.85, hpfFreq: 20, lpfFreq: 400, reverbMix: 0.6, reverbTime: 3.0, reverbDecay: 3.5 },
    },
  },
  {
    name: 'Inception Horn',
    settings: {
      ...INITIAL_SETTINGS,
      layers: [
        { id: 1, enabled: true, name: 'Foundation', sourceType: 'sawtooth', noiseType: 'white', envelope: { attack: 0.6, hold: 0.5, decay: 1.2 }, pitch: { start: 40, end: 28 }, pan: { start: 0, end: 0 }, volume: 1.0 },
        { id: 2, enabled: true, name: 'Harmonic', sourceType: 'square', noiseType: 'white', envelope: { attack: 0.7, hold: 0.4, decay: 1.0 }, pitch: { start: 60, end: 42 }, pan: { start: -0.3, end: 0.3 }, volume: 0.6 },
        { id: 3, enabled: true, name: 'Rumble', sourceType: 'noise', noiseType: 'brown', envelope: { attack: 0.5, hold: 0.6, decay: 0.9 }, pitch: { start: 100, end: 60 }, pan: { start: -0.6, end: 0.6 }, volume: 0.7 },
      ],
      global: { masterDuration: 2.8, masterVolume: 0.9, hpfFreq: 25, lpfFreq: 300, reverbMix: 0.75, reverbTime: 3.8, reverbDecay: 4.0 },
    },
  },
  {
    name: 'Deep Foghorn',
    settings: {
        ...INITIAL_SETTINGS,
      layers: [
        { id: 1, enabled: true, name: 'Core', sourceType: 'sine', noiseType: 'white', envelope: { attack: 0.3, hold: 0.8, decay: 1.0 }, pitch: { start: 45, end: 38 }, pan: { start: 0, end: 0 }, volume: 0.95 },
        { id: 2, enabled: true, name: 'Depth', sourceType: 'sawtooth', noiseType: 'white', envelope: { attack: 0.4, hold: 0.7, decay: 0.9 }, pitch: { start: 68, end: 57 }, pan: { start: -0.1, end: 0.1 }, volume: 0.75 },
        { id: 3, enabled: true, name: 'Air', sourceType: 'noise', noiseType: 'brown', envelope: { attack: 0.2, hold: 0.9, decay: 0.7 }, pitch: { start: 120, end: 70 }, pan: { start: -0.4, end: 0.4 }, volume: 0.4 },
      ],
      global: { masterDuration: 2.5, masterVolume: 0.88, hpfFreq: 22, lpfFreq: 350, reverbMix: 0.7, reverbTime: 3.5, reverbDecay: 3.8 },
    },
  },
    {
    name: 'Trailer Impact',
    settings: {
        ...INITIAL_SETTINGS,
      layers: [
        { id: 1, enabled: true, name: 'Hit', sourceType: 'sawtooth', noiseType: 'white', envelope: { attack: 0.05, hold: 0.15, decay: 0.6 }, pitch: { start: 55, end: 32 }, pan: { start: 0, end: 0 }, volume: 1.0 },
        { id: 2, enabled: true, name: 'Thump', sourceType: 'sine', noiseType: 'white', envelope: { attack: 0.02, hold: 0.2, decay: 0.5 }, pitch: { start: 35, end: 25 }, pan: { start: 0, end: 0 }, volume: 0.95 },
        { id: 3, enabled: true, name: 'Noise', sourceType: 'noise', noiseType: 'brown', envelope: { attack: 0.01, hold: 0.1, decay: 0.4 }, pitch: { start: 180, end: 90 }, pan: { start: -0.7, end: 0.7 }, volume: 0.6 },
      ],
      global: { masterDuration: 1.2, masterVolume: 0.9, hpfFreq: 20, lpfFreq: 500, reverbMix: 0.5, reverbTime: 2.5, reverbDecay: 3.2 },
    },
  },
  {
    name: 'Rising Tension',
    settings: {
      ...INITIAL_SETTINGS,
      layers: [
        { id: 1, enabled: true, name: 'Bass Rise', sourceType: 'sine', noiseType: 'white', envelope: { attack: 1.0, hold: 0.3, decay: 0.7 }, pitch: { start: 30, end: 65 }, pan: { start: 0, end: 0 }, volume: 0.9 },
        { id: 2, enabled: true, name: 'Sub Rise', sourceType: 'square', noiseType: 'white', envelope: { attack: 1.1, hold: 0.2, decay: 0.6 }, pitch: { start: 45, end: 95 }, pan: { start: -0.2, end: 0.2 }, volume: 0.7 },
        { id: 3, enabled: true, name: 'Texture', sourceType: 'noise', noiseType: 'brown', envelope: { attack: 0.9, hold: 0.4, decay: 0.5 }, pitch: { start: 80, end: 200 }, pan: { start: -0.5, end: 0.5 }, volume: 0.5 },
      ],
      global: { masterDuration: 2.5, masterVolume: 0.85, hpfFreq: 25, lpfFreq: 600, reverbMix: 0.65, reverbTime: 3.2, reverbDecay: 3.0 },
    },
  },
  {
    name: 'Dystopian Swell',
    settings: {
      ...INITIAL_SETTINGS,
      layers: [
        { id: 1, enabled: true, name: 'Low End', sourceType: 'sine', noiseType: 'white', envelope: { attack: 0.8, hold: 0.4, decay: 1.0 }, pitch: { start: 32, end: 28 }, pan: { start: 0, end: 0 }, volume: 1.0 },
        { id: 2, enabled: true, name: 'Growl', sourceType: 'sawtooth', noiseType: 'white', envelope: { attack: 0.9, hold: 0.3, decay: 0.9 }, pitch: { start: 48, end: 42 }, pan: { start: -0.15, end: 0.15 }, volume: 0.8 },
        { id: 3, enabled: true, name: 'Grit', sourceType: 'noise', noiseType: 'brown', envelope: { attack: 0.7, hold: 0.5, decay: 0.7 }, pitch: { start: 90, end: 60 }, pan: { start: -0.5, end: 0.5 }, volume: 0.55 },
      ],
      global: { masterDuration: 2.8, masterVolume: 0.9, hpfFreq: 20, lpfFreq: 280, reverbMix: 0.8, reverbTime: 4.0, reverbDecay: 4.0 },
    },
  },
  {
    name: 'Sub Drop',
    settings: {
      ...INITIAL_SETTINGS,
      layers: [
        { id: 1, enabled: true, name: 'Foundation', sourceType: 'sine', noiseType: 'white', envelope: { attack: 0.02, hold: 0.3, decay: 0.8 }, pitch: { start: 65, end: 28 }, pan: { start: 0, end: 0 }, volume: 1.0 },
        { id: 2, enabled: true, name: 'Harmonic', sourceType: 'square', noiseType: 'white', envelope: { attack: 0.03, hold: 0.25, decay: 0.7 }, pitch: { start: 98, end: 42 }, pan: { start: -0.2, end: 0.2 }, volume: 0.7 },
        { id: 3, enabled: true, name: 'Punch', sourceType: 'noise', noiseType: 'brown', envelope: { attack: 0.01, hold: 0.15, decay: 0.5 }, pitch: { start: 200, end: 80 }, pan: { start: -0.6, end: 0.6 }, volume: 0.65 },
      ],
      global: { masterDuration: 1.5, masterVolume: 0.92, hpfFreq: 20, lpfFreq: 450, reverbMix: 0.45, reverbTime: 2.2, reverbDecay: 3.0 },
    },
  },
  {
    name: 'Epic Finale',
    settings: {
      ...INITIAL_SETTINGS,
      layers: [
        { id: 1, enabled: true, name: 'Bass Wall', sourceType: 'sawtooth', noiseType: 'white', envelope: { attack: 0.5, hold: 1.0, decay: 1.5 }, pitch: { start: 38, end: 30 }, pan: { start: 0, end: 0 }, volume: 1.0 },
        { id: 2, enabled: true, name: 'Mid Layer', sourceType: 'square', noiseType: 'white', envelope: { attack: 0.6, hold: 0.9, decay: 1.3 }, pitch: { start: 57, end: 45 }, pan: { start: -0.25, end: 0.25 }, volume: 0.8 },
        { id: 3, enabled: true, name: 'Atmosphere', sourceType: 'noise', noiseType: 'brown', envelope: { attack: 0.4, hold: 1.1, decay: 1.2 }, pitch: { start: 130, end: 75 }, pan: { start: -0.7, end: 0.7 }, volume: 0.6 },
      ],
      global: { masterDuration: 3.5, masterVolume: 0.9, hpfFreq: 22, lpfFreq: 380, reverbMix: 0.85, reverbTime: 4.0, reverbDecay: 4.5 },
    },
  },
];
