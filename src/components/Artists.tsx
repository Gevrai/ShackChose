import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props { }

interface ArtistInfo {
	surname: string
	name: string
	shortDescr: string
	longDescr: string
	pictureUrl: string
	galleryRoute: string
}

const ArtistsInfo: ArtistInfo[] = [
	{
		surname: "Sylvie",
		name: "Jodoin",
		shortDescr: "Lorem Ipsum Dolor",
		longDescr: "",
		pictureUrl: "https://picsum.photos/id/1006/200/300",
		galleryRoute: "/artist/chantale",
	}, {
		surname: "Chantale",
		name: "Desjardins",
		shortDescr: "Lorem Ipsum Dolor",
		longDescr: "",
		pictureUrl: "https://picsum.photos/id/1005/200/300",
		galleryRoute: "/artist/chantale",
	}, {
		surname: "Isabelle",
		name: "",
		shortDescr: "Lorem Ipsum Dolor",
		longDescr: "",
		pictureUrl: "https://picsum.photos/id/1011/200/300",
		galleryRoute: "/artist/isabelle",
	}
]

const ArtistsList = styled.ul`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
`

const Artist = styled.li`
	padding: 20px 20px;
	list-style: none;

	:hover {
		transform: scale(0.98);
		cursor: pointer;
	}

	// Link
	a {
		text-decoration: none;
		color: ${p => p.theme.colors.mainText};
	}

	img {
		border-radius: 15px;
	}

	h2 {
		padding: 5px 5px;
	}
`

export const Artists: React.FC<Props> = () => {
	return (
		<ArtistsList>
			{ArtistsInfo.map((artist, index) => {
				return (
					<Artist>
						<Link to={artist.galleryRoute}>
							<img src={artist.pictureUrl} alt={`${artist.surname} ${artist.name}`} />
							<h2>{artist.surname}</h2>
							<p>{artist.shortDescr}</p>
						</Link>
					</Artist>
				)
			})}
		</ArtistsList>
	)
}