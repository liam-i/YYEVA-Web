import {lazy, Suspense, useEffect} from 'react'
// import Container from './Container'
const Contaner = lazy(() => import('./Container'))

const App = () => {
  // return <Container />
  return (
    <>
      <Suspense fallback={<>loading...</>}>
        <Contaner />
      </Suspense>
      {/* ios polyfill*/}
      {/* <video style={{display: 'none'}} />
      <video style={{display: 'none'}} /> */}
    </>
  )
}
export default App

// import {yyEva, YYEvaType, version} from 'yyeva'
// import {useEffect, useRef} from 'react'
// let evideo: YYEvaType
// const host = `${location.protocol}//${location.host}`
// const runPlayer = async (container: HTMLDivElement) => {
//   // evideo = await yyEva({
//   //   mode: 'AspectFill',
//   //   container,
//   //   useMetaData: true,
//   //   onEnd: () => runPlayer(container),
//   //   loop: false,
//   //   videoUrl: `${host}/m64.mp4`,
//   //   usePrefetch: false,
//   //   showVideo: true,
//   //   logLevel: 'info',
//   //   effects: {
//   //     a1: `${host}/a1.png`,
//   //     a2: `${host}/b1.png`,
//   //   },
//   // })
//   evideo = await yyEva({
//     mode: 'AspectFill',
//     // videoID: 'abc10086',
//     container,
//     useMetaData: true,
//     onEnd: () => runPlayer(container),
//     loop: false,
//     // usePrefetch: false,
//     // showVideo: true,
//     useAccurate: false,

//     // logLevel: 'info',
//     videoUrl: `${host}/demo3/dynamic_264_mid.mp4`,
//     // hevcUrl: `${host}/fh-265.mp4`,
//     effects: {
//       name: `ken23232`,
//       fontColor: 'green',
//       fontSize: 40,
//     },
//     // videoUrl: `${host}/960-360.mp4`,
//     // // resizeCanvas: 'size',
//     // effects: {
//     //   key1: `abcdeopop`,
//     // },
//     // videoUrl: `${host}/m64.mp4`,
//     // effects: {
//     //   a1: `${host}/a1.png`,
//     //   a2: `${host}/b1.png`,
//     // },
//   })
//   evideo.start()
// }
// const YYEVA = () => {
//   const div = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     if (div.current) runPlayer(div.current)
//     return () => {
//       console.log('evideo.destroy')
//       evideo.destroy()
//     }
//   }, [])
//   return (
//     <div className="yyeva">
//       {/* <h1 className="title">YYEVA {version}</h1> */}
//       <div className="container" ref={div}></div>
//     </div>
//   )
// }
// export default YYEVA
