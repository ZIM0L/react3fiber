function Plane() {
    return(
          <mesh receiveShadow position={[0,-0.5,-1]} rotation={[Math.PI/-4,0,0]}>
            <planeGeometry args={[3,3]} />
            <meshLambertMaterial color={0x444be0} />
          </mesh>
    )
}
export default Plane