"use client";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import {
	type ComponentPropsWithoutRef,
	type ElementRef,
	forwardRef,
} from "react";

const components: { title: string; href: string; description: string }[] = [
	{
		title: "Alert Dialog",
		href: "/docs/primitives/alert-dialog",
		description:
			"A modal dialog that interrupts the user with important content and expects a response.",
	},
	{
		title: "Hover Card",
		href: "/docs/primitives/hover-card",
		description:
			"For sighted users to preview content available behind a link.",
	},
	{
		title: "Progress",
		href: "/docs/primitives/progress",
		description:
			"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
	},
	{
		title: "Scroll-area",
		href: "/docs/primitives/scroll-area",
		description: "Visually or semantically separates content.",
	},
	{
		title: "Tabs",
		href: "/docs/primitives/tabs",
		description:
			"A set of layered sections of content—known as tab panels—that are displayed one at a time.",
	},
	{
		title: "Tooltip",
		href: "/docs/primitives/tooltip",
		description:
			"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
	},
];
export function Header() {
	const { setTheme } = useTheme();
	return (
		<div className="flex items-center justify-between px-10 py-8">
			<Link href="/" className="font-medium">
				Hello! Shadcn/ui 🚀
			</Link>
			<div className="flex items-center gap-4">
				<div>
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid gap-3 p-6 lg:w-[500px] md:w-[400px] lg:grid-cols-[.75fr_1fr]">
										<li className="row-span-3">
											<NavigationMenuLink asChild>
												<a
													className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
													href="/"
												>
													<div className="mt-4 mb-2 font-medium text-lg">
														shadcn/ui
													</div>
													<p className="text-muted-foreground text-sm leading-tight">
														Beautifully designed components that you can copy
														and paste into your apps. Accessible. Customizable.
														Open Source.
													</p>
												</a>
											</NavigationMenuLink>
										</li>
										<ListItem href="/docs" title="Introduction">
											Re-usable components built using Radix UI and Tailwind
											CSS.
										</ListItem>
										<ListItem href="/docs/installation" title="Installation">
											How to install dependencies and structure your app.
										</ListItem>
										<ListItem
											href="/docs/primitives/typography"
											title="Typography"
										>
											Styles for headings, paragraphs, lists...etc
										</ListItem>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Components</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 lg:w-[600px] md:w-[500px] md:grid-cols-2">
										{components.map((component) => (
											<ListItem
												key={component.title}
												title={component.title}
												href={component.href}
											>
												{component.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/docs" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Documentation
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<div>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline" size="icon">
								<Sun className="dark:-rotate-90 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0" />
								<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
								<span className="sr-only">Toggle theme</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuItem onClick={() => setTheme("light")}>
								Light
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setTheme("dark")}>
								Dark
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setTheme("system")}>
								System
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</div>
	);
}

const ListItem = forwardRef<ElementRef<"a">, ComponentPropsWithoutRef<"a">>(
	({ className, title, children, ...props }, ref) => {
		return (
			<li>
				<NavigationMenuLink asChild>
					<a
						ref={ref}
						className={cn(
							"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors focus:bg-accent hover:bg-accent focus:text-accent-foreground hover:text-accent-foreground",
							className,
						)}
						{...props}
					>
						<div className="font-medium text-sm leading-none">{title}</div>
						<p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
							{children}
						</p>
					</a>
				</NavigationMenuLink>
			</li>
		);
	},
);
ListItem.displayName = "ListItem";
