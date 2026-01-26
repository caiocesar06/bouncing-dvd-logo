# Bouncing DVD Logo 🎨

Um projeto de aprendizado de OpenGL que implementa o clássico logo DVD quicando pela tela.

## 🚀 Características

- Renderização de texturas com OpenGL
- Sistema de shaders customizados
- Suporte multiplataforma (Windows, Linux, macOS)

## 📋 Pré-requisitos

- CMake 3.14 ou superior
- Compilador C++17 compatível:
  - Windows: Visual Studio 2019+ ou MinGW
  - Linux: GCC 7+ ou Clang 5+
  - macOS: Xcode 10+
- Git

## 🔧 Compilação

### Windows

```sh
# Clonar o repositório
git clone https://github.com/caiocesar06/bouncing-dvd-logo.git
cd bouncing-dvd-logo

# Criar diretório de build
mkdir build
cd build

# Configurar e compilar
cmake ..
cmake --build . --config Debug

# Executar
cd Debug
./bouncing-dvd-logo.exe
```

### Linux/macOS

```sh
# Clonar o repositório
git clone https://github.com/caiocesar06/bouncing-dvd-logo.git
cd bouncing-dvd-logo

# Criar diretório de build
mkdir build
cd build

# Configurar e compilar
cmake ..
cmake --build .

# Executar
./bouncing-dvd-logo
```

## 📁 Estrutura do Projeto

```text
bouncing-dvd-logo/
├── src/              # Código fonte C++
│   ├── main.cpp
│   ├── shader.cpp
│   └── glad.c
├── include/          # Headers
│   ├── shader.h
│   ├── glad/
│   ├── GLFW/
│   └── KHR/
├── shaders/          # Vertex e Fragment Shaders
│   ├── vshader.vert
│   └── fshader.frag
├── textures/         # Imagens e texturas
│   ├── container.jpg
│   └── awesomeface.png
└── CMakeLists.txt    # Configuração do CMake
```

## 📚 Bibliotecas Utilizadas

- [GLFW](https://www.glfw.org/) - Criação de janelas e contexto OpenGL
- [GLAD](https://glad.dav1d.de/) - Carregamento de funções OpenGL
- [stb_image](https://github.com/nothings/stb) - Carregamento de imagens

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

Caio Cesar

- GitHub: [@caiocesar06](https://github.com/caiocesar06)

## 🙏 Agradecimentos

- [LearnOpenGL](https://learnopengl.com/) - Tutorial base para aprendizado
- Comunidade OpenGL
