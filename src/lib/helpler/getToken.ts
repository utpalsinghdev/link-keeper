/* eslint-disable react-hooks/rules-of-hooks */
import { useSession } from 'next-auth/react';

function getToken() {

    const sesioon = useSession();

    return sesioon.data?.user?.auth
}

export default getToken