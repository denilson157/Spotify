import { signIn, useSession } from "next-auth/react"
import spotifyApi from "../lib/spotify";
import {useEffect} from 'react'

const useSpotify = () => {

    const { data: session, status } = useSession();

    useEffect(() => {
        if (session) {
            
            if (session.error === "RefreshAccessTokenError") {
                signIn();
            }

            spotifyApi.setAccessToken(session.user.accessToken)
        }

    }, [session])


    return spotifyApi
}

export default useSpotify
