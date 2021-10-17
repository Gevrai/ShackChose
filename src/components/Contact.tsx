
import React from 'react'
import styled from 'styled-components'

import { AiFillFacebook } from 'react-icons/ai'

import { MessageForm } from './MessageForm'
import gmapMockImage from '../res/gmap-mock.png'

interface Props { }

const Wrapper = styled.div`
	width: 100%;
	height: 100%;

	padding: 20px 5%;
	display: flex;
	flex-direction: column;
`

const Section = styled.section`
	h1 {
		margin: 10px 0;
	}
`

const ContactUs = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	> * {
		margin: 10px 10px;
	}

	a > img {
		border-radius: 15px;
		width: 100%;
		max-width: 250px;
	}
`

export const Contact: React.FC<Props> = (p: Props) => {
	return (
		<Wrapper>
			<Section>
				<h1>Contactez nous</h1>
				<ContactUs>
					<a href="https://www.google.com/maps/place/2516+Rue+Beaubien+E/@45.5490976,-73.5904707,16.25">
						<img src={gmapMockImage} alt="google map"></img>
					</a>

					<div>
						<p>123 Road street</p>
						<p>example@email.com</p>
						<AiFillFacebook />
					</div>

					<div style={{ display: "flex", flexDirection: "column" }}>
						<p>Lundi - Fermé</p>
						<p>Mardi - Fermé</p>
						<p>Mercredi - Fermé</p>
						<p>Jeudi - 11h à 18h</p>
						<p>Vendredi - 11h à 18h</p>
						<p>Samedi - 11h à 20h</p>
						<p>Dimanche - 11h à 18h</p>
					</div>

				</ContactUs>
			</Section>

			<Section>
				<h1>Questions, commandes scéciales, ateliers personalisés, etc.</h1>
				<MessageForm />
			</Section>
		</Wrapper >
	)
}