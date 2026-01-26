# Bouncing DVD Logo 🎨

Simulação nostálgica do clássico logo DVD quicando pela tela, implementado com OpenGL moderno. O logo muda de cor a cada colisão com as bordas da janela.

## 🎯 Características

- Renderização de texturas com transparência usando OpenGL 3.3
- Sistema de shaders customizados (GLSL)
- Detecção de colisão com as bordas da tela
- Física simples de movimento e reflexão
- Suporte multiplataforma (Windows, Linux, macOS)

## 📋 Pré-requisitos

- CMake 3.14 ou superior
- Compilador C++17 compatível:
  - Windows: Visual Studio 2019+ ou MinGW
  - Linux: GCC 7+ ou Clang 5+
  - macOS: Xcode 10+
- Git

## 🔧 Compilação

### Windows (Visual Studio)

```sh
# Clonar o repositório
git clone https://github.com/caiocesar06/bouncing-dvd-logo.git
cd bouncing-dvd-logo

# Criar diretório de build
mkdir build
cd build

# Configurar com CMake
cmake ..

# Compilar
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

# Criar diretório de build e compilar
mkdir build && cd build
cmake .. && make

# Executar
./bouncing-dvd-logo
```

## 🎮 Controles

- **ESC** - Fechar aplicação

## 🎨 Como Funciona

O logo DVD se move pela tela e inverte sua direção quando colide com as bordas. A cada colisão, o logo muda para uma cor aleatória, recriando a experiência nostálgica dos DVD players.

### Física Implementada

- Velocidade constante: `0.005f` unidades por frame
- Detecção de colisão baseada em AABB (Axis-Aligned Bounding Box)
- Reflexão especular nas bordas
- Proporção da imagem preservada: 614x360 pixels (1.706:1)

## 🛠️ Desenvolvimento no VS Code

### Extensões Recomendadas

- **C/C++** (Microsoft) - IntelliSense e debugging
- **CMake Tools** (Microsoft) - Integração com CMake
- **CMake** (twxs) - Syntax highlighting para CMake
- **Shader languages support** - Syntax highlighting para GLSL

### Workflow de Desenvolvimento

1. Abra o projeto no VS Code
2. Selecione o kit do CMake:
   - Windows: `Visual Studio Community 2026 Release - amd64`
   - Linux/macOS: `GCC` ou `Clang`
3. Use os botões na barra inferior:
   - 🔨 **Build** - Compilar o projeto
   - ▶️ **Run** - Executar sem debug
   - 🐞 **Debug** - Executar com debug

### Atalhos Úteis

- `Ctrl+Shift+B` - Build
- `F5` - Debug
- `Ctrl+F5` - Run sem debug

## 📚 Bibliotecas Utilizadas

- [GLFW 3.4](https://www.glfw.org/) - Criação de janelas e contexto OpenGL
- [GLAD](https://glad.dav1d.de/) - Carregamento de funções OpenGL 3.3 Core
- [stb_image](https://github.com/nothings/stb) - Carregamento de imagens PNG

## 🎓 Conceitos de OpenGL Demonstrados

- **Vertex Buffer Objects (VBO)** - Armazenamento eficiente de vértices
- **Vertex Array Objects (VAO)** - Estado de configuração de atributos
- **Element Buffer Objects (EBO)** - Indexação de vértices
- **Shaders GLSL** - Vertex e Fragment shaders
- **Texturas** - Carregamento e mapeamento de texturas com transparência
- **Blending** - Mistura de cores com canal alpha
- **Uniforms** - Passagem de dados da CPU para GPU

## 🚀 Possíveis Melhorias

- [ ] Mudar cor do logo ao colidir com bordas
- [ ] Adicionar som ao colidir
- [ ] Múltiplos logos na tela
- [ ] Trail effect (rastro)
- [ ] Controlar velocidade com teclado
- [ ] Modo tela cheia
- [ ] Diferentes texturas/logos

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

Caio Cesar
GitHub: [@caiocesar06](https://github.com/caiocesar06)

## 🙏 Agradecimentos

- [LearnOpenGL](https://learnopengl.com/) - Excelente tutorial de OpenGL
- Comunidade OpenGL e GLFW
- Todos que sentiram nostalgia com o DVD quicando
