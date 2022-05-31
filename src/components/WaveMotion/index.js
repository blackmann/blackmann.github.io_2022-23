import React from 'react'
import {
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
  PlaneGeometry,
  Mesh,
  ShaderMaterial,
  TextureLoader,
} from 'three'
import fragmentShader from './shader.frag'
import vertexShader from './shader.vert'
import styles from './styles.module.scss'
import { mod } from 'three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements'

function setUpCanvas({ canvas, container, image }) {
  const aspectRatio = 4 / 5

  function resetViewport() {
    const { width } = container.getBoundingClientRect()
    const height = width / aspectRatio

    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio))
  }

  let animate = false
  const scene = new Scene()

  const renderer = new WebGLRenderer({
    alpha: true,
    canvas,
  })

  resetViewport()

  const camera = new PerspectiveCamera(75, aspectRatio)
  camera.position.z = 0.5
  scene.add(camera)

  const planeGeometry = new PlaneGeometry(0.4, 0.6, 16, 16)
  const shaderMaterial = new ShaderMaterial({
    fragmentShader,
    vertexShader,
    uniforms: {
      uTime: { value: 1 },
      uTexture: { value: new TextureLoader().load(image) },
      uRedOffset: 0,
    },
    // wireframe: true,
  })

  const sheetMesh = new Mesh(planeGeometry, shaderMaterial)
  scene.add(sheetMesh)

  function tick() {
    renderer.render(scene, camera)
    shaderMaterial.uniforms.uTime.value += animate ? Math.random() * 0.03 : 0
    shaderMaterial.uniforms.uRedOffset += animate ? 0.025 : 0
    window.requestAnimationFrame(tick)
  }

  tick()

  window.addEventListener('resize', resetViewport)

  return [
    function () {
      window.removeEventListener('resize', resetViewport)
    },
    function (enabled) {
      animate = enabled
    },
  ]
}

export default function WaveMotion({ children, image, model, number }) {
  const canvasRef = React.useRef()
  const containerRef = React.useRef()

  React.useEffect(() => {
    const [cleanUp, animate] = setUpCanvas({
      canvas: canvasRef.current,
      container: containerRef.current,
      image,
    })

    function onMouseOver() {
      animate(true)
    }

    function onMouseOut() {
      animate(false)
    }

    containerRef.current.addEventListener('mouseover', onMouseOver)
    containerRef.current.addEventListener('mouseout', onMouseOut)

    return cleanUp
  }, [])

  return (
    <div className={styles.waveMotion} ref={containerRef}>
      <header className={styles.waveMotionHeader}>
        <canvas
          className={styles.waveMotionBackground}
          ref={canvasRef}
        ></canvas>
        <div className={styles.waveMotionForeground}>
          <h2 className={styles.waveMotionTitle}>{number}</h2>

          <footer>
            <span className={styles.waveMotionBrand}>G - M e t a l</span>
            <span className={styles.waveMotionModel}>{model}</span>
          </footer>
        </div>
      </header>

      <div className={styles.waveMotionBody}>{children}</div>
    </div>
  )
}
