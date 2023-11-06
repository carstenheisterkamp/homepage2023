import { Vector2 } from "three"

const LineShaderMaterial = {
    uniforms: {
        uTime: { value: 0 },
        vUv: { value: new Vector2() },
        vOrder: { value: 0 },

    },
    vertexShader: `
      uniform float uTime;
      varying vec2 vUv;
      varying float vOrder;
      #define PI 3.14159265359
  
      void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);

        vec2 dist = vec2(modelPosition.x,modelPosition.z);
        
        float radius = sin(uTime*.5);
        float elevation = 0.7 * sin(-PI * length(dist) * 3. + uTime * 2.7);
        
        modelPosition.y += elevation*.1;   
        
        vec4 viewPosition = viewMatrix * modelPosition;
        
        gl_Position = projectionMatrix * viewPosition;
        vUv = uv;
    }
  `,
    fragmentShader: `
      varying vec2 vUv;
      uniform vec3 uColor;
  
      void main() {
        float strength = 1.-step(.1, mod(vUv.y * 15.1,1.));
        // vec3 color = vec3(0.97, 0.00, 1.00);
        vec3 color = uColor;
        gl_FragColor = vec4(strength * color, strength);
      }
    `
  };

  export default LineShaderMaterial




