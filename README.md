# Bouncing DVD Logo 🎨

Simulação logo DVD quicando pela tela, implementado com OpenGL moderno.

## 📋 Pré-requisitos

- CMake 3.14+
- Compilador C++17
- Git

## 🔧 Compilação

```sh
# Clonar o repositório
git clone https://github.com/caiocesar06/bouncing-dvd-logo.git
cd bouncing-dvd-logo

# Compilar
mkdir build && cd build
cmake ..
cmake --build . --config Debug

# Executar
./Debug/bouncing-dvd-logo.exe    # Windows
./bouncing-dvd-logo              # Linux/macOS
```

## 🎮 Controles

- **↑/↓** - Aumentar/diminuir velocidade
- **Espaço** - Resetar velocidade
- **ESC** - Fechar aplicação

## 📚 Bibliotecas

- [GLFW 3.3.8](https://www.glfw.org/) - Janelas e contexto OpenGL (baixado automaticamente)
- [GLAD](https://glad.dav1d.de/) - Funções OpenGL 3.3 (incluído)
- [stb_image](https://github.com/nothings/stb) - Carregamento de texturas (incluído)

## 📝 Licença

MIT License - Veja [LICENSE](LICENSE) para detalhes.

## 👤 Autor

Caio Cesar - [@caiocesar06](https://github.com/caiocesar06)
