// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../modules/controller/user/User'


const user = new User()
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await user.all()

  res.status(200).json(data)
}
