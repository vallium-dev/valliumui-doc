import React from "react";
import { Badge, Divider, Text } from "valliumui";

type Props = {
	property: Property;
};

type Property = {
	name: string;
	description: string;
	type: string[] | string;
	default: string;
};

export default function ComponentPropSection({ property }: Props) {
	return (
		<div className="mb-10">
			<Badge variant="filled">{property.name}</Badge>
			<Divider />
			<div className="w-full flex flex-col gap-2 p-2">
				<div className="flex">
					<Text weight="bold" className="w-1/5">
						Description
					</Text>
					<Text className="w-full">{property.description}</Text>
				</div>
				<div className="flex">
					<Text weight="bold" className="w-1/5">
						Type
					</Text>
					<Text className="w-full text-vallium-500">
						{typeof property.type === "object"
							? property.type.map((prop) => `"${prop}"`).join(" | ")
							: property.type}
					</Text>
				</div>
				<div className="flex">
					<Text weight="bold" className="w-1/5">
						Default
					</Text>
					<Text className="w-full text-vallium-500">{property.default}</Text>
				</div>
			</div>
		</div>
	);
}
