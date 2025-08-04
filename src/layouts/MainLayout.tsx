"use client"
import { Navbar } from "@/components/Navbar"
import { FeflowProvider } from "@dxdns/feflow-react"
import { ReactNode } from "react"

interface Props {
	children: ReactNode
}

export default function MainLayout({ children }: Props) {
	return (
		<FeflowProvider>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					minHeight: "100vh",
				}}
			>
				<div style={{ width: "90%", minHeight: "100vh", padding: "1rem" }}>
					<Navbar />
					{children}
				</div>
			</div>
		</FeflowProvider>
	)
}
