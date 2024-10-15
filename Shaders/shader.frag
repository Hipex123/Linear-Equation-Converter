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

layout(binding = 31) uniform sampler2D texSampler31;
layout(binding = 32) uniform sampler2D texSampler32;
layout(binding = 33) uniform sampler2D texSampler33;
layout(binding = 34) uniform sampler2D texSampler34;
layout(binding = 35) uniform sampler2D texSampler35;

layout(binding = 36) uniform sampler2D texSampler36;
layout(binding = 37) uniform sampler2D texSampler37;
layout(binding = 38) uniform sampler2D texSampler38;
layout(binding = 39) uniform sampler2D texSampler39;
layout(binding = 40) uniform sampler2D texSampler40;

layout(binding = 41) uniform sampler2D texSampler41;
layout(binding = 42) uniform sampler2D texSampler42;
layout(binding = 43) uniform sampler2D texSampler43;
layout(binding = 44) uniform sampler2D texSampler44;
layout(binding = 45) uniform sampler2D texSampler45;

layout(binding = 46) uniform sampler2D texSampler46;
layout(binding = 47) uniform sampler2D texSampler47;
layout(binding = 48) uniform sampler2D texSampler48;
layout(binding = 49) uniform sampler2D texSampler49;
layout(binding = 50) uniform sampler2D texSampler50;


