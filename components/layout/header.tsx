import Link from 'next/link'
import Image from 'next/image'
import {Map, User} from "@geist-ui/icons";

export default function Header() {
    return (
        <header style={{
            padding: '1em',
            borderBottom: '1px solid #eee',
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "row"
        }}>
            <Link href={'/map'}><a><Map/></a></Link>
            <Link href={'/'}><a><Image height={64} width={64} src={'/images/headerLogo.png'} alt={'Logo'}/></a></Link>
            <Link href={'/me'}><a><User/></a></Link>
        </header>
    )
}