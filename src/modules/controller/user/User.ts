import { prisma } from "../../../service/prisma/cliente";
import { UserDTO } from "./dto/UserDTO"

export class User {
    async all() {
        const user = await prisma.user.findMany()
        return user
    }
    async new(data: UserDTO) {
        const emailExits = await prisma.user.findUnique({
            where: {
                email: data.email
            }
        })
        if (!emailExits) {
            const user = await prisma.user.create({
                data
            })
            return user
        }
        return { "erro": "Email já exite em nossa base de dados" }

    }
}