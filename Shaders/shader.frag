#version 450

layout(binding = 1) uniform sampler2D texSamplers[50];


layout(location = 0) in vec3 fragColor;
layout(location = 1) in vec2 fragTexCoord;
layout(location = 2) flat in int id;
layout(location = 3) flat in int firstFuncType;
layout(location = 4) flat in int secondFuncType;
layout(location = 5) flat in int wasConverted;
layout(location = 6) flat in int inputBoxValues[3][5];


layout(location = 0) out vec4 outColor;



void main() {
    if (id <= 1 && id >= 6){
        outColor = texture(texSamplers[id], fragTexCoord);
    }

    else if (id == 7 && firstFuncType == 0) {
        outColor = texture(texSamplers[6], fragTexCoord);
    }
    else if (id == 7 && firstFuncType == 1 && wasConverted == 0) {
        outColor = texture(texSamplers[24], fragTexCoord);
    }
    else if (id == 7 && firstFuncType == 2 && wasConverted == 0) {
        outColor = texture(texSamplers[27], fragTexCoord);
    }
    else if (id == 7 && firstFuncType == 3 && wasConverted == 0) {
        outColor = texture(texSamplers[25], fragTexCoord);
    }

    else if (id == 7 && secondFuncType == 1 && wasConverted == 1) {
        outColor = texture(texSamplers[24], fragTexCoord);
    }
    else if (id == 7 && secondFuncType == 2 && wasConverted == 1) {
        outColor = texture(texSamplers[27], fragTexCoord);
    }
    else if (id == 7 && secondFuncType == 3 && wasConverted == 1) {
        outColor = texture(texSamplers[25], fragTexCoord);
    }


    else if (id == 8 && firstFuncType == 0) {
        outColor = texture(texSamplers[7], fragTexCoord);
    }
    else if (id == 8 && firstFuncType != 0) {
        outColor = texture(texSamplers[30], fragTexCoord);
    }


    else if (id == 9 && firstFuncType == 0 && wasConverted == 0) {
        outColor = texture(texSamplers[8], fragTexCoord);
    } 
    else if (id == 9 && firstFuncType == 1 && wasConverted == 0) {
        outColor = texture(texSamplers[26], fragTexCoord);
    }
    else if (id == 9 && firstFuncType == 2 && wasConverted == 0) {
        outColor = texture(texSamplers[28], fragTexCoord);
    }
    else if (id == 9 && firstFuncType == 3 && wasConverted == 0) {
        outColor = texture(texSamplers[26], fragTexCoord);
    }

    else if (id == 9 && secondFuncType == 1 && wasConverted == 1) {
        outColor = texture(texSamplers[26], fragTexCoord);
    }
    else if (id == 9 && secondFuncType == 2 && wasConverted == 1) {
        outColor = texture(texSamplers[28], fragTexCoord);
    }
    else if (id == 9 && secondFuncType == 3 && wasConverted == 1) {
        outColor = texture(texSamplers[26], fragTexCoord);
    }


    else if (id == 10 && firstFuncType == 0) {
        outColor = texture(texSamplers[9], fragTexCoord);
    }
    else if (id == 10 && firstFuncType != 0) {
        outColor = texture(texSamplers[30], fragTexCoord);
    }


    else if (id == 11 && firstFuncType == 0 && wasConverted == 0) {
        outColor = texture(texSamplers[10], fragTexCoord);
    }
    else if (id == 11 && firstFuncType == 1 && wasConverted == 0) {
        outColor = texture(texSamplers[10], fragTexCoord);
    }
    else if (id == 11 && firstFuncType == 2 && wasConverted == 0) {
        outColor = texture(texSamplers[29], fragTexCoord);
    }
    else if (id == 11 && firstFuncType == 3 && wasConverted == 0) {
        outColor = texture(texSamplers[10], fragTexCoord);
    }

    else if (id == 11 && secondFuncType == 1 && wasConverted == 1) {
        outColor = texture(texSamplers[10], fragTexCoord);
    }
    else if (id == 11 && secondFuncType == 2 && wasConverted == 1) {
        outColor = texture(texSamplers[29], fragTexCoord);
    }
    else if (id == 11 && secondFuncType == 3 && wasConverted == 1) {
        outColor = texture(texSamplers[10], fragTexCoord);
    }


    else if (id == 12 && firstFuncType != 2 && wasConverted == 0) {
        outColor = texture(texSamplers[11], fragTexCoord);
    }
    else if (id == 12 && firstFuncType == 2 && wasConverted == 0) {
        outColor = texture(texSamplers[30], fragTexCoord);
    }
    else if (id == 12 && firstFuncType != 2 && wasConverted == 1 && secondFuncType != 2) {
        outColor = texture(texSamplers[11], fragTexCoord);
    }
    else if (id == 12 && firstFuncType == 2 && wasConverted == 1) {
        outColor = texture(texSamplers[11], fragTexCoord);
    }

    else if (id == 12 && secondFuncType == 2 && wasConverted == 1) {
        outColor = texture(texSamplers[30], fragTexCoord);
    }


    else if (id == 13 || id == 14 || id == 15) {
        outColor = texture(texSamplers[id-1], fragTexCoord);
    }



    else if (id == 16 && firstFuncType == 0) {
        outColor = texture(texSamplers[21], fragTexCoord);
    } 
    else if (id == 16 && firstFuncType == 1) {
        outColor = texture(texSamplers[15], fragTexCoord);
    } 
    else if (id == 16 && firstFuncType == 2) {
        outColor = texture(texSamplers[16], fragTexCoord);
    } 
    else if (id == 16 && firstFuncType == 3) {
        outColor = texture(texSamplers[17], fragTexCoord);
    }

    else if (id == 19 && secondFuncType == 0) {
        outColor = texture(texSamplers[21], fragTexCoord);
    } 
    else if (id == 19 && secondFuncType == 1) {
        outColor = texture(texSamplers[18], fragTexCoord);
    } 
    else if (id == 19 && secondFuncType == 2) {
        outColor = texture(texSamplers[19], fragTexCoord);
    } 
    else if (id == 19 && secondFuncType == 3) {
        outColor = texture(texSamplers[20], fragTexCoord);
    }


    else if (id >= 33 && id <= 42 && firstFuncType == 0)
    {
        outColor = texture(texSamplers[21], fragTexCoord);
    }

    else if (id >= 43 && id <= 48 && firstFuncType != 2 && wasConverted == 0)
    {
        outColor = texture(texSamplers[21], fragTexCoord);
    }

    else if (id >= 43 && id <= 48 && secondFuncType != 2 && wasConverted == 1)
    {
        outColor = texture(texSamplers[21], fragTexCoord);
    }


    else
    {
        outColor = texture(texSamplers[id-1], fragTexCoord);
    }
}