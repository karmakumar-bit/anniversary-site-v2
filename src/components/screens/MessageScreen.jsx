"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ScreenContainer from "../ScreenContainer"

export default function MessageScreen() {
    const [showOverlay, setShowOverlay] = useState(false)
    const [showReplyButton, setShowReplyButton] = useState(false)
    const scrollRef = useRef(null)

    const romanticMessage = `My Dear Bestfriend,

From the moment we first met, I knew there was something special about you. Thank you for being my partner, my best friend, and my greatest love. Thank you for all the little moments that make up our big story the late-night conversations, truth & dare, and the quiet moments where we just exist together in perfect harmony.

Happy 1st Friendship Anniversary, Sneha❤️! 
Ek saal ho gaya aapki nonstop bak-bak😂, mood swings😵‍💫, random overthinking -aur main abhi tak alive hoon... miracle!😅 Kabhi kabhi aapke nakhre utne high ho jate hai ki kiya batao.. Jab bhi aapse gussa or naraaz hota hu toh fhir aapki smile ko dekhne se or baat karne se mai saara gussa ko hawa ho jata hai (means bhul jata hu). Kyuki maine promise kiya tha ki hum aapka sath kabhi nhi chorenge. I promise to support your dreams, to laugh with you, cry with you, and grow old with you. You are my today, my tomorrow, and my always.

Jab hum pehle baar mile toh mujhe bilkul idea nahi tha ki ek ladki itni pagal, itni cute, itni irritating aur 
itni important ban sakti hai ye sab mujhe FREE me mila, aur main ab tak return bhi nahi kar paaya. 😂 Par jitna aap irritate karti thi, utna hi aap care bhi karti thi. Thanks my daily entertainer, my emotional support, aur kabhi-kabhi meri dushman bhi. 
Thanks for being my first female friend (bestfriend) & also Pasandida aurat 😜.

But but but... Not every story gets the happy ending .🙂💔

Kabhi humari friendship sabse zyada special thi. Pehle roj baatein karte the, Har baat hum share karte the, bina soche samjhe ek-dusre ka saath dete the. Par shayad waqt ke saath hum badal gaye, ya phir humari priorities. Kabhi hum bina baat kiye reh nahi paate the, aur aaj baat karne ka reason bhi nahi milta. Main sirf itna chahta hu ki aap khush rahe, chahe aapko meri jarurat na bhi ho. Koi bura ehsaas nahi, sirf ek silent goodbye.

I wish I could tell you how much I miss you, but I don’t want to sound clingy or dramatic.
Kabhi lagta tha hum kabhi door nahi honge, par aaj waqt ne humare beech itni khamoshi daal di hai ki main khud ko hi samjha nahi paata, Har choti baat, har late-night baat — sab yaad aata hai.
Kabhi kabhi chat khol ke dekh leta hu… hoping aap message karenge… par wo notification kabhi aata hi nahi.
I miss my best friend… not just the person, but the feeling of being understood without saying a word.

Pehle hum ek-dusre ke liye bilkul strangers the… phir dheere-dheere baatein badhti gayi, hansi-mazak hua, trust build hua, aur ek waqt aaya jab aap sirf dost nahi, mere sabse close insaan ban gaye.
Woh daily chats, woh daily good night or radhe Krishna, woh “koi baat nahi, main hoon na” wala comfort sab kuch itna perfect lagta tha ki lagta tha yeh bond hamesha rahega.
Par pata nahi kaha se distance aa gya. Aur dheere-dheere hum silent hote gaye, chat kam hoti gayi, care chup-chap ho gayi, aur ek din realize hua ki jis insaan ko main sabse zyada jaanta tha, aaj usko dekhkar bhi kuch kehne ki himmat nahi hoti.
Aap ab bhi yaad aati hai par main bas chup rehta hu. Aap ab bhi special hai par main kuch bol nahi pata.
The journey of our story - Stranger>Friend>CloseFriend>Friend forever >Bestfriend 😍>Just Friend >Stranger again,🥹🥲
it's ended, but it was beautiful..

Aapne ye bhi notice nhi kiya ki kab maine aapse kuch bolna chhod diya and still maine intezaar kiya tumhare ek message ka ek call ka..
One day you're gonna miss meri ulti sidhi baatein and sara din bak bak karke dimag kharab karna..!! Because I know aap mere sath khush nhi the aur maine aapko bahut pareshan kiya lekin ab aur nhi ab finally main hamesha hamesha ke liye aapse dur ja raha hu..
Dear bestie😼😍..
Khyaal rakhna apna, Har koi mere jaisa nahi hoga..! GOOD BYE MY FAVORITE PERSON....

With all my love and devotion,
Your Forever Person 💕`;

    const handleCardClick = () => {
        setShowOverlay(true)
        setShowReplyButton(false)
        setTimeout(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollTop = 0
            }
        }, 50)
    }

    const closeOverlay = () => {
        setShowOverlay(false)
    }

    const handleScroll = () => {
        const container = scrollRef.current
        if (!container) return

        const bottom =
            container.scrollTop + container.clientHeight >= container.scrollHeight - 10

        if (bottom) {
            setShowReplyButton(true)
        }
    }

    const whatsappMessage =
        "Goodbye forever. Aaj se hamesha ke liye katti🤌🏻 mere😼 taraf se No always no 😤"

    const whatsappLink = `https://wa.me/916201456526?text=${encodeURIComponent(whatsappMessage)}`

    return (
        <ScreenContainer>
            <div className="w-full max-w-4xl mx-auto text-center relative">
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-4"
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        A Special Message For You
                    </motion.h1>
                </motion.div>

                <motion.div
                    className="relative group mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05, rotateY: 5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                        onClick={handleCardClick}
                        className="w-80 h-48 mx-auto bg-gradient-to-br from-pink-900/40 via-purple-900/40 to-pink-800/40 backdrop-blur-lg rounded-2xl border-2 border-pink-400/50 shadow-2xl relative overflow-hidden cursor-pointer">
                        
                        <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                        <div className="flex flex-col items-center justify-center h-full p-6">
                            <motion.div
                                className="text-6xl mb-4"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 5, -5, 0],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                💌
                            </motion.div>

                            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                For You, My Crush 😍
                            </h3>

                            <p className="text-purple-300 text-sm">Click to read my message</p>
                        </div>
                    </motion.div>
                </motion.div>

                <AnimatePresence>
                    {showOverlay && (
                        <motion.div
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: .5 }}
                            onClick={closeOverlay}
                        >
                            <motion.div
                                className="w-full max-w-2xl bg-gradient-to-b from-purple-950/50 via-black/90 to-pink-950/50 rounded-2xl shadow-2xl border-2 border-pink-400/40 p-8 relative"
                                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={closeOverlay}
                                    className="absolute top-4 right-4 text-pink-400 hover:text-pink-300 text-2xl"
                                >
                                    ×
                                </button>

                                <div className="text-center mb-6">
                                    <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                        Happy Anniversary!
                                    </h3>
                                    <p className="text-purple-300">This is just for you ♥</p>
                                </div>

                                {/* Scrollable Message */}
                                <div
                                    ref={scrollRef}
                                    onScroll={handleScroll}
                                    className="h-80 overflow-y-auto pr-4 mb-6"
                                    style={{
                                        scrollbarWidth: "thin",
                                        scrollbarColor: "rgba(236, 72, 153, 0.5) rgba(0, 0, 0, 0.2)",
                                    }}
                                >
                                    <div className="text-sm text-pink-100 leading-relaxed text-left whitespace-pre-line">
                                        {romanticMessage}
                                    </div>
                                </div>

                                {/* WhatsApp Reply Button — appears after scroll bottom */}
                                <AnimatePresence>
                                    {showReplyButton && (
                                        <motion.a
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            href={whatsappLink}
                                            target="_blank"
                                            className="block bg-green-500 text-white font-bold text-lg py-3 rounded-xl shadow-lg hover:bg-green-600 transition text-center"
                                        >
                                            Send Reply 
                                        </motion.a>
                                    )}
                                </AnimatePresence>

                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </ScreenContainer>
    )
                                }
