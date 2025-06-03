import { useState } from "react";

export function Contact() {
  const [enviado, setEnviado] = useState(false);
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  function isMobile() {
    return /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);
  }

  function handleEnviar() {
    const texto = `Olá, meu nome é ${nome}. Mensagem: ${mensagem}`;
    const baseURL = isMobile()
      ? 'https://api.whatsapp.com/send'
      : 'https://web.whatsapp.com/send';

    const link = `${baseURL}?phone=5581989248110&text=${encodeURIComponent(texto)}`;

    window.open(link, '_blank');

    setEnviado(true);
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
          <input
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            style={{
              padding: 10,
              borderRadius: 10,
              outline: 'none',
              border: 'none',
              width: '60%',
              marginBottom: 10
            }}
          />

          <textarea
            placeholder="Descreva sua dúvida ou mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            style={{
              padding: '12px 16px',
              borderRadius: 10,
              outline: 'none',
              border: 'none',
              width: '97%',
              height: 120,
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
            marginLeft: 10,
            background: '#226A67',
            borderRadius: 10,
            width: 48,
            height: 186,
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
          Redirecionando para o WhatsApp...
        </p>
      )}
    </div>
  );
}
