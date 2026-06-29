import React, { useEffect, useRef, useState } from 'react';

interface ClickRipple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  color: string;
}

interface BurstParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
  decay: number;
}

export default function ThreeDBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0, targetX: 0, targetY: 0, clientX: 0, clientY: 0 });
  const ripplesRef = useRef<ClickRipple[]>([]);
  const burstsRef = useRef<BurstParticle[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates to [-1, 1] for 3D camera
      const targetX = (e.clientX / window.innerWidth) * 2 - 1;
      const targetY = (e.clientY / window.innerHeight) * 2 - 1;
      setMouse((prev) => ({ 
        ...prev, 
        targetX, 
        targetY,
        clientX: e.clientX,
        clientY: e.clientY
      }));
    };

    const handleMouseClick = (e: MouseEvent) => {
      const clickX = e.clientX;
      const clickY = e.clientY;

      // Add elegant expanding ripple
      const mainColor = Math.random() > 0.5 ? '#00D1FF' : '#7C3AED';
      ripplesRef.current.push({
        x: clickX,
        y: clickY,
        radius: 0,
        maxRadius: 220,
        alpha: 1.0,
        color: mainColor,
      });

      // Add burst particles
      const burstCount = 18;
      for (let i = 0; i < burstCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 2;
        burstsRef.current.push({
          x: clickX,
          y: clickY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 3 + 1.5,
          alpha: 1.0,
          color: Math.random() > 0.4 ? '#00D1FF' : Math.random() > 0.5 ? '#7C3AED' : '#2563EB',
          decay: Math.random() * 0.02 + 0.015,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleMouseClick);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleMouseClick);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Handle resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // 3D Point Projection parameters
    const FOV = 280;
    
    // Generate 3D Holographic particles
    const particleCount = 100;
    const particles: { x: number; y: number; z: number; size: number; speed: number; color: string }[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 1600,
        y: (Math.random() - 0.5) * 1200,
        z: Math.random() * 1200 + 100,
        size: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.8 + 0.3,
        color: Math.random() > 0.4 ? '#00D1FF' : '#7C3AED',
      });
    }

    // 3D Wireframe structural nodes (Futuristic floating runway structure)
    const nodeCount = 16;
    const nodes: { x: number; y: number; z: number }[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: (Math.sin((i / nodeCount) * Math.PI * 2) * 240),
        y: (Math.cos((i / nodeCount) * Math.PI * 2) * 240),
        z: (i % 2 === 0 ? 300 : 700),
      });
    }

    // Curated Ambient Flowing Orbs (Slow moving background shapes)
    const orbs = [
      { x: width * 0.2, y: height * 0.3, vx: 0.3, vy: 0.2, radius: 450, color: 'rgba(76, 29, 149, 0.22)' }, // Dark Purple
      { x: width * 0.8, y: height * 0.7, vx: -0.2, vy: 0.3, radius: 500, color: 'rgba(37, 99, 235, 0.16)' }, // Electric Blue
      { x: width * 0.5, y: height * 0.5, vx: 0.15, vy: -0.25, radius: 400, color: 'rgba(124, 58, 237, 0.18)' }, // Neon Violet
    ];

    // Current mouse tracking interpolation
    let currentMouseX = 0;
    let currentMouseY = 0;
    let actualMouseX = 0;
    let actualMouseY = 0;

    // Animation Loop
    const render = () => {
      // Clear with elegant futuristic premium deep black (#050505)
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      const time = Date.now() * 0.0004;

      // 1. Draw Flowing Luxury Ambient Gradients
      ctx.globalCompositeOperation = 'screen';
      orbs.forEach((orb) => {
        // Move orbs with continuous organic float
        orb.x += orb.vx;
        orb.y += orb.vy;

        // Boundary checks with elegant bounce
        if (orb.x < 0 || orb.x > width) orb.vx *= -1;
        if (orb.y < 0 || orb.y > height) orb.vy *= -1;

        // Draw radial gradient for flowing luxury glow
        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalCompositeOperation = 'source-over';

      // Dampened camera movement for luxury feel
      currentMouseX += (mouse.targetX - currentMouseX) * 0.05;
      currentMouseY += (mouse.targetY - currentMouseY) * 0.05;
      
      // Interpolate mouse coordinates for hover glow effect
      actualMouseX += (mouse.clientX - actualMouseX) * 0.08;
      actualMouseY += (mouse.clientY - actualMouseY) * 0.08;

      const cameraX = currentMouseX * 100;
      const cameraY = currentMouseY * 100;

      // 2. Interactive Cursor Hover Glow
      const cursorGlow = ctx.createRadialGradient(actualMouseX, actualMouseY, 0, actualMouseX, actualMouseY, 180);
      cursorGlow.addColorStop(0, 'rgba(0, 209, 255, 0.08)');
      cursorGlow.addColorStop(0.5, 'rgba(124, 58, 237, 0.03)');
      cursorGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = cursorGlow;
      ctx.beginPath();
      ctx.arc(actualMouseX, actualMouseY, 180, 0, Math.PI * 2);
      ctx.fill();

      // 3. Draw Holographic Starfield Particles with 3D projection
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        
        // Move particles forward on Z-axis (towards camera)
        p.z -= p.speed;
        if (p.z <= 10) {
          p.z = 1200; // Reset particle back to the distance
          p.x = (Math.random() - 0.5) * 1600;
          p.y = (Math.random() - 0.5) * 1200;
        }

        // Apply dynamic depth offset using camera orientation
        const rx = p.x - cameraX;
        const ry = p.y - cameraY;

        // Perspective projection calculation
        const scale = FOV / p.z;
        const screenX = width / 2 + rx * scale;
        const screenY = height / 2 + ry * scale;

        if (screenX >= 0 && screenX <= width && screenY >= 0 && screenY <= height) {
          const alpha = Math.min(1, (1200 - p.z) / 400); // Fade out if too close or too far
          ctx.beginPath();
          ctx.arc(screenX, screenY, p.size * scale * 0.8, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = alpha * 0.45;
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1.0;

      // 4. Draw Interactive 3D Wireframe Structure in the center
      const projectedNodes: { x: number; y: number; active: boolean }[] = [];

      for (let i = 0; i < nodeCount; i++) {
        const node = nodes[i];

        // Apply elegant 3D rotation matrix over time
        const cosY = Math.cos(time);
        const sinY = Math.sin(time);
        const cosX = Math.cos(time * 0.4);
        const sinX = Math.sin(time * 0.4);

        let rx = node.x * cosY - node.z * sinY;
        let rz = node.x * sinY + node.z * cosY;
        let ry = node.y * cosX - rz * sinX;
        rz = node.y * sinX + rz * cosX;

        // Apply camera offsets
        rx -= cameraX;
        ry -= cameraY;
        const finalZ = rz + 650; // Offset on Z to be inside comfortable vision field

        const scale = FOV / finalZ;
        const screenX = width / 2 + rx * scale;
        const screenY = height / 2 + ry * scale;

        projectedNodes.push({ x: screenX, y: screenY, active: finalZ > 100 });
      }

      // Draw wireframe connecting links
      ctx.strokeStyle = 'rgba(0, 209, 255, 0.08)';
      ctx.lineWidth = 1;
      for (let i = 0; i < nodeCount; i++) {
        const n1 = projectedNodes[i];
        if (!n1.active) continue;

        const n2 = projectedNodes[(i + 1) % nodeCount];
        const n3 = projectedNodes[(i + 2) % nodeCount];

        if (n2.active) {
          ctx.beginPath();
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(n2.x, n2.y);
          ctx.stroke();
        }

        if (n3.active && i % 2 === 0) {
          ctx.strokeStyle = 'rgba(124, 58, 237, 0.06)';
          ctx.beginPath();
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(n3.x, n3.y);
          ctx.stroke();
          ctx.strokeStyle = 'rgba(0, 209, 255, 0.08)';
        }

        // Draw structural hub centers
        ctx.fillStyle = i % 2 === 0 ? '#00D1FF' : '#7C3AED';
        ctx.beginPath();
        ctx.arc(n1.x, n1.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // 5. Draw Interactive Click Ripples
      ripplesRef.current.forEach((ripple, index) => {
        ripple.radius += (ripple.maxRadius - ripple.radius) * 0.06; // Spring-like expand
        ripple.alpha -= 0.02; // Fade out

        if (ripple.alpha <= 0) {
          ripplesRef.current.splice(index, 1);
          return;
        }

        ctx.strokeStyle = ripple.color;
        ctx.lineWidth = 2;
        ctx.globalAlpha = ripple.alpha;
        
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.stroke();

        // Subtle secondary outer ring
        ctx.strokeStyle = '#2563EB';
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius * 0.85, 0, Math.PI * 2);
        ctx.stroke();
      });
      ctx.globalAlpha = 1.0;

      // 6. Draw Particle Bursts
      burstsRef.current.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.95; // Drag friction decelerates particles
        p.vy *= 0.95;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          burstsRef.current.splice(index, 1);
          return;
        }

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1.0;

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [mouse.targetX, mouse.targetY, mouse.clientX, mouse.clientY]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: 'normal' }}
    />
  );
}

