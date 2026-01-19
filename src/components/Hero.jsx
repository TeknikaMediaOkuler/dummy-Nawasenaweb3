import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import HeroImage from '../assets/Images/Hero.jpg';

const Hero = () => {
    return (
        <section className="pt-32 pb-16 px-6 md:px-12 w-full max-w-[1400px] mx-auto min-h-screen flex flex-col justify-between">
            {/* Top Content */}
            <div className="flex flex-col gap-8">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm font-medium uppercase tracking-wide opacity-70"
                >
                    Innovation for Regenerative Agriculture
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] max-w-4xl text-nawasena-brown"
                >
                    We transform organic residues to heal the land.
                </motion.h1>

                {/*<motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <button className="flex items-center gap-3 bg-black text-white px-8 py-3 rounded-full hover:bg-zinc-800 transition-colors group">
                        <span className="text-lg">Let's talk</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>*/}
            </div>

            {/* Visual Abstract Element */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="mt-16 w-full h-[60vh] rounded-2xl overflow-hidden relative"
            >
                {/* <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-80 mix-blend-multiply filter blur-3xl scale-125 animate-pulse-slow"></div> */}
                {/* <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay"></div> */}
                <img
                    src={HeroImage}
                    alt="Organic Fertilizer"
                    className="w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/40 via-red-400/40 to-yellow-400/40 mix-blend-screen" /> */}
            </motion.div>
        </section>
    );
};

export default Hero;
