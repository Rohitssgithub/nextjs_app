/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: '/studentList',
                destination: '/',
                permanent: false
            }
        ]
    }
}

module.exports = nextConfig
