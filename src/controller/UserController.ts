import { getRepository, Like } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";

import config from "../config/config";
import * as jwt from "jsonwebtoken";

import { UsuarioService } from '../service/UsuarioService'

export class UserController {

    constructor(){}

    private usuarioService: UsuarioService = new UsuarioService()
    // visualizar todos os usuarios
    async all(request: Request, response: Response, next: NextFunction) {
        try {
            console.log("entrou");
            const users = await this.usuarioService.getAllUsers()
            response.json({users}) 
        } catch (error) {
            response.json({err: 'users_not_found'}) 
        }
    }

    // visualizar um usuario
    async one(request: Request, response: Response, next: NextFunction) {
        try {
            if (request.params.id) {
                response.json({ user: this.usuarioService.getOne(request.params.id) });
            }
        } catch (error) {
            response.json({ erro: "Não foi possível encontrar o usuário.", error }).status(400);
        }
    }

    // salvar usuario
    async save(request: Request, response: Response, next: NextFunction) {
        try {
            const user = request.body;
            if (user.isCreator === 'TRUE')
                user.isCreator = true;
            response.json({user: await this.usuarioService.save(user)})
        } catch (error) {
            response.json({ erro: "Não foi possível cadastrar o usuário.", error }).status(400);
        }
    }

    // editar usuario
    async edit(request: Request, response: Response, next: NextFunction) {
        try {
            const user = await this.usuarioService.getOne(request.params.id);
            if (!user) {
                response.json({ error: "Usuário não encontrado!" }).status(400);
            }
            response.json({user: await this.usuarioService.update(user, request.body)})
        } catch (error) {
            response.json({ erro: "Não foi possível atualizar o usuário.", error }).status(400);
        }
    }

    // remover usuario
    async remove(request: Request, response: Response, next: NextFunction) {
        try {
            const user = await this.usuarioService.getOne(request.params.id);
            if (!user) {
                response.json({ error: "Usuário não encontrado!" }).status(400);
            }
            response.json({user: await this.usuarioService.remove(user)})
        } catch (error) {
            response.json({ erro: "Não foi possível remover o usuário.", error }).status(400);
        }
    }

    // fazer login
    async login(request: Request, response: Response) {
        try {
            const user = await this.usuarioService.getOne({
                where: {
                    email: request.body.email
                }
            })
            if (!user) {
                response.json({ error: "Usuário não encontrado!" }).status(400);
            }

            if (user.password == request.body.password) {
                const token = jwt.sign(
                    { id: user.id, user_email: user.email, },
                    config.jwtSecret,
                    { expiresIn: "12h" }
                );
        
                response.json({user: await this.usuarioService.getOne(user.id)});
              
                response.json( { "Logged": true, token } )
            } else {
                response.json({ error: "login_fail" });
            }
        } catch (error) {
            response.json({ erro: "Não foi possível realizar o login." }).status(400);
        }

    }

    // filtrar criadores
    async listCreators(request: Request, response: Response, next: NextFunction) {
        try {
            const name = "%"+request.query.name+"%"
            if(request.query.name == ''){
                response.json( {users: await this.usuarioService.findOneUser({
                    where: { isCreator: 't' }
                })})
            } else {
                response.json( {users : await this.usuarioService.findOneUser({
                    where: { isCreator: 't', fullname: Like(name) }
                })})
            }
        } catch (error) {
            response.json({erro: "Erro ao buscar usuário.", error}).status(400);
        }
    }
}
