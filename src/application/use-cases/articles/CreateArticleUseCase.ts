// application/use-case/CreateArticleUseCase.ts
import { CreateArticleDto } from "application/dtos/articles/CreateArticleDto";
import { Article } from "domain/entities/articles/Article";
import { IArticleRepository } from "domain/interfaces/articles/IArticleRepository";

export class CreateArticleUseCase {
    constructor(private articleRepository: IArticleRepository) { }

    async execute(dto: CreateArticleDto): Promise<Article> {
        return this.articleRepository.create(dto);
    }
}