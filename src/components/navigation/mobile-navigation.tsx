import {motion} from "framer-motion"
import { ArrowDown, ArrowUp } from "lucide-react"

export  function MobileNavigation() {
  return (
    <motion.div
    className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 glassmorphism backdrop-blur-md border border-blue-200/30 shadow-lg rounded-full px-4 py-2"
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    <div className="flex items-center gap-3">
      <ArrowUp className="h-4 w-4 text-blue-600" />
      <span className="text-xs text-gray-600">Slide pour naviguer</span>
      <ArrowDown className="h-4 w-4 text-blue-600" />
    </div>
  </motion.div>
  )
}
