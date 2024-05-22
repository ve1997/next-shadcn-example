import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<main className="p-24">
			<div>
				{/* CHECK: h1が効いてない..? */}
				<h2 className="font-medium text-2xl">Hello! Shadcn/ui 🚀</h2>
				<p className="py-4">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
					officiis voluptatem delectus, quam sunt illo earum facilis suscipit
					est explicabo rerum rem ducimus corrupti consequatur eos veniam iusto
					cum reprehenderit debitis voluptatum? Consectetur eaque labore
					quaerat! Porro mollitia sapiente modi corrupti vitae architecto,
					doloribus odio quia. Corrupti rem cum distinctio?
				</p>
			</div>
			<div className="flex items-center gap-4">
				<Button>Click Here</Button>
				<Button>Click Here</Button>
			</div>
		</main>
	);
}
