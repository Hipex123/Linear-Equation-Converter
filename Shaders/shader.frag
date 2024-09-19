#version 450

layout(binding = 1) uniform sampler2D texSampler1;
layout(binding = 2) uniform sampler2D texSampler2;
layout(binding = 3) uniform sampler2D texSampler3;
layout(binding = 4) uniform sampler2D texSampler4;

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
}