import React, { useEffect, useRef } from "react";

const Background = () => {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Add styles to ensure full screen
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflow = "hidden";
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";
    document.documentElement.style.overflow = "hidden";

    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl");

    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragmentShaderSource = `
      precision highp float;
      uniform vec2 resolution;
      uniform vec2 mouse;
      uniform float time;

      float organicShape(vec2 uv, vec2 center, vec2 scale) {
        vec2 d = uv - center;
        d = d * scale;
        float r = length(d);
        
        r += sin(atan(d.y, d.x) * 9.0 + time) * 0.001;
        return smoothstep(0.4, 0.2, r);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        vec2 mouseNorm = mouse / resolution.xy;
        
        float shape = 0.0;
        
        for(int i = 0; i < 6; i++) {
          float t = float(i) / 5.0;
          vec2 pos = mix(
            mouseNorm,
            vec2(0.5 + cos(time * 0.3) * 0.3, 0.5 + sin(time * 0.2) * 0.2),
            t
          );
          
          vec2 scale = vec2(1.0 + sin(t * 3.14159) * 0.5, 1.0);
          shape += organicShape(uv, pos, scale) * (1.0 - t * 0.5);
        }
        
        vec3 color1 = vec3(0.1, 0.2, 0.9);
        vec3 color2 = vec3(0.0, 0.0, 0.2);
        vec3 color = mix(color2, color1, shape);
        
        color += sin(uv.x * 10.0 + time) * 0.02;
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const createShader = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(
      gl.FRAGMENT_SHADER,
      fragmentShaderSource
    );

    if (!vertexShader || !fragmentShader) {
      console.error("Failed to create shaders");
      return;
    }

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const vertices = new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const resolutionLocation = gl.getUniformLocation(program, "resolution");
    const mouseLocation = gl.getUniformLocation(program, "mouse");
    const timeLocation = gl.getUniformLocation(program, "time");

    const setCanvasSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
      gl.uniform2f(resolutionLocation, width, height);
    };

    const handleMouseMove = (e) => {
      mousePos.current = {
        x: e.clientX,
        y: window.innerHeight - e.clientY,
      };
    };

    const render = (time) => {
      gl.uniform1f(timeLocation, time * 0.001);
      gl.uniform2f(mouseLocation, mousePos.current.x, mousePos.current.y);
      gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
      requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", setCanvasSize);

    mousePos.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    setCanvasSize();
    render(0);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        display: "block",
        background: "#000",
      }}
    />
  );
};

export default Background;
