import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { login } from '../../utils/api';
import { setCookie } from '../../utils/cookies';

export default function LoginForm() {
	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');
	const [erro, setErro] = useState(null);
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			console.log(email, senha);
			const data = await login(email, senha);
			setCookie('authToken', data.token, { expires: 7 });
			router.replace('/admin/dashboard');
		} catch (err) {
			setErro(err.message);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="relative w-full mb-3">
				<label className="block mb-2 text-xs font-bold text-blueGray-600">
          Email
				</label>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="w-full px-2 py-2 bg-white rounded-lg shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
					placeholder="Email"
				/>
			</div>

			<div className="relative w-full mb-3">
				<label className="block mb-2 text-xs font-bold text-blueGray-600">
          Password
				</label>
				<input
					type="password"
					value={senha}
					onChange={(e) => setSenha(e.target.value)}
					className="w-full px-2 py-2 bg-white rounded-lg shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
					placeholder="Password"
				/>
			</div>

			{erro && <p className="mt-2 text-xs text-red-500">{erro}</p>}

			<div className="mt-6 text-center">
				<button
					type="submit"
					className="w-full px-6 py-2 text-sm font-bold text-white uppercase rounded-lg shadow bg-blueGray-800 hover:shadow-lg focus:outline-none"
				>
          Sign In
				</button>
			</div>
		</form>
	);
}
