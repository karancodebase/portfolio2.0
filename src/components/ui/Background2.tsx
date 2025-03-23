import { useEffect, useRef, useState } from "react";

const cn = (...classes: (string | undefined | null | false)[]): string =>
  classes.filter(Boolean).join(" ");

interface BackgroundGradientAnimationProps {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}

export const BackgroundGradientAnimation3: React.FC<BackgroundGradientAnimationProps> = ({
  gradientBackgroundStart = "#223A92",
  gradientBackgroundEnd = "#1A0433",
  firstColor = "17, 13, 72",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  const [curX, setCurX] = useState<number>(0);
  const [curY, setCurY] = useState<number>(0);
  const [tgX, setTgX] = useState<number>(0);
  const [tgY, setTgY] = useState<number>(0);
  const [isSafari, setIsSafari] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);

  // Set isClient to true when component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const styleElement = document.createElement("style");
    styleElement.textContent = `
      @keyframes moveHorizontal {
        0% { transform: translateX(-50%) translateY(-10%); }
        50% { transform: translateX(50%) translateY(10%); }
        100% { transform: translateX(-50%) translateY(-10%); }
      }
      @keyframes moveInCircle {
        0% { transform: rotate(0deg); }
        50% { transform: rotate(180deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes moveVertical {
        0% { transform: translateY(-50%); }
        50% { transform: translateY(50%); }
        100% { transform: translateY(-50%); }
      }
      .animate-first {
        animation: moveVertical 30s ease infinite;
      }
      .animate-second {
        animation: moveInCircle 20s reverse infinite;
      }
      .animate-third {
        animation: moveInCircle 40s linear infinite;
      }
      .animate-fourth {
        animation: moveHorizontal 40s ease infinite;
      }
      .animate-fifth {
        animation: moveInCircle 20s ease infinite;
      }
    `;
    document.head.appendChild(styleElement);

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
    document.body.style.setProperty("--pointer-color", pointerColor);
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, [
    gradientBackgroundStart,
    gradientBackgroundEnd,
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
    fifthColor,
    pointerColor,
    size,
    blendingValue,
    isClient,
  ]);

  useEffect(() => {
    if (!isClient) return;
    
    function move(): void {
      if (!interactiveRef.current) {
        return;
      }
      setCurX(curX + (tgX - curX) / 20);
      setCurY(curY + (tgY - curY) / 20);
      interactiveRef.current.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
    }

    move();
  }, [curX, curY, tgX, tgY, isClient]);

  useEffect(() => {
    if (!isClient) return;
    
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, [isClient]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  return (
    <div
      className={cn(containerClassName)}
      style={{
        height: "100vh",
        width: "100vw",
        position: "relative",
        overflow: "hidden",
        top: 0,
        left: 0,
        background: `linear-gradient(40deg, var(--gradient-background-start), var(--gradient-background-end))`,
      }}
    >
      <svg style={{ display: "none" }}>
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={className}>{children}</div>
      <div
        style={{
          height: "100%",
          width: "100%",
          filter: isSafari ? "blur(40px)" : "url(#blurMe) blur(40px)",
        }}
      >
        <div
          className="animate-first"
          style={{
            position: "absolute",
            background:
              "radial-gradient(circle at center, var(--first-color) 0, var(--first-color) 50%) no-repeat",
            mixBlendMode: blendingValue as React.CSSProperties["mixBlendMode"],
            width: "var(--size)",
            height: "var(--size)",
            top: "calc(50% - var(--size)/2)",
            left: "calc(50% - var(--size)/2)",
            transformOrigin: "center center",
            opacity: 1,
          }}
        ></div>
        <div
          className="animate-second"
          style={{
            position: "absolute",
            background:
              "radial-gradient(circle at center, rgba(var(--second-color), 0.8) 0, rgba(var(--second-color), 0) 50%) no-repeat",
            mixBlendMode: blendingValue as React.CSSProperties["mixBlendMode"],
            width: "var(--size)",
            height: "var(--size)",
            top: "calc(50% - var(--size)/2)",
            left: "calc(50% - var(--size)/2)",
            transformOrigin: "calc(50% - 400px)",
            opacity: 1,
          }}
        ></div>
        <div
          className="animate-third"
          style={{
            position: "absolute",
            background:
              "radial-gradient(circle at center, rgba(var(--third-color), 0.8) 0, rgba(var(--third-color), 0) 50%) no-repeat",
            mixBlendMode: blendingValue as React.CSSProperties["mixBlendMode"],
            width: "var(--size)",
            height: "var(--size)",
            top: "calc(50% - var(--size)/2)",
            left: "calc(50% - var(--size)/2)",
            transformOrigin: "calc(50% + 400px)",
            opacity: 1,
          }}
        ></div>
        <div
          className="animate-fourth"
          style={{
            position: "absolute",
            background:
              "radial-gradient(circle at center, rgba(var(--fourth-color), 0.8) 0, rgba(var(--fourth-color), 0) 50%) no-repeat",
            mixBlendMode: blendingValue as React.CSSProperties["mixBlendMode"],
            width: "var(--size)",
            height: "var(--size)",
            top: "calc(50% - var(--size)/2)",
            left: "calc(50% - var(--size)/2)",
            transformOrigin: "calc(50% - 200px)",
            opacity: 0.7,
          }}
        ></div>
        <div
          className="animate-fifth"
          style={{
            position: "absolute",
            background:
              "radial-gradient(circle at center, rgba(var(--fifth-color), 0.8) 0, rgba(var(--fifth-color), 0) 50%) no-repeat",
            mixBlendMode: blendingValue as React.CSSProperties["mixBlendMode"],
            width: "var(--size)",
            height: "var(--size)",
            top: "calc(50% - var(--size)/2)",
            left: "calc(50% - var(--size)/2)",
            transformOrigin: "calc(50% - 800px) calc(50% + 800px)",
            opacity: 1,
          }}
        ></div>

        {isClient && interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            style={{
              position: "absolute",
              background:
                "radial-gradient(circle at center, rgba(var(--pointer-color), 0.8) 0, rgba(var(--pointer-color), 0) 50%) no-repeat",
              mixBlendMode: blendingValue as React.CSSProperties["mixBlendMode"],
              width: "100%",
              height: "100%",
              top: "-50%",
              left: "-50%",
              opacity: 0.7,
            }}
          ></div>
        )}
      </div>
    </div>
  );
};