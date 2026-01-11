import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-nawasena-brown text-nawasena-cream/60 px-6 md:px-12 py-24 rounded-t-3xl md:rounded-t-[3rem] mt-12 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between gap-16 relative z-10">

                {/* Left Column: CTA */}
                <div className="max-w-2xl">
                    <h2 className="text-4xl md:text-6xl font-medium leading-[1.1] mb-12 text-nawasena-cream">
                        Turning waste into value. Restoring  land. Building resilient food system.
                    </h2>
                    <button className="bg-nawasena-lime text-nawasena-brown px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform">
                        Get in touch
                    </button>
                </div>

                {/* Right Column: Links */}
                <div className="flex flex-col md:w-1/3 gap-12 text-nawasena-cream/60">
                    <div className="flex flex-col gap-4">
                        <a href="#" className="text-nawasena-cream hover:text-nawasena-lime transition-colors">Home</a>
                        <a href="#" className="hover:text-nawasena-cream transition-colors">Innovation</a>
                        <a href="#" className="hover:text-white transition-colors">Advisory</a>
                        <a href="#" className="hover:text-white transition-colors">About</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                    </div>

                    <div className="flex flex-col gap-4">
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    </div>

                    <div className="mt-12 text-sm max-w-xs">
                        <p>PT Nawasena Natura Bijana </p>
                        {/*<p>Indonesia</p>*/}
                        <p className="mt-4">© {new Date().getFullYear()} Nawasena ✻ healing land, growing futures  </p>
                    </div>
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-blue-900/30 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none" />
        </footer>
    );
};

export default Footer;
