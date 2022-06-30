import NextAuth from "next-auth";
import Twitter from "next-auth/providers/twitter";
/*
export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Twitter({
            clientId: process.env.TWITTER_CLIENT_ID,
            clientSecret: process.env.TWITTER_CLIENT_SECRET,
            version: "2.0",
            callbacks: {
                session: async (session, user) => {

                    console.log("???? session ");
                    session.jwt = user.jwt;
                    session.id = user.id;
                    return Promise.resolve(session);
                },
                jwt: async (token, user, account) => {

                    console.log("???? JWT ?")
                    console.log(account)
                    const isSignIn = user ? true : false;
                    if (isSignIn) {
                        const response = await fetch(
                            `${process.env.NEXT_PUBLIC_API_URL}/auth/${account.provider}/callback?access_token=${account?.accessToken}`
                        );
                        const data = await response.json();
                        token.jwt = data.jwt;
                        token.id = data.user.id;
                    }
                    return Promise.resolve(token);
                },
            },
        }),
        // ...add more providers here
    ],
})
*/

const options = {
    providers: [
        Twitter({
            clientId: process.env.TWITTER_CLIENT_ID,
            clientSecret: process.env.TWITTER_CLIENT_SECRET,
            version: "2.0",
        }),
    ],
};

const Auth = (req, res) => NextAuth(req, res, options);

export default Auth;
