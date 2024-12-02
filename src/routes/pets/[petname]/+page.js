export const entries: EntryGenerator = () => {
	return [
		{ slug: 'shaggy' },
		{ slug: 'plank' }
	];
};


export async function load({ params }) {
    return {
        pet: {
            name: params.petname
        }
    }
}
