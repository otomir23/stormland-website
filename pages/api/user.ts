import type { NextApiRequest, NextApiResponse } from 'next'
import {getLoginSession} from "../../lib/auth";

type Data = {
    user?: any
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        const session = await getLoginSession(req)
        const user = (session /*&& (await findUser(session))*/) ?? null

        res.status(200).json({ user })
    } catch (error) {
        console.error(error)
        res.status(500).end("")
    }
}
