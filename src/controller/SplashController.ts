import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Splash } from '../entity/Splash'
import { User } from "../entity/User";

export class SplashController {


    private splashRepository = getRepository(Splash);
    private userRepository = getRepository(User);

    //visualizar todas as aplashs
    async all(request: Request, response: Response, next: NextFunction) {
        return {splashs: await this.splashRepository.find() , error: ''} 
    }

    //salvar Splash
    async save(request: Request, response: Response, next: NextFunction) {

        console.log(request.body);
        
        try {
            const splash = await this.splashRepository.save(request.body);
            // return {splashs: splash}
            return {splashs: await this.splashRepository.find() , error: ''}
        } catch (error) {
            //return {splashs: [], error: 'error_save_splash'}
            return {splashs: await this.splashRepository.find(), error: "Não foi possivel adicionar a splash" } 
        }        
    }

    //visualizar splashs (Por usuario)
    async allByUser(request: Request, response: Response, next: NextFunction) {

        try {

            const user = await this.userRepository.findOne(request.params.id);

            if (user) {
                const splashs = await this.splashRepository.find({
                    where: {
                        user:user
                    }
                })

                if (splashs) {
                    return {splash: splashs}
                }
            }else{
                return {splash: []}
            }

        } catch (error) {
            return {splash: [], error}
        }
    }

    //remover Splash
    async remove(request:Request, response: Response, next: NextFunction){
        try {
            const splash = await this.splashRepository.findOne(request.body.id);

            if (splash) {
                await this.splashRepository.remove(splash);
                return {splashs: await this.splashRepository.find() , error: ''}
            }
        } catch (error) {
            return {splashs: await this.splashRepository.find() , error: 'Erro ao deletar'}
        }
    }

    //filtrar Splash
    async splashByFilter(request:Request, response: Response, next: NextFunction){
        try {
            const splashs = await this.splashRepository.find({
                where: {
                    title: request.body.title
                }
            });

            if (splashs) {
                return {splash: splashs}
            }

            else{
                return {splash: [] }
            }
        } catch (error) {
            return {splash: [], error}
        }
    }

    //editar splash
    async edit(request: Request, response: Response, next: NextFunction) {
        try {
            const splash = await this.splashRepository.findOne(request.params.id);
            if(splash) {
                const update = await this.userRepository.update(splash.id, request.body)
                return {splash: update}
            }
            
        } catch (error) {
            return {splash: [] , error}
        }
    }






}