import Layout from '../components/layout/layout'

export default function Map() {
    return (
        <Layout title={"Карта сервера"}>
            <iframe style={{
                border: '1px solid #eeeeee',
                borderRadius: '.5em',
                margin: '3em',
                width: 'calc(100% - 5em)',
                height: 1024
            }} src={'http://s6.q2e.ru:25896'}>Ваш браузер не поддерживает отображение карты. Пожалуйста обновитесь до новой версии.</iframe>
        </Layout>
    )
}