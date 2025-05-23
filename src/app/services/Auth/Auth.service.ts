import { IAuthService, TgRegistrationData } from "@app";
import { Account } from "@domain";




export abstract class AuthService implements IAuthService {
    
    constructor(
        private readonly accountRepository : IAccountRepository,
        private readonly cryptoService : ICryptoService,
    ) {

    }
    
    validate(tgToken: string): Promise<Account> {
        throw new Error("Method not implemented.");
    }

    registration(data: TgRegistrationData): Promise<Account> {
        throw new Error("Method not implemented.");
    }


}