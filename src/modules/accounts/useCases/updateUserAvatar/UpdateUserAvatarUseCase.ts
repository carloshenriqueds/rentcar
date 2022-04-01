import { inject } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
    avatarFile: string;
    
}

class UpdateUserAvatarUseCase {

    constructor(@inject("UsersRepository") private usersRepository: IUsersRepository){}


    async execute({user_id, avatarFile} : IRequest){
        const user = await this.usersRepository.findById(user_id);

        if (!user) {
            throw new AppError("User does not exists!");s
        }
        
        user.avatar = avatarFile;

        await this.usersRepository.create(user);
    }

}
export { UpdateUserAvatarUseCase }