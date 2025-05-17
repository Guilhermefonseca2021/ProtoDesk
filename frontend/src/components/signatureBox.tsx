import React, { useRef, useEffect } from "react";
import SignaturePad from "signature_pad";

const SignaturePadComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const signaturePadRef = useRef<SignaturePad | null>(null);

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    const data = signaturePadRef.current?.toData();

    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(ratio, ratio);

    if (data && signaturePadRef.current) {
      signaturePadRef.current.clear();
      signaturePadRef.current.fromData(data);
    }
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    resizeCanvas();

    signaturePadRef.current = new SignaturePad(canvasRef.current, {
      penColor: "#000000",
      minWidth: 1,
      maxWidth: 3,
      backgroundColor: "#ffffff00",
    });

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      signaturePadRef.current?.off();
    };
  }, []);

  const clear = () => {
    signaturePadRef.current?.clear();
  };

  const save = () => {
    if (!signaturePadRef.current || signaturePadRef.current.isEmpty()) {
      alert("Por favor, assine antes de salvar.");
      return;
    }

    const dataURL = signaturePadRef.current.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "assinatura.png";
    link.click();
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "1rem", userSelect: "none" }}>
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "12rem",
          border: "1px solid #ccc",
          borderRadius: "0.5rem",
          touchAction: "none"
        }}
      />
      <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
        <button
          onClick={clear}
          type="button"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#e53e3e",
            color: "white",
            borderRadius: "0.375rem",
            border: "none",
            cursor: "pointer"
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#c53030")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#e53e3e")}
        >
          Apagar
        </button>
        <button
          onClick={save}
          type="button"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#38a169",
            color: "white",
            borderRadius: "0.375rem",
            border: "none",
            cursor: "pointer"
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#2f855a")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#38a169")}
        >
          Salvar PNG
        </button>
      </div>
    </div>
  );
};

export default SignaturePadComponent;
