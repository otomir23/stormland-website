import Layout from "../components/layout/layout";
import {Headline} from "../components/ui";
import Link from 'next/link'
import CenterContainer from "../components/layout/CenterContainer/center";

export default function Error404() {
    return (
        <Layout title='Страница не найдена'>
            <CenterContainer>
                <img src='/images/notFound.gif' alt={''}/>
                <Headline>Ошибка 404</Headline>
                <span>То место, куда ты стремишся попасть потеряно.</span>
                <span>Лучше возвращайся <Link href='/'><a style={{color: 'var(--primary)'}}>домой</a></Link>, путник.</span>
            </CenterContainer>
        </Layout>
    )
} 