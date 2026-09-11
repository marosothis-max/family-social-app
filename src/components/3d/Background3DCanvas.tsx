'use client'

import { useEffect, useRef } from 'react'

export default function Background3DCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !canvasRef.current) return

    // Importar Three.js dinámicamente
    import('three').then((THREE) => {
      const canvas = canvasRef.current!

      // Crear escena
      const scene = new THREE.Scene()
      scene.background = new THREE.Color(0x000000)
      scene.fog = new THREE.Fog(0x000000, 1, 15)

      // Crear cámara
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )
      camera.position.z = 5

      // Crear renderer
      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
      })
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

      // Crear geometrías animadas
      const geometry = new THREE.IcosahedronGeometry(1, 1)
      const material = new THREE.MeshPhongMaterial({
        color: 0x00ffff,
        wireframe: true,
        emissive: 0x00ffff,
        emissiveIntensity: 0.2,
      })
      const mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)

      // Crear partículas
      const particlesGeometry = new THREE.BufferGeometry()
      const particlesCount = 1000
      const posArray = new Float32Array(particlesCount * 3)

      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 20
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        color: 0xff00ff,
      })

      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
      scene.add(particlesMesh)

      // Luces
      const light1 = new THREE.PointLight(0x00ffff, 2, 100)
      light1.position.set(5, 5, 5)
      scene.add(light1)

      const light2 = new THREE.PointLight(0xff00ff, 2, 100)
      light2.position.set(-5, -5, -5)
      scene.add(light2)

      // Variables para animación
      let mouseX = 0
      let mouseY = 0

      // Mouse movement
      const handleMouseMove = (event: MouseEvent) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1
      }
      document.addEventListener('mousemove', handleMouseMove)

      // Resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }
      window.addEventListener('resize', handleResize)

      // Animación
      const clock = new THREE.Clock()
      let animationId: number

      function animate() {
        animationId = requestAnimationFrame(animate)

        const elapsedTime = clock.getElapsedTime()

        // Animar geometría principal
        mesh.rotation.x = elapsedTime * 0.3
        mesh.rotation.y = elapsedTime * 0.5
        mesh.scale.x = 1 + Math.sin(elapsedTime * 2) * 0.2
        mesh.scale.y = 1 + Math.cos(elapsedTime * 2) * 0.2
        mesh.scale.z = 1 + Math.sin(elapsedTime * 2) * 0.2

        // Animar partículas
        particlesMesh.rotation.y = elapsedTime * 0.1

        // Seguir mouse
        camera.position.x += (mouseX * 2 - camera.position.x) * 0.05
        camera.position.y += (mouseY * 2 - camera.position.y) * 0.05
        camera.lookAt(scene.position)

        // Animar luces
        light1.position.x = Math.sin(elapsedTime) * 5
        light1.position.z = Math.cos(elapsedTime) * 5

        light2.position.x = Math.cos(elapsedTime * 1.5) * 5
        light2.position.z = Math.sin(elapsedTime * 1.5) * 5

        renderer.render(scene, camera)
      }

      animate()

      // Cleanup
      return () => {
        cancelAnimationFrame(animationId)
        document.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('resize', handleResize)
        renderer.dispose()
      }
    })
  }, [])

  return <canvas ref={canvasRef} id="three-canvas" />
}
