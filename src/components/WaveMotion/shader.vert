#pragma glslify: snoise3 = require(glsl-noise/simplex/3d)

float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}

varying vec2 vUv;
uniform float uTime;
uniform float uRedOffset;
varying float vTextureRedOffset;
varying float vWave;

void main() {
    vUv = uv;

    vec3 pos = position;
    float noiseFreq = 5.5;
    float noiseAmp = 0.03;
    vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
    pos.z += snoise3(noisePos) * noiseAmp;
    vWave = pos.z;
    vTextureRedOffset = uRedOffset;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}