import { useEffect, useRef } from "react";
import * as THREE from "three";

export const BackgroundGradientAnimation4: React.FC<{ className?: string }> = ({ className }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mountElement = mountRef.current; // Store ref in a local variable

    if (!mountElement) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountElement.appendChild(renderer.domElement);

    const fragmentShader = `
      varying vec2 vUv;
      uniform float uTime;

      void main() {
        vec3 color1 = vec3(0.07, 0.44, 1.0);
        vec3 color2 = vec3(0.86, 0.29, 1.0);
        vec3 color3 = vec3(0.39, 0.86, 1.0);

        float gradient = sin(vUv.x * 4.0 + uTime * 0.5) * 0.5 + 0.5;
        vec3 color = mix(color1, color2, gradient);
        color = mix(color, color3, sin(uTime * 0.3) * 0.5 + 0.5);
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: { uTime: { value: 0 } },
    });

    const planeGeometry = new THREE.PlaneGeometry(10, 10);
    const backgroundMesh = new THREE.Mesh(planeGeometry, material);
    scene.add(backgroundMesh);

    const animate = () => {
      material.uniforms.uTime.value += 0.05;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountElement) {
        mountElement.removeChild(renderer.domElement);
      }
    };
  }, []); // Dependency array should be empty

  return <div ref={mountRef} className={`absolute top-0 left-0 w-full h-full ${className}`} />;
};
