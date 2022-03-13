import Layout from "../../components/layout/layout";
import type {GetServerSideProps, NextPage} from "next";
import {useUser} from "../../lib/hooks";
import CenterContainer from "../../components/layout/CenterContainer/center";
import {MicrosoftAuth} from "minecraft-auth";
import absoluteUrl from 'next-absolute-url'
import {useRouter} from "next/router";
import {useEffect} from "react";

const Auth = ({url}: {url: string}) => {
    useUser({redirectTo: "/me", redirectIfFound: true})
    const router = useRouter()
    useEffect(() => {
        router.push(url)
    })
    return (
        <Layout>
            <CenterContainer>
                Перенаправление...
            </CenterContainer>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async context => {
    MicrosoftAuth.setup(process.env.MS_APP_ID, process.env.MS_SECRET, absoluteUrl(context.req).origin + "/auth/success");

    return {
        props: {
            url: MicrosoftAuth.createUrl()
        }
    }
}

export default Auth;