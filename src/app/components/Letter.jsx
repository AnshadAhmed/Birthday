"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Mail, Heart, Sparkles, RotateCcw } from "lucide-react"
import confetti from "canvas-confetti"

export default function Letter() {
    const [isOpen, setIsOpen] = useState(false)
    const [showText, setShowText] = useState(false)
    const [currentText, setCurrentText] = useState("")
    const [showCursor, setShowCursor] = useState(true)
    const scrollRef = useRef(null)

    const letterText = `My Dearest Anuuu 💖

Happy Birthday to my favourite, My best friend, My sister. 

I still don’t understand how you randomly spawned into my life and somehow became someone so important to me. You’re that one person you haven’t known for too long, yet you can share everything with — without fear, without judgment. You give both best-friend and sister vibes, and I wouldn’t trade that for anything.

I don’t even know how to thank you, because I’m not used to people caring for me the way you do. But I know this much — I am incredibly lucky to have you in my life. Good friends are rare, and the bond we share is something truly impossible to forget.

No matter how much time passes, or whether we talk every day or not, the place I’ve given you in my heart will always remain the same. You are my favourite person in this world — the one I can have deep conversations with and still laugh about the dumbest, most random things.

It makes me genuinely happy when you share the little things with me — the random updates, the silly moments, the everyday stuff. It’s the little things that make this bond feel so special. Every moment with you somehow becomes my new favourite memory.

As a friend, I am never tired of your life — your stories, your thoughts, or your struggles. I hate it when people say, “I don’t want to bother you with the same issue again.” If something weighs on your chest every day, spill it. Call me. Text me. Anytime. Any day. I’m here.
Promise me one thing — never hide yourself when you’re in pain. It’s unfair that we laughed together but you cried alone.

From the bottom of my heart, I want you to know this — I could never love another soul the way I love you. No one can ever change how I feel about you, not even you.

Maybe I never showed you how much your presence mattered to me, but I swear all I ever wished for was to have you by my side. Sometimes I tease you, irritate you, or roast you — and sometimes I fight, argue, or say things I don’t mean, because you’re close to me. If I ever hurt you unintentionally, I’m truly sorry. I roast you, but I never want to hurt you.

You’re different from everyone else. You have a special place in my heart. I know my sister knows how much I love her, but I love her more than she’ll ever know.

I never expect anything in return from you. All I need is your friendship — just like we’ve always had. Please never thank me — I’d do everything a thousand times over. If not for you, then who else would I do it for?

I may not always know the right words or how to comfort you perfectly, but I promise you this — I will always be here to listen, to understand, and to share whatever you’re going through.

If I could give you one thing in life, I would give you the ability to see yourself through my eyes. Only then would you realise how special you truly are to me.

You have no idea how important you are to me… and honestly, I don’t even know how to explain it properly.

Thank you for being part of my life.
Happy Birthday, Anuuu 💖🎂
Always yours — in friendship, in love, and in loyalty.`

    useEffect(() => {
        if (showText) {
            let index = 0
            const timer = setInterval(() => {
                if (index < letterText.length) {
                    setCurrentText(letterText.slice(0, index + 1))
                    index++

                } else {
                    clearInterval(timer)
                    setShowCursor(false)
                    confetti({
                        particleCount: 50,
                        spread: 70,
                        origin: { y: 0.6 },
                        colors: ["#ff69b4", "#ff1493", "#9370db", "#8a2be2", "#ffd700"],
                    })
                }
            }, 30)

            return () => clearInterval(timer)
        }
    }, [showText, letterText])

    // Auto-scroll to bottom while the letter is being typed
    useEffect(() => {
        const el = scrollRef.current
        if (el) {
            // scroll to bottom smoothly so newly typed lines are visible
            el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
        }
    }, [currentText])

    const handleOpenLetter = () => {
        setIsOpen(true)
        setTimeout(() => {
            setShowText(true)
        }, 800)
    }

    const handleReset = () => {
        setIsOpen(false)
        setShowText(false)
        setCurrentText("")
        setShowCursor(true)
    }

    return (
        <motion.div
            className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-4xl w-full">
                <motion.div
                    className="text-center mb-8"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <h1 className="text-4xl md:text-6xl py-1 md:py-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-4">
                        A Special Letter
                    </h1>
                    <p className="text-lg text-purple-300">Just for you, on your special day 💌</p>
                </motion.div>

                <motion.div
                    className="relative w-full h-full flex justify-center "
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        delay: 0.5,
                        type: "spring",
                        stiffness: 200,
                    }}
                >
                    <AnimatePresence mode="wait">
                        {!isOpen ? (
                            <motion.div
                                key="envelope"
                                className="relative cursor-pointer"
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleOpenLetter}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ rotateX: -90, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="w-80 h-52 bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl shadow-2xl border-2 border-pink-300 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-26 bg-gradient-to-br from-pink-300 to-purple-300 transform origin-top"></div>
                                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-br from-pink-100 to-purple-100"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Mail className="w-16 h-16 text-pink-500" />
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <Heart className="w-6 h-6 text-red-500 fill-current" />
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <Sparkles className="w-6 h-6 text-yellow-500" />
                                    </div>
                                    <motion.div
                                        className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-pink-700 text-base font-semibold"
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        Click to open
                                    </motion.div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="letter"
                                className="w-full max-w-2xl rounded-2xl shadow-2xl border-2 border-pink-300 p-8 relative transition-all"
                                initial={{ rotateX: -90, opacity: 0 }}
                                animate={{ rotateX: 0, opacity: 1 }}
                                exit={{ opacity: 0, scale: 0.2 }}
                                transition={{ duration: 0.8, type: "spring" }}
                                style={{
                                    background:
                                        "linear-gradient(135deg, #fce7f3 0%, #fae8ff 25%, #e0e7ff 50%, #fdf2f8 75%, #fce7f3 100%)",
                                }}
                            >
                                <div className="text-center mb-6">
                                    <motion.div
                                        className="inline-block"
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    >
                                        <Heart className="w-12 h-12 text-red-500 fill-current mx-auto mb-3" />
                                    </motion.div>
                                </div>

                                <div ref={scrollRef} className="min-h-72 max-h-72 overflow-y-auto text-gray-700 leading-relaxed">
                                    {showText && (
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-3 mr-2 ">
                                            <div className="whitespace-pre-wrap font-cute">
                                                {currentText}
                                                {showCursor && (
                                                    <motion.span
                                                        className="inline-block w-0.5 h-4 bg-purple-600 ml-1"
                                                        animate={{ opacity: [0, 1, 0] }}
                                                        transition={{ duration: 0.8, repeat: Infinity }}
                                                    />
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </div>

                                {currentText === letterText && (
                                    <motion.div
                                        className="text-center mt-6"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1 }}
                                    >
                                        <button
                                            onClick={handleReset}
                                            className="inline-flex items-center gap-2 bg-white/60 text-pink-600 font-medium border border-pink-400 px-5 py-2 rounded-full hover:bg-pink-100 transition-all"
                                        >
                                            <RotateCcw className="w-4 h-4" />
                                            Read Again
                                        </button>
                                    </motion.div>
                                )}

                                <div className="absolute top-4 left-4">
                                    <Sparkles className="w-6 h-6 text-yellow-500" />
                                </div>
                                <div className="absolute top-4 right-4">
                                    <Heart className="w-6 h-6 text-rose-500 fill-current" />
                                </div>
                                <div className="absolute bottom-4 left-4">
                                    <Heart className="w-6 h-6 text-pink-500 fill-current" />
                                </div>
                                <div className="absolute bottom-4 right-4">
                                    <Sparkles className="w-6 h-6 text-purple-500" />
                                </div>
                            </motion.div>

                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </motion.div>
    )
}
