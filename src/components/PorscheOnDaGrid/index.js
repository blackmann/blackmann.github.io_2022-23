import React, { useRef } from 'react'
import styles from './styles.module.scss'
import { WebGLRenderer, Scene, PerspectiveCamera } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function setUp(canvas, canvasContainer, onLoad) {

  function configureViewport() {
    const { width } = canvasContainer.getBoundingClientRect()
    const height = width * 3/4

    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio))
  }

  const scene = new Scene()
  const camera = new PerspectiveCamera(75, 4/3)
  const renderer = new WebGLRenderer({ canvas })

  configureViewport()

  const gltfLoader = new GLTFLoader()
  gltfLoader.load('/gltfs/porsche_911_930_turbo/mesh.gltf', (gltf) => {
    onLoad()
    tick()
  })

  function tick() {
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
  }
}

export default function PorscheOnDaGrid() {
  const [canvasContainer, canvas, loadingOverlay] = [
    useRef(),
    useRef(),
    useRef(),
  ]

  React.useEffect(() => {
    return setUp(canvas.current, canvasContainer.current, () => {
      canvas.current.classList.toggle('hidden')
      loadingOverlay.current.classList.toggle('hidden')
    })
  }, [])

  return (
    <>
      <div className={styles.canvasContainer} ref={canvasContainer}>
        <canvas ref={canvas} className="hidden"/>
        <div className="loading-overlay" ref={loadingOverlay}>
          Loading…
        </div>
      </div>

      <button className="button button--primary">Enter Fullscreen</button>
    </>
  )
}
