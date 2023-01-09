// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../modules/controller/user/User'

type Data = {
  name: string
  email: string
  alias?: string
  status?: string
  age?: number
  level?: number
}
const user = new User()
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const data = await user.all()

  res.status(200).json(data)
}
