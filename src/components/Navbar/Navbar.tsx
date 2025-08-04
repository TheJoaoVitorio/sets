import { Avatar, Button, Card } from "@dxdns/feflow-react"
import Link from "next/link"
import Icons from "../Icons/Icons"
import { SearchIcon } from "lucide-react"

export default function Navbar() {
	return (
		<div>
			<div style={{ display: "flex", alignItems: "center" }}>
				<h3>Sets</h3>
				<div style={{ flex: "1" }}></div>
				<div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
					<Button variant="text">
						<SearchIcon width="24px" height="24px" />
					</Button>
					<Button pressedEffect={false} variant="text">
						<Card
							className="rounded-full"
							style={{ width: "40px", height: "40px", padding: 0 }}
							animatedBorder={{
								width: "4px",
								primaryColor: "#FF007F",
								secondaryColor: "#8000FF"
							}}
						>
							<Avatar size="xs" src="https://avatars.githubusercontent.com/u/26321303?v=4" textFallback="test" />
						</Card>
					</Button>
				</div>
			</div>
			<div
				style={{
					display: "grid",
					gap: "0.5rem",
					gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
					padding: "1rem 0"
				}}
			>
				{[
					{ label: "Home", href: "/", icon: <Icons.Home size={15} /> },
					{ label: "Icons", href: "/icons", icon: <Icons.LayoutDashboard size={15} /> },
					{ label: "Illustrations", href: "/illustrations", icon: <Icons.Brush size={15} /> },
					{ label: "Photos", href: "/photos", icon: <Icons.Image size={15} /> },
					{ label: "Videos", href: "/videos", icon: <Icons.Video size={15} /> },
					{ label: "Colors", href: "/colors", icon: <Icons.Palette size={15} /> },
					{ label: "Backgrounds", href: "/backgrounds", icon: <Icons.Background size={15} /> },
					{ label: "Typography", href: "/typography", icon: <Icons.Typography size={15} /> },
					{ label: "3D", href: "/3d", icon: <Icons.Box size={15} /> },
					{ label: "Libraries", href: "/libraries", icon: <Icons.Book size={15} /> },
					{ label: "Blogs", href: "/blogs", icon: <Icons.Blogs size={15} /> },
					{ label: "Tools", href: "/tools", icon: <Icons.Tools size={15} /> },
					{ label: "Inspirations", href: "/inspirations", icon: <Icons.Idea size={15} /> },
					{ label: "Components", href: "/components", icon: <Icons.Component size={15} /> }
				].map(({ label, href, icon }) => (
					<Link key={label} href={href}>
						<Button variant="outlined" style={{ width: "100%" }}>
							{icon}
							{label}
						</Button>
					</Link>
				))}
			</div>
		</div>
	)
}
