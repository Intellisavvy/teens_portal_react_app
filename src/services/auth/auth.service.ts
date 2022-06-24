import http from "../httpService";


class AuthService {
    public async login(): Promise<any> {
        let result = await http.post('api/services/app/Account/IsTenantAvailable');
        return result.data.result;
    }

    public async register(registerInput: any): Promise<any> {
        let result = await http.post('api/services/app/Account/Register', registerInput);
        return result.data.result;
    }
}

export default new AuthService();