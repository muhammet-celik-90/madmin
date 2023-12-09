export async function getSingleProduct(id: string) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)

    if(!res.ok) {
        throw new Error()
    }

    return res.json();
}