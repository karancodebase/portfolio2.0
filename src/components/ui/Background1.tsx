"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

interface BackgroundGradientAnimationProps {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export const BackgroundGradientAnimation1 = ({
  gradientBackgroundStart = "rgba(20, 20, 20, 0.93)", // dark gray, almost black
  gradientBackgroundEnd = "rgba(0, 0, 0, 0.82)", // pure black with opacity

  firstColor = "255, 255, 255", // white
  secondColor = "200, 200, 200", // light gray
  thirdColor = "150, 150, 150", // medium gray
  fourthColor = "100, 100, 100", // dark gray
  fifthColor = "50, 50, 50", // very dark gray

  size = "80%",
  children,
  className,
  containerClassName,
}: BackgroundGradientAnimationProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("Canvas not found");
      return;
    }

    const gl = (canvas.getContext("webgl", { preserveDrawingBuffer: true }) ||
      canvas.getContext("experimental-webgl", {
        preserveDrawingBuffer: true,
      })) as WebGLRenderingContext;
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    // Set canvas size to match window
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener("resize", setCanvasSize);
    setCanvasSize();

    // Vertex shader
    const vertexShaderSource = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
        v_texCoord = a_position * 0.5 + 0.5;
      }
    `;

    // Fragment shader - improved for better matching of the CSS version
    const fragmentShaderSource = `
      precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec3 u_gradientStart;
      uniform vec3 u_gradientEnd;
      uniform vec3 u_color1;
      uniform vec3 u_color2;
      uniform vec3 u_color3;
      uniform vec3 u_color4;
      uniform vec3 u_color5;
      uniform float u_size;
      
      // Function to create a better radial gradient that matches CSS
      float radialGradient(vec2 position, vec2 center, float radius) {
        float dist = length(position - center);
        return smoothstep(radius * 0.5, 0.0, dist);
      }
      
      // More accurate hard-light blend mode implementation
      vec3 hardLight(vec3 base, vec3 blend) {
        vec3 result;
        for(int i = 0; i < 3; i++) {
          if(blend[i] < 0.5) {
            result[i] = 2.0 * base[i] * blend[i];
          } else {
            result[i] = 1.0 - 2.0 * (1.0 - base[i]) * (1.0 - blend[i]);
          }
        }
        return result;
      }
      
      // Function to perform gaussian blur (simplified)
      vec3 blur(vec3 color, float amount) {
        return color * (1.0 - amount * 0.5);
      }
      
      void main() {
        // Background gradient (40deg linear gradient)
        float angle = radians(40.0);
        vec2 gradientDir = vec2(cos(angle), sin(angle));
        float gradientPos = dot(v_texCoord - vec2(0.5), gradientDir) + 0.5;
        vec3 backgroundColor = mix(u_gradientStart, u_gradientEnd, gradientPos);
        
        // Get aspect-correct coordinates
        vec2 uv = v_texCoord;
        float aspectRatio = u_resolution.x / u_resolution.y;
        vec2 center = vec2(0.5, 0.5);
        
        // Define more accurate keyframe animations matching the CSS
        // move1 animation
        float t1 = mod(u_time * 0.1, 10.0) / 10.0;  // normalize to 0-1 range
        vec2 move1;
        if(t1 < 0.25) {
          float t = t1 * 4.0; // 0-1 for this segment
          move1 = mix(vec2(0.0, 0.0), vec2(-0.4, 0.3), t);
        } else if(t1 < 0.5) {
          float t = (t1 - 0.25) * 4.0; // 0-1 for this segment
          move1 = mix(vec2(-0.4, 0.3), vec2(0.3, -0.2), t);
        } else if(t1 < 0.75) {
          float t = (t1 - 0.5) * 4.0; // 0-1 for this segment
          move1 = mix(vec2(0.3, -0.2), vec2(-0.2, -0.3), t);
        } else {
          float t = (t1 - 0.75) * 4.0; // 0-1 for this segment
          move1 = mix(vec2(-0.2, -0.3), vec2(0.0, 0.0), t);
        }
        
        // move2 animation
        float t2 = mod(u_time * 0.1 + 2.0, 10.0) / 10.0;
        vec2 move2;
        if(t2 < 0.25) {
          float t = t2 * 4.0;
          move2 = mix(vec2(0.0, 0.0), vec2(0.3, -0.4), t);
        } else if(t2 < 0.5) {
          float t = (t2 - 0.25) * 4.0;
          move2 = mix(vec2(0.3, -0.4), vec2(-0.1, 0.5), t);
        } else if(t2 < 0.75) {
          float t = (t2 - 0.5) * 4.0;
          move2 = mix(vec2(-0.1, 0.5), vec2(0.4, 0.2), t);
        } else {
          float t = (t2 - 0.75) * 4.0;
          move2 = mix(vec2(0.4, 0.2), vec2(0.0, 0.0), t);
        }
        
        // move3 animation
        float t3 = mod(u_time * 0.1 + 4.0, 10.0) / 10.0;
        vec2 move3;
        if(t3 < 0.25) {
          float t = t3 * 4.0;
          move3 = mix(vec2(0.0, 0.0), vec2(-0.3, -0.2), t);
        } else if(t3 < 0.5) {
          float t = (t3 - 0.25) * 4.0;
          move3 = mix(vec2(-0.3, -0.2), vec2(0.5, 0.3), t);
        } else if(t3 < 0.75) {
          float t = (t3 - 0.5) * 4.0;
          move3 = mix(vec2(0.5, 0.3), vec2(-0.4, 0.5), t);
        } else {
          float t = (t3 - 0.75) * 4.0;
          move3 = mix(vec2(-0.4, 0.5), vec2(0.0, 0.0), t);
        }
        
        // move4 animation
        float t4 = mod(u_time * 0.1 + 6.0, 10.0) / 10.0;
        vec2 move4;
        if(t4 < 0.25) {
          float t = t4 * 4.0;
          move4 = mix(vec2(0.0, 0.0), vec2(0.2, 0.5), t);
        } else if(t4 < 0.5) {
          float t = (t4 - 0.25) * 4.0;
          move4 = mix(vec2(0.2, 0.5), vec2(-0.5, -0.3), t);
        } else if(t4 < 0.75) {
          float t = (t4 - 0.5) * 4.0;
          move4 = mix(vec2(-0.5, -0.3), vec2(0.3, -0.5), t);
        } else {
          float t = (t4 - 0.75) * 4.0;
          move4 = mix(vec2(0.3, -0.5), vec2(0.0, 0.0), t);
        }
        
        // move5 animation
        float t5 = mod(u_time * 0.1 + 8.0, 10.0) / 10.0;
        vec2 move5;
        if(t5 < 0.25) {
          float t = t5 * 4.0;
          move5 = mix(vec2(0.0, 0.0), vec2(0.5, -0.5), t);
        } else if(t5 < 0.5) {
          float t = (t5 - 0.25) * 4.0;
          move5 = mix(vec2(0.5, -0.5), vec2(-0.5, 0.5), t);
        } else if(t5 < 0.75) {
          float t = (t5 - 0.5) * 4.0;
          move5 = mix(vec2(-0.5, 0.5), vec2(0.5, 0.5), t);
        } else {
          float t = (t5 - 0.75) * 4.0;
          move5 = mix(vec2(0.5, 0.5), vec2(0.0, 0.0), t);
        }
        
        // Adjust for aspect ratio
        move1.x *= aspectRatio;
        move2.x *= aspectRatio;
        move3.x *= aspectRatio;
        move4.x *= aspectRatio;
        move5.x *= aspectRatio;
        
        // Calculate circle centers
        vec2 center1 = center + move1;
        vec2 center2 = center + move2;
        vec2 center3 = center + move3;
        vec2 center4 = center + move4;
        vec2 center5 = center + move5;
        
        // Calculate proper size
        float sizeScale = u_size;
        
        // Create radial gradients for each circle
        float shape1 = radialGradient(uv, center1, sizeScale);
        float shape2 = radialGradient(uv, center2, sizeScale);
        float shape3 = radialGradient(uv, center3, sizeScale);
        float shape4 = radialGradient(uv, center4, sizeScale);
        float shape5 = radialGradient(uv, center5, sizeScale);
        
        // Apply colors with opacity
        vec3 color1 = u_color1 * shape1 * 0.8;
        vec3 color2 = u_color2 * shape2 * 0.8;
        vec3 color3 = u_color3 * shape3 * 0.8;
        vec3 color4 = u_color4 * shape4 * 0.8;
        vec3 color5 = u_color5 * shape5 * 0.8;
        
        // Apply hard-light blending more accurately
        vec3 result = backgroundColor;
        
        if (shape1 > 0.01) result = hardLight(result, mix(vec3(0.5), color1, shape1));
        if (shape2 > 0.01) result = hardLight(result, mix(vec3(0.5), color2, shape2));
        if (shape3 > 0.01) result = hardLight(result, mix(vec3(0.5), color3, shape3));
        if (shape4 > 0.01) result = hardLight(result, mix(vec3(0.5), color4, shape4));
        if (shape5 > 0.01) result = hardLight(result, mix(vec3(0.5), color5, shape5));
        
        // Apply blur effect more accurately
        vec3 blurred = blur(result, 0.9);
        
        gl_FragColor = vec4(result, 1.0);
      }
    `;

    // Create and compile shaders
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    if (!vertexShader) {
      console.error("Failed to create vertex shader");
      return;
    }
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.compileShader(vertexShader);

    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
      console.error(
        "Vertex shader compilation failed: ",
        gl.getShaderInfoLog(vertexShader)
      );
      return;
    }

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    if (!fragmentShader) {
      console.error("Failed to create fragment shader");
      return;
    }
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    gl.compileShader(fragmentShader);

    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
      console.error(
        "Fragment shader compilation failed: ",
        gl.getShaderInfoLog(fragmentShader)
      );
      return;
    }

    // Create program and link shaders
    const program = gl.createProgram();
    if (!program) {
      console.error("Failed to create shader program");
      return;
    }

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program linking failed: ", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Create a buffer for positions
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0,
      ]),
      gl.STATIC_DRAW
    );

    // Get attribute and uniform locations
    const positionLocation = gl.getAttribLocation(program, "a_position");
    const timeLocation = gl.getUniformLocation(program, "u_time");
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    const gradientStartLocation = gl.getUniformLocation(
      program,
      "u_gradientStart"
    );
    const gradientEndLocation = gl.getUniformLocation(program, "u_gradientEnd");
    const color1Location = gl.getUniformLocation(program, "u_color1");
    const color2Location = gl.getUniformLocation(program, "u_color2");
    const color3Location = gl.getUniformLocation(program, "u_color3");
    const color4Location = gl.getUniformLocation(program, "u_color4");
    const color5Location = gl.getUniformLocation(program, "u_color5");
    const sizeLocation = gl.getUniformLocation(program, "u_size");

    // Enable the position attribute
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Parse RGB values from string to array
    const parseRGB = (rgbString: string) => {
      const values = rgbString
        .split(",")
        .map((val) => parseInt(val.trim()) / 255);
      return values;
    };

    // Parse gradient colors more accurately
    const parseGradientColor = (colorString: string) => {
      if (colorString.startsWith("rgb(")) {
        const values = colorString
          .replace("rgb(", "")
          .replace(")", "")
          .split(",");
        return values.map((val) => parseInt(val.trim()) / 255);
      }
      return [0, 0, 0]; // Default
    };

    // Parse the size percentage to a float more accurately
    const parseSize = (sizeStr: string) => {
      if (sizeStr.endsWith("%")) {
        return (parseFloat(sizeStr) / 100) * 1.0; // Convert percentage to a proportion
      }
      return 0.4; // Default
    };

    // Set uniform values
    const gradientStart = parseGradientColor(gradientBackgroundStart);
    const gradientEnd = parseGradientColor(gradientBackgroundEnd);
    const color1Values = parseRGB(firstColor);
    const color2Values = parseRGB(secondColor);
    const color3Values = parseRGB(thirdColor);
    const color4Values = parseRGB(fourthColor);
    const color5Values = parseRGB(fifthColor);
    const sizeValue = parseSize(size);

    gl.uniform3fv(gradientStartLocation, gradientStart);
    gl.uniform3fv(gradientEndLocation, gradientEnd);
    gl.uniform3fv(color1Location, color1Values);
    gl.uniform3fv(color2Location, color2Values);
    gl.uniform3fv(color3Location, color3Values);
    gl.uniform3fv(color4Location, color4Values);
    gl.uniform3fv(color5Location, color5Values);
    gl.uniform1f(sizeLocation, sizeValue);

    // Animation loop
    const render = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTimeRef.current;

      gl.uniform1f(timeLocation, elapsedTime * 0.01);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationRef.current = requestAnimationFrame(render);
    };

    render();

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(positionBuffer);
    };
  }, [
    gradientBackgroundStart,
    gradientBackgroundEnd,
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
    fifthColor,
    size,
  ]);

  return (
    <div
      className={cn(
        "h-screen w-screen relative overflow-hidden top-0 left-0",
        containerClassName
      )}
    >
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};

export const BackgroundGradientAnimation2 = ({
  gradientBackgroundStart = "rgba(20, 20, 20, 0.93)", // dark gray, almost black
  gradientBackgroundEnd = "rgba(0, 0, 0, 0.82)", // pure black with opacity

  firstColor = "255, 255, 255", // white
  secondColor = "200, 200, 200", // light gray
  thirdColor = "150, 150, 150", // medium gray
  fourthColor = "100, 100, 100", // dark gray
  fifthColor = "50, 50, 50", // very dark gray

  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  size?: string;
  blendingValue?: React.CSSProperties["mixBlendMode"];
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  useEffect(() => {
    document.body.style.setProperty(
      "--gradient-background-start",
      gradientBackgroundStart
    );
    document.body.style.setProperty(
      "--gradient-background-end",
      gradientBackgroundEnd
    );
    document.body.style.setProperty("--first-color", firstColor);
    document.body.style.setProperty("--second-color", secondColor);
    document.body.style.setProperty("--third-color", thirdColor);
    document.body.style.setProperty("--fourth-color", fourthColor);
    document.body.style.setProperty("--fifth-color", fifthColor);
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);
  }, [
    gradientBackgroundStart,
    gradientBackgroundEnd,
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
    fifthColor,
    size,
    blendingValue,
  ]);

  return (
    <div
      className={cn(
        "h-screen w-screen relative overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName
      )}
    >
      <div className={cn("", className)}>{children}</div>
      <div className="gradients-container h-full w-full blur-lg">
        {[firstColor, secondColor, thirdColor, fourthColor, fifthColor].map(
          (color, index) => (
            <div
              key={index}
              className="absolute w-[var(--size)] h-[var(--size)] opacity-80 rounded-full"
              style={{
                background: `radial-gradient(circle at center, rgba(${color}, 0.8) 0%, rgba(${color}, 0) 50%)`,
                mixBlendMode: blendingValue,
                animation: `move${
                  index + 1
                } 10s infinite alternate ease-in-out`,
              }}
            ></div>
          )
        )}
      </div>
      <style>
        {`
          @keyframes move1 {
  50% { transform: translate(30vw, -20vh); }
  75% { transform: translate(-20vw, -30vh); }
  100% { transform: translate(0, 0); }
}

@keyframes move2 {
  0% { transform: translate(0, 0); }
  25% { transform: translate(30vw, -40vh); }
  50% { transform: translate(-10vw, 50vh); }
  75% { transform: translate(40vw, 20vh); }
  100% { transform: translate(0, 0); }
}

@keyframes move3 {
  0% { transform: translate(0, 0); }
  25% { transform: translate(-30vw, -20vh); }
  50% { transform: translate(50vw, 30vh); }
  75% { transform: translate(-40vw, 50vh); }
  100% { transform: translate(0, 0); }
}

@keyframes move4 {
  0% { transform: translate(0, 0); }
  25% { transform: translate(20vw, 50vh); }
  50% { transform: translate(-50vw, -30vh); }
  75% { transform: translate(30vw, -50vh); }
  100% { transform: translate(0, 0); }
}

@keyframes move5 {
0% { transform: translate(0, 0); }
  25% { transform: translate(50vw, -50vh); }
  50% { transform: translate(-50vw, 50vh); }
  75% { transform: translate(50vw, 50vh); }
  100% { transform: translate(0, 0); }
}
        `}
      </style>
    </div>
  );
};
