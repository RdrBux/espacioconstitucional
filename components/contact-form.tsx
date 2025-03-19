'use client'

import { ChangeEvent, FormEvent, useState } from "react";
import { ContactTemplateProps } from "./email-template";
import { toast } from "react-toastify";

export default function ContactForm() {
	const [formData, setFormData] = useState<ContactTemplateProps>({
		name: "",
		email: "",
		message: "",
	});
	const [isSending, setIsSending] = useState<boolean>(false);

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev: ContactTemplateProps) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!formData.name || !formData.email || !formData.message) {
			toast.error('Faltó completar alguno de los campos', {
				position: "top-center",
			});
			return;
		}

		try {
			setIsSending(true);
			const response = await fetch("/api/send", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: formData.name,
					email: formData.email,
					message: formData.message,
				}),
			});

			// handle success
			if (response.ok) {
				toast.success('Mensaje enviado correctamente', {
					position: "top-center",
				})
				setFormData({
					name: "",
					email: "",
					message: "",
				})
			} else {
				toast.error('Error enviando el mensaje. Por favor, intenta nuevamente', {
					position: "top-center",
				})
			}
		} catch (error) {
			console.log("Error sending email:", error);
			toast.error('Error enviando el mensaje. Por favor, intenta nuevamente', {
				position: "top-center",
			})
		} finally {
			setIsSending(false);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input name="name" value={formData.name} onChange={handleChange} className="border-2 py-2 px-4 w-full border-slate-200 outline-none focus:ring-2 focus:ring-primary-400" type="text" placeholder="Nombre completo" required />
				<input name="email" value={formData.email} onChange={handleChange} className="mt-4 border-2 py-2 px-4 w-full border-slate-200 outline-none focus:ring-2 focus:ring-primary-400" type="email" placeholder="Correo electrónico" required />
				<textarea name="message" value={formData.message} onChange={handleChange} className="mt-4 border-2 py-2 px-4 w-full border-slate-200 outline-none focus:ring-2 focus:ring-primary-400" rows={4} placeholder="Mensaje" required></textarea>
				<button type="submit" disabled={isSending} className="bg-primary-600 text-white px-6 py-3 mt-4 block w-full lg:w-fit hover:bg-primary-700 disabled:bg-primary-400 duration-200">{isSending ? "Enviando..." : "Enviar mensaje"}</button>
			</form>

		</>
	)
}