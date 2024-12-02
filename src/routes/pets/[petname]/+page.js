
export async function load({ params }) {
    return {
        pet: {
            name: params.petname
        }
    }
}
