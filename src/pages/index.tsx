import { Header } from "@/components/header";
import GlobalStyles from "@/styles/globals";
import Image from "next/image";
import ImageShopfee from '../../public/imageProduct.png'
import { About, Contact, Footer } from "@/components";

export default function Home() {
  return (
    <div style={{flex: 1, width: '100%'}}>
      <GlobalStyles/>
      <Header/>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: '0px 74px',
        gap: 40
      }}>
        <h3 style={{color: '#226A67', marginTop: 40}}>Transformando ideias em soluções digitais escaláveis</h3>

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
          <h4 style={{color: '#226A67', fontSize: 20}}>O que Iremos Solucionar</h4>
          <p style={{color: '#000', fontSize: 16,  textAlign: 'center' }}>Como uma fábrica de software, a Strivon Labs é especializada em transformar ideias em produtos digitais escaláveis. Nosso foco é resolver desafios reais por meio da tecnologia, com soluções sob medida para cada mercado. Combinamos agilidade, inovação e expertise técnica para entregar resultados que impulsionam negócios.</p>
        </div>

        <div
          style={{
            background: '#F5F7FA',
            borderRadius: 10,
            padding: 40,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            width: '100%'
          }}
        >
          <div style={{maxWidth: 327, paddingRight: 40, display: "flex", alignItems: "flex-start", gap: 20, flexDirection: "column", marginTop: -80}}>
            <h4 style={{color: '#3A6FAE', fontSize: 20}}>SHOPFEE</h4>
            <p style={{color: '#000', fontSize: 16}}>SHOPFEE é um sistema de gestão de afiliados desenvolvido especialmente para o mercado brasileiro. Ele automatiza campanhas, rastreamento, cálculo de comissões e pagamentos via Pix, com foco em segurança, performance e transparência. Com foco em segurança, transparência e performance, o ShopFee ajuda anunciantes e afiliados a maximizar ganhos com confiança e eficiência, adaptando-se às necessidades e regulamentações do mercado nacional.</p>

          </div>
          <Image src={ImageShopfee} alt="ImageShopfee" />
        </div>
        <About/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}
