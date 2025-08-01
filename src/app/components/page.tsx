"use client"
import apiService from "@/services/apiService"
import { Card } from "@dxdns/feflow-react"
import Image from "next/image"

export default function ComponentsPage() {
	const api = apiService()
	const data = api.getComponents()

	return (
		<>
			<h1>Components Page</h1>
			<div
				style={{
					display: "grid",
					gap: "0.5rem",
					gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
					padding: "1rem 0"
				}}
			>
				{data.map(({ label, link, image }) => (
					<Card
						key={label}
						href={link}
						target="_blank"
						style={{
							cursor: "pointer",
							textAlign: "center",
							padding: 0,
							lineHeight: 2
						}}
					>
						<Image
							priority
							alt="feflow"
							src={
								image ??
								"https://repository-images.githubusercontent.com/585146387/5afcd3e9-126b-48c8-b8d1-e17240c10d51"
							}
							width={500}
							height={250}
							style={{ objectFit: "cover" }}
						/>
						<h2>{label}</h2>
					</Card>
				))}
			</div>
		</>
	)
}
