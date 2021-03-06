#version 330 core
in vec2 TexCoords;

out vec4 color;

uniform sampler2D image;
uniform vec3 spriteColor;

void main()
{
	color = vec4(spriteColor, 1.0) * texture(image, TexCoords);	
	/*if (TexCoords.y < 0)
	  color = vec4(1,0,0,1);
	else
	  color = vec4(TexCoords.yyy,1);*/
}