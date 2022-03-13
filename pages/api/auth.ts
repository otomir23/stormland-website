import type {NextApiRequest, NextApiResponse} from 'next'
import {MicrosoftAccount, MicrosoftAuth} from "minecraft-auth";
import absoluteUrl from "next-absolute-url";
import {setLoginSession} from "../../lib/auth";

type Data = {
    result: "success" | "fail",
    error?: any
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const fail = (e: any) => res.status(500).json({
        result: "fail",
        error: e
    })

    const code = req.query.code
    if (!code || code === '') {
        fail('MISSING_CODE')
        return
    }

    MicrosoftAuth.setup(process.env.MS_APP_ID, process.env.MS_SECRET, absoluteUrl(req).origin + "/auth/success");
    let account = new MicrosoftAccount();
    await account.authFlow(code).then(async () => {
        await account.getProfile()

        if (!account.ownership) {
            fail('INVALID_ACCOUNT')
            return
        }

        const session = {
            profile: account.profile
        }

        await setLoginSession(res, session)
        res.status(200).json({result: "success"})
    }, e => { console.log(e); fail(/*e.replaceAll(' ', '_').toUpperCase()*/"MSA_ERROR"); })
}
