import React from 'react'
import styles from './styles.module.scss'
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  Mesh,
  MeshNormalMaterial,
  TorusGeometry,
  TextureLoader,
  RepeatWrapping,
} from 'three'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { OrbitControls } from 'three/examples/jsm/controls/experimental/CameraControls'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'

// I'm relying on the canvas container to be able to recalculate the
// canvas size on widow resize
function setUp(canvas, canvasContainer) {
  function resizeCanvas() {
    const { width } = canvasContainer.getBoundingClientRect()

    const height = width * (3 / 4)
    renderer.setSize(width, height)

    camera.aspect = width / height
    camera.updateProjectionMatrix()
  }

  const mouse = {
    x: 0,
    y: 0,
  }

  const scene = new Scene()

  const textureLoader = new TextureLoader()
  textureLoader.load('/img/donut-galaxy-bg-texture.jpg', (texture) => {
    texture.wrapS = RepeatWrapping
    texture.wrapT = RepeatWrapping
    texture.repeat.set(21, 21)
    scene.background = texture
  })

  const camera = new PerspectiveCamera(75, 4.0 / 3.0, 0.1, 2000)
  camera.position.z = 7

  const material = new MeshNormalMaterial()

  const fontLoader = new FontLoader()
  fontLoader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
    const textGeometry = new TextGeometry('blackmann\nwas here', {
      curveSegments: 8,
      font,
      height: 0.5,
      size: 1,
      bevelEnabled: true,
      bevelSize: 0.03,
      bevelSegments: 5,
      bevelThickness: 0.03,
    })
    const text = new Mesh(textGeometry, material)

    textGeometry.center()

    scene.add(text)
  })

  // asteroids
  const donutGeometry = new TorusGeometry(0.2, 0.1, 8, 16)

  for (let i = 0; i < 150; i++) {
    const donut = new Mesh(donutGeometry, material)

    donut.position.x = (Math.random() - 0.5) * 12
    donut.position.y = (Math.random() - 0.5) * 12
    donut.position.z = (Math.random() - 0.5) * 12

    donut.rotation.x = Math.random() * Math.PI
    donut.rotation.y = Math.random() * Math.PI

    const scale = Math.random() * 0.5 + 0.5
    donut.scale.x = scale
    donut.scale.y = scale
    donut.scale.z = scale

    scene.add(donut)
  }

  const renderer = new WebGLRenderer({ canvas })

  const { height, width } = canvas.getBoundingClientRect()
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio))

  const controls = new OrbitControls(camera, canvas)
  controls.enableDamping = true
  controls.dampingFactor = 0.02
  controls.maxDistance = 10
  controls.maxPolarAngle = Math.PI * 0.8
  controls.minPolarAngle = 0.3

  function tick() {
    controls.update()
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
  }

  tick()

  function onMouseMove(event) {
  }

  window.addEventListener('resize', resizeCanvas)
  window.addEventListener('pointermove', onMouseMove)

  return function () {
    window.removeEventListener('resize', resizeCanvas)
    window.removeEventListener('pointermove', onMouseMove)
  }
}

export default function DonutsGalaxy() {
  const canvas = React.useRef()
  const canvasContainer = React.useRef()

  React.useEffect(() => {
    return setUp(canvas.current, canvasContainer.current)
  }, [])

  return (
    <div className="canvas-container" ref={canvasContainer}>
      <canvas className={styles.canvas} ref={canvas}></canvas>
    </div>
  )
}
