import { Vector2, Vector3 } from "three"

const GridShaderMaterial = {
    uniforms: {
        uTime: { value: 0 },
        vUv: { value: new Vector2() },
        vOrder: { value: 0 },
        uColor: { value: 0 },
    },
    vertexShader: `
      uniform float uTime;
      varying vec2 vUv;
      varying float vOrder;
      #define PI 3.14159265359
  
      void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);

        vec2 dist = vec2(modelPosition.x,modelPosition.z);
        
        float radius = sin(uTime*10.5);
        float elevation = 1.7 * sin(-PI * length(dist*0.01) * 2. + uTime * 1.7);
        
        modelPosition.y += elevation*2.1;   
        
        vec4 viewPosition = viewMatrix * modelPosition;
        
        gl_Position = projectionMatrix * viewPosition;
        vUv = uv;
    }`,
    fragmentShader: `
    varying vec2 vUv;
    uniform float uColor;
    
    void main() {
        float strength = 1. - step(.1, mod(vUv.y * 100.1,0.9)) * step(.1, mod(vUv.x * 100.1,0.9));
        vec3 color = vec3(uColor, uColor, uColor);
        gl_FragColor = vec4(strength * color, strength);
    }`
  };

  export default GridShaderMaterial