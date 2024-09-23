#version 450

layout(binding = 1) uniform sampler2D texSampler1;
layout(binding = 2) uniform sampler2D texSampler2;
layout(binding = 3) uniform sampler2D texSampler3;
layout(binding = 4) uniform sampler2D texSampler4;
layout(binding = 5) uniform sampler2D texSampler5;

layout(binding = 6) uniform sampler2D texSampler6;
layout(binding = 7) uniform sampler2D texSampler7;
layout(binding = 8) uniform sampler2D texSampler8;
layout(binding = 9) uniform sampler2D texSampler9;
layout(binding = 10) uniform sampler2D texSampler10;

layout(binding = 11) uniform sampler2D texSampler11;
layout(binding = 12) uniform sampler2D texSampler12;
layout(binding = 13) uniform sampler2D texSampler13;
layout(binding = 14) uniform sampler2D texSampler14;
layout(binding = 15) uniform sampler2D texSampler15;

layout(binding = 16) uniform sampler2D texSampler16;
layout(binding = 17) uniform sampler2D texSampler17;
layout(binding = 18) uniform sampler2D texSampler18;
layout(binding = 19) uniform sampler2D texSampler19;
layout(binding = 20) uniform sampler2D texSampler20;

layout(binding = 21) uniform sampler2D texSampler21;
layout(binding = 22) uniform sampler2D texSampler22;
layout(binding = 23) uniform sampler2D texSampler23;
layout(binding = 24) uniform sampler2D texSampler24;
layout(binding = 25) uniform sampler2D texSampler25;

layout(binding = 26) uniform sampler2D texSampler26;
layout(binding = 27) uniform sampler2D texSampler27;
layout(binding = 28) uniform sampler2D texSampler28;
layout(binding = 29) uniform sampler2D texSampler29;
layout(binding = 30) uniform sampler2D texSampler30;

layout(location = 0) in vec3 fragColor;
layout(location = 1) in vec2 fragTexCoord;
layout(location = 2) flat in int id;

layout(location = 0) out vec4 outColor;

void main() {
    vec2 fragCoords = gl_FragCoord.xy;

    if (id == 1){
        outColor = texture(texSampler1, fragTexCoord);
    }
    else if (id == 2){
        outColor = texture(texSampler2, fragTexCoord);
    }
    else if (id == 3){
        outColor = texture(texSampler3, fragTexCoord);
    }
    else if (id == 4){
        outColor = texture(texSampler4, fragTexCoord);
    }
    else if (id == 5){
        outColor = texture(texSampler5, fragTexCoord);
    }
    else if (id == 6) {
        outColor = texture(texSampler6, fragTexCoord);
    }
    else if (id == 7) {
        outColor = texture(texSampler7, fragTexCoord);
    } 
    else if (id == 8) {
        outColor = texture(texSampler8, fragTexCoord);
    } 
    else if (id == 9) {
        outColor = texture(texSampler9, fragTexCoord);
    } 
    else if (id == 10) {
        outColor = texture(texSampler10, fragTexCoord);
    } 
    else if (id == 11) {
        outColor = texture(texSampler11, fragTexCoord);
    } 
    else if (id == 12) {
        outColor = texture(texSampler12, fragTexCoord);
    } 
    else if (id == 13) {
        outColor = texture(texSampler13, fragTexCoord);
    } 
    else if (id == 14) {
        outColor = texture(texSampler14, fragTexCoord);
    } 
    else if (id == 15) {
        outColor = texture(texSampler15, fragTexCoord);
    } 
    else if (id == 16) {
        outColor = texture(texSampler16, fragTexCoord);
    } 
    else if (id == 17) {
        outColor = texture(texSampler17, fragTexCoord);
    } 
    else if (id == 18) {
        outColor = texture(texSampler18, fragTexCoord);
    } 
    else if (id == 19) {
        outColor = texture(texSampler19, fragTexCoord);
    } 
    else if (id == 20) {
        outColor = texture(texSampler20, fragTexCoord);
    } 
    else if (id == 21) {
        outColor = texture(texSampler21, fragTexCoord);
    } 
    else if (id == 22) {
        outColor = texture(texSampler22, fragTexCoord);
    } 
    else if (id == 23) {
        outColor = texture(texSampler23, fragTexCoord);
    } 
    else if (id == 24) {
        outColor = texture(texSampler24, fragTexCoord);
    } 
    else if (id == 25) {
        outColor = texture(texSampler25, fragTexCoord);
    } 
    else if (id == 26) {
        outColor = texture(texSampler26, fragTexCoord);
    } 
    else if (id == 27) {
        outColor = texture(texSampler27, fragTexCoord);
    } 
    else if (id == 28) {
        outColor = texture(texSampler28, fragTexCoord);
    } 
    else if (id == 29) {
        outColor = texture(texSampler29, fragTexCoord);
    } 
    else if (id == 30) {
        outColor = texture(texSampler30, fragTexCoord);
    }
}