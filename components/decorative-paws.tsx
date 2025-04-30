"use client"

import { PawPrint } from "lucide-react"
import { motion } from "framer-motion"

interface DecorativePawsProps {
  className?: string
}

export default function DecorativePaws({ className = "" }: DecorativePawsProps) {
  const pawPositions = [
    { x: "10%", y: "15%", size: "h-8 w-8", rotate: 15, delay: 0 },
    { x: "25%", y: "35%", size: "h-12 w-12", rotate: -10, delay: 0.1 },
    { x: "15%", y: "65%", size: "h-10 w-10", rotate: 25, delay: 0.2 },
    { x: "35%", y: "85%", size: "h-6 w-6", rotate: -5, delay: 0.3 },
    { x: "75%", y: "20%", size: "h-10 w-10", rotate: -15, delay: 0.4 },
    { x: "85%", y: "45%", size: "h-8 w-8", rotate: 10, delay: 0.5 },
    { x: "65%", y: "70%", size: "h-12 w-12", rotate: -20, delay: 0.6 },
    { x: "90%", y: "85%", size: "h-6 w-6", rotate: 5, delay: 0.7 },
  ]

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {pawPositions.map((paw, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: paw.delay }}
          style={{ left: paw.x, top: paw.y }}
          className="absolute"
        >
          <PawPrint
            className={`${paw.size} text-current transform rotate-${paw.rotate}`}
            style={{ transform: `rotate(${paw.rotate}deg)` }}
          />
        </motion.div>
      ))}
    </div>
  )
}
