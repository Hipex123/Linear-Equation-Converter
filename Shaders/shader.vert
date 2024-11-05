#version 450

layout(binding = 0) uniform UniformBufferObject {
    mat4 model;
    mat4 view;
    mat4 proj;
    int firstFuncType;
    int secondFuncType;
    int wasConverted;
    vec4 inputBoxesValues[3][2];
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
layout(location = 6) flat out vec4 inputBoxValues[3][2];


void main() {
    gl_Position = ubo.proj * ubo.view * ubo.model * vec4(inPosition, 0.0, 1.0);
    fragColor = inColor;
    fragTexCoord = inTexCoord;

    id = inId;
    
    firstFuncType = ubo.firstFuncType;
    secondFuncType = ubo.secondFuncType;

    wasConverted = ubo.wasConverted;

    for (int i = 0; i < 3; i++)
    {
        inputBoxValues[i][0].x = ubo.inputBoxesValues[i][0].x;
        inputBoxValues[i][0].y = ubo.inputBoxesValues[i][0].y;
        inputBoxValues[i][0].z = ubo.inputBoxesValues[i][0].z;
        inputBoxValues[i][0].w = ubo.inputBoxesValues[i][0].w;

        inputBoxValues[i][1].w = ubo.inputBoxesValues[i][1].w;
    }
}