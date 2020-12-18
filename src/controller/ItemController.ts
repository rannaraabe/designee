
import { NextFunction, Request, Response } from "express";

import { ItemService } from '../service/ItemService';
import { UsuarioService } from '../service/UsuarioService';

export class ItemController {

    constructor(){}
    
    private itemService: ItemService = new ItemService()
    private usuarioService: UsuarioService = new UsuarioService()

    // visualizar todas o items
    async all(request: Request, response: Response, next: NextFunction) {
        try {
            response.json({items: await this.itemService.getAllItems()})
        } catch (error) {
            response.json({erro: 'Não foi possível encontrar os items.'})
        }
    }

    // salvar item
    async save(request: Request, response: Response, next: NextFunction) {
        try {
            const item = await this.itemService.save(request.body);
            // return {items: item}
            response.json({items: await this.itemService.getOne(item)});
        } catch (error) {
            //return {items: [], error: 'error_save_item'}
            response.json({error: "Não foi possivel adicionar o item."}).status(400);
        }
    }

    // visualizar items (por usuario)
    async allByUser(request: Request, response: Response, next: NextFunction) {
        try {
            const user = await this.usuarioService.getOne(request.params.id);
            if(user) {
                const items = await this.itemService.getOne({
                    where: { user: user }
                })

                if(items) {
                    response.json({items: await this.itemService.findAllItems(user)})
                }
            } else {
                response.json({user: await this.usuarioService.getOne(user)})
            }
        } catch (error) {
            response.json({error: "Não foi possivel encontrar os items pelo usuário."}).status(400);
        }
    }

    // remover item
    async remove(request: Request, response: Response, next: NextFunction) {
        try {
            const item = await this.itemService.getOne(request.body.id);
            if(item) {
                response.json({items: await this.itemService.remove(item)});
            }
        } catch (error) {
            response.json({error: 'Erro ao deletar o item.'}).status(400);
        }
    }

    // filtrar item
    async itemByFilter(request: Request, response: Response, next: NextFunction) {
        try {
            const items = await this.itemService.getOne({
                where: {
                    title: request.body.title
                }
            });

            if(items) {
                response.json(items);
            } else {
                response.json();
            }
        } catch (error) {
            response.json({error: 'Erro ao filtrar os items.'}).status(400);
        }
    }

    // editar item
    async edit(request: Request, response: Response, next: NextFunction) {
        try {
            const item = await this.itemService.getOne(request.params.id);
            if (item) {
                return response.json({item: await this.itemService.update(item.id, request.body)});
            }
        } catch (error) {
            return response.json({error: 'Erro ao editar o item.'}).status(400);
        }
    }

    // curtir item
    async curtirItem(request: Request, response: Response, next: NextFunction) {
        try {
            const item = await this.itemService.getOne(request.params.id);
            if (item) {
                item.likes = item.likes + 1;
                const update = await this.itemService.update(item.id, item);
                response.json({items: await this.itemService.getAllItems(), error: '' })
            }
        } catch (error) {
            response.json({error: 'Erro ao curtir item.' }).status(400);
        }
    }

    // favoritar item
    async favItem(request: Request, response: Response, next: NextFunction) {
        try {
            const item = await this.itemService.getOne(request.params.id);
            if (item) {
                item.favorite = true;
                const update = await this.itemService.update(item.id, item);
                response.json({items: await this.itemService.getAllItems()});
            }
        } catch (error) {
            response.json({error: 'Erro ao favoritar item.'}).status(400);
        }
    }

    // visualizar todas os items favoritos
    async allFavs(request: Request, response: Response, next: NextFunction) {
        response.json({
            items: await this.itemService.getOne({
                where: {
                    favorite: true
                }
            })
        });
    }

    // adicionar item ao carrinho
    async addToCart(request: Request, response: Response, next: NextFunction) {
        try {
            const item = await this.itemService.getOne(request.params.id);
            if (item) {
                item.cart = true;
                const update = await this.itemService.update(item.id, item);
                response.json({items: await this.itemService.getAllItems()});
            }
        } catch (error) {
            response.json({error: 'Erro ao adicionar item ao carrinho.'}).status(400);
        }
    }

    // visualizar carrinho de compras
    async allCart(request: Request, response: Response, next: NextFunction) {
        response.json({
            items: await this.itemService.findAllItems({
                where: {
                    cart: true
                }
            })
        });
    }

    // limpar carteira
    async clearCart(request: Request, response: Response, next: NextFunction) {
        try {
            const items = request.body;
            for (var [key, value] of Object.entries(items)) {
                const update = await this.itemService.update(value, { cart: false });
            }
            response.json({items: await this.itemService.getAllItems()});
        } catch (error) {
            response.json({error: 'Erro ao tentar finalizar a compra.'});
        }
    }
}
