import * as React from 'react';

export interface ContactTemplateProps {
	name: string;
	email: string;
	message: string;
}

export function EmailTemplate({
	name, email, message
}: ContactTemplateProps) {
	return (
		<div>
			<h1>Mensaje desde espacioconstitucional.com</h1>

			<p><strong>Nombre:</strong> {name}</p>
			<p><strong>Correo:</strong> {email}</p>
			<p><strong>Mensaje:</strong> {message}</p>

		</div>
	);
}