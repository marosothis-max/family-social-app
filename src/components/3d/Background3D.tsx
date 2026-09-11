'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Background3D() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene
    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0x0a0a0f, 1, 15)

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mountRef.current.appendChild(renderer.domElement)

    // Geometría
    const geometry = new THREE.IcosahedronGeometry(0.8, 1)
    const material = new THREE.MeshPhongMaterial({
      color: 0x2563eb,
      wireframe: true,
      emissive: 0x2563eb,
      emissiveIntensity: 0.2,
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Partículas
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 500
    const posArray = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x6366f1,
    })
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Luces
    const light1 = new THREE.PointLight(0x2563eb, 2, 100)
    light1.position.set(5, 5, 5)
    scene.add(light1)

    const light2 = new THREE.PointLight(0x6366f1, 2, 100)
    light2.position.set(-5, -5, -5)
    scene.add(light2)

    // Animación
    const clock = new THREE.Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      mesh.rotation.x = elapsedTime * 0.15
      mesh.rotation.y = elapsedTime * 0.2
      particlesMesh.rotation.y = elapsedTime * 0.05

      light1.position.x = Math.sin(elapsedTime) * 3
      light1.position.z = Math.cos(elapsedTime) * 3

      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    animate()

    // Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-30"
    />
  )
}
