import { removeCookie } from '../../utils/cookies';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Logout() {
	const router = useRouter();

	useEffect(() => {
		removeCookie('laurusToken');
		router.replace('/auth/login');
	}, [router]);

	return null;
}
