import users from "../randomPeople.json";

export function getAllUsers() {
  return users.map(user => {
    return {
      id: user.id,
      img: user.picture.thumbnail,
      name: user.name.first + " " + user.name.last
    };
  });
}

export function getUser(id) {
  return users
    .map(user => ({
      id: user.id,
      img: user.picture.large,
      name: user.name.first + " " + user.name.last,
      email: user.email,
      phone: user.phone,
      location: user.location.city + " " + user.location.state
    }))
    .find(user => user.id == id);
}
