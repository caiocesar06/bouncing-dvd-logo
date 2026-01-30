#version 330 core

in vec3 ourColor;
in vec2 TexCoord;

out vec4 FragColor;

uniform sampler2D textureLogo;
uniform float colorR;
uniform float colorG;
uniform float colorB;

void main()
{
	vec4 texColor = texture(textureLogo, TexCoord);
	FragColor = vec4(colorR, colorG, colorB, texColor.a);
}