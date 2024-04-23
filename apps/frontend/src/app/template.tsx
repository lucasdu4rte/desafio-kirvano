'use client'

import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

export default function Template({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 100 }}
      transition={{ type: 'easeIn', duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
