import { useEffect, useRef } from 'react';
import * as THREE from 'three';
export default function World({
  section = 0,
  reducedMotion = false,
  onReady,
  accent = '#c6ff4d',
}) {
  const mountRef = useRef(null),
    stateRef = useRef({ section, reducedMotion, accent });
  useEffect(() => {
    stateRef.current = { section, reducedMotion, accent };
  }, [section, reducedMotion, accent]);
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      mount.classList.add('webgl-fallback');
      onReady?.(false);
      return;
    }
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.6));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);
    renderer.domElement.setAttribute('aria-hidden', 'true');
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080907, 0.027);
    const camera = new THREE.PerspectiveCamera(
      43,
      mount.clientWidth / mount.clientHeight,
      0.1,
      180,
    );
    camera.position.z = 19;
    const group = new THREE.Group();
    scene.add(group);
    const count = innerWidth < 700 ? 750 : 1600,
      positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 34,
        a = Math.random() * Math.PI * 2;
      positions[i * 3] = Math.cos(a) * r;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 27;
      positions[i * 3 + 2] = Math.sin(a) * r - Math.random() * 30;
    }
    const pg = new THREE.BufferGeometry();
    pg.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const points = new THREE.Points(
      pg,
      new THREE.PointsMaterial({
        color: 0xc6ff4d,
        size: 0.055,
        transparent: true,
        opacity: 0.78,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    group.add(points);
    const knotMat = new THREE.MeshBasicMaterial({
      color: 0xc6ff4d,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const knot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(2.2, 0.018, 260, 8, 2, 5),
      knotMat,
    );
    knot.position.set(1.6, 0.25, 0);
    group.add(knot);
    const ringA = new THREE.Mesh(
      new THREE.TorusGeometry(3.4, 0.008, 2, 160),
      new THREE.MeshBasicMaterial({ color: 0x8cae5c, transparent: true, opacity: 0.52 }),
    );
    ringA.rotation.set(1.15, 0.2, 0.35);
    ringA.position.set(1.6, 0.25, -0.6);
    group.add(ringA);
    const ringB = new THREE.Mesh(
      new THREE.TorusGeometry(4.4, 0.006, 2, 160),
      new THREE.MeshBasicMaterial({ color: 0x5c713d, transparent: true, opacity: 0.6 }),
    );
    ringB.rotation.set(0.5, 1.1, 0.9);
    ringB.position.copy(ringA.position);
    group.add(ringB);
    const tunnel = new THREE.Group();
    for (let i = 0; i < 17; i++) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(5.5 + i * 0.48, 0.005, 2, 100),
        new THREE.MeshBasicMaterial({
          color: i % 3 === 0 ? 0xc6ff4d : 0x647a43,
          transparent: true,
          opacity: 0.24 - i * 0.008,
        }),
      );
      ring.position.z = -i * 1.75 - 7;
      ring.scale.y = 0.72;
      tunnel.add(ring);
    }
    scene.add(tunnel);
    const gridPts = [];
    for (let x = -45; x <= 45; x += 3) gridPts.push(x, -7.5, -55, x, -7.5, 14);
    for (let z = -55; z <= 14; z += 3) gridPts.push(-45, -7.5, z, 45, -7.5, z);
    const gg = new THREE.BufferGeometry();
    gg.setAttribute('position', new THREE.Float32BufferAttribute(gridPts, 3));
    scene.add(
      new THREE.LineSegments(
        gg,
        new THREE.LineBasicMaterial({
          color: 0x314323,
          transparent: true,
          opacity: 0.25,
        }),
      ),
    );
    const pointer = { x: 0, y: 0 },
      target = { x: 0, y: 0 };
    const move = (e) => {
      target.x = (e.clientX / innerWidth - 0.5) * 1.5;
      target.y = (e.clientY / innerHeight - 0.5) * -0.8;
    };
    window.addEventListener('pointermove', move, { passive: true });
    const resize = () => {
      if (!mount.clientWidth || !mount.clientHeight) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', resize);
    const clock = new THREE.Clock();
    let frame,
      alive = true;
    const animate = () => {
      if (!alive) return;
      frame = requestAnimationFrame(animate);
      const t = clock.getElapsedTime(),
        s = stateRef.current.section,
        reduce = stateRef.current.reducedMotion,
        accent = stateRef.current.accent;
      knotMat.color.set(accent);
      points.material.color.set(accent);
      ringA.material.color.set(accent);
      pointer.x += (target.x - pointer.x) * 0.035;
      pointer.y += (target.y - pointer.y) * 0.035;
      knot.rotation.x = 0.2 + (reduce ? 0 : t * 0.11);
      knot.rotation.y = reduce ? 0.2 : t * 0.16;
      ringA.rotation.z = 0.35 + (reduce ? 0 : t * 0.035);
      ringB.rotation.x = 0.5 + (reduce ? 0 : Math.sin(t * 0.14) * 0.13);
      points.rotation.y = reduce ? 0 : t * 0.006;
      tunnel.rotation.z = reduce ? 0 : t * 0.004;
      group.rotation.y += (pointer.x * 0.12 - group.rotation.y) * 0.018;
      group.rotation.x += (pointer.y * 0.09 - group.rotation.x) * 0.018;
      camera.position.z +=
        ([19, 15.5, 17.5, 21][Math.min(s, 3)] - camera.position.z) * 0.018;
      camera.position.x +=
        (pointer.x * 1.1 + (s === 1 ? -1.2 : s === 2 ? 1 : 0) - camera.position.x) *
        0.018;
      camera.position.y +=
        (pointer.y * 0.65 + (s === 3 ? 0.6 : 0) - camera.position.y) * 0.018;
      knotMat.opacity = [0.7, 0.9, 0.52, 0.78][Math.min(s, 3)];
      renderer.render(scene, camera);
    };
    animate();
    onReady?.(true);
    return () => {
      alive = false;
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('resize', resize);
      scene.traverse((o) => {
        o.geometry?.dispose?.();
        if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose());
        else o.material?.dispose?.();
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [onReady]);
  return (
    <div className="world-canvas" ref={mountRef} aria-hidden="true">
      <div className="fallback-world" />
    </div>
  );
}
