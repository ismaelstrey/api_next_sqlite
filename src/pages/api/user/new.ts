// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { UserDTO } from '../../../modules/controller/user/dto/UserDTO'
import { User } from '../../../modules/controller/user/User'


const user = new User()
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<UserDTO[]>
) {
    const data = await user.new({
        data: {
            "name": "ismael strey pereira 10",
            "email": "dd@dev.com",
            "age": 35,
            "alias": "ismaelstrey",
            "level": 1,
            "status": "on"
        }
    })

    res.status(200).json(data)
}
