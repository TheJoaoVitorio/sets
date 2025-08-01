import { Button } from "@dxdns/feflow-react"
import Link from "next/link"

export default function Navbar() {
	return (
		<div
			style={{
				display: "grid",
				gap: "0.5rem",
				gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
				padding: "1rem"
			}}
		>
			{[
				{ label: "Home", href: "/" },
				{ label: "Icons", href: "/icons" },
				{ label: "Illustrations", href: "/illustrations" },
				{ label: "Photos", href: "/photos" },
				{ label: "Videos", href: "/videos" },
				{ label: "Colors", href: "/colors" },
				{ label: "Backgrounds", href: "/backgrounds" },
				{ label: "Typography", href: "/typography" },
				{ label: "3D", href: "/3d" },
				{ label: "Libraries", href: "/libraries" },
				{ label: "Blogs", href: "/blogs" },
				{ label: "Tools", href: "/tools" },
				{ label: "Inspirations", href: "/inspirations" },
				{ label: "Components", href: "/components" }
			].map(({ label, href }) => (
				<Link key={label} href={href}>
					<Button variant="outlined" style={{ width: "100%" }}>
						{label}
					</Button>
				</Link>
			))}
		</div>
	)
}
