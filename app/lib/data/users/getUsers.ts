
export async function getUsers() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    if(!res.ok) {
      throw new Error()
    }
    return res.json();
  } catch (error) {
    console.log('Error in fetching user');
  }
}

export async function getSingleUser(id: number) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if(!res.ok) {
      throw new Error()
    }
    return res.json();
  } catch (error) {
    console.log('Error in fetching single user');
  }
}
