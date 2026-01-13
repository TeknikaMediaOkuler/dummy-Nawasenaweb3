import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const TeamMember = ({ name, title, image }) => (
    <div className="group cursor-default">
        <div className="aspect-[4/3] bg-zinc-100 mb-6 overflow-hidden rounded-2xl border border-black/5 relative">
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-5 h-5" />
            </div>
        </div>
        <h3 className="text-xl font-medium">{name}</h3>
        <p className="text-zinc-500 mt-1">{title}</p>
    </div>
);

const OurStory = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const textPart1 = (
        <p className="mb-6">
            Indonesia's agriculture sector faces a paradox: abundant organic waste and degraded soils exist side by side. Farmers burn crop residues while their soils grow weaker each season. We saw this not as a problem, but as an opportunity.
        </p>
    );

    const textPart2 = (
        <>
            <p className="mb-6">
                Nawasena builds solutions that convert agricultural waste into biochar—a powerful soil amendment that improves yields, sequesters carbon, and creates new income streams for farmers. We work directly with smallholder cooperatives, starting in Bali's coffee-growing regions, to prove that regenerative practices can be both profitable and practical.
            </p>
            <p>
                Our pilot with coffee farmers in Buleleng achieved IBI Class 2 certified biochar, measurable soil health improvements within one month, and the establishment of Indonesia's first farmer-owned biochar cooperative.
            </p>
        </>
    );

    return (
        <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
            {/* Our Story Section */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-12">
                <div className="md:col-span-3">
                    <span className="text-sm font-medium uppercase tracking-wide opacity-50 block sticky top-32">Our Story</span>
                </div>
                <div className="md:col-span-9 max-w-4xl">
                    <p className="text-xl md:text-3xl font-medium leading-[1.4] md:leading-[1.4] text-nawasena-brown mb-8">
                        Founded in 2024, we help small and medium businesses transition from conventional to regenerative agriculture—restoring soil health, one acre at a time.
                    </p>

                    {!isExpanded && (
                        <button
                            onClick={() => setIsExpanded(true)}
                            className="text-lg font-medium underline underline-offset-4 decoration-black/20 hover:decoration-black transition-all"
                        >
                            More of us
                        </button>
                    )}

                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.7, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="pt-8 text-lg md:text-2xl font-medium leading-[1.4] md:leading-[1.4] text-nawasena-brown">
                                    {textPart1}
                                    {textPart2}
                                </div>

                                <div className="mt-12 mb-24">
                                    <button className="bg-nawasena-brown text-nawasena-cream px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform flex items-center gap-2 group">
                                        Read Pilot Summary
                                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </button>
                                </div>

                                {/* The Management */}
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-32 border-t border-black/10 pt-24 -ml-0 md:-ml-[25%]">
                                    <div className="md:col-span-3">
                                        <span className="text-sm font-medium uppercase tracking-wide opacity-50 block sticky top-32">The Management</span>
                                    </div>
                                    <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                                        <TeamMember
                                            name="Libbis Sujessy"
                                            title="Yang Ngatur"
                                            image="https://placehold.co/600x450/e5e7eb/1f2937?text=CEO"
                                        />
                                        <TeamMember
                                            name="Supreme Leader"
                                            title="Yang Pusing"
                                            image="https://placehold.co/600x450/e5e7eb/1f2937?text=COO"
                                        />
                                    </div>
                                </div>

                                {/* The Team */}
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 border-t border-black/10 pt-24 -ml-0 md:-ml-[25%]">
                                    <div className="md:col-span-3">
                                        <span className="text-sm font-medium uppercase tracking-wide opacity-50 block sticky top-32">The Team</span>
                                    </div>
                                    <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                                        <TeamMember
                                            name="Prabha"
                                            title="Ngurus Tanah"
                                            image="https://placehold.co/600x450/e5e7eb/1f2937?text=Agronomist"
                                        />
                                        <TeamMember
                                            name="Siapa ini"
                                            title="Community Manager"
                                            image="https://placehold.co/600x450/e5e7eb/1f2937?text=Community"
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-center mt-24 mb-12">
                                    <button
                                        onClick={() => setIsExpanded(false)}
                                        className="text-lg font-medium underline underline-offset-4 decoration-black/20 hover:decoration-black transition-all"
                                    >
                                        Read Less
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
