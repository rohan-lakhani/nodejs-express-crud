const userData = [
    {
        id: 1,
        name: "John Doe",
        age: 21
    }, 
    {
        id: 2,
        name: "John Wick",
        age: 43
    }, 
]

// GET USER
export const getUsers = (req, res) => {
  if(userData.length === 0) {
    res.status(404).json({message: 'No any user found.'})
  }  else {
    res.status(200).json(userData);
  }
}

// CREATE USER
export const createUser = (req, res) => {
    try {
        const newUser = req.body;
    newUser.id = userData.length ? userData[userData.length - 1].id + 1 : 1;
    userData.push(newUser);
    res.status(201).json(newUser);
    } catch(error) {
        res.status(400).json({message: "Invalid data"});
    }
}

// UPDATE USER
export const updateUser = (req, res) => {
    try {
        const id = req.params.id;
        const index = userData.findIndex((user) => user.id == id);
        if(index === -1) {
            res.status(404).json({message: "User not found"});
        } else {
            userData[index] = {...userData[index], ...req.body};
            res.status(200).json(userData[index]);
        }
    } catch(error) {
        res.status(400).json({message: "Invalid data"});
    }
}

// DELETE USER
export const deleteUser = (req, res) => {
    try {
        const id = req.params.id;
        const index = userData.findIndex((user) => user.id == id);
        if(index === -1) {
            res.status(404).json({message: "User not found"});
        } else {
            userData.splice(index, 1);
            res.status(200).json({
                message: "User deleted successfully"
            });
        }
    } catch(error) {
        res.status(400).json({message: "Invalid data"});
    }
}