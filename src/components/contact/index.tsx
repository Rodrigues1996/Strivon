import { useState } from "react";

export function Contact() {
  const [enviado, setEnviado] = useState(false);

  function handleEnviar() {
    setEnviado(true);

    // Opcional: esconder a mensagem após alguns segundos
    setTimeout(() => setEnviado(false), 4000);
  }

  return (
    <div
      style={{
        background: '#A6D1CF',
        borderRadius: 10,
        padding: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: '100%'
      }}
    >
      <h4 style={{ color: '#226A67', fontSize: 20 }}>Entre em contato:</h4>

      <div style={{ width: '100%', display: "flex" }}>
        <div style={{ width: '100%', display: "flex", flexDirection: "column" }}>
          <div style={{ width: '100%', display: "flex", gap: 20 }}>
            <input
              placeholder="Nome"
              style={{
                padding: 10,
                borderRadius: 10,
                outline: 'none',
                border: 'none',
                width: '100%'
              }}
            />
            <input
              placeholder="Email"
              style={{
                padding: 10,
                borderRadius: 10,
                outline: 'none',
                border: 'none',
                width: '100%'
              }}
            />
          </div>

          <textarea
            placeholder="Descreva sua dúvida ou mensagem"
            style={{
              padding: '12px 16px',
              borderRadius: 10,
              outline: 'none',
              border: 'none',
              width: '97%',
              height: 120,
              marginTop: 10,
              resize: 'none',
              fontSize: 16
            }}
          />
        </div>

        {/* Botão de envio */}
        <div
          onClick={handleEnviar}
          style={{
            cursor: 'pointer',
            right: 10,
            bottom: 10,
            background: '#226A67',
            borderRadius: 10,
            width: 48,
            height: 186,
            marginLeft: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4L3 9.31372L10.5 13.5M20 4L14.5 21L10.5 13.5M20 4L10.5 13.5"
              stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Mensagem de confirmação */}
      {enviado && (
        <p style={{ marginTop: 20, color: "#226A67", fontWeight: 'bold' }}>
          Mensagem enviada com sucesso!
        </p>
      )}
    </div>
  );
}
