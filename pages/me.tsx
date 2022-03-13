import Layout from "../components/layout/layout";
import type {NextPage} from "next";
import {useUser} from "../lib/hooks";
import CenterContainer from "../components/layout/CenterContainer/center";
import {Headline, Link} from "../components/ui";

const Profile: NextPage = () => {
    const user = useUser({redirectTo: "/auth", redirectIfFound: false})
    if (!user || !user.profile) return (
        <Layout>
            <CenterContainer>
                Загрузка...
            </CenterContainer>
        </Layout>
    )

    return (
        <Layout>
            <Headline>С возвращением, {user.profile.name}!</Headline>
            <b>Подписка:</b> до апреля 2022 <Link href="/me/subscription">Продлить {'>'}</Link>
        </Layout>
    )
}

export default Profile;