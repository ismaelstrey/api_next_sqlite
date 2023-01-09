// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { UserDTO } from '../../../modules/controller/user/dto/UserDTO'
import { User } from '../../../modules/controller/user/User'


const user = new User()
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {


    if (req.method === "POST") {
        const { body } = req
        const data = await user.new(body)
        res.status(200).json(data)
    }
    return res.status(200).json({ "message": "Method Get" })

}
