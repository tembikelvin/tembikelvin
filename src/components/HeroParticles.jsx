import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function HeroParticles() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // loadSlim efficiently loads the required core modules and shapes for performance.
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = {
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: { enable: true, mode: "grab" },
            },
            modes: {
                grab: { distance: 200, links: { opacity: 0.8, color: "#00d4ff" } },
            },
        },
        particles: {
            color: { value: "#0047ff" },
            links: { color: "#0047ff", distance: 150, enable: true, opacity: 0.3, width: 1 },
            move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: true, speed: 1, straight: false },
            number: { density: { enable: true, area: 800 }, value: 70 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
    };

    if (init) {
        return (
            <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'auto', overflow: 'hidden' }}>
              <Particles id="tsparticles" options={options} style={{ width: '100%', height: '100%' }} />
            </div>
        );
    }
    return null;
}
