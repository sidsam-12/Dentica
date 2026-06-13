'use client';

import { motion } from 'framer-motion';

export function MotionStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className='mt-8 grid gap-3 sm:grid-cols-3'
    >
      {[
        ['Same-day', 'Bookings'],
        ['Digital', 'Consultation'],
        ['Trusted', 'Specialists']
      ].map(([label, value]) => (
        <div key={label} className='rounded-3xl border border-white/70 bg-white/85 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5'>
          <div className='text-xs font-semibold uppercase tracking-[0.24em] text-dentalBlue/70 dark:text-cyan-200'>{label}</div>
          <div className='mt-1 text-base font-semibold text-navy dark:text-white'>{value}</div>
        </div>
      ))}
    </motion.div>
  );
}
