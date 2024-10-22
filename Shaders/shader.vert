#version 450

layout(binding = 0) uniform UniformBufferObject {
    mat4 model;
    mat4 view;
    mat4 proj;
    int firstFuncType;
    int secondFuncType;
    int wasConverted;
    int inputBoxValues1[5];
    int inputBoxValues2[5];
    int inputBoxValues3[5];
} ubo;

layout(location = 0) in vec2 inPosition;
layout(location = 1) in vec3 inColor;
layout(location = 2) in vec2 inTexCoord;
layout(location = 3) in int inId;


layout(location = 0) out vec3 fragColor;
layout(location = 1) out vec2 fragTexCoord;
layout(location = 2) flat out int id;
layout(location = 3) flat out int firstFuncType;
layout(location = 4) flat out int secondFuncType;
layout(location = 5) flat out int wasConverted;
layout(location = 6) flat out int inputBoxValues[3][5];


void main() {
    gl_Position = ubo.proj * ubo.view * ubo.model * vec4(inPosition, 0.0, 1.0);
    fragColor = inColor;
    fragTexCoord = inTexCoord;

    id = inId;
    
    firstFuncType = ubo.firstFuncType;
    secondFuncType = ubo.secondFuncType;

    wasConverted = ubo.wasConverted;

    for (int i = 0; i < 5; i++)
    {
            inputBoxValues[0][i] = ubo.inputBoxValues1[i];
            inputBoxValues[1][i] = ubo.inputBoxValues2[i];
            inputBoxValues[2][i] = ubo.inputBoxValues3[i];
    }
}