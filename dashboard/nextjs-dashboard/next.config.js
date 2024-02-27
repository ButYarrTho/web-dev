/** @type {import('next').NextConfig} */
const nextConfig = {

    env: {

        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '1Password',
        database: 'my_guitar_shop1',

        host_dev: 'localhost',
        port_dev: '3306',
        user_dev: 'root',
        password_dev: '1Password',
        database_dev: 'my_guitar_shop1',
    }
};

module.exports = nextConfig;
