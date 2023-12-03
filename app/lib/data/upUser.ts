export async function upUser(formData: FormData) {
  const {id,name,phone,website} = Object.fromEntries(formData)
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/2", {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        name: name,
        phone: phone,
        website: website,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      return true;
  } catch (error) {
    console.log("Error in updating user");
  }
}