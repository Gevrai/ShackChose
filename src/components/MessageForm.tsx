import React, { useState } from 'react'
import styled from 'styled-components'

import { ArtistsInfo } from './Artists'

export const generalRecipient = "general"

interface Props {
	initialRecipient?: string,
	initialSubject?: string,
}

const Form = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px 10px;
`

const InputDiv = styled.div`
	display: flex;
	flex-direction: column;

	padding: 5px 0;

	label {
		margin: 5px 0;
	}

	input, select {
		min-width: 30%;
		max-width: 250px;
	}

	textarea {
		resize: vertical;

		min-width: 70%;
		max-width: 500px;
		min-height: 100px;
	}
`

const SubmitButton = styled.input`
	justify-self: center;
	max-width: 75px;
`

export const MessageForm: React.FC<Props> = (p: Props) => {

	const [formContent, setFormContent] = useState({
		name: "",
		emailOrTel: "",
		recipient: p.initialRecipient || generalRecipient,
		subject: p.initialSubject || "",
		message: "",
	})

	const setName = (val: string) => setFormContent({ ...formContent, name: val })
	const setEmailOrTel = (val: string) => setFormContent({ ...formContent, emailOrTel: val })
	const setRecipient = (val: string) => setFormContent({ ...formContent, recipient: val })
	const setSubject = (val: string) => setFormContent({ ...formContent, subject: val })
	const setMessage = (val: string) => setFormContent({ ...formContent, message: val })

	const submitForm = () => { }

	return (
		<Form onSubmit={submitForm}>
			<InputDiv>
				<label>Nom</label>
				<input type="text" value={formContent.name} onChange={e => setName(e.target.value)} />
			</InputDiv>
			<InputDiv>
				<label>Email ou téléphone</label>
				<input type="text" value={formContent.emailOrTel} onChange={e => setEmailOrTel(e.target.value)} />
			</InputDiv>
			<InputDiv>
				<label>Destinataire</label>
				<select value={formContent.recipient} onChange={e => setRecipient(e.target.value)}>
					<option value={generalRecipient} key={generalRecipient}>
						Général
					</option>
					{ArtistsInfo.map(a => {
						return (
							<option value={a.surname} key={a.surname}>
								{a.surname} {a.name}
							</option>
						)
					})}
				</select>
			</InputDiv>
			<InputDiv>
				<label>Sujet</label>
				<input type="text" value={formContent.subject} onChange={e => setSubject(e.target.value)} />
			</InputDiv>
			<InputDiv>
				<label>Message</label>
				<textarea value={formContent.subject} onChange={e => setMessage(e.target.value)} />
			</InputDiv>
			<SubmitButton type="submit" />
		</Form>
	)
}
