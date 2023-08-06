import { LoginBack } from '../../share/api';
import { service } from './service';

export async function login(
    account: string,
    password: string,
): Promise<LoginBack> {
    var { data } = await service.post('/auth/login', { account, password });
    var loginBack: LoginBack = {
        error: false,
        data: 0,
    };
    if (data.code == 10001000) loginBack.error = true;
    if (data.code == 200) loginBack.data = data.data;
    return loginBack;
}