layout(location = 0) in vec3 fragColor;
layout(location = 1) in vec2 fragTexCoord;
layout(location = 2) flat in int id;
layout(location = 3) flat in int firstFuncType;
layout(location = 4) flat in int secondFuncType;
layout(location = 5) flat in int wasConverted;

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


    else if (id == 7 && firstFuncType == 0) {
        outColor = texture(texSampler7, fragTexCoord);
    }
    else if (id == 7 && firstFuncType == 1 && wasConverted == 0) {
        outColor = texture(texSampler25, fragTexCoord);
    }
    else if (id == 7 && firstFuncType == 2 && wasConverted == 0) {
        outColor = texture(texSampler28, fragTexCoord);
    }
    else if (id == 7 && firstFuncType == 3 && wasConverted == 0) {
        outColor = texture(texSampler26, fragTexCoord);
    }

    else if (id == 7 && secondFuncType == 1 && wasConverted == 1) {
        outColor = texture(texSampler25, fragTexCoord);
    }
    else if (id == 7 && secondFuncType == 2 && wasConverted == 1) {
        outColor = texture(texSampler28, fragTexCoord);
    }
    else if (id == 7 && secondFuncType == 3 && wasConverted == 1) {
        outColor = texture(texSampler26, fragTexCoord);
    }


    else if (id == 8 && firstFuncType == 0) {
        outColor = texture(texSampler8, fragTexCoord);
    }
    else if (id == 8 && firstFuncType != 0) {
        outColor = texture(texSampler31, fragTexCoord);
    }


    else if (id == 9 && firstFuncType == 0 && wasConverted == 0) {
        outColor = texture(texSampler9, fragTexCoord);
    } 
    else if (id == 9 && firstFuncType == 1 && wasConverted == 0) {
        outColor = texture(texSampler27, fragTexCoord);
    }
    else if (id == 9 && firstFuncType == 2 && wasConverted == 0) {
        outColor = texture(texSampler29, fragTexCoord);
    }
    else if (id == 9 && firstFuncType == 3 && wasConverted == 0) {
        outColor = texture(texSampler27, fragTexCoord);
    }

    else if (id == 9 && secondFuncType == 1 && wasConverted == 1) {
        outColor = texture(texSampler27, fragTexCoord);
    }
    else if (id == 9 && secondFuncType == 2 && wasConverted == 1) {
        outColor = texture(texSampler29, fragTexCoord);
    }
    else if (id == 9 && secondFuncType == 3 && wasConverted == 1) {
        outColor = texture(texSampler27, fragTexCoord);
    }


    else if (id == 10 && firstFuncType == 0) {
        outColor = texture(texSampler10, fragTexCoord);
    }
    else if (id == 10 && firstFuncType != 0) {
        outColor = texture(texSampler31, fragTexCoord);
    }


    else if (id == 11 && firstFuncType == 0 && wasConverted == 0) {
        outColor = texture(texSampler11, fragTexCoord);
    }
    else if (id == 11 && firstFuncType == 1 && wasConverted == 0) {
        outColor = texture(texSampler11, fragTexCoord);
    }
    else if (id == 11 && firstFuncType == 2 && wasConverted == 0) {
        outColor = texture(texSampler30, fragTexCoord);
    }
    else if (id == 11 && firstFuncType == 3 && wasConverted == 0) {
        outColor = texture(texSampler11, fragTexCoord);
    }

    else if (id == 11 && secondFuncType == 1 && wasConverted == 1) {
        outColor = texture(texSampler11, fragTexCoord);
    }
    else if (id == 11 && secondFuncType == 2 && wasConverted == 1) {
        outColor = texture(texSampler30, fragTexCoord);
    }
    else if (id == 11 && secondFuncType == 3 && wasConverted == 1) {
        outColor = texture(texSampler11, fragTexCoord);
    }


    else if (id == 12 && firstFuncType != 2 && wasConverted == 0) {
        outColor = texture(texSampler12, fragTexCoord);
    }
    else if (id == 12 && firstFuncType == 2 && wasConverted == 0) {
        outColor = texture(texSampler31, fragTexCoord);
    }
    else if (id == 12 && firstFuncType != 2 && wasConverted == 1 && secondFuncType != 2) {
        outColor = texture(texSampler12, fragTexCoord);
    }
    else if (id == 12 && firstFuncType == 2 && wasConverted == 1) {
        outColor = texture(texSampler12, fragTexCoord);
    }

    else if (id == 12 && secondFuncType == 2 && wasConverted == 1) {
        outColor = texture(texSampler31, fragTexCoord);
    }


    else if (id == 13 && firstFuncType == 0) {
        outColor = texture(texSampler13, fragTexCoord);
    }
    else if (id == 13 && firstFuncType != 0) {
        outColor = texture(texSampler32, fragTexCoord);
    }


    else if (id == 14 && firstFuncType == 0) {
        outColor = texture(texSampler14, fragTexCoord);
    }
    else if (id == 14 && firstFuncType != 0) {
        outColor = texture(texSampler32, fragTexCoord);
    }


    else if (id == 15 && firstFuncType != 2 && wasConverted == 0) {
        outColor = texture(texSampler15, fragTexCoord);
    }
    else if (id == 15 && firstFuncType == 2 && wasConverted == 0) {
        outColor = texture(texSampler32, fragTexCoord);
    }
    else if (id == 15 && firstFuncType != 2 && wasConverted == 1 && secondFuncType != 2) {
        outColor = texture(texSampler15, fragTexCoord);
    }
    else if (id == 15 && firstFuncType == 2 && wasConverted == 1) {
        outColor = texture(texSampler15, fragTexCoord);
    }

    else if (id == 15 && secondFuncType == 2 && wasConverted == 1) {
        outColor = texture(texSampler32, fragTexCoord);
    }


    else if (id == 16 && firstFuncType == 0) {
        outColor = texture(texSampler22, fragTexCoord);
    } 
    else if (id == 16 && firstFuncType == 1) {
        outColor = texture(texSampler16, fragTexCoord);
    } 
    else if (id == 16 && firstFuncType == 2) {
        outColor = texture(texSampler17, fragTexCoord);
    } 
    else if (id == 16 && firstFuncType == 3) {
        outColor = texture(texSampler18, fragTexCoord);
    }

    else if (id == 19 && secondFuncType == 0) {
        outColor = texture(texSampler22, fragTexCoord);
    } 
    else if (id == 19 && secondFuncType == 1) {
        outColor = texture(texSampler19, fragTexCoord);
    } 
    else if (id == 19 && secondFuncType == 2) {
        outColor = texture(texSampler20, fragTexCoord);
    } 
    else if (id == 19 && secondFuncType == 3) {
        outColor = texture(texSampler21, fragTexCoord);
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
    if (id == 28) {
    outColor = texture(texSampler28, fragTexCoord);
    }
    else if (id == 29) {
        outColor = texture(texSampler29, fragTexCoord);
    }
    else if (id == 30) {
        outColor = texture(texSampler30, fragTexCoord);
    }
    else if (id == 31) {
        outColor = texture(texSampler31, fragTexCoord);
    }
    else if (id == 32) {
        outColor = texture(texSampler32, fragTexCoord);
    }
    else if (id == 33) {
        outColor = texture(texSampler33, fragTexCoord);
    }
    else if (id == 34) {
        outColor = texture(texSampler34, fragTexCoord);
    }
    else if (id == 35) {
        outColor = texture(texSampler35, fragTexCoord);
    }
    else if (id == 36) {
        outColor = texture(texSampler36, fragTexCoord);
    }
    else if (id == 37) {
        outColor = texture(texSampler37, fragTexCoord);
    }
    else if (id == 38) {
        outColor = texture(texSampler38, fragTexCoord);
    }
    else if (id == 39) {
        outColor = texture(texSampler39, fragTexCoord);
    }
    else if (id == 40) {
        outColor = texture(texSampler40, fragTexCoord);
    }
    else if (id == 41) {
        outColor = texture(texSampler41, fragTexCoord);
    }
    else if (id == 42) {
        outColor = texture(texSampler42, fragTexCoord);
    }
    else if (id == 43) {
        outColor = texture(texSampler43, fragTexCoord);
    }
    else if (id == 44) {
        outColor = texture(texSampler44, fragTexCoord);
    }
    else if (id == 45) {
        outColor = texture(texSampler45, fragTexCoord);
    }
    else if (id == 46) {
        outColor = texture(texSampler46, fragTexCoord);
    }
    else if (id == 47) {
        outColor = texture(texSampler47, fragTexCoord);
    }
    else if (id == 48) {
        outColor = texture(texSampler48, fragTexCoord);
    }
    else if (id == 49) {
        outColor = texture(texSampler49, fragTexCoord);
    }
    else if (id == 50) {
        outColor = texture(texSampler50, fragTexCoord);
    }
}