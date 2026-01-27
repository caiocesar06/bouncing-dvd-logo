# Bouncing DVD Logo 🎨

Simulação nostálgica do clássico logo DVD quicando pela tela, implementado com OpenGL moderno. O logo muda de cor a cada colisão com as bordas da janela.

## 🎯 Características

- Renderização de texturas com transparência usando OpenGL 3.3
- Sistema de shaders customizados (GLSL)
- Detecção de colisão com as bordas da tela
- Física simples de movimento e reflexão
- Suporte multiplataforma (Windows, Linux, macOS)

## 📋 Pré-requisitos

### Ferramentas Essenciais

#### CMake

- **Versão mínima:** 3.14
- **Download:** [cmake.org/download](https://cmake.org/download/)
- **Verificar instalação:**

  ```sh
  cmake --version
  ```

#### Sistema de Build

Escolha **uma** das seguintes opções:

**Windows:**

- **Visual Studio 2019+** (Recomendado)
  - Baixe em: [visualstudio.microsoft.com](https://visualstudio.microsoft.com/)
  - Instale o "Desenvolvimento para Desktop com C++"
  - Inclui MSBuild automaticamente
  
- **Ninja** (Alternativa mais leve)

  ```powershell
  # Com Chocolatey
  choco install ninja
  
  # Com Scoop
  scoop install ninja
  ```
  
- **MinGW-w64** + Make

  ```powershell
  # Com Chocolatey
  choco install mingw
  ```

**Linux:**

```sh
# Debian/Ubuntu
sudo apt-get install cmake build-essential ninja-build

# Fedora
sudo dnf install cmake gcc-c++ ninja-build

# Arch Linux
sudo pacman -S cmake base-devel ninja
```

**macOS:**

```sh
# Com Homebrew
brew install cmake ninja

# Ou instale Xcode Command Line Tools
xcode-select --install
```

#### Compilador C++17

- **Windows:** Visual Studio 2019+, MinGW-w64, ou Clang
- **Linux:** GCC 7+ ou Clang 5+
- **macOS:** Xcode 10+ ou Clang 5+

#### Git

Para clonar o repositório e baixar dependências:

```sh
git --version  # Verificar se está instalado
```

## 🔧 Compilação

### Windows (Visual Studio)

```sh
# Clonar o repositório
git clone https://github.com/caiocesar06/bouncing-dvd-logo.git
cd bouncing-dvd-logo

# Criar diretório de build
mkdir build
cd build

# Configurar com CMake (gera projeto do Visual Studio)
cmake ..

# Compilar
cmake --build . --config Debug

# Executar
cd Debug
bouncing-dvd-logo.exe
```

### Windows (Ninja)

```sh
# Clonar o repositório
git clone https://github.com/caiocesar06/bouncing-dvd-logo.git
cd bouncing-dvd-logo

# Criar diretório de build
mkdir build
cd build

# Configurar com CMake usando Ninja
cmake -G Ninja -DCMAKE_BUILD_TYPE=Debug ..

# Compilar
ninja

# Executar
./bouncing-dvd-logo.exe
```

### Linux/macOS (Make)

```sh
# Clonar o repositório
git clone https://github.com/caiocesar06/bouncing-dvd-logo.git
cd bouncing-dvd-logo

# Criar diretório de build e compilar
mkdir build && cd build
cmake -DCMAKE_BUILD_TYPE=Debug ..
make -j$(nproc)  # Linux
# ou
make -j$(sysctl -n hw.ncpu)  # macOS

# Executar
./bouncing-dvd-logo
```

### Linux/macOS (Ninja)

```sh
# Clonar o repositório
git clone https://github.com/caiocesar06/bouncing-dvd-logo.git
cd bouncing-dvd-logo

# Criar diretório de build e compilar
mkdir build && cd build
cmake -G Ninja -DCMAKE_BUILD_TYPE=Debug ..
ninja

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

### Configuração Inicial

1. Abra o projeto no VS Code
2. Instale as extensões recomendadas (VS Code irá sugerir automaticamente)
3. Pressione `Ctrl+Shift+P` e digite "CMake: Select a Kit"
4. Escolha o kit apropriado:
   - **Windows:**
     - `Visual Studio Community 2026 Release - amd64` (Recomendado)
     - `Ninja + MSVC`
     - `MinGW`
   - **Linux:** `GCC` ou `Clang`
   - **macOS:** `Clang` ou `Apple Clang`

### Workflow de Desenvolvimento

Use os botões na barra inferior do VS Code:

- 🔨 **Build** - Compilar o projeto
- ▶️ **Run** - Executar sem debug
- 🐞 **Debug** - Executar com debug
- 🗑️ **Clean** - Limpar build

### Configuração do launch.json

O arquivo [.vscode/launch.json](.vscode/launch.json) já está configurado para Windows, Linux e macOS. Certifique-se de que o `program` aponta para o executável correto:

```json
"program": "${workspaceFolder}/build/Debug/bouncing-dvd-logo.exe"  // Windows
"program": "${workspaceFolder}/build/bouncing-dvd-logo"            // Linux/macOS
```

## 📚 Bibliotecas Utilizadas

- [GLFW 3.4](https://www.glfw.org/) - Criação de janelas e contexto OpenGL (baixado automaticamente via CMake)
- [GLAD](https://glad.dav1d.de/) - Carregamento de funções OpenGL 3.3 Core (incluído no projeto)
- [stb_image](https://github.com/nothings/stb) - Carregamento de imagens PNG (incluído no projeto)

> **Nota:** Todas as dependências são gerenciadas automaticamente pelo CMake. O GLFW é baixado durante a configuração, e GLAD/stb_image já estão incluídos no repositório.

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
