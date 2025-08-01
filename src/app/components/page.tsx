"use client"
import apiService from "@/services/apiService"
import { Badge, Card } from "@dxdns/feflow-react"
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
					gap: "1rem",
					gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
					padding: "1rem 0"
				}}
			>
				{data
					.slice()
					.reverse()
					.map(({ label, link, image, tags, license }) => (
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
							{tags && (
								<div
									style={{
										display: "flex",
										gap: "0.5rem",
										position: "absolute",
										right: 0,
										top: "70%",
										transform: "translate(0, 70%)",
										background: "var(--ff-bg)",
										padding: "0.3rem 0.5rem",
										borderRadius: "5px 5px 0 0"
									}}
								>
									{tags.slice(0, 3).map((tag, i) => (
										<Badge key={`${tag}-${i}`} variant="outlined">
											{tag}
										</Badge>
									))}
								</div>
							)}

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
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									padding: "0 1rem",
									gap: "0.5rem"
								}}
							>
								<h3
									style={{
										width: "100%",
										whiteSpace: "nowrap",
										overflow: "hidden",
										textOverflow: "ellipsis"
									}}
								>
									{label}
								</h3>
								{license && <Badge size="md">{license}</Badge>}
							</div>
						</Card>
					))}
			</div>
		</>
	)
}
