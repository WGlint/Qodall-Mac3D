import { OrbitControls, Environment, Float, PresentationControls, ContactShadows, Html,Text, Center } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useLayoutEffect, useRef, useState } from 'react'
import Model from './MacBook'
import gsap from 'gsap'
import { useControls } from 'leva'



export default function Experience()
{
    const MacBook = useRef()
    const TexteBal = useRef()
    
    const TexteQod = "QODALL"

    const MoniteurV = "https://www.qodall.com/"

    const [EcranRot, setEcranRot] = useState(Math.PI);
    const rotationRef = useRef(EcranRot);

    const [Done, setDone] = useState(false);
    const [Monitor, setMonitor] = useState(false);
    const [QodT, setQodT] = useState(true);
    const [QODALL, setQODALL] = useState("");
    const [Ligth, setLigth] = useState(0);

    useFrame((a, b) => 
    {
        if(Done)
        {
            setEcranRot( EcranRot - b )
            if( EcranRot <= 1.31 )
            {
                setDone(false)
                setQodT(false)

                setMonitor(true)
                setQODALL(MoniteurV)
                setLigth(20)
            }
        }
    })

    useLayoutEffect(() =>
    {
        console.log("hello");
        gsap.timeline().from(MacBook.current.position, 
            {
                z: -10,
                duration: 2,
                delay:0,
                ease: "elastic.out(0.5, 0.3)",
            }).to(TexteBal.current.position, 
                {
                    y: 0.32,
                    z: -1.96,
                    duration: 1,
                    ease: "elastic.out(0.5, 0.3)",
                    onComplete: () => { return setDone(true) }
                },
                "<1.5")
    }, [])


    return <>

        <Environment preset='city' />

        <PresentationControls global 
            polar={[ -0.4, 0.2 ]}
            azimuth={[ -1, 0.75 ]}
            config={{ mass:2, tension: 400 }}
            snap={{ mass:4, tension: 400 }}
        >

            <Float rotationIntensity={0.6} ref={MacBook} >

                <rectAreaLight 
                    width={2.5}
                    height={1.65}
                    intensity={Ligth}
                    color={ '#ffffff' }
                    rotation={ [ 0.1, Math.PI,0 ] }
                    position={ [ 0, 0.55, -1.55 ] }
                />
                
                <Text
                    ref={TexteBal}
                    font="./bangers-v20-latin-regular.woff"
                    fontSize={1}
                    position={ [ -0.1, -1.5, -1.3 ] }
                    rotation-y={ -0.05 }
                    visible={QodT}
                    

                    // -0.1 -1.5 -1.3
                >
                    {TexteQod}
                </Text>

                <Model visibleMonitor={Monitor} url={QODALL} position-y={-1.2} RotationEcran={EcranRot} >
                </Model>

            </Float>

        </PresentationControls>

        <ContactShadows position-y={-1.4} blur={0.5} scale={15} />
    </>
}