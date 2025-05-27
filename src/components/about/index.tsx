export function About() {
    return(
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
          <h4 style={{color: '#226A67', fontSize: 20}}>Sobre Nós</h4>
          <p style={{color: '#000', fontSize: 16}}>A Strivon Labs é uma startup de tecnologia sediada na incubadora da UNIFACOL, formada por uma equipe multidisciplinar apaixonada por inovação. Nosso propósito é transformar ideias em soluções digitais escaláveis, que agregam valor real aos negócios. Com foco em eficiência, usabilidade e resultados, desenvolvemos produtos que impulsionam empresas no ambiente digital de forma inteligente e sustentável.</p>
        </div>
    )
}