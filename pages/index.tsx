import type {NextPage} from 'next'
import Layout from '../components/layout/layout'
import styles from '../styles/pages/Index.module.css'
import {Button} from '../components/ui'
import Hero from "../components/layout/Hero/hero";

const Home: NextPage = () => {
    return (
        <Layout title="Главная">
            <Hero
                title={
                    <span>Добро пожаловать на <span style={{
                        fontWeight: 'bolder'
                    }}>StormLand</span>!</span>
                }
                description="StormLand - ванильный сервер без плагинов для друзей, где можно просто насладится игрой и
                  завести знакомых. Мы уважаем и ценим каждого игрока и прислушиваемся ко всем мнениям."
                buttons={[
                    <Button key='sub' variant={'primary'} href='/me'>
                        Оплатить подписку
                    </Button>,
                    <Button key='vk' href='https://vk.com/stormlandmc'>
                        Перейти в группу ВК
                    </Button>
                ]}
                image='/images/pepega.png'
            />
        </Layout>
    )
}

export default Home
