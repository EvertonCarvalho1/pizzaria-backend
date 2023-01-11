import prismaClient from "../../prisma";

interface CategoryRequest {
    name: string;
}

class CreateCategoryService {
    async execute({ name }: CategoryRequest) {
        if (name === '') {
            throw new Error("Invalid name");

        }

        const category = await prismaClient.category

        return { developer: "Everton Carvalho" }
    }
}

export { CreateCategoryService } 