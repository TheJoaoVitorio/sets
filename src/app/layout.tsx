import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import MainLayout from "@/layouts/MainLayout"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"]
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"]
})

export const metadata: Metadata = {
	title: "Sets",
	description:
		"A curated platform that aggregates links to the best free resources for developers and digital artists — icons, photos, illustrations, fonts, blogs, and more."
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	)
}
