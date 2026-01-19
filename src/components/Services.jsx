import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MoveRight, ChevronLeft, ChevronRight } from 'lucide-react';
import ArabicaImage from '../assets/Images/Pilot Sites Arabica.jpg';
import RobustaImage from '../assets/Images/Pilot Sites at Robusta.JPG';
import InvestmentImage from '../assets/Images/Investment Readiness.jpg';
import EngineeringImage from '../assets/Images/Organic Fertilizer Website Asset.png';

const services = [
    {
        title: "Technology Innovation",
        intro: "We design proprietary equipment and process to produce high-quality agricultural inputs that meet rigorous international standards.",
        points: [
            "Custom formulation driven by soil and crop analysis for optimal results.",
            "Our flagship Mobile Pyrolysis Units (MPU) bring industrial-grade processing directly to the source (multi-feedstock capability), featuring an intuitive design and comprehensive technical support."
        ],
        tags: ["Biochar", "Pyrolysis", "Agri-tech"]
    },
    {
        title: "Strategic Advisory",
        intro: "We provide strategic climate and waste management advisory for stakeholders in the agriculture value chain seeking to integrate sustainable business practices and enhance brand value.",
        points: [
            "Comprehensive waste management and climate strategy development.",
            "Investment readiness support for sustainable agriculture ventures.",
            "Facility design for industrial-scale organic inputs (up to 25 tons/day).",
            "Carbon positioning and regenerative agriculture market strategy.",
            "Soil testing, quality certification, and data-driven recommendations."
        ],
        tags: ["Workshops", "Team Building"]
    },
];

const Services = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const featuredWork = [
        {
            title: "Box 1",
            content: "Pilot sites at Arabica Coffee Farm in Buleleng with Adena Coffee.",
            image: ArabicaImage
        },
        {
            title: "Box 2",
            content: "Pilot sites at Robusta Coffee Farm with Farmer Coops.",
            image: RobustaImage
        },
        {
            title: "Box 3",
            content: "Investment Readiness: Waste and Climate Strategy for a Local Coffee Brand",
            image: InvestmentImage
        },
        {
            title: "Box 4",
            content: "Basic engineering design for organic fertilizer facility",
            image: EngineeringImage
        }
    ];

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
                                    <div className="pb-12 pl-0 md:pl-4 w-full text-lg md:text-xl leading-relaxed opacity-80">
                                        <p className="mb-6 text-2xl">{service.intro}</p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            {service.points.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                        <div className="mt-6 flex gap-3 opacity-0 hidden">
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

            {/* Featured Work Grid */}
            <div className="mt-32">
                <h2 className="text-sm font-medium uppercase tracking-wide opacity-50 mb-12">Featured Work</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredWork.map((work, index) => (
                        <div key={index} className="group cursor-default">
                            <div className="aspect-[4/3] bg-zinc-100 mb-6 rounded-lg border border-black/5 overflow-hidden">
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                                />
                            </div>
                            {/* <h3 className="text-lg font-medium text-nawasena-brown mb-4">{work.title}</h3> */}
                            <p className="text-base leading-relaxed opacity-80 text-center">
                                {work.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
