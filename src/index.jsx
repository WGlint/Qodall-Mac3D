import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { Loader } from '@react-three/drei'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
    <Canvas
        camera={ {
            fov: 45,
            near: 0.1,
            far: 2000,
            position: [ 0, 2.4, 4.5 ]
        } }
    >

        <color args={[ '#222222' ]} attach='background' />
        <Experience />
    </Canvas>
    <Loader />
    </>
)

