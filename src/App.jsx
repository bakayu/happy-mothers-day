import { useState, useEffect } from 'react'
import './App.css'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHeart, FaSun, FaCloud } from 'react-icons/fa6'
import { LuFlower2 } from 'react-icons/lu'
import { PiFlowerTulipFill } from 'react-icons/pi'
import { GiButterfly } from 'react-icons/gi'

function App() {
  const [showMessage, setShowMessage] = useState(false)
  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    // Start animation after a small delay
    setTimeout(() => {
      setAnimation(true)
    }, 500)
  }, [])

  // Generate random position for decorative elements
  const randomPosition = () => {
    return {
      left: `${Math.random() * 90 + 5}%`,
      top: `${Math.random() * 90 + 5}%`,
      scale: Math.random() * 0.5 + 0.5
    }
  }

  return (
    <div className="mothers-day-scene">
      {/* Background elements */}
      <div className="sun"><FaSun /></div>
      <div className="clouds">
        <div className="cloud c1"><FaCloud /></div>
        <div className="cloud c2"><FaCloud /></div>
        <div className="cloud c3"><FaCloud /></div>
      </div>
      
      {/* Decorative elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`flower-${i}`}
          className="decorative-element flower"
          initial={randomPosition()}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.3,
          }}
        >
          {i % 2 === 0 ? <LuFlower2 /> : <PiFlowerTulipFill />}
        </motion.div>
      ))}
      
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`butterfly-${i}`}
          className="decorative-element butterfly"
          initial={{
            x: -100,
            y: Math.random() * window.innerHeight,
            opacity: 0.7
          }}
          animate={{
            x: window.innerWidth + 100,
            y: Math.random() * window.innerHeight,
            opacity: [0.7, 1, 0.7],
            rotate: [0, 5, -5, 10, -10, 0]
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            delay: i * 5,
          }}
        >
          <GiButterfly />
        </motion.div>
      ))}

      {/* Main interactive element */}
      <div className="content-container">
        <AnimatePresence mode="wait">
          {!showMessage ? (
            <motion.div
              key="flower"
              className="flower-container"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: animation ? 1 : 0.8, opacity: animation ? 1 : 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              onClick={() => setShowMessage(true)}
              exit={{ scale: 1.5, opacity: 0, transition: { duration: 0.5 } }}
            >
              <div className="center">
                <FaHeart className="heart" />
              </div>
              <div className="petals">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="petal"
                    style={{
                      rotate: `${i * 30}deg`,
                      originX: "100%",
                      originY: "center"
                    }}
                    animate={{
                      scale: animation ? [1, 1.1, 1] : 1,
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </div>
              <motion.p 
                className="click-hint"
                animate={{ 
                  y: [0, -5, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                Click the flower to reveal a message
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="message"
              className="message-container"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <motion.div className="message-card">
                <motion.div
                  className="message-heart-container"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ delay: 0.3, duration: 1 }}
                >
                  <FaHeart 
                    className="message-heart" 
                    style={{ 
                      display: 'block', 
                      margin: 'auto',
                      position: 'relative',
                      top: '0px', // Adjust these values if needed
                      left: '0px'  // Adjust these values if needed
                    }} 
                  />
                </motion.div>
                
                <motion.h1
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Happy Mother's Day!
                </motion.h1>
                
                <motion.div
                  className="message-divider"
                  initial={{ width: 0 }}
                  animate={{ width: "80%" }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                />
                
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  To the woman who gives endless love,<br />
                  shares infinite wisdom, and provides unwavering support.
                </motion.p>
                
                <motion.p
                  className="message-quote"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 1 }}
                >
                  "A mother's love is the heart of a family."
                </motion.p>
                
                <motion.div 
                  className="floating-hearts"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 1 }}
                >
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`floating-heart h${i % 4 + 1}`}
                      initial={{ 
                        x: Math.random() * 200 - 100,
                        y: 50,
                        opacity: 0
                      }}
                      animate={{ 
                        y: -150 - Math.random() * 100,
                        opacity: [0, 1, 0],
                        x: Math.random() * 200 - 100
                      }}
                      transition={{
                        duration: 4 + Math.random() * 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        repeatDelay: Math.random() * 2
                      }}
                    >
                      <FaHeart />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App
