#version 450

layout(binding = 1) uniform sampler2D texSamplers[62];


layout(location = 0) in vec3 fragColor;
layout(location = 1) in vec2 fragTexCoord;
layout(location = 2) flat in int id;
layout(location = 3) flat in int firstFuncType;
layout(location = 4) flat in int secondFuncType;
layout(location = 5) flat in int wasConverted;
layout(location = 6) flat in vec4 inputBoxValues[3][2];


layout(location = 0) out vec4 outColor;



void main() {
    int numbersIds[12] = {47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58};

    int idList[15] = {33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47};
    float inputValuesList[15] = {
    inputBoxValues[0][0].x, inputBoxValues[0][0].y, inputBoxValues[0][0].z, inputBoxValues[0][0].w, inputBoxValues[0][1].w,
    inputBoxValues[1][0].x, inputBoxValues[1][0].y, inputBoxValues[1][0].z, inputBoxValues[1][0].w, inputBoxValues[1][1].w,
    inputBoxValues[2][0].x, inputBoxValues[2][0].y, inputBoxValues[2][0].z, inputBoxValues[2][0].w, inputBoxValues[2][1].w
    };

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


    else if (id >= 33 && id <= 42 && wasConverted == 1 && firstFuncType != 0)
    {
        for (int i = 0; i < 10; i++)
        {
            if (id == idList[i])
            {
                int correctId = numbersIds[int(inputValuesList[i]) + 2];

                outColor = texture(texSamplers[correctId], fragTexCoord);
            }
        }
    }

    else if (id >= 43 && id <= 47 && wasConverted == 1 && secondFuncType == 2)
    {
        for (int i = 0; i < 5; i++)
        {
            if (id == idList[i])
            {
                int correctId = numbersIds[int(inputValuesList[i]) + 2];

                outColor = texture(texSamplers[correctId], fragTexCoord);
            }
        }
    }


    else if (id >= 33 && id <= 42 && firstFuncType == 0)
    {
        outColor = texture(texSamplers[21], fragTexCoord);
    }

    else if (id >= 43 && id <= 47 && firstFuncType != 2 && wasConverted == 0)
    {
        outColor = texture(texSamplers[21], fragTexCoord);
    }

    else if (id >= 43 && id <= 47 && secondFuncType != 2 && wasConverted == 1)
    {
        outColor = texture(texSamplers[21], fragTexCoord);
    }

    else
    {
        outColor = texture(texSamplers[id-1], fragTexCoord);
    }
}