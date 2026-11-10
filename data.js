
import kyoge from './images/kyoge.jpg'
import bem from './images/bem.jpg'
import jed from './images/jed.jpg'
import gab from './images/gab.jpg'

// BARBER HUB SERVICES
export const services = [
  {
    id: 1,
    name: 'Classic Haircut',
    price: 120,
    duration: '30 min',
    description: 'A clean, timeless cut shaped to your preference.'
  },
  {
    id: 2,
    name: 'Fade Haircut',
    price: 180,
    duration: '40 min',
    description: 'Low, mid or high fade with a sharp finish.'
  },
  {
    id: 3,
    name: 'Haircut + Shampoo',
    price: 220,
    duration: '45 min',
    description: 'A fresh cut followed by a relaxing wash.'
  },
  {
    id: 4,
    name: 'Beard Trim',
    price: 100,
    duration: '20 min',
    description: 'Neat lines and a balanced beard shape.'
  },
  {
    id: 5,
    name: 'Haircut + Beard',
    price: 250,
    duration: '50 min',
    description: 'A complete grooming session.'
  },
  {
    id: 6,
    name: 'Hair Design',
    price: 80,
    duration: '20 min',
    description: 'Simple line art or a custom detail.'
  }
]

// HAIRCUT IDEAS
export const haircutIdeas = [
  {
    id: 1,
    name: 'Low Taper Fade',
    type: 'Clean & versatile',
    description:
      'A subtle taper around the temples and neckline. Great for school or work.',
    image: kyoge
  },
  {
    id: 2,
    name: 'Textured Crop',
    type: 'Modern & easy',
    description:
      'Short textured top with a neat fade. Works well for a low-maintenance look.',
    image: bem
  },
  {
    id: 3,
    name: 'Classic Side Part',
    type: 'Smart & timeless',
    description:
      'A polished style with a defined part and tidy sides.',
    image: jed
  },
  {
    id: 4,
    name: 'Buzz Cut',
    type: 'Simple & fresh',
    description:
      'An easy, even cut that keeps your routine simple.',
    image: gab
  }
]

// BARBERS
export const barbers = [
  'Any available barber',
  'Ku Jay',
  'Miko',
  'Andre'
]

// AVAILABLE TIME SLOTS
export const timeSlots = [
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM'
]
