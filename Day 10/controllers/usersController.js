const getUser = (req, res) => {
    res.status(501);
    res.json(
        {
            status: 'success',
            message: 'Get Route is not implemented'
        }
    );
}

const replaceUser = (req, res) => {
    res.status(501);
    res.json(
        {
            status: 'success',
            message: 'put Route is not implemented'
        }
    );
}

const deleteUser = (req, res) => {
    res.status(501);
    res.json(
        {
            status: 'success',
            message: 'Delete Route is not implemented'
        }
    );
}

const addUser = (req, res) => {
    res.status(501);
    res.json(
        {
            status: 'success',
            message: 'post Route is not implemented'
        }
    );
}

module.exports = {
    getUser,
    replaceUser,
    addUser,
    deleteUser,
}