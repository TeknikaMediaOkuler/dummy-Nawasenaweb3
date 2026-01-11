import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MoveRight, ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
    {
        title: "Technology Innovation",
        description: [
            "Proprietary pyrolysis units designed for smallholder use and small-business use",
            "Converts coffee husks, rice husks, pruned branches, and palm oil waste into premium biochar.",
            "Equipment produces biochar that meets IBI international quality standards.",
            "Farmer-friendly design with built-in training and technical support."
        ],
        tags: ["Biochar", "Pyrolysis", "Agri-tech"]
    },
    {
        title: "Strategic Advisory",
        description: [
            "Climate and waste management strategy for agricultural value chains.",
            "Investment readiness support for sustainable agriculture ventures.",
            "Facility design for organic fertilizer and biochar production.",
            "Carbon and regenerative agriculture positioning for brands."
        ],
        tags: ["Workshops", "Team Building"]
    },
];

const Services = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentClient, setCurrentClient] = useState(0);

    const clients = [
        { name: "Impact Hub", image: "https://placehold.co/400x300/f3f4f6/1f2937?text=Impact+Hub" },
        { name: "Octant", image: "https://placehold.co/400x300/f3f4f6/1f2937?text=Octant" },
        { name: "WWF", image: "https://placehold.co/400x300/f3f4f6/1f2937?text=WWF" },
        { name: "ENS", image: "https://placehold.co/400x300/f3f4f6/1f2937?text=ENS" },
    ];

    const nextClient = () => {
        setCurrentClient((prev) => (prev + 1) % clients.length);
    };

    const prevClient = () => {
        setCurrentClient((prev) => (prev - 1 + clients.length) % clients.length);
    };

    return (
        <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
            <h2 className="text-sm font-medium uppercase tracking-wide opacity-50 mb-12">Our Offerings</h2>

            <div className="flex flex-col border-t border-black/10">
                {services.map((service, index) => (
                    <div
                        key={index}
                        id={index === 0 ? "innovation" : index === 1 ? "advisory" : undefined}
                        className="border-b border-nawasena-brown/10 transition-colors hover:bg-nawasena-brown/5 cursor-pointer group scroll-mt-32"
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    >
                        <div className="py-8 md:py-12 flex justify-between items-center">
                            <h3 className="text-2xl md:text-4xl font-medium group-hover:pl-4 transition-all duration-300">
                                {service.title}
                            </h3>
                            <motion.div
                                animate={{ rotate: activeIndex === index ? 90 : 0 }}
                                className="opacity-40"
                            >
                                <MoveRight className="w-6 h-6 md:w-8 md:h-8" />
                            </motion.div>
                        </div>

                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="pb-12 pl-0 md:pl-4 max-w-2xl text-lg md:text-xl leading-relaxed opacity-80">
                                        {Array.isArray(service.description) ? (
                                            <ul className="list-disc pl-5 space-y-2">
                                                {service.description.map((point, i) => (
                                                    <li key={i}>{point}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p>{service.description}</p>
                                        )}
                                        <div className="mt-6 flex gap-3">
                                            {service.tags.map(tag => (
                                                <span key={tag} className="text-xs border border-nawasena-brown/20 px-3 py-1 rounded-full uppercase tracking-wider">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>

            {/* Where we've worked Client Carousel */}
            <div className="mt-32">
                <h2 className="text-sm font-medium uppercase tracking-wide opacity-50 mb-12">Where we've worked</h2>

                {/* Desktop View: Grid (No buttons) */}
                <div className="hidden md:grid grid-cols-4 gap-8">
                    {clients.map((client, index) => (
                        <div key={index} className="group cursor-default">
                            <div className="aspect-[4/3] bg-zinc-100 mb-6 overflow-hidden rounded-lg border border-black/5">
                                <img src={client.image} alt={client.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" />
                            </div>
                            <h3 className="text-xl font-medium text-center md:text-left opacity-80 group-hover:opacity-100 transition-opacity">{client.name}</h3>
                        </div>
                    ))}
                </div>

                {/* Mobile View: Carousel (With buttons) */}
                <div className="md:hidden relative px-4">
                    <div className="overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentClient}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="group"
                            >
                                <div className="aspect-[4/3] bg-zinc-100 mb-6 overflow-hidden rounded-lg border border-black/5">
                                    <img src={clients[currentClient].image} alt={clients[currentClient].name} className="w-full h-full object-cover grayscale-0" />
                                </div>
                                <h3 className="text-xl font-medium text-center">{clients[currentClient].name}</h3>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex justify-center gap-6 mt-8">
                        <button onClick={prevClient} className="p-3 border border-black/10 rounded-full hover:bg-black hover:text-white transition-colors active:scale-95">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button onClick={nextClient} className="p-3 border border-black/10 rounded-full hover:bg-black hover:text-white transition-colors active:scale-95">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
