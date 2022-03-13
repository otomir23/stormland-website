import Layout from "../../components/layout/layout";
import {useUser} from "../../lib/hooks";
import {useRouter} from "next/router";
import {useEffect} from "react";
import CenterContainer from "../../components/layout/CenterContainer/center";

export default function SuccessAuth() {
    useUser({redirectTo: "/me", redirectIfFound: true})
    const router = useRouter()
    useEffect(() => {
        if (!router.query || !router.query["code"]) return
        fetch('/api/auth?code=' + router.query["code"]).then(() => router.push('/me'))
    })
    return (
        <Layout>
            <CenterContainer>
                Авторизация...
            </CenterContainer>
        </Layout>
    )
}