'use client';

export default function ImageScroller() {
    return (
        <div className="relative h-screen">
            <img
                src="/images/image1.jpg"
                alt="Showcase"
                className="w-full h-full object-cover brightness-90"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center px-12">
                <h1 className="text-7xl font-light tracking-wide text-white/90 animate-fade-in">
                    Pawel
                </h1>
                <h1 className="text-7xl font-light tracking-wide text-white/90 animate-fade-in">
                    Migdał
                </h1>
            </div>
        </div>
    );
} 