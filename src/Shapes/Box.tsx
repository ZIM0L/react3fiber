function Box() {
    return(
          <mesh castShadow receiveShadow>
            <boxGeometry />
            <meshPhongMaterial color={0xaa4be0} />
          </mesh>
    )
}
export default Box