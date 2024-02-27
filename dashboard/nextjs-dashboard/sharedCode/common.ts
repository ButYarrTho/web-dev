export interface IDBSettings {
    host: string,
    port: number,
    user: string,
    password: string,
    database: string,
}

export const GetDBSettings = () : IDBSettings => {
    const env = process.env.NODE_ENV;

    if(env == 'development')
    return {
        host: process.env.host__dev!, //'58.84.143.251',
        port: parseInt(process.env.port_dev!),
        user: process.env.user_dev!,
        password: process.env.user_dev!,
        database: process.env.user_dev!,
}
    else
        return{
            host: process.env.host!, //'58.84.143.251',
            port: parseInt(process.env.port!),
            user: process.env.user!,
            password: process.env.password!,
            database: process.env.password!,
        }
}