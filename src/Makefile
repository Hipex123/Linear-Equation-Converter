# Compiler
CXX = g++

# Compiler flags (with proper path to GLFW, Vulkan, and stb include directories)
CFLAGS = -std=c++17 -O2 -I"./External Libraries/vulkan/Include" -I"./External Libraries/glfw/include" -I"./External Libraries/glm" -I"./External Libraries/stb" -I"./External Libraries/tinyObjLoader"

# Linker flags (with proper path to GLFW and Vulkan libraries)
LDFLAGS = -L"./External Libraries/glfw/lib-mingw-w64" -L"./External Libraries/vulkan/Lib" -lvulkan-1 -lglfw3 -luser32 -lgdi32

# Target
vulkan: main.cpp
	$(CXX) $(CFLAGS) -o VulkanTest main.cpp $(LDFLAGS)