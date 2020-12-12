import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Item } from '../entity/Item'
import { User } from "../entity/User";

export class ItemController {

    private itemRepository = getRepository(Item);
    private userRepository = getRepository(User);

    // visualizar todas o items
    async all(request: Request, response: Response, next: NextFunction) {
        return {
            items: await this.itemRepository.find(),
            error: ''
        }
    }

    // salvar item
    async save(request: Request, response: Response, next: NextFunction) {

        console.log(request.body);

        try {
            const item = await this.itemRepository.save(request.body);
            // return {items: item}
            return { items: await this.itemRepository.find(), error: '' }
        } catch (error) {
            //return {items: [], error: 'error_save_item'}
            return { items: await this.itemRepository.find(), error: "Não foi possivel adicionar o item." }
        }
    }

    // visualizar items (por usuario)
    async allByUser(request: Request, response: Response, next: NextFunction) {
        try {
            const user = await this.userRepository.findOne(request.params.id);

            if (user) {
                const items = await this.itemRepository.find({
                    where: {
                        user: user
                    }
                })

                if (items) {
                    return { items: items, userId: user.id, error: '' }
                }
            } else {
                return { items: [], userId: user.id, error: '' }
            }

        } catch (error) {
            return { items: [], error: error }
        }
    }

    // remover item
    async remove(request: Request, response: Response, next: NextFunction) {
        try {
            const item = await this.itemRepository.findOne(request.body.id);

            if (item) {
                await this.itemRepository.remove(item);
                return { items: await this.itemRepository.find(), error: '' }
            }
        } catch (error) {
            return { items: await this.itemRepository.find(), error: 'Erro ao deletar o item.' }
        }
    }

    // filtrar item
    async itemByFilter(request: Request, response: Response, next: NextFunction) {
        try {
            const items = await this.itemRepository.find({
                where: {
                    title: request.body.title
                }
            });

            if (items) {
                return { item: items }
            }

            else {
                return { item: [] }
            }
        } catch (error) {
            return { item: [], error }
        }
    }

    // editar item
    async edit(request: Request, response: Response, next: NextFunction) {
        try {
            const item = await this.itemRepository.findOne(request.params.id);
            if (item) {
                const update = await this.itemRepository.update(item.id, request.body)
                return { item: update }
            }

        } catch (error) {
            return { item: [], error }
        }
    }

    // curtir item
    async curtirItem(request: Request, response: Response, next: NextFunction) {
        try {
            const item = await this.itemRepository.findOne(request.params.id);
            if (item) {
                item.likes = item.likes + 1;
                const update = await this.itemRepository.update(item.id, item);
                return { items: await this.itemRepository.find(), error: '' }
            }
        } catch (error) {
            return { items: await this.itemRepository.find(), error: 'Erro ao curtir item.' }
        }
    }

    // favoritar item
    async favItem(request: Request, response: Response, next: NextFunction) {
        try {
            const item = await this.itemRepository.findOne(request.params.id);
            if (item) {
                item.favorite = true;
                const update = await this.itemRepository.update(item.id, item);
                return { items: await this.itemRepository.find(), error: '' }
            }
        } catch (error) {
            return { items: await this.itemRepository.find(), error: 'Erro ao favoritar item.' }
        }
    }

    // visualizar todas os items favoritos
    async allFavs(request: Request, response: Response, next: NextFunction) {
        return {
            items: await this.itemRepository.find({
                where: {
                    favorite: true
                }
            }), error: ''
        }
    }

    // adicionar item ao carrinho
    async addToCart(request: Request, response: Response, next: NextFunction) {
        try {
            const item = await this.itemRepository.findOne(request.params.id);
            if (item) {
                item.cart = true;
                const update = await this.itemRepository.update(item.id, item);
                return { items: await this.itemRepository.find(), error: '' }
            }
        } catch (error) {
            return { items: await this.itemRepository.find(), error: 'Erro ao adicionar item ao carrinho.' }
        }
    }

    // visualizar carrinho de compras
    async allCart(request: Request, response: Response, next: NextFunction) {
        return {
            items: await this.itemRepository.find({
                where: {
                    cart: true
                }
            }), error: ''
        }
    }

    async clearCart(request: Request, response: Response, next: NextFunction) {
        try {
            const items = request.body;
            for (var [key, value] of Object.entries(items)) {
                const update = await this.itemRepository.update(value, { cart: false });
            }

            return { items: await this.itemRepository.find(), error: '' }
        } catch (error) {
            return { items: await this.itemRepository.find(), error: 'Erro ao tentar finalizar a compra.' }
        }
    }
}
