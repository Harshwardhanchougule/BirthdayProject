import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, ChevronLeft, Heart, Star, Sparkles, Gift, Cake, PartyPopper } from "lucide-react";
import img1 from "@/img/1.jpeg";
import img2 from "@/img/2.jpeg";
import img3 from "@/img/3.jpeg";
import img4 from "@/img/4.jpeg";
import img5 from "@/img/5.jpeg";
import img6 from "@/img/6.jpeg";


export default function Index() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetFlow = () => {
    setCurrentStep(1);
  };

  // Floating background elements
  const floatingElements = Array.from({ length: 15 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute text-2xl opacity-60"
      initial={{ y: "100vh", x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000) }}
      animate={{
        y: "-100px",
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
        rotate: 360
      }}
      transition={{
        duration: Math.random() * 8 + 12,
        repeat: Infinity,
        ease: "linear",
        delay: Math.random() * 5
      }}
    >
      {["🎂", "🎉", "🎊", "🎈", "🎁", "✨", "🌟", "💖", "🎵", "🌸"][i % 10]}
    </motion.div>
  ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {floatingElements}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-2xl">

          {/* Step Indicator */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex gap-3">
              {[1, 2, 3, 4].map((step) => (
                <motion.div
                  key={step}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${step === currentStep
                    ? 'bg-white shadow-lg scale-125'
                    : step < currentStep
                      ? 'bg-white/70'
                      : 'bg-white/30'
                    }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Step Content */}
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.9 }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                <Card className="p-8 md:p-12 bg-white/20 backdrop-blur-xl border-white/30 text-center relative overflow-hidden">
                  {/* Sparkle Effects */}
                  {Array.from({ length: 8 }, (_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-yellow-300 text-xl"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        rotate: [0, 180, 360],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: Math.random() * 3
                      }}
                    >
                      <Sparkles className="w-5 h-5" />
                    </motion.div>
                  ))}

                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Cake className="w-20 h-16 text-white mx-auto mb-6" />
                  </motion.div>

                  <motion.h1
                    className="text-5xl md:text-6xl font-bold text-white mb-6"
                    animate={{
                      textShadow: [
                        "0 0 20px rgba(255,255,255,0.5)",
                        "0 0 40px rgba(255,255,255,0.8)",
                        "0 0 20px rgba(255,255,255,0.5)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Happy Birthday Shravani...! 🎉
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl text-white/90 mb-8"
                  >
                    Let's celebrate your special day!
                  </motion.p>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={nextStep}
                      size="lg"
                      className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 hover:border-white/60 text-lg px-8 py-3"
                    >
                      Next <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.9 }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                <Card className="p-8 md:p-12 bg-white/20 backdrop-blur-xl border-white/30 text-center relative overflow-hidden">
                  {/* Floating Hearts */}
                  {Array.from({ length: 6 }, (_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-pink-300 text-2xl"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [-20, -40, -20],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                      }}
                    >
                      <Heart className="w-6 h-6" />
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.8 }}
                  >
                    <Gift className="w-16 h-16 text-white mx-auto mb-6" />
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-6"
                  >
                    A Special Message
                  </motion.h2>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-4 mb-8"
                  >
                    <p className="text-lg text-white/90 leading-relaxed">
                      Today is all about celebrating you and the amazing person you are.
                      May this new year of your life be filled with joy, laughter, and countless beautiful moments.
                    </p>
                    <p className="text-lg text-white/90 leading-relaxed">
                      You deserve all the happiness in the world, and we hope your special day is as wonderful as you are! 🌟
                    </p>
                  </motion.div>

                  <div className="flex gap-4 justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={prevStep}
                        variant="outline"
                        className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                      >
                        <ChevronLeft className="w-4 h-4 mr-2" /> Back
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={nextStep}
                        size="lg"
                        className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 hover:border-white/60 text-lg px-8"
                      >
                        Next <ChevronRight className="w-5 h-5 ml-2" />
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.9 }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                <Card className="p-8 md:p-12 bg-white/20 backdrop-blur-xl border-white/30 text-center relative overflow-hidden">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-8"
                  >
                    Celebration Gallery 📸
                  </motion.h2>

                  {/* Photo Gallery Grid with Imported Images */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    {[
                      { img: img1, delay: 0.1, title: "Beautiful Moments" },
                      { img: img2, delay: 0.2, title: "Special Memories" },
                      { img: img3, delay: 0.3, title: "Happy Times" },
                      { img: img4, delay: 0.4, title: "Celebration Joy" },
                      { img: img5, delay: 0.5, title: "Precious Smiles" },
                      { img: img6, delay: 0.6, title: "Wonderful Memories" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: item.delay,
                          type: "spring",
                          duration: 0.6
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.3 }
                        }}
                        className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 cursor-pointer group overflow-hidden"
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.05, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: item.delay + index * 0.3
                          }}
                          className="w-full h-32 mb-3 rounded-md overflow-hidden"
                        >
                          <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </motion.div>
                        <p className="text-white/80 text-sm group-hover:text-white transition-colors text-center">
                          {item.title}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Animated Stars */}
                  {Array.from({ length: 10 }, (_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-yellow-300"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        rotate: [0, 180, 360],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: Math.random() * 3
                      }}
                    >
                      <Star className="w-4 h-4" />
                    </motion.div>
                  ))}

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="text-lg text-white/90 mb-8"
                  >
                    May your day be filled with all these wonderful moments and more! 🎊
                  </motion.p>

                  <div className="flex gap-4 justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={prevStep}
                        variant="outline"
                        className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                      >
                        <ChevronLeft className="w-4 h-4 mr-2" /> Back
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={nextStep}
                        size="lg"
                        className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 hover:border-white/60 text-lg px-8"
                      >
                        Next <ChevronRight className="w-5 h-5 ml-2" />
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.9 }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                <Card className="p-8 md:p-12 bg-white/20 backdrop-blur-xl border-white/30 text-center relative overflow-hidden">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-8"
                  >
                    Memory Lane 🌈
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-white/90 mb-8"
                  >
                    Watch as beautiful memories flow across your special day!
                  </motion.p>

                  {/* All Images Displayed in Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                    {[
                      { img: img1, name: "Beautiful Moments" },
                      { img: img2, name: "Special Memories" },
                      { img: img3, name: "Happy Times" },
                      { img: img4, name: "Celebration Joy" },
                      { img: img5, name: "Precious Smiles" },
                      { img: img6, name: "Wonderful Memories" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex flex-col items-center justify-center w-full bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 p-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.1,
                          type: "spring"
                        }}
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <div className="w-48 h-48 rounded-lg overflow-hidden mb-4 shadow-lg bg-gray-200 force-cover">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-full h-full object-cover object-center"
                            style={{
                              minWidth: '100%',
                              minHeight: '100%',
                              maxWidth: '100%',
                              maxHeight: '100%'
                            }}
                          />
                        </div>
                        <span className="text-lg text-white font-medium text-center">
                          {item.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Animated Background Elements */}
                  {Array.from({ length: 15 }, (_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-white/20"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        x: [0, 50, -50, 0],
                        y: [0, -30, 30, 0],
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0.2, 0.6, 0.2]
                      }}
                      transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 3
                      }}
                    >
                      {["🎊", "💫", "🌈", "⭐", "🎯"][i % 5]}
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="space-y-4 mb-8"
                  >
                    <p className="text-lg text-white/90">
                      Each moment is a treasure, each memory a gift! 🎁
                    </p>
                    <p className="text-base text-white/80">
                      May your birthday be filled with endless joy and beautiful surprises!
                    </p>
                  </motion.div>

                  <div className="flex gap-4 justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={prevStep}
                        variant="outline"
                        className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                      >
                        <ChevronLeft className="w-4 h-4 mr-2" /> Back
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={resetFlow}
                        size="lg"
                        className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-none"
                      >
                        <PartyPopper className="w-5 h-5 mr-2" /> Start Again
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
