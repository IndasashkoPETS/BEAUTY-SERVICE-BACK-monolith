import { Account } from "@domain";
import { TgRegistrationData } from "@app";

export interface IAuthService {
    validate ( tgToken : string) : Promise<Account>;
    registration ( data : TgRegistrationData) : Promise<Account>;
}