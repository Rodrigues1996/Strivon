export function About() {
  return (
    <div
      style={{
        border: '1px solid #226A67',
        borderRadius: 10,
        padding: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: '100%'
      }}
    >
      <h4 style={{ color: '#226A67', fontSize: 20, marginBottom: 8 }}>Sobre Nós</h4>
      <p style={{ color: '#000', fontSize: 16, marginBottom: 32, textAlign: 'center' }}>
        A Strivon Labs é uma startup de tecnologia sediada na incubadora da UNIFACOL.
        Nosso propósito é transformar ideias em soluções digitais escaláveis, que agregam valor real aos negócios.
        Com foco em eficiência, usabilidade e resultados, desenvolvemos produtos que impulsionam empresas no ambiente
        digital de forma inteligente e sustentável, sempre oferecendo projetos sob medida para cada mercado e alinhados
        à mais alta qualidade técnica.
      </p>

      {/* Tecnologias e Equipe lado a lado */}
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: 40, flexWrap: 'wrap' }}>
        {/* Tecnologias */}
        <div style={{ flex: 1, minWidth: 250 }}>
          <h4 style={{ color: '#226A67', fontSize: 18, marginBottom: 16 }}>Tecnologias Utilizadas</h4>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" width="40" />
              <p style={{ fontSize: 14, marginTop: 8 }}>PHP</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel" width="40" />
              <p style={{ fontSize: 14, marginTop: 8 }}>Laravel</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="40" />
              <p style={{ fontSize: 14, marginTop: 8 }}>React</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" width="40" />
              <p style={{ fontSize: 14, marginTop: 8 }}>MySQL</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img src="https://img.icons8.com/color/48/api.png" alt="Gateways" width="40" />
              <p style={{ fontSize: 14, marginTop: 8, maxWidth: 80 }}>Gateways de Pagamento</p>
            </div>
          </div>
        </div>

        {/* Equipe */}
        <div style={{ flex: 1, minWidth: 250 }}>
          <h4 style={{ color: '#226A67', fontSize: 18, marginBottom: 16 }}>Equipe</h4>
          <p style={{ color: '#000', fontSize: 16 }}>
            Amanda Laís — Software Engineer<br />
            Etebário Neto — Software Engineer<br />
            Maria A. E. Rodrigues — Designer & Technical Writer<br />
            Natália Nascimento — Product Owner
          </p>
        </div>
      </div>
    </div>
  );
}
