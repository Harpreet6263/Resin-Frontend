"use client";

import { useEffect, useRef } from "react";
import io from "socket.io-client";
import Matter from "matter-js";
import { motion } from "motion/react"

const width = 600;
const height = 400;
const SOCKET_URL =
    process.env.NEXT_PUBLIC_URL;

export default function Game() {
    const gameRef = useRef(null);
    const socketRef = useRef(null);
    const engineRef = useRef(Matter.Engine.create());
    const ballRef = useRef(null);
    const playersRef = useRef({});
    const connectedRef = useRef(false);

    useEffect(() => {
        const { Engine, Render, World, Bodies, Body } = Matter;
        const engine = engineRef.current;

        const render = Render.create({
            element: gameRef.current,
            engine,
            options: {
                width,
                height,
                wireframes: false,
                background: "transparent",
            },
        });

        // --- Ball, goal, and walls ---
        const ball = Bodies.circle(300, 200, 15, {
            restitution: 0.9,
            frictionAir: 0.01,
            render: { fillStyle: "#ff9f43", strokeStyle: "#ffa502", lineWidth: 3 },
        });

        const goal = Bodies.rectangle(570, 30, 50, 50, {
            isStatic: true,
            render: {
                fillStyle: "rgba(255, 215, 0, 0.25)",
                strokeStyle: "#FFD700",
                lineWidth: 3,
            },
        });

        const walls = [
            Bodies.rectangle(300, 0, 600, 10, { isStatic: true }),
            Bodies.rectangle(300, 400, 600, 10, { isStatic: true }),
            Bodies.rectangle(0, 200, 10, 400, { isStatic: true }),
            Bodies.rectangle(600, 200, 10, 400, { isStatic: true }),
        ];

        World.add(engine.world, [ball, goal, ...walls]);
        ballRef.current = ball;

        Engine.run(engine);
        Render.run(render);

        // --- Mouse-based push interaction ---
        const handleMove = (e) => {
            if (!connectedRef.current) return;
            const rect = render.canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            socketRef.current?.emit("cursor", { x, y });

            // Push logic
            const dx = ball.position.x - x;
            const dy = ball.position.y - y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 35) {
                const nx = dx / dist;
                const ny = dy / dist;
                const force = 0.0015; // gentle push
                socketRef.current?.emit("touchHit", { nx, ny, force });
            }
        };

        render.canvas.addEventListener("mousemove", handleMove);

        // --- Socket connect/disconnect on visibility ---
        const connectSocket = () => {
            if (connectedRef.current) return;
            connectedRef.current = true;
            const socket = io(SOCKET_URL);
            socketRef.current = socket;

            socket.on("init", (data) => (playersRef.current = data.players));
            socket.on("players", (data) => (playersRef.current = data));

            socket.on("ball", (pos) => {
                const lerp = (a, b, t) => a + (b - a) * t;
                Body.setPosition(ball, {
                    x: lerp(ball.position.x, pos.x, 0.3),
                    y: lerp(ball.position.y, pos.y, 0.3),
                });
            });

            socket.on("goal", () => {
                const flash = document.getElementById("goal-flash");
                if (flash) {
                    flash.style.opacity = 1;
                    setTimeout(() => (flash.style.opacity = 0), 500);
                }
            });
        };

        const disconnectSocket = () => {
            if (!connectedRef.current || !socketRef.current) return;
            socketRef.current.disconnect();
            socketRef.current = null;
            connectedRef.current = false;
            playersRef.current = {};
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) connectSocket();
                    else disconnectSocket();
                });
            },
            { threshold: 0.25 }
        );

        if (gameRef.current) observer.observe(gameRef.current);

        // --- Draw cursors overlay ---
        const ctx = render.context;
        (function drawOverlay() {
            const players = playersRef.current;
            for (const id in players) {
                const p = players[id];
                ctx.beginPath();
                ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
                ctx.fillStyle = p.color || "#1e90ff";
                ctx.shadowColor = p.color || "#1e90ff";
                ctx.shadowBlur = 12;
                ctx.fill();
            }
            ctx.shadowBlur = 0;
            requestAnimationFrame(drawOverlay);
        })();

        return () => {
            observer.disconnect();
            render.canvas.removeEventListener("mousemove", handleMove);
            disconnectSocket();
            Matter.Render.stop(render);
            Matter.Engine.clear(engine);
            render.canvas.remove();
        };
    }, []);

    return (
        <div className="hidden sm:flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-slate-900 to-gray-800 relative overflow-hidden">
            {/* Neon Frame */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.1)] border border-gray-700 p-4 backdrop-blur-md"
            >
                <div
                    ref={gameRef}
                    className="relative rounded-lg overflow-hidden shadow-[0_0_25px_rgba(255,159,67,0.3)]"
                    style={{
                        width: `${width}px`,
                        height: `${height}px`,
                        background:
                            "radial-gradient(circle at center, #1e1e1e 0%, #0c0c0c 100%)",
                    }}
                ></div>

                {/* Glow flash on goal */}
                <div
                    id="goal-flash"
                    className="absolute inset-0 bg-yellow-400 opacity-0 transition-opacity duration-500 pointer-events-none"
                ></div>
            </motion.div>

            {/* Title overlay */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 0.8, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ delay: 0.3 }}
                className="absolute top-16 text-3xl font-bold text-white/95 drop-shadow-lg"
            >
                ⚽ Multiplayer Arena
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.9 }}
                className="text-gray-300 mt-4 text-sm ">
                Move your mouse near the ball to push it toward the goal.
            </motion.p>
        </div>
    );
}
