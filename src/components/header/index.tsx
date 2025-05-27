import Image from "next/image";
import LogoFull from '../../../public/strivonLogoFull.png'
export function Header() {
    return (
        <div
            style={{
                height: 126,
                background: '#2E2E2E',
                width: '100%',
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Image src={LogoFull} alt="LogoFull" />
        </div>
    )
}